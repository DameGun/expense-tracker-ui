import { Path } from 'react-native-svg';

import { createIcon } from '@/helpers/createIcon';

export const CloseFilledIcon = createIcon(({ color }) => (
  <Path
    d="M12 0C5.364 0 0 5.364 0 12C0 18.636 5.364 24 12 24C18.636 24 24 18.636 24 12C24 5.364 18.636 0 12 0ZM18 16.308L16.308 18L12 13.692L7.692 18L6 16.308L10.308 12L6 7.692L7.692 6L12 10.308L16.308 6L18 7.692L13.692 12L18 16.308Z"
    fill={color}
  />
));
