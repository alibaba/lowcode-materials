import * as React from 'react';
import { createElement } from 'react';
import { createEditor } from '@editablejs/models'
import { EditableProvider, ContentEditable, withEditable } from '@editablejs/editor'


export interface LocoEditableProps {
    color?: 'string';
  }



 const LocoEditable: React.FC<LocoEditableProps> = function LocoEditableProps({
    color,
    ...otherProps
  }) {

    const _otherProps = otherProps || {};
    const editor = React.useMemo(() => {
        return withEditable(createEditor())
      }, [])

    return <EditableProvider 
    {..._otherProps}
    editor={editor}>
      <ContentEditable />
    </EditableProvider>;

  };
  
  export default LocoEditable;
  