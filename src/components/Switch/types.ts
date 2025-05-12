export type TSwitchPosition = 'left' | 'right';

export interface ISwitchProps {
  enabled: boolean;
  onChange(value: boolean): void;
  text: string;
  switchPosition?: TSwitchPosition;
}
