var spawn = require('child_process').spawn;

function c_compiler(filename, username) {

    var outputFilename = filename + '.out';

    var full_path = './code/' + username + '/' + filename;

    var compile = spawn('gcc', [full_path, '-o', outputFilename]);

    compile.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    compile.stderr.on('data', function (data) {
        console.log(String(data));
    });

    compile.on('close', function (data) {
        // console.log('stdout: ' + data);
        if (data === 0) {
            console.log(filename);
            FileRemover(filename, username);
        } else {
            console.log(data);
        }
    });    
}

function compiler(filetype, filename, username) {
    console.log(filename)
    switch(filetype) {
        case 'c': c_compiler(filename, username);
                    break;
        default:
            console.log('Unknown File format');
    }
}

module.exports = compiler