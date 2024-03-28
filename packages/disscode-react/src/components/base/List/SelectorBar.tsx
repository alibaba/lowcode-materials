import React from 'react';
import { observer } from 'mobx-react';

import View from '../View';
import Text from '../Text';

interface SelectorBarProps {
  isOpenSelection: boolean;
  num: number;
  /** 全选功能未做 */
  isAllSelect?: boolean;
  onClickAllSelect?: () => void;
  onClickOpen: () => void;
  onClickClose: () => void;
  handleButton?: React.ReactNode;
}

const SelectorBar = observer(
  ({ isOpenSelection, num = 0, onClickOpen, onClickClose, handleButton }: SelectorBarProps) => {
    return (
      <View className="cs-selector-bar M-bd-t M-flexbox-horizontal">
        {isOpenSelection ? (
          <React.Fragment>
            <View className="M-vertical-middle M-p-l-10">
              <Text className="M-f-s-14 M-f-c-666">已选择{num}项</Text>
            </View>
            <View onClick={onClickClose} className="M-vertical-middle M-p-l-10 M-gb-click">
              <Text className="M-f-s-14 M-f-c-1">取消</Text>
            </View>
          </React.Fragment>
        ) : (
          <View onClick={onClickOpen} className="M-vertical-middle M-p-l-15 M-gb-click">
            <Text className="M-f-s-14 M-f-c-1">多选</Text>
          </View>
        )}
        {handleButton}
      </View>
    );
  },
);

export default SelectorBar;
