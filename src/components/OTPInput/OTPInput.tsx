import { type FC, useCallback, useEffect, useRef, useState } from 'react';
import {
  type NativeSyntheticEvent,
  TextInput,
  type TextInputKeyPressEventData,
  View,
} from 'react-native';

import { useStyles } from '@/hooks/useStyles';
import type { Nullable } from '@/types/common';

import { getStyles } from './styles';
import type { IOTPInputProps } from './types';

import { Typography } from '../Typography';

const OTP_LENGTH = 6;

export const OTPInput: FC<IOTPInputProps> = ({
  isPinError,
  setIsPinReady,
  setPin,
  disabled,
}) => {
  const refs = useRef<Nullable<TextInput>[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<Nullable<number>>(0);
  const [codes, setCodes] = useState<string[]>(new Array(OTP_LENGTH).fill(0));
  const styles = useStyles(getStyles);

  const handleFocusedIndex = useCallback(
    (index: number, value?: string) => {
      let newFocusedIndex: number;

      if (!value) {
        newFocusedIndex = index === 0 ? index : index - 1;
      } else {
        newFocusedIndex = index === codes.length - 1 ? index : index + 1;
      }

      setFocusedIndex(newFocusedIndex);
      refs.current[newFocusedIndex]?.focus();
    },
    [refs, codes.length]
  );

  const handleTextChange = useCallback(
    (index: number) => (value: string) => {
      setCodes((prev) => {
        prev[index] = value;

        return [...prev];
      });

      handleFocusedIndex(index, value);
    },
    [handleFocusedIndex]
  );

  const handleFocus = useCallback(
    (index: number) => () => setFocusedIndex(index),
    []
  );

  const handleBackspace = useCallback(
    (index: number) =>
      (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (e.nativeEvent.key !== 'Backspace') return;

        handleFocusedIndex(index, '');
      },
    [handleFocusedIndex]
  );

  const handleBlur = useCallback(() => setFocusedIndex(null), []);

  useEffect(() => {
    const pin = codes.join('');
    const isPinReady = pin.length === OTP_LENGTH;

    setIsPinReady(isPinReady);
    setPin(isPinReady ? pin : '');
  }, [codes, setIsPinReady, setPin]);

  return (
    <View style={styles.otpContainer}>
      <View style={styles.otpInputContainer}>
        {codes.map((code, index) => (
          <TextInput
            key={index}
            editable={!disabled}
            ref={(el) => {
              refs.current[index] = el;
            }}
            autoComplete="one-time-code"
            enterKeyHint="next"
            inputMode="numeric"
            value={code}
            maxLength={1}
            onBlur={handleBlur}
            onFocus={handleFocus(index)}
            onChangeText={handleTextChange(index)}
            style={styles.splittedBoxes(focusedIndex === index)}
            onKeyPress={handleBackspace(index)}
          />
        ))}
      </View>
      <Typography
        variant="lg-600"
        centered
        style={styles.errorMessage(isPinError)}
      >
        Code is invalid
      </Typography>
    </View>
  );
};
