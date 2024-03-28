import * as React from 'react';
import { ReactNode, PropsWithChildren, FC, isValidElement, ReactElement } from 'react';

/** 运行的槽位 */
export type ProTableSlotPosition =
  | 'actionBarLeft'
  | 'actionBarRight'
  | 'actionBarBefore'
  | 'actionBarAfter'
  | 'table'
  | 'tableAfter';
/** 默认的槽位 */
const defaultPosition: ProTableSlotPosition = 'table';

export interface ProTableSlotProps {
  /**
   * 插入槽位
   * - actionBarLeft 操作条左侧
   * - actionBarRight 操作条右侧
   * - actionBarBefore 操作条前
   * - actionBarAfter 操作条后
   * - table 表格内
   */
  position: ProTableSlotPosition;
}
export const ProTableSlot: FC<ProTableSlotProps> = ({ children }) => <>{children}</>;
ProTableSlot.displayName = 'ProTableSlot';

const isProTableSlot = (element: unknown): element is ReactElement<ProTableSlotProps> =>
  isValidElement(element) &&
  (element.type as typeof ProTableSlot)?.displayName === ProTableSlot.displayName;

export interface ProTableSlotsOptions {
  /** 操作条左侧槽位 */
  actionBarLeft?: ReactNode;
  /** 操作条右侧槽位 */
  actionBarRight?: ReactNode;
  /** 操作条前槽位 */
  actionBarBefore?: ReactNode;
  /** 操作条后槽位 */
  actionBarAfter?: ReactNode;
  /** 表格内槽位 */
  table?: ReactNode;
  tableAfter?: ReactNode;
}
export const useProTableSlots = ({
  children,
  ...defaultSlots
}: PropsWithChildren<ProTableSlotsOptions>) => {
  const slots: Partial<Record<ProTableSlotPosition, ReactNode[]>> = {};
  const pushSlot = (position: ProTableSlotPosition, node: ReactNode) => {
    if (!node) {
      return;
    }
    if (position in slots) {
      slots[position].push(node);
    } else {
      slots[position] = [node];
    }
  };
  Object.keys(defaultSlots).forEach((position: ProTableSlotPosition) =>
    pushSlot(position, defaultSlots[position]),
  );
  React.Children.forEach(children, (vo) => {
    if (!isProTableSlot(vo)) {
      pushSlot(defaultPosition, vo);
      return;
    }
    pushSlot(vo.props.position, vo);
  });
  return slots;
};
