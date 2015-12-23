var spawn = require('child_process').spawn;
var compile = spawn('gcc', ['temp.c']);

compile.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

compile.stderr.on('data', function (data) {
    console.log(String(data));
});

compile.on('close', function (data) {
    // console.log('stdout: ' + data);
    if (data === 0) {
        var run = spawn('./a.exe', []);

        run.stdout.on('data', function (output) {
            console.log(String(output));
        });

        run.stderr.on('data', function (output) {
            console.log(String(output));
        });

        run.on('close', function (output) {
            console.log('stdout: ' + output);
        })
    } else {

    }
})
