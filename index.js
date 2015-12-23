var exec = require('child_process').exec;
var options = {
    encoding: 'utf8',
    timeout: 10,
    maxBuffer: 200*1024,
    killSignal: 'SIGTERM',
    cwd: null,
    env: null
}
var child = exec('a.exe', options, function (error, stdout, stderr) {
    console.log(String(stdout));
    console.log(String(stderr));
    if (error != null) {
        console.log('exec error: ' + error);
        console.log('I am still running');
    }
})
