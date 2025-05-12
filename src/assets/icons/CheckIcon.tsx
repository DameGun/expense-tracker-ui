import { Path } from 'react-native-svg';

import { createIcon } from '@/helpers/createIcon';

export const CheckIcon = createIcon(({ color }) => (
  <Path
    d="M6 12L10.2426 16.2426L18.727 7.75732"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
));
