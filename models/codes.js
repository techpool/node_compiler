var mongoose = require('mongoose');

var codesSchema = mongoose.Schema({
    _user: {
    	type: Schema.Types.ObjectId,
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

// Virtual function to get the full name when 
// name.full of the Users object is invoked
userSchema.virtual('name.full').get(function () {
	return this.name.first + ' ' + this.name.last;
});

module.exports = mongoose.model('Users', userSchema);