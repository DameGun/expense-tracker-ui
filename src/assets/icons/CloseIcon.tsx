import { Path } from 'react-native-svg';

import { createIcon } from '@/helpers/createIcon';

export const CloseIcon = createIcon(({ color }) => (
  <Path
    d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill={color}
  />
));
