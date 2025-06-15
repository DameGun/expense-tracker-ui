import type { FC } from 'react';

import { ChevronDownIcon } from '@/assets';
import { useStyles } from '@/hooks';
import type { ISVGProps } from '@/types';

import { getStyles } from './styles';

export const SelectChevron: FC<ISVGProps> = ({ color }) => {
  const styles = useStyles(getStyles);

  return <ChevronDownIcon color={color} viewStyle={styles.chevronIcon} />;
};
