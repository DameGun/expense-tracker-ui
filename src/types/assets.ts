import type { ViewStyle } from 'react-native';
import type { NumberProp } from 'react-native-svg';

export interface ISVGStyleObject {
  height?: NumberProp;
  width?: NumberProp;
}

export interface ISVGProps {
  color?: string;
  style?: ISVGStyleObject;
  viewStyle?: ViewStyle;
}
