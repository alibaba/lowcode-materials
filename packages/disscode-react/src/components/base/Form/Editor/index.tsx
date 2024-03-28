import React from 'react';
import { Editor, EditorProps } from '@tarojs/components';
import View from '../../View';
import { MiniRichEditorProps } from './Editor.type';

class MiniRichEditor extends React.Component<MiniRichEditorProps> {

  render() {
    return (
      <View>
        <Editor />
      </View>
    )
  }

}

export default MiniRichEditor;
