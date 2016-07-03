var spawn = require('child_process').spawn;



module.exports = function(type, filename, codeDbObj) {
	switch(type) {
		case 'c': 
			Compiler('c', filename, codeDbObj, function(err, outputFilename, updatedDbObj, compiler_message, compiler_error_message) {
				if (outputFilename) {
					// I should totally run it man!
					var des_folder = './code/' + codeDbObj._user + '/';
    				var full_path = des_folder + outputFilename;
    				full_path = './../code/57781df65b6213d30539dc9b/1467548627966.c.out'
					
					var child = spawn('./a.out');

					// Listen for any response from the child:
					child.stdout.on('data', function (data) {
					    console.log('We received a reply: ' + data);
					});

					// Listen for any errors:
					child.stderr.on('data', function (data) {
					    console.log('There was an error: ' + data);
					});

					// Listen for an exit event:
					child.on('exit', function (exitCode) {
					    console.log("Child exited with code: " + exitCode);
					});

				} else {
					// could not create output file, must have been something wrong
				}
			});
	}
}