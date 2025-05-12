import type { TSwitchPosition } from '@/components/Switch/types';
import { createStyleSheet } from '@/helpers';

export const getStyles = createStyleSheet(() => ({
  container: (switchPosition: TSwitchPosition) => ({
    display: 'flex',
    flexDirection: switchPosition === 'left' ? 'row' : 'row-reverse',
    alignItems: 'center',
  }),
}));
