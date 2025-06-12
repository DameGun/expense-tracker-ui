import { type FC, type PropsWithChildren } from 'react';
import {
  type GestureResponderEvent,
  type LayoutChangeEvent,
  Pressable,
  View,
} from 'react-native';

import { CloseIcon } from '@/assets';
import { Typography } from '@/components/Typography';
import { useStyles, useTheme } from '@/hooks';
import type { PropsWithRef, TIconComponentType } from '@/types';

import { getStyles } from './styles';

interface IBaseInputProps extends PropsWithChildren, PropsWithRef<View> {
  handlePress?(event: GestureResponderEvent): void;
  handleClear?: VoidFunction;
  LeftAddon?: TIconComponentType;
  RightAddon?: TIconComponentType;
  value?: string | number;
  showClear?: boolean;
  placeholder?: string;
  replaceTextByChildren?: boolean;
  onLayout?(event: LayoutChangeEvent): void;
  label?: string;
}

export const BaseInput: FC<IBaseInputProps> = ({
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
  label,
  ref,
}) => {
  const colors = useTheme((context) => context.currentTheme.colors);
  const styles = useStyles(getStyles);

  return (
    <View style={styles.container} ref={ref} onLayout={onLayout}>
      {label && <Typography variant="s-400">{label}</Typography>}
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
};
