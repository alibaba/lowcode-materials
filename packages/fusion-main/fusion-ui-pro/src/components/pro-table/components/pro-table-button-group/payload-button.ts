import * as React from 'react';
import { ButtonProps } from '@/components/button';
import is from '@sindresorhus/is';

export interface PayloadButtonProps<Payload = unknown>
  extends Omit<ButtonProps, 'hidden' | 'disabled'> {
  payload?: Payload;
  /**
   * 是否隐藏按钮
   * @default false
   */
  hidden?: boolean | ((payload?: Payload) => boolean);
  /**
   * 是否禁用按钮
   * @default false
   */
  disabled?: boolean | ((payload?: Payload) => boolean);
  /**
   * 按钮点击事件
   */
  onClick?: (e: React.MouseEvent<Element>, payload?: Payload) => unknown;
}

function isPayloadButtonTruth<Payload>(
  cb: boolean | ((payload?: Payload) => boolean),
  payload?: Payload,
): boolean {
  return is.function_(cb) ? cb(payload) : cb;
}

export const usePayloadButtons = <Payload = unknown>(
  buttons: Array<PayloadButtonProps<Payload>>,
  payload: Payload,
) =>
  React.useMemo(
    () =>
      buttons
        .filter((vo) =>
          is.nullOrUndefined(vo.hidden) ? true : !isPayloadButtonTruth(vo.hidden, payload),
        )
        .map((vo) => ({
          ...vo,
          disabled: is.nullOrUndefined(vo.disabled)
            ? false
            : isPayloadButtonTruth(vo.disabled, payload),
          hidden: undefined,
          onClick: vo.onClick && ((e) => vo.onClick(e, payload)),
        })),
    [buttons, payload],
  );
