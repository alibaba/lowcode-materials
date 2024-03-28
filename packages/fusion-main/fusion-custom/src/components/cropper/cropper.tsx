import * as React from 'react';
import { createElement, useState } from 'react';
import { bizCssPrefix } from '../../variables';
import './index.scss';
import { Upload, Button, Dialog } from '@alifd/next';
import Cropper from "react-cropper"; // 引入Cropper
// import "cropperjs/dist/cropper.css";


function dataURL2Blob2File(dataURL) {
  const arr = dataURL.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    u8arr = new Uint8Array(bstr.length);
  let n = bstr.length;
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  const blob = new Blob([u8arr], { type: mime });
  // Blob to File
  // set lastModifiedDate and name
  blob.lastModifiedDate = new Date();
  blob.name = 'cropper.jpg';
  return blob;
}

export interface CroppertProps {

  aspectRatio?:string;
  Width?:string;
  Height?:string;
  resizable?:Boolean,
  autoCropArea:string,
  cropBoxResizable:Boolean,
  movable:Boolean,
  zipWidth:string

}


const CropperPicture: React.FC<CroppertProps> = function CroppertProps({
    aspectRatio,
    Width,
    Height,
    resizable,
    autoCropArea,
    cropBoxResizable,
    movable,
    zipWidth,
  ..._otherProps
}) {
  const [hooksModalFile, setHooksModalFile] = useState(null); // 选取的img文件
  const [uploaderRef, setuploaderRef] = useState(null); //
  const [visible, setvisible] = useState(false); // 弹框选择
  const cropperRef = React.useRef<HTMLImageElement>(null);
  const Uploader = Upload.Uploader; // 文件上传器
  const uploader = new Uploader({
    Authorization: localStorage.getItem('Authorization'),
    ..._otherProps
  });
  const onSelect = (files) => {
    const reader = new FileReader();
    reader.onload = () => {
      // console.log(reader)
      setHooksModalFile(reader.result);
      setvisible(true);
    };
    reader.readAsDataURL(files[0].originFileObj);
  };
  const onCancel = () => {
    setvisible(false);
  };
  const onOk = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    const data = cropper.getCroppedCanvas().toDataURL();
    compressImage(data, zipWidth, UploadProcess)

    // const file = dataURL2Blob2File(data);
    // debugger
    // // compressImage(file, 200, uploader.startUpload)
    // uploader.startUpload(file);
    // setvisible(false);
  };

  const UploadProcess=(base64:any)=>{
    
    const file = dataURL2Blob2File(base64);
    
    // compressImage(file, 200, uploader.startUpload)
    uploader.startUpload(file);
    setvisible(false);
  }

   const  compressImage = (base64, w, callback)=> {
    var newImage = new Image();
    var quality = 0.5; //压缩系数0-1之间
    newImage.src = base64;
    // newImage.setAttribute("crossOrigin", 'Anonymous');	//url为外域时需要
    var imgWidth, imgHeight;
    newImage.onload = function() {
      imgWidth = this.width;
      imgHeight = this.height;
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
  
      if (Math.max(imgWidth, imgHeight) > w) {
        if (imgWidth > imgHeight) {
          canvas.width = w;
          canvas.height = (w * imgHeight) / imgWidth;
        } else {
          canvas.height = w;
          canvas.width = (w * imgWidth) / imgHeight;
        }
      } else {
        canvas.width = imgWidth;
        canvas.height = imgHeight;
        quality =1;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // 在canvas绘制前填充白色背景
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
      var base64 = canvas.toDataURL('image/jpeg', quality); //压缩语句
      // 如想确保图片压缩到自己想要的尺寸,如要求在50-150kb之间，请加以下语句，quality初始值根据情况自定
      callback(base64); //必须通过回调函数返回，否则无法及时拿到该值
    };
  }

  const saveUploaderRef = (ref) => {
    if (!ref) return;
    setuploaderRef(ref.getInstance());
  };

  const  customRequest = (option)=> {
    /* coding here */
    return {abort() {/* coding here */}};
}

  return (
    <div>
      <Upload
        {..._otherProps}
        headers={{ Authorization: localStorage.getItem('Authorization') }}
        autoUpload={false}
        ref={saveUploaderRef}
        onSelect={onSelect}
        shape={'card'}
        listType={'card'}
        limit={1}
      ></Upload>
      <Dialog visible={visible} onCancel={onCancel} onOk={onOk} isFullScreen>
        <Cropper
          src={hooksModalFile}
          ref={cropperRef}
          // crop={onCrop}
          style={{width:Width,height:Height}}
          className="company-logo-cropper"
          viewMode={1}
          resizable={resizable}
          zoomable={true}
          aspectRatio={aspectRatio} // 这个是设置比例的参数 我这里设置的1:1
          guides={false}
          autoCropArea={autoCropArea}
          cropBoxResizable={cropBoxResizable}
          movable={movable}
        />
      </Dialog>
    </div>
  );
};


export default CropperPicture;
