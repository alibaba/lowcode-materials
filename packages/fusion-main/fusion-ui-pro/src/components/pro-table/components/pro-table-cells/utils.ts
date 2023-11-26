import is from '@sindresorhus/is';

export type StatusColorType =
  | 'success'
  | 'error'
  | 'warning'
  | 'notice'
  | 'help'
  | 'normal'
  | string;

/** 颜色转换回调 */
export type FormatColor =
  | StatusColorType
  | ((value: unknown) => StatusColorType)
  | Record<string, StatusColorType>;

/**
 *
 * @param value 值
 * @param formatColor 状态/颜色
 * @returns 颜色
 */
export const getColorWithFormat = (value?: unknown, formatColor?: FormatColor): StatusColorType => {
  if (is.object(formatColor)) {
    return formatColor[value as string];
  }
  if (is.function_(formatColor)) {
    return formatColor(value);
  }
  if (is.string(formatColor)) {
    return formatColor;
  }
  return 'normal';
};

export const colorToStatus = <Status extends StatusColorType>(
  value: StatusColorType,
  allowStatus: Status[],
): Status | undefined => (allowStatus.includes(value as Status) ? (value as Status) : undefined);
