import type { FC } from 'react';
import SVG, { Path } from 'react-native-svg';

import type { ISVGProps } from '@/types/assets';

export const ArrowBackIcon: FC<ISVGProps> = () => (
  <SVG width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 12L8 17M3 12L8 7M3 12H21"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SVG>
);
