import { emptyFn } from '@/utils/constants';
import { useFiledState } from '@/utils/hooks/useFiledState';
import { useMemo, createContext, useEffect } from 'react';
import { ProTableBaseProps } from '../types';

type UseProTableSettingOptions = Pick<ProTableBaseProps, 'isZebra' | 'size'>;

export const useProTableSettingValue = (options: UseProTableSettingOptions) => {
  const [tableSetting, setTableSetting] = useFiledState({
    defaultValue: {
      isZebra: options.isZebra,
      size: options.size,
    },
  });
  useEffect(
    () =>
      setTableSetting({
        ...options,
      }),
    Object.values(options),
  );
  return useMemo(
    () => ({
      tableSetting,
      setTableSetting,
    }),
    [tableSetting, setTableSetting],
  );
};
export type ProTableSettingValue = ReturnType<typeof useProTableSettingValue>;
export const ProTableSettingContext = createContext<ProTableSettingValue>({
  tableSetting: {
    isZebra: false,
    size: 'medium',
  },
  setTableSetting: emptyFn,
});
