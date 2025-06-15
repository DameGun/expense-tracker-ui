import { useDeferredValue, useMemo, useState } from 'react';

import type { ISelectOption } from '../types';

interface IUseHandleSelectSearchParams {
  options: ISelectOption[];
}

export const useHandleSelectSearch = ({
  options,
}: IUseHandleSelectSearchParams) => {
  const [searchString, setSearchString] = useState('');
  const deferredSearchString = useDeferredValue(searchString);

  const filteredOptions = useMemo(() => {
    if (!deferredSearchString) return options;

    return options.filter(({ label }) =>
      label.toLowerCase().includes(deferredSearchString.toLowerCase())
    );
  }, [options, deferredSearchString]);

  return { searchString, filteredOptions, setSearchString };
};
