const exec = require('child_process').exec;
exports.default = function execute(cmd, cb) {
  exec(cmd, function (error, stdout, stderr) {
    if (error) {
      console.error(error);
    } else {
      cb && cb();
    }
  });
}