import { ChevronDownIcon } from '@/assets';
import { useStyles } from '@/hooks';
import type { ISVGProps } from '@/types';

import { getStyles } from './styles';

export const renderSelectChevron =
  (isDropdownVisible: boolean) =>
  ({ color }: ISVGProps) => {
    const styles = useStyles(getStyles);

    return (
      <ChevronDownIcon
        color={color}
        viewStyle={styles.chevronIcon(isDropdownVisible)}
      />
    );
  };
