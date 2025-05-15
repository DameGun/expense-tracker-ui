import { Path } from 'react-native-svg';

import { createIcon } from '@/helpers/createIcon';

export const ChevronDownIcon = createIcon(({ color }) => (
  <Path
    d="M19 8L12 15L5 8"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
));
