import { type FC, type PropsWithChildren } from 'react';
import {
  type GestureResponderEvent,
  Pressable,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native';

import { CloseIcon } from '@/assets';
import { Typography } from '@/components/Typography';
import { useStyles, useTheme } from '@/hooks';
import type {
  IComponentWithStyleProps,
  PropsWithRef,
  TIconComponentType,
} from '@/types';

import { getStyles } from './styles';

interface IBaseInputProps
  extends PropsWithChildren,
    IComponentWithStyleProps<ViewStyle>,
    PropsWithRef<View> {
  handlePress?(event: GestureResponderEvent): void;
  handleClear?: VoidFunction;
  LeftAddon?: TIconComponentType;
  RightAddon?: TIconComponentType;
  value?: string | number;
  showClear?: boolean;
  placeholder?: string;
  replaceTextByChildren?: boolean;
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
  label,
  ref,
  style,
}) => {
  const colors = useTheme((context) => context.currentTheme.colors);
  const styles = useStyles(getStyles);

  return (
    <View style={[styles.container, style]} ref={ref}>
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
          <TouchableOpacity onPress={handleClear}>
            <CloseIcon color={colors.secondary} />
          </TouchableOpacity>
        )}
        {RightAddon && (
          <TouchableOpacity onPress={handlePress}>
            <RightAddon color={colors.secondary} />
          </TouchableOpacity>
        )}
      </Pressable>
      {!replaceTextByChildren && children}
    </View>
  );
};
