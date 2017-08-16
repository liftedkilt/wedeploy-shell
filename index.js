var sys = require('sys')
var exec = require('child_process').exec;
var child;

child = exec("./gotty -c liferay:liferay123 -w -p '80' bash", function (error, stdout, stderr) {
  sys.print('stdout: ' + stdout);
  sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
