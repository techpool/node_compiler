var fs = require('fs');

var file_writer = function (type, user, content) {
	filename = String(Date.now()) + '.' + type;
	directory = './code/' + user + '/';
	full_path = directory + filename;

	try {
		fs.statSync(directory);
	} catch(e) {
		fs.mkdirSync(directory);
	}

	fs.writeFileSync(String(full_path), content); 	
    console.log(full_path + ' -> saved');
    return filename;

}

module.exports = file_writer;