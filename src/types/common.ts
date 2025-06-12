import type { Ref } from 'react';

export type Nullable<T> = T | null;
export type NullableOrUndefined<T> = Nullable<T> | undefined;
export interface PropsWithRef<T> {
  ref?: Ref<T>;
}
