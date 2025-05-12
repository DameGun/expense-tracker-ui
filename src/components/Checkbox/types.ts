export type TCheckboxSize = 'small' | 'medium';

export interface ICheckboxProps {
  checked: boolean;
  size?: TCheckboxSize;
  onChange: VoidFunction;
  text?: string;
}
