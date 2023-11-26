import * as React from 'react';
import { createElement } from 'react';
import 'vditor/dist/index.css';
import Vditor from 'vditor';
import { Grid } from '@alifd/next';
const { Row, Col } = Grid;

export interface RenderProps {
  /**
   * 类型
   */
  props?: any;
  tocShow?:boolean,
  spacing?:Number,
  data?:string;

}



const Render: React.FC<RenderProps> = function RenderProps({data,tocShow,spacing,...props}) {
  // const [vd, setVd] = React.useState<Vditor>();
  React.useEffect(() => {
      const vdit = Vditor.preview(document.getElementById('preview'),  data, {
        after () {
          if (tocShow){
            if (window.innerWidth <= 768) {
              return
            }
            const outlineElement = document.getElementById('outline')
            Vditor.outlineRender(document.getElementById('preview'), outlineElement)
            if (outlineElement.innerText.trim() !== '') {
              outlineElement.style.display = 'block'
            }
          }
        },
        ...props,
      });



      
  }, []);
  return ( 
    <Row   >
      <Col id="preview"  className="preview"  />
      <Col id="outline" className="outline" fixedSpan={spacing} />
    </Row>
  
  );
};

export default Render;
