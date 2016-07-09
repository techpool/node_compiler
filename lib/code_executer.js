var spawn = require('child_process').spawn;



module.exports = function(type, filename, codeDbObj) {
	switch(type) {
		case 'c': 
			Compiler('c', filename, codeDbObj, function(err, outputFilename, updatedDbObj, compiler_message, compiler_error_message) {
				if (outputFilename) {
					// I should totally run it man!
					var des_folder = './code/' + codeDbObj._user + '/';
    				var full_path = des_folder + outputFilename;
					
					var child = spawn(full_path);

					var output = "";
					var error = "";
					// Listen for any response from the child:
					child.stdout.on('data', function (outputData) {
					    output += outputData;
					});

					// Listen for any errors:
					child.stderr.on('data', function (errorData) {
					    error += errorData;
					});

					// Listen for an exit event:
					child.on('exit', function (exitCode) {

						if (error) {
							updatedDbObj.outputStatus = "runtime_error"
						} else {
							updatedDbObj.outputStatus = "ok"
						}
					    updatedDbObj.lastOutput = output;
				    	updatedDbObj.lastRun = Date.now();

				    	updatedDbObj.save(function(err, savedObj) {
				    		if (err) {
				    			console.log(err);
				    		} else {
				    			console.log('Successfully saved');
				    		}
				    	});
					});

				} else {
					// could not create output file, must have been something wrong
				}
			});
	}
}