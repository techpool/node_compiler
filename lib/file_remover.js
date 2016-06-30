const fs = require('fs');

function file_remover(filename, username) {
	full_path = './code/' + username + '/' + filename;
	fs.unlink(full_path, (err) => {
		if (err) throw err;
		console.log('successfully deleted -> ' + full_path);
	});
}

module.exports = file_remover;