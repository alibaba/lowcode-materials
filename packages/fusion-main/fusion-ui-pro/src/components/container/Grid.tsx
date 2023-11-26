import React, { useState, useRef, useEffect, cloneElement } from 'react';
import cn from 'classnames';
import compact from 'lodash/compact';

export interface GridProps {
  /**
   * 自定义样式名
   */
  className?: string;
  /**
   * 插槽区
   */
  splot?: React.ReactNode;
  /**
   * 子元素分几列展示，如果不设置就会自动开启响应式模式
   */
  cols?: number;
  /**
   * 快速描述子元素布局
   */
  area?: number[] | Array<[number, number]> | Array<number | [number, number]>;
  /**
   * 列间距
   * @default 20
   */
  columnGap?: number;
  /**
   * 行间距
   * @default 20
   */
  rowGap?: number;
  /**
   * 是否开启响应式模式
   */
  responsive?: boolean;
  /**
   * 响应式导致列发生改变的时候的回调
   */
  onColumnChange?: (column) => void;
  /**
   * 容器的样式
   */
  style?: React.CSSProperties;
  /**
   * 子元素的样式控制
   */
  gridItemStyle?: React.CSSProperties;
}

const DEFAULT_COLS = 4;
const Grid: React.FC<GridProps> = ({
  style,
  gridItemStyle,
  columnGap,
  rowGap,
  splot,
  cols: propsCols,
  area,
  className,
  children,
  responsive: propResponsive,
  onColumnChange,
}) => {
  const responsive = !propsCols ? true : propResponsive;
  const [cols, setCols] = useState(propsCols);
  const gridRef = useRef();
  useEffect(() => {
    if (responsive) {
      new ResizeObserver((enties) => {
        for (const oGrid of enties) {
          const width = oGrid.target.clientWidth;
          let targetCols = DEFAULT_COLS;

          if (width <= 602) {
            targetCols = 1;
          } else if (width >= 603 && width <= 894) {
            targetCols = 2;
          } else if (width >= 895 && width <= 1187) {
            targetCols = 3;
          } else if (width >= 1188) {
            targetCols = 4;
          }
          if (targetCols !== cols) {
            onColumnChange(targetCols);
          }
          setCols(targetCols);
        }
      }).observe(gridRef.current);
    }
  }, [responsive]);

  return (
    <div
      data-name="Grid"
      style={{
        gridTemplateColumns: `repeat(${responsive ? cols : propsCols}, minmax(0, 1fr) [col-start])`,
        gridColumnGap: columnGap,
        gridRowGap: rowGap,
        ...style,
        visibility: cols === undefined ? 'hidden' : 'visible',
      }}
      ref={gridRef}
      className={cn('fusion-ui-grid', className, responsive && 'responsive')}
    >
      {React.Children.map(
        compact(React.Children.toArray(children)),
        (item: React.ReactElement, index) => {
          const { colSpan, rowSpan, hidden } = item.props;
          const areaIndexData = [].concat(area?.[index]);
          const gridItemRow = rowSpan || areaIndexData?.[1] || 1;
          const gridItemColumn = colSpan || areaIndexData?.[0] || 1;

          return cloneElement(item, {
            style: {
              ...(item.props.style || {}),
              ...gridItemStyle,
              display: hidden ? 'none' : item.props.style?.display || null,
              gridRow: `span ${gridItemRow}`,
              gridColumn: `span ${gridItemColumn === 'full' ? cols : gridItemColumn}`,
            },
          });
        },
      )}
      {splot}
    </div>
  );
};

Grid.defaultProps = {
  columnGap: 20,
  rowGap: 20,
  responsive: false,
  onColumnChange: () => {},
};

Grid.displayName = 'Grid';

export { Grid };
