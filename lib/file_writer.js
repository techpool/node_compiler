var fs = require('fs');

var file_writer = function (type, codeDbObj, content, callback) {
	filename = String(Date.now()) + '.' + type;
	directory = './code/' + codeDbObj._user + '/';
	full_path = directory + filename;

	try {
		fs.statSync(directory);
	} catch(e) {
		fs.mkdirSync(directory);
	}

	fs.writeFileSync(String(full_path), content); 	
    console.log(full_path + ' -> saved');
    callback(filename);

}

module.exports = file_writer;