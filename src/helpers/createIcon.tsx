import type { FC } from 'react';
import SVG from 'react-native-svg';

import { DEFAULT_SVG_STYLE_PROPS } from '@/constants/svg';
import type { ISVGProps } from '@/types/assets';

export const createIcon =
  (renderFn: FC<ISVGProps>) =>
  ({
    color = 'white',
    style = DEFAULT_SVG_STYLE_PROPS,
    viewStyle,
  }: ISVGProps) => (
    <SVG {...style} style={viewStyle} viewBox="0 0 24 24" fill="none">
      {renderFn({ color, style })}
    </SVG>
  );
