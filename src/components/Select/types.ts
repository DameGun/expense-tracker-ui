import type { IPropsWithIcon } from '@/types';

export type TSelectMode = 'single' | 'multiple';
export type TSelectValue = string | number;
export type TSelectValueSelectionType = 'select' | 'remove';

export interface ISelectOption {
  id: TSelectValue;
  label: string;
  value: TSelectValue;
}

interface ISelectSingleProps {
  selectedValue?: TSelectValue;
  mode: 'single';
}

interface ISelectMultipleProps {
  selectedValue?: TSelectValue[];
  mode: 'multiple';
}

interface IBaseSelectProps extends IPropsWithIcon {
  options: ISelectOption[];
  onSelect: TSelectFn;
  placeholder: string;
  label?: string;
}

export type TSelectFn = (
  value?: TSelectValue,
  type?: TSelectValueSelectionType
) => void;

export type ISelectProps = IBaseSelectProps &
  (ISelectSingleProps | ISelectMultipleProps);
