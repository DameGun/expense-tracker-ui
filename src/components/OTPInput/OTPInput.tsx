import { type FC, useCallback, useEffect, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';
import type { Nullable } from '@/types/common';

import { getStyles } from './styles';
import type { IOTPInputProps } from './types';

import { Typography } from '../Typography';

export const OTPInput: FC<IOTPInputProps> = ({
  isPinReady,
  originalCode,
  setIsPinReady,
}) => {
  const refs = useRef<Array<Nullable<TextInput>>>([]);
  const [focusedIndex, setFocusedIndex] = useState<Nullable<number>>(0);
  const [codes, setCodes] = useState<Array<string>>(new Array(4).fill(0));
  const styles = useStyles(getStyles);

  const handleFocusedIndex = useCallback(
    (index: number, value?: string) => {
      let newFocusedIndex = index;

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

  const handleBlur = useCallback(() => setFocusedIndex(null), []);

  useEffect(() => {
    if (codes.filter(Boolean).length === 4 && codes.join('') === originalCode) {
      setIsPinReady(true);

      return;
    }

    setIsPinReady(false);
  }, [codes, originalCode, setIsPinReady]);

  return (
    <View style={styles.otpContainer}>
      <View style={styles.otpInputContainer}>
        {codes.map((code, index) => (
          <TextInput
            key={index}
            ref={(el) => {
              if (refs.current) refs.current[index] = el;
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
            onKeyPress={(e) => console.log(e.nativeEvent.key)}
          />
        ))}
      </View>
      <Typography
        variant="lg-600"
        centered
        style={styles.errorMessage(isPinReady)}
      >
        Code is invalid
      </Typography>
    </View>
  );
};
