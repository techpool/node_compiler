var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: {
    	type: String,
    	required: true,
        unique: true
    },
    name: {
    	firstname: {
    		type: String,
    		required: true
    	},
    	lastname: {
    		type: String
    	}
    },
    password: {
    	type: String,
    	required: true
    },

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