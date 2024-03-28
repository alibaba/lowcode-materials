import React from 'react';
import classNames from 'classnames';
import { Ellipsis } from '@/components/ellipsis/index';

export interface AnchorLinkProps {
  isFocus: boolean;
  label: string;
  htmlId: string;
  level: number;
  onSelect: (htmlId: string) => void;
}

export class AnchorLink extends React.Component<AnchorLinkProps> {
  static displayName = 'AnchorLink';

  static defaultProps = {
    onSelect: () => {},
  };

  render() {
    const { label, htmlId, isFocus, level, onSelect } = this.props;

    const cls = classNames({
      'fusion-ui-anchor-item': true,
      [`fusion-ui-anchor-item-level-${level}`]: true,
      'fusion-ui-anchor-item-active': !!isFocus,
    });

    return (
      <div key={htmlId} className={cls} onClick={() => onSelect(htmlId)}>
        <Ellipsis>{label}</Ellipsis>
      </div>
    );
  }
}
