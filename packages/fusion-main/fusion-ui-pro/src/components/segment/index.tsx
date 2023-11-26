import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Space } from '../container';
import set from 'lodash/set';
import cn from 'classnames';

export interface SegmentDataSourceItem {
  label: React.ReactNode;
  value: any;
}

export interface SegmentProps {
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 自定义样式名
   */
  className?: string;
  /**
   * 按钮数据源
   */
  dataSource: SegmentDataSourceItem[];
  /**
   * 选中值的回调
   */
  onChange?: (value: any, data: SegmentDataSourceItem) => void;
  /**
   * 受控的值
   */
  value?: any;
  /**
   * 默认的值
   */
  defaultValue?: any;
  /**
   * @default "medium"
   * 按钮组大小
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 是否占满容器的宽度，如果为 true，下面的元素将均分展示
   */
  fullWidth?: boolean;
  /**
   * @default "normal"
   * 按钮类型
   */
  type?: 'normal' | 'primary' | 'secondary';
}

const Segment: React.FC<SegmentProps> = ({
  className,
  style,
  dataSource,
  onChange,
  value: propsValue,
  defaultValue,
  fullWidth,
  size,
  type,
}) => {
  const [selectedDom, setSelectedDom] = useState(null);
  const [value, setValue] = useState(defaultValue);
  const itemRef = useRef({});
  const beforeWidth = useRef(null);
  const { width, height } = useMemo(
    () => selectedDom?.getBoundingClientRect() || {},
    [selectedDom],
  );
  const handlerOffsetLeft = useMemo(
    () => selectedDom?.offsetLeft - (size === 'large' ? 4 : 2),
    [selectedDom],
  );

  // 首次进入的时候不需要动画
  const noDuring = !beforeWidth.current && width;
  beforeWidth.current = width;
  // 受控模式处理
  useEffect(() => {
    if (propsValue !== undefined) {
      setValue(propsValue);
    }
  }, [propsValue]);
  // 更新选中 dom
  useEffect(() => {
    setSelectedDom(itemRef.current[value]);
  }, [value]);
  // 点击选中某个值
  const handleItemClick = (val: any, data: SegmentDataSourceItem) => {
    if (propsValue === undefined) {
      setValue(val);
    }
    onChange(val, data);
  };
  const cssPrefix = 'fusion-ui-segment';
  return (
    <div
      style={style}
      className={cn(
        cssPrefix,
        `${cssPrefix}-${size}`,
        `${cssPrefix}-${type}`,
        fullWidth && `${cssPrefix}-full`,
        className,
      )}
    >
      <Space split spacing={-1}>
        {dataSource.map((item, index) => (
          <div
            className={cn(`${cssPrefix}-item`, { 'item-selected': value === item.value })}
            onClick={() => handleItemClick(item.value, item)}
            key={index}
            ref={(ref) => {
              set(itemRef.current, item.value, ref);
            }}
          >
            {item.label}
          </div>
        ))}
      </Space>
      <motion.div
        className={`${cssPrefix}-handler`}
        transition={noDuring ? { duration: 0 } : { ease: 'easeInOut' }}
        initial={false}
        animate={{ height, width, x: isNaN(handlerOffsetLeft) ? 0 : handlerOffsetLeft, y: 0 }}
      />
    </div>
  );
};

Segment.defaultProps = {
  onChange: () => {},
  size: 'medium',
  type: 'normal',
};

Segment.displayName = 'Segment';
export { Segment };
