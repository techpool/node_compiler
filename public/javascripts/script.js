ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/c_cpp");
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});


console.log(editor.getValue())

$("#run").click(function() {
	var filetype = $('#filetype').val();
	var code = editor.getValue();

	var data = {
		filetype : filetype,
		code : code
	}

	var request = $.ajax({
		url: "code/submit/",
		method: "POST",
		contentType: "application/json; charset=utf-8",
    	dataType: "json",
		data: JSON.stringify(data)
	});

	request.done(function( msg ) {
		console.log(msg);
	});

	request.fail(function( jqXHR, textStatus ) {
		console.log( "Request failed: ");
		console.log(jqXHR);
	});
})