import React, { ReactNode } from 'react';

export default function enumRender(cellData: any, column: { 
  enumData?: { value: any; text?: ReactNode; color?: string }[]; 
  enumBadgeType?: string;  
}) {
  if (!cellData && cellData !== 0) {
    return '';
  }

  const { enumData, enumBadgeType } = column;
  if (!enumData || !Array.isArray(enumData) || enumData.length === 0) {
    return cellData;
  }

  const found = enumData.find((item) => {
    return item.value === cellData;
  });

  let color = 'black';
  let theme = 'background';

  if (!found) {
    return cellData;
  }

  if (found.color) {
    color = found.color;
    if (enumBadgeType) {
      theme = enumBadgeType;
    }
    let className = `deep-table-badge deep-table-badge-${theme}-${color}`;
    return <span className={className}>{found.text}</span>
  }

  return found.text;
};
