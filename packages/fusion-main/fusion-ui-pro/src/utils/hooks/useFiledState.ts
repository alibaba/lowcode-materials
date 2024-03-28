import is from '@sindresorhus/is';
import { useCallback, useState, useRef, useEffect, SetStateAction } from 'react';

export interface FiledState<Value, OnChangeOtherArgs extends any[]> {
  value?: Value;
  defaultValue?: Value;
  onChange?: (val: Value, ...args: OnChangeOtherArgs) => void;
}
type SetFiledState<Value, OnChangeOtherArgs extends any[]> = (
  val: SetStateAction<Value>,
  ...args: OnChangeOtherArgs
) => void;
export function useFiledState<Value = unknown, OnChangeOtherArgs extends any[] = []>(
  options: FiledState<Value, OnChangeOtherArgs>,
  isCtrl = 'value' in options,
): [Value, SetFiledState<Value, OnChangeOtherArgs>] {
  const [value, setValue] = useState(options.defaultValue);

  const originSetState = useRef<SetFiledState<Value, OnChangeOtherArgs>>();
  originSetState.current = (action, ...args) => {
    const val = is.function_(action) ? action(value) : action;
    if (!isCtrl) {
      setValue(val);
    }
    if (options.onChange) {
      options.onChange(val, ...args);
    }
  };

  const setState = useCallback<SetFiledState<Value, OnChangeOtherArgs>>(
    (...args) => originSetState.current(...args),
    [],
  );
  useEffect(() => {
    if (isCtrl) {
      setValue(options.value);
    }
  }, [isCtrl, options.value]);
  return [isCtrl ? options.value : value, setState];
}
