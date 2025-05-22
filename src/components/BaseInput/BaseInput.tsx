import { forwardRef, type PropsWithChildren } from 'react';
import {
  type GestureResponderEvent,
  type LayoutChangeEvent,
  Pressable,
  View,
} from 'react-native';

import { CloseIcon } from '@/assets';
import { Typography } from '@/components/Typography';
import { useStyles, useTheme } from '@/hooks';
import type { TIconComponentType } from '@/types';

import { getStyles } from './styles';

interface IBaseInputProps extends PropsWithChildren {
  handlePress?(event: GestureResponderEvent): void;
  handleClear?: VoidFunction;
  LeftAddon?: TIconComponentType;
  RightAddon?: TIconComponentType;
  value?: string | number;
  showClear?: boolean;
  placeholder?: string;
  replaceTextByChildren?: boolean;
  onLayout?(event: LayoutChangeEvent): void;
}

export const BaseInput = forwardRef<View, IBaseInputProps>(
  (
    {
      LeftAddon,
      handlePress,
      placeholder,
      value,
      RightAddon,
      handleClear,
      children,
      showClear,
      replaceTextByChildren,
      onLayout,
    },
    ref
  ) => {
    const colors = useTheme((context) => context.currentTheme.colors);
    const styles = useStyles(getStyles);

    return (
      <View style={styles.container} ref={ref} onLayout={onLayout}>
        <Pressable style={styles.inputWrapper} onPress={handlePress}>
          {LeftAddon && <LeftAddon color={colors.secondary} />}
          {replaceTextByChildren ? (
            children
          ) : (
            <Typography variant="s-400" style={styles.inputText(!value)}>
              {value ?? placeholder}
            </Typography>
          )}
          {showClear && (
            <Pressable onPress={handleClear}>
              <CloseIcon color={colors.secondary} />
            </Pressable>
          )}
          {RightAddon && <RightAddon color={colors.secondary} />}
        </Pressable>
        {!replaceTextByChildren && children}
      </View>
    );
  }
);
