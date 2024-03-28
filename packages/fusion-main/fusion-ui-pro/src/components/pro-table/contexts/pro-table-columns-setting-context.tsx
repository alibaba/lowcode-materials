import { emptyFn } from '@/utils/constants';
import { useFiledState } from '@/utils/hooks/useFiledState';
import is from '@sindresorhus/is';
import { useMemo, useCallback, createContext } from 'react';
import { ProTableProps } from '../types';
import {
  ProTableSettingActionType,
  ProTableSettingItem,
} from '../components/pro-table-setting-button/types';

export const useColumnsSettingValue = (
  options: Pick<
    ProTableProps,
    'columnsSetting' | 'onColumnsSettingChange' | 'defaultColumnsSetting' | 'columns'
  >,
) => {
  const [columnsSetting, setColumnsSetting] = useFiledState(
    {
      value: options.columnsSetting,
      defaultValue: options.defaultColumnsSetting || {},
      onChange: options.onColumnsSettingChange,
    },
    !!options.columnsSetting,
  );
  const updateColumnsSetting = useCallback(
    (
      newSetting:
        | Record<string, Partial<ProTableSettingItem>>
        | ((
            oldVal: Record<string, ProTableSettingItem>,
          ) => Record<string, Partial<ProTableSettingItem>>),
      actionType: ProTableSettingActionType,
    ) => {
      setColumnsSetting((oldVal) => {
        const val = is.function_(newSetting) ? newSetting(oldVal || {}) : newSetting;

        return Object.keys(val).reduce(
          (p, key) => ({
            ...p,
            [key]: {
              ...p[key],
              ...val[key],
            },
          }),
          oldVal,
        );
      }, actionType);
    },
    [setColumnsSetting],
  );
  const updateColumnSetting = useCallback(
    (
      key: string,
      newSetting:
        | Partial<ProTableSettingItem>
        | ((oldVal: ProTableSettingItem) => Partial<ProTableSettingItem>),
      actionType: ProTableSettingActionType,
    ) => {
      updateColumnsSetting(
        (oldVal) => ({
          [key]: is.function_(newSetting) ? newSetting(oldVal[key] || {}) : newSetting,
        }),
        actionType,
      );
    },
    [updateColumnsSetting],
  );

  const getColumnSetting = useCallback(
    (key: string): ProTableSettingItem => columnsSetting[key] || {},
    [columnsSetting],
  );

  return useMemo(
    () => ({
      columnsSetting,
      setColumnsSetting,
      updateColumnsSetting,
      getColumnSetting,
      updateColumnSetting,
    }),
    [
      columnsSetting,
      getColumnSetting,
      setColumnsSetting,
      updateColumnSetting,
      updateColumnsSetting,
    ],
  );
};
export type ProTableColumnsSettingValue = ReturnType<typeof useColumnsSettingValue>;
export const ProTableColumnsSettingContext = createContext<ProTableColumnsSettingValue>({
  columnsSetting: {},
  setColumnsSetting: emptyFn,
  updateColumnSetting: emptyFn,
  updateColumnsSetting: emptyFn,
  getColumnSetting: () => ({}),
});
