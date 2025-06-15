import type { FC } from 'react';
import { Path } from 'react-native-svg';

import { createIcon } from '@/helpers';
import type { ISVGProps } from '@/types';

export const SearchIcon: FC<ISVGProps> = createIcon(({ color }) => (
  <Path
    d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
));
