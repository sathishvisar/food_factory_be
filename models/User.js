var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

const route = 'user'; 	// Route: 'recipe' routes to /recipe
const modelId = 'User';  	// Same name as file, no extension: Recipe'

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	lLogin: {
		type: Date
	},
	cAt: {
		type: Date,
	},
	uAt: {
		type: Date
	},
	status: {
		type: Boolean
	}
});

 
UserSchema.pre("save", function(next) {
	console.log('save');
    if(!this.isModified("password")) {
        return next();
	}
	this.password = bcrypt.hashSync(this.password, 10);
    next();
});


UserSchema.pre("update", function(next) {
	console.log('update 1');
    if(!this.isModified("password")) {
        return next();
	}
	console.log('update 2');
	this.password = bcrypt.hashSync(this.password, 10);
    next();
});



module.exports = {
	model: mongoose.model(modelId, UserSchema),
	route: route
}