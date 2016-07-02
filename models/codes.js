var mongoose = require('mongoose');

var codesSchema = mongoose.Schema({
    _user: {
    	type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    sourceCode: {
    	type: String,
        required: true
    },
    type: {
    	type: String,
    	required: true
    },
    stale: {
        type: Boolean,
        required: true,
        default: false
    },
    lastOutput: {
        type: String
    },
    outputStatus: {
        type: String
    },
    lastRun: {
        type: Date
    }

}, {
	timestamps: {
		createdAt: 'created_at' 
	}
});

module.exports = mongoose.model('Codes', codesSchema);