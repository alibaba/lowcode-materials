import React, { useState, useEffect, Component } from 'react';
// setter使用@alifd/next，和编辑器保持一致
import { Input, Icon as NextIcon, Radio, Balloon, Search } from '@alifd/next';
import { get } from '../../_utils/utils';
import './style.less';

type IconGroup = 'outlined' | 'filled' | 'two-tone' | 'iconfont';
const IconGroupNameMap: Record<IconGroup, string> = {
  outlined: '线框风格',
  filled: '实底风格',
  'two-tone': '双色风格',
  iconfont: 'Iconfont',
};

function getIconfontIconList() {
  const iframe = document.querySelector<HTMLIFrameElement>(
    'iframe.lc-simulator-content-frame',
  )!;

  const antdIcons = get(iframe, 'contentWindow.icons', {}) as Record<
    string,
    any
  >;

  // iconfont的js会在页面中添加svg元素
  const symbols = Array.prototype.slice.call(
    iframe.contentDocument!.querySelectorAll(
      'svg[style="position: absolute; width: 0px; height: 0px; overflow: hidden;"][aria-hidden="true"] > symbol',
    ),
  );

  const Icon = antdIcons.createFromIconfontCN();

  return symbols.map(symbol => {
    const { id } = symbol;
    return {
      name: id,
      group: 'iconfont',
      icon: (props: any) => (
        <span role="img" className="anticon">
          <svg
            viewBox="64 64 896 896"
            width="1em"
            height="1em"
            fill="currentColor"
            dangerouslySetInnerHTML={{ __html: symbol.innerHTML }}
          />
        </span>
      ),
    };
  });
}

function getAntdIconList() {
  const iframe = document.querySelector<HTMLIFrameElement>(
    'iframe.lc-simulator-content-frame',
  );

  const icons: Record<string, any> = {};

  // document.querySelectorAll('svg[style="position: absolute; width: 0px; height: 0px; overflow: hidden;"][aria-hidden="true"]')
  const antdIcons = get(iframe, 'contentWindow.icons', {}) as Record<
    string,
    any
  >;

  return Object.keys(antdIcons)
    .map(key => {
      const item = (antdIcons as any)[key];

      if (typeof item !== 'object') {
        return null;
      }

      const name = item?.displayName ?? item?.render?.displayName ?? key;
      let group: IconGroup = 'outlined';

      const lowercaseName = name.toLowerCase();

      if (/outlined$/.test(lowercaseName)) {
        group = 'outlined';
      } else if (/filled$/.test(lowercaseName)) {
        group = 'filled';
      } else if (/twotone$/.test(lowercaseName)) {
        group = 'two-tone';
      } else {
        return null;
      }

      return {
        name,
        group,
        icon: item,
      };
    })
    .filter(Boolean);
}

function getIconList() {
  const iconfontIconList = getIconfontIconList();
  const antdIconList = getAntdIconList();

  return [...antdIconList, ...iconfontIconList];
}

const Icon = (props: any) => {
  const { type, icons = {}, ...rest } = props;
  const Comp = icons[type];
  if (!Comp) return null;
  return <Comp {...rest} />;
};

interface AntdIconSetterProps {
  value: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  hasClear: boolean;
  onChange: (icon: string | object) => undefined;
  icons: string[];
}

const AntdIconSetter = (props: AntdIconSetterProps) => {
  const [search, setSearch] = useState('');
  const [icons, setIcons] = useState<Record<string, any>>({});
  const [groups, setGroups] = useState<{ group: IconGroup; list: any[] }[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<IconGroup>('outlined');
  const [firstLoad, setFirstLoad] = useState(true);
  const [list, setList] = useState<any[]>([]);

  const { value, defaultValue, type, onChange, placeholder, hasClear } = props;

  const _value =
    typeof value === 'object' ? (value as any)?.props?.type : value;
  if (firstLoad && defaultValue && typeof value === 'undefined') {
    onChange(defaultValue);
    setFirstLoad(false);
  }

  const handleChange = (icon: string) => {
    if (type === 'string') {
      onChange(icon);
    } else if (type === 'node') {
      onChange({
        componentName: 'Icon',
        props: {
          type: icon,
        },
      });
    }
  };

  useEffect(() => {
    const iconList = getIconList();

    const groups: { group: IconGroup; list: any[] }[] = [];
    const icons: any = {};

    iconList.forEach(item => {
      const { group, name, icon } = item!;
      if (groups.every(item => item.group !== group)) {
        groups.push({ group: group as IconGroup, list: [] });
      }
      const target = groups.find(item => item.group === group)!;
      target.list.push(item);
      icons[item!.name] = item?.icon;
    });

    setIcons(icons);
    setGroups(groups);
    setSelectedGroup(groups[0]?.group);
  }, []);

  useEffect(() => {
    const currentGroup = groups.find(item => item.group === selectedGroup);
    setList(
      (currentGroup?.list ?? []).filter(item => {
        return search
          ? item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
          : true;
      }),
    );
  }, [selectedGroup, search, groups]);

  const currentIcon = (
    <Icon type={_value} icons={icons} style={{ fontSize: 16 }} />
  );
  const clearIcon = hasClear && (
    <NextIcon
      size="xs"
      id="icon-clear"
      type="delete-filling"
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        handleChange('');
      }}
    />
  );

  const triggerNode = (
    <div>
      <Input
        placeholder={placeholder}
        addonTextBefore={currentIcon}
        onChange={handleChange}
        value={_value}
        defaultValue={defaultValue}
        readOnly
        addonTextAfter={clearIcon}
      />
    </div>
  );

  return (
    <div className="lc-antd-icon-setter">
      <Balloon
        className="lc-antd-icon-setter-balloon"
        trigger={triggerNode}
        needAdjust
        triggerType="click"
        closable={false}
        alignEdge
        align="lt"
        style={{ width: 300 }}
      >
        <div className="lc-antd-icon-setter-header">
          <Radio.Group
            className="lc-antd-icon-setter-header-style"
            shape="button"
            value={selectedGroup}
            onChange={value => setSelectedGroup(value as any)}
          >
            {groups.map(item => (
              <Radio key={item.group} value={item.group}>
                {IconGroupNameMap[item.group]}
              </Radio>
            ))}
          </Radio.Group>
          <Search
            className="lc-antd-icon-setter-header-search"
            size="medium"
            shape="simple"
            onChange={setSearch}
          />
        </div>
        <div className="lc-antd-icon-setter-content">
          <ul className="lc-antd-icon-setter-list">
            {list.map(item => (
              <li
                key={item.name}
                className="lc-antd-icon-setter-list-item"
                onClick={() => handleChange(item.name)}
              >
                <Icon type={item.name} icons={icons} />
                <div className="lc-antd-icon-setter-list-item-name">
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Balloon>
    </div>
  );
};

AntdIconSetter.defaultProps = {
  value: undefined,
  type: 'string',
  defaultValue: '',
  hasClear: false,
  placeholder: '请点击选择 Icon',
  onChange: () => undefined,
};

// 因为下面这个问题，setter必须使用class组件
// http://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-engine/issues/109046
export default class extends Component<AntdIconSetterProps> {
  render() {
    return <AntdIconSetter {...this.props} />;
  }
}
