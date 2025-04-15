import { useCallback, useState } from 'react';
import { Controller, type FieldValues, type Path } from 'react-hook-form';
import { TextInput, View } from 'react-native';

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
  ...props
}: TTextInputProps<TFieldNames, TName>) => {
  const [isFocused, setIsFocused] = useState(false);

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

  const colors = useTheme((context) => context.currentTheme.colors);
  const styles = useStyles(getStyles);

  return (
    <Controller
      {...props}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={styles.inputContainer}>
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
          </View>
          <Typography variant="xs-400" style={styles.errorText}>
            {error?.message}
          </Typography>
        </View>
      )}
    />
  );
};
