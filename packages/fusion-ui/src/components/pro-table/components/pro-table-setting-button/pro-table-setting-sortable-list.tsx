import * as React from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Checkbox, Balloon } from '@alifd/next';
import { CustomIcon } from '@/components/toggle-icon';
import is from '@sindresorhus/is';
import { ProTableSettingItem, ProTableSettingMenuItem } from './types';
import { useI18nBundle } from '@/provider';

const { Tooltip } = Balloon;
export interface ProTableSettingSortableListProps {
  dataSource: ProTableSettingMenuItem[];
  onToggleShow: (item: ProTableSettingMenuItem, checked: boolean) => void;
  onSortEnd?: (oldIndex: number, newIndex: number, keys: string[]) => void;
  onLock?: (id: string, lock: boolean | string) => void;
  lock?: boolean | string;
  parentHidden?: boolean;
  setting: Record<string, ProTableSettingItem>;
}

const getSortRank = (
  item: ProTableSettingMenuItem,
  columnsSetting: Record<string, ProTableSettingItem>,
) => {
  const settingSortRank = columnsSetting[item.id]?.sortRank;
  return is.undefined(settingSortRank) ? item.defaultSortRank : settingSortRank;
};
export const ProTableSettingSortableList: React.FC<ProTableSettingSortableListProps> = ({
  dataSource,
  onToggleShow,
  onSortEnd,
  onLock,
  lock,
  setting,
  parentHidden,
}) => {
  const i18nBundle = useI18nBundle('ProTable');
  const items = React.useMemo(
    () =>
      dataSource.sort((aItem, bItem) => getSortRank(aItem, setting) - getSortRank(bItem, setting)),
    [dataSource, setting],
  );

  return (
    <ReactSortable
      handle=".fusion-ui-pro-table-setting-item__drag"
      onEnd={(e) =>
        is.function_(onSortEnd) &&
        onSortEnd(
          e.oldIndex,
          e.newIndex,
          items.map((vo) => vo.id),
        )
      }
      swap
      list={items}
      setList={() => {}}
    >
      {items.map((item) => (
        <div className="fusion-ui-pro-table-setting-item" key={item.id}>
          <div className="fusion-ui-pro-table-setting-item__bd">
            <Checkbox
              className="sort-checkbox"
              checked={!setting[item.id]?.hidden}
              disabled={parentHidden}
              onChange={(checked) => onToggleShow(item, checked)}
            >
              {item.title}
            </Checkbox>
            <div className="fusion-ui-pro-table-setting-item__icons">
              {onLock && (
                <>
                  {lock !== 'left' && (
                    <Tooltip
                      trigger={
                        <CustomIcon
                          className="fusion-ui-pro-table-setting-item__icon"
                          type="arrow-top"
                          size="xs"
                          onClick={() => onLock(item.id, 'left')}
                        />
                      }
                    >
                      {i18nBundle.settingButtonLockLeft}
                    </Tooltip>
                  )}
                  {lock && (
                    <Tooltip
                      trigger={
                        <CustomIcon
                          className="fusion-ui-pro-table-setting-item__icon"
                          type="arrows-collapse"
                          size="xs"
                          onClick={() => onLock(item.id, false)}
                        />
                      }
                    >
                      {i18nBundle.settingButtonLockCancel}
                    </Tooltip>
                  )}
                  {lock !== 'right' && (
                    <Tooltip
                      trigger={
                        <CustomIcon
                          className="fusion-ui-pro-table-setting-item__icon"
                          type="arrow-bottom"
                          size="xs"
                          onClick={() => onLock(item.id, 'right')}
                        />
                      }
                    >
                      {i18nBundle.settingButtonLockRight}
                    </Tooltip>
                  )}
                </>
              )}
              <CustomIcon
                className="fusion-ui-pro-table-setting-item__drag"
                type="drag"
                size="xs"
              />
            </div>
          </div>
          {is.array(item.children) && item.children.length > 0 && (
            <ProTableSettingSortableList
              dataSource={item.children}
              setting={setting}
              onToggleShow={onToggleShow}
              onSortEnd={onSortEnd}
              parentHidden={parentHidden || setting[item.id]?.hidden}
            />
          )}
        </div>
      ))}
    </ReactSortable>
  );
};
