import type { IPropsWithIcon } from '@/types';

export type TSelectMode = 'single' | 'multiple';
export type TSelectValue = string | number;
export type TSelectFnMultiple = (selected: TSelectValue[]) => void;
export type TSelectFnSingle = (selected?: TSelectValue) => void;
export type THandleSelectFn = (
  selectedValue: ISelectOption,
  isSelectedBefore: boolean
) => void;

export interface ISelectOption {
  id: TSelectValue;
  label: string;
  value: TSelectValue;
}

interface ISelectSingleProps {
  defaultSelected?: TSelectValue;
  onChange: TSelectFnSingle;
  mode: 'single';
}

interface ISelectMultipleProps {
  defaultSelected?: TSelectValue[];
  onChange: TSelectFnMultiple;
  mode: 'multiple';
}

interface IBaseSelectProps extends IPropsWithIcon {
  options: ISelectOption[];
  placeholder: string;
  label?: string;
}

export type ISelectProps = IBaseSelectProps &
  (ISelectSingleProps | ISelectMultipleProps);
