import * as React from 'react';
import { Segment } from '@/components/segment';
import { Button, Input } from '@alifd/next';
import { Menu, MenuProps } from '@/components/menu';
import { CustomIcon } from '@/components/toggle-icon';
import { useMemo } from 'react';
import is from '@sindresorhus/is';
import { SortValue } from '../../types';
import { InputProps } from '@alifd/next/types/input';
import { useFiledState } from '@/utils/hooks/useFiledState';
import { useI18nBundle } from '@/provider';
import { ProTableColumnsFilterValue } from '../../contexts/pro-table-columns-filters-context';
import { useDataSource } from '@/utils/dataSource/hooks';
import { dataSourceToMenuDataSource } from '@/utils/dataSource';
import { AsyncDataSource } from '@/types';

export interface ProTableColumnFilterPanelProps {
  sortable?: boolean;
  sortDirections?: SortValue[];
  searchable?: boolean;
  filters?: FilterMenuProps['dataSource'];
  filterMode?: FilterMenuProps['selectMode'];
  filterMenuProps?: FilterMenuProps;
  onClose?: () => void;
  lock?: boolean | string;
  dataIndex: string;
  columnFilters: ProTableColumnsFilterValue;
  /**
   * 是否是即时生效
   */
  isImmediate?: boolean;
  rtl?: boolean;
}

export const ProTableColumnTitleFilterPanel: React.FC<ProTableColumnFilterPanelProps> = ({
  sortable,
  searchable,
  filters,
  filterMode,
  filterMenuProps,
  onClose,
  columnFilters,
  isImmediate,
  dataIndex,
  // rtl,
}) => {
  const i18nBundle = useI18nBundle('ProTable');
  const showFooter = filters || sortable;
  const [sort, setSort] = useFiledState(
    {
      value: columnFilters.getColumnSort(dataIndex),
      onChange: (val) => {
        if (isImmediate) {
          columnFilters.setColumnSort(dataIndex, val);
        }
      },
    },
    isImmediate,
  );

  const [keywords, setKeywords] = useFiledState(
    {
      value: columnFilters.getColumnKeywords(dataIndex),
      onChange: (val) => {
        if (isImmediate) {
          columnFilters.setColumnKeywords(dataIndex, val, true);
        }
      },
    },
    isImmediate,
  );

  const [selectedKeys, setSelectedKeys] = useFiledState(
    {
      value: columnFilters.getColumnSelectedKeys(dataIndex),
      onChange: (val) => {
        if (isImmediate) {
          columnFilters.setColumnSelectedKeys(dataIndex, val, true);
        }
      },
    },
    isImmediate,
  );
  return (
    <div className="fusion-ui-pro-table-column-title-filter-panel">
      <div className="fusion-ui-pro-table-column-title-filter-panel__bd">
        {sortable && (
          <div className="fusion-ui-pro-table-column-title-filter-panel__segment">
            <Segment
              value={sort}
              dataSource={[
                { label: i18nBundle.columnTitleFilterPanelAsc, value: 'asc' },
                { label: i18nBundle.columnTitleFilterPanelDesc, value: 'desc' },
              ]}
              onChange={setSort}
              fullWidth
            />
          </div>
        )}
        {searchable && (
          <div className="fusion-ui-pro-table-column-title-filter-panel__input">
            <SearchInput
              value={keywords}
              autoFocus
              onChange={setKeywords}
              placeholder={i18nBundle.columnTitleFilterPanelSearchPlaceholder}
            />
          </div>
        )}
        {filters && (
          <div className="fusion-ui-pro-table-column-title-filter-panel__menu">
            <FilterMenu
              dataSource={filters}
              selectMode={filterMode}
              selectedKeys={selectedKeys}
              onSelect={setSelectedKeys}
              {...filterMenuProps}
            />
          </div>
        )}
      </div>
      {showFooter && (
        <div className="fusion-ui-pro-table-column-title-filter-panel__ft">
          <Button
            size="small"
            onClick={() => {
              setSort('default');
              setKeywords('');
              setSelectedKeys([]);
            }}
          >
            {i18nBundle.columnTitleFilterPanelReset}
          </Button>
          {!isImmediate && (
            <Button
              size="small"
              type="primary"
              onClick={() => {
                // 提交状态
                columnFilters.setColumnSort(dataIndex, sort);
                columnFilters.setColumnKeywords(dataIndex, keywords, false);
                columnFilters.setColumnSelectedKeys(dataIndex, selectedKeys, false);
                onClose();
              }}
            >
              {i18nBundle.columnTitleFilterPanelOk}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

ProTableColumnTitleFilterPanel.defaultProps = {
  onClose: () => {},
  isImmediate: true,
};

interface FilterMenuProps extends Omit<MenuProps, 'dataSource'> {
  dataSource?: AsyncDataSource;
}
const FilterMenu: React.FC<FilterMenuProps> = ({ dataSource, ...otherProps }) => {
  const [keywords, setKeywords] = React.useState<string>();

  const { data, loading, error } = useDataSource({ dataSource });
  const menuDataSource = useMemo(
    () => (is.array(data) ? dataSourceToMenuDataSource(data) : []),
    [data],
  );

  const filterDataSource = React.useMemo(() => {
    if (!keywords) {
      return menuDataSource;
    }
    return menuDataSource.filter(
      (vo) => is.string(vo.label) && vo.label.toLowerCase().indexOf(keywords) > -1,
    );
  }, [menuDataSource, keywords]);
  const i18nBundle = useI18nBundle('ProTable');
  return (
    <Menu
      embeddable
      header={
        <SearchInput
          onChange={(val) => setKeywords(val.trim().toLowerCase())}
          placeholder={i18nBundle.columnTitleFilterPanelMenuSearchPlaceholder}
        />
      }
      style={{
        maxHeight: 'auto',
      }}
      loading={loading}
      error={error?.message}
      {...otherProps}
      dataSource={filterDataSource}
    />
  );
};

const SearchInput: React.FC<InputProps> = (props) => (
  <Input
    innerBefore={<CustomIcon type="search" size="xs" style={{ margin: 4, marginRight: 0 }} />}
    hasClear
    style={{
      width: '100%',
    }}
    {...props}
  />
);
