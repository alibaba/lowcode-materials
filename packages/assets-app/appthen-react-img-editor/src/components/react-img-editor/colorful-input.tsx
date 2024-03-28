import * as React from 'react';
import { createElement } from 'react';

import ReactImgEditor from 'react-img-editor'
import 'react-img-editor/assets/index.css'

export interface ReactImgEditorObjProps {
}

const ReactImgEditorObj: React.FC<ReactImgEditorObjProps> = function ColorfulInput({
  ...otherProps
}) {

  // const stageRef = React.useRef<any>(null)
 
  // const setStage = (stage) => {
  //   stageRef.current = stage
  // }

  console.log(otherProps)

  return (
<ReactImgEditor

{...otherProps}


// getStage={setStage}

/>
  );
};

export default ReactImgEditorObj;
