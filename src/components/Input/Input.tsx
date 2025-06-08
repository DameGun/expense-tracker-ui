import { useCallback, useState } from 'react';
import { Controller, type FieldValues, type Path } from 'react-hook-form';
import { Pressable, TextInput, View } from 'react-native';

import { CloseIcon } from '@/assets';
import { useStyles } from '@/hooks/useStyles';
import { useTheme } from '@/hooks/useTheme';

import { getStyles } from './styles';
import type { TTextInputProps } from './types';

import { Typography } from '../Typography';

export const Input = <
  TFieldNames extends FieldValues,
  TName extends Path<TFieldNames>,
>({
  IconComponent,
  containerStyle,
  ...props
}: TTextInputProps<TFieldNames, TName>) => {
  const [isFocused, setIsFocused] = useState(false);

  const colors = useTheme((context) => context.currentTheme.colors);
  const styles = useStyles(getStyles);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(
    (onBlur: VoidFunction) => () => {
      setIsFocused(false);
      onBlur();
    },
    []
  );

  const handleClear = useCallback(
    (onChange: (...value: any[]) => void) => () => onChange(undefined),
    []
  );

  return (
    <Controller
      {...props}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={[styles.inputContainer, containerStyle]}>
          <View style={styles.textInputWrapper(isFocused)}>
            {IconComponent && <IconComponent color={colors.secondary} />}
            <TextInput
              style={styles.textInput}
              value={value}
              onChangeText={onChange}
              placeholderTextColor={colors.secondary}
              onFocus={handleFocus}
              onBlur={handleBlur(onBlur)}
              {...props}
            />
            {!!value && (
              <Pressable onPress={handleClear(onChange)}>
                <CloseIcon color={colors.secondary} />
              </Pressable>
            )}
          </View>
          <Typography variant="xs-400" style={styles.errorText}>
            {error?.message}
          </Typography>
        </View>
      )}
    />
  );
};
