const { exec } = require('child_process');

const plugin = ({ context, registerTask, onGetWebpackConfig, onHook, log }, options) => {
    // const { type, inject, openUrl, generateMeta = true, library } = options;
    // const { command, rootDir, userConfig, pkg } = context;

        onHook(`after.start.compile`,({isFirstCompile})=>{
            if(isFirstCompile){
                exec('npm run fix:tmpview', (err, stdout, stderr) => {
                    if(err) {
                        console.log(err);
                        return;
                    }
                    console.log(`stdout: ${stdout}`);
                    console.log(`stderr: ${stderr}`);
                })
            }
        })

};


module.exports = plugin;