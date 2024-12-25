import { useMemo } from 'react';

declare type Simplify<T> = T extends (...args: unknown[]) => unknown ? T : { [K in keyof T]: T[K] };

export type MergedProps<T extends object, A extends T> = Simplify<Omit<T, keyof A> & A>;

export function useDefaultProps<T extends object, A extends T>(originalProps: T, defaultProps: A) {
  return useMemo(() => {
    const props = { ...originalProps } as MergedProps<T, A>;

    (Object.keys(defaultProps) as (keyof T)[]).forEach((key) => {
      // 如果props没有，才赋值
      if (props[key] === undefined) {
        (props as A)[key] = defaultProps[key];
      }
    });
    return props;
  }, [defaultProps, originalProps]);
}
