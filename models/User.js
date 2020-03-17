var mongoose = require('mongoose');
 var bcrypt = require('bcrypt-nodejs');

const route = 'user'; 	// Route: 'recipe' routes to /recipe
const modelId = 'User';  	// Same name as file, no extension: Recipe'

var Schema = new mongoose.Schema({
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


module.exports = {
	model: mongoose.model(modelId, Schema),
	route: route
}