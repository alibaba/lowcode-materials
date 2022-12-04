const fs = require('fs')
const path =require('path')
const isWindowsPlatform = () => {
    return process.platform ==='win32'
}

const run = () => {
    if(!isWindowsPlatform()){
        return;
    }
   let tmpdirExist = fs.existsSync(path.join(__dirname,'/.tmp'))
    if(!tmpdirExist){
        console.log('缺少.tmp文件夹')
        return
    }
    const needFixedFileNames = ['view.js','default.view.js']
    needFixedFileNames.forEach(replaceFileWithDoubleBackSlash)

}

const replaceFileWithDoubleBackSlash = (fileName) => {
    const filePath = path.join(__dirname,`./.tmp/${fileName}`)
    const view = fs.readFileSync(filePath,'utf-8')
    let replacedView =view.toString().replace(/\\/g,'\\\\')
    replacedView =replacedView.replace(/\\\\\\\\/g,'\\\\')
    fs.writeFile(filePath,replacedView,'utf-8',function (err){
        if(!err){
            console.log(`${fileName}反斜杠替换成功`)
        }
    })
}

run()