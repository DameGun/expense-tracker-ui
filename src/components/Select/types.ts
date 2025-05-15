import type { IPropsWithIcon } from '@/types';

export interface ISelectOption {
  id: string | number;
  label: string;
  value: string | number;
}

export interface ISelectProps extends IPropsWithIcon {
  options: Array<ISelectOption>;
  onSelect(value: string | number): void;
  selectedValue?: string | number;
  placeholder: string;
}
