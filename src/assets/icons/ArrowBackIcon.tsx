import { Path } from 'react-native-svg';

import { createIcon } from '@/helpers/createIcon';

export const ArrowBackIcon = createIcon(({ color }) => (
  <Path
    d="M3 12L8 17M3 12L8 7M3 12H21"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
));
