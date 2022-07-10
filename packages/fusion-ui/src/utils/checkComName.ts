import * as React from 'react';

/**
 * 用于检测组件的 displayName
 */
const checkComName = <Props = unknown>(
  checkElement: React.ReactNode,
  sourceComp: React.ComponentType<Props>,
  compDisplayName?: string | string[],
): checkElement is React.ReactElement<Props> => {
  const compDisplayNames = compDisplayName || [sourceComp.displayName?.toLowerCase()];

  const displayNames: string[] = (
    Array.isArray(compDisplayNames) ? compDisplayNames : [compDisplayNames]
  )
    .filter((item) => item)
    .map((item) => item.toLowerCase());
  if (!displayNames || !displayNames.length) {
    return false;
  }
  if (React.isValidElement(checkElement)) {
    const checkElementDisplayName = checkElement.type?.displayName?.toLowerCase();
    if (checkElementDisplayName) {
      return displayNames.includes(checkElementDisplayName);
    }
    return false;
  }
  return false;
};

export default checkComName;
