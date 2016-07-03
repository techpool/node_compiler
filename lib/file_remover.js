const fs = require('fs');

function file_remover(filename, codeDbObj) {
	full_path = './code/' + codeDbObj._user + '/' + filename;
	fs.unlink(full_path, (err) => {
		if (err) throw err;
		console.log('successfully deleted -> ' + full_path);
	});
}

module.exports = file_remover;