import type { FC, PropsWithChildren } from 'react';
import { Pressable, View } from 'react-native';

import { ChevronDownIcon } from '@/assets';
import { Typography } from '@/components/Typography';
import { useStyles, useTheme } from '@/hooks';
import type { IPropsWithIcon } from '@/types';

import { getStyles } from './styles';

interface IBaseInputProps extends IPropsWithIcon, PropsWithChildren {
  handlePress?: VoidFunction;
  value?: string | number;
  placeholder?: string;
  isShowChevron?: boolean;
  isChevronExpanded?: boolean;
  replaceTextByChildren?: boolean;
}

export const BaseInput: FC<IBaseInputProps> = ({
  IconComponent,
  handlePress,
  placeholder,
  value,
  isShowChevron,
  isChevronExpanded,
  children,
  replaceTextByChildren,
}) => {
  const colors = useTheme((context) => context.currentTheme.colors);
  const styles = useStyles(getStyles);

  return (
    <View style={styles.container}>
      <Pressable style={styles.inputWrapper} onPress={handlePress}>
        {IconComponent && <IconComponent color={colors.secondary} />}
        {replaceTextByChildren ? (
          children
        ) : (
          <Typography variant="s-400" style={styles.inputText(!value)}>
            {value ?? placeholder}
          </Typography>
        )}
        {isShowChevron && (
          <ChevronDownIcon
            viewStyle={styles.chevronIcon(isChevronExpanded)}
            color={colors.secondary}
          />
        )}
      </Pressable>
      {!replaceTextByChildren && children}
    </View>
  );
};
