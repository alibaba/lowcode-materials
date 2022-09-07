import * as React from 'react';
import { Button } from '@alifd/next';

export interface ButtonDataSource {
  label?: string;
  onClick?: (e: React.MouseEvent<Element>) => unknown;
}
export interface CardButtonGroupProps {
  dataSource?: ButtonDataSource[];
  text?: boolean;
}

export const CardButtonGroup: React.FC<CardButtonGroupProps> = ({ dataSource, text }) => {
  return (
    <>
      {dataSource.map(({ label, onClick, ...rest }) => {
        return (
          <Button text={text} type="primary" onClick={onClick} {...rest}>
            {label}
          </Button>
        );
      })}
    </>
  );
};

CardButtonGroup.defaultProps = {
  dataSource: [],
};

export default CardButtonGroup;
