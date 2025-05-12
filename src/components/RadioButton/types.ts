export type TRadioButtonSize = 'small' | 'medium';

export interface IRadioButtonProps {
  selected: boolean;
  id: string | number;
  text?: string;
  onPress(id: string | number): void;
  size?: TRadioButtonSize;
}
