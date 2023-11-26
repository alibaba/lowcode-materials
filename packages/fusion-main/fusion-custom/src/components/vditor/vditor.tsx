import * as React from 'react';
import { createElement } from 'react';
import './index.scss';
import { Loading } from '@alifd/next';

import 'vditor/dist/index.css';
import Vditor from 'vditor';
// import { VditorEditor } from "react-vditor"

export interface vditorProps {
  /**
   * 类型
   */
  height?: string;

   saveField?(vditor: Vditor): void;
  //  props?:any;
  // vditor?:any;


}

const Vdit: React.FC<vditorProps> = function vditorProps(props) {
  // const [vd, setVd] = React.useState<Vditor>();
  const vditorRef = React.createRef<HTMLDivElement>()
  const [visible, setvisible] = React.useState(true); // 弹框选择

  // const saveField = (vd)=>{
  // }
  // if (props.upload.format){

  // }
  // props.update.linkToImgFormat =  (esponseText: string)=>{
  //         console.log(esponseText)
  // }


  React.useEffect(() => {
    const vditor = new Vditor('vditor', {
      ...props,
      after: () => {
        setvisible(false)
        if (props.saveField) {
          props.saveField(vditor);      
        }


      },
    });
  }, []);

  return (
    <Loading visible={visible} shape="fusion-reactor" style={{width: '100%',minHeight: '200px'}}>
      <div id="vditor" className="vditor" style={{width: '100%',minHeight: props.height }} ref={vditorRef}/> 
  </Loading>
  )





};

export default Vdit;
