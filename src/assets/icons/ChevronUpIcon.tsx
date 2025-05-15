import { Path } from 'react-native-svg';

import { createIcon } from '@/helpers/createIcon';

export const ChevronUpIcon = createIcon(({ color }) => (
  <Path
    d="M5 16L12 9L19 16"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
));
