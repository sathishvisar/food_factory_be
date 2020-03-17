var mongoose = require('mongoose');

const route = 'order'; 	// Route: 'recipe' routes to /recipe
const modelId = 'Order';  // Same name as file, no extension: Recipe'

var Schema = new mongoose.Schema({
    orderNum: {
		type: String,
		unique: true
	},
    orderDate: {
		type: Date
    },
    dateOfdelivery: {
		type: Date
    },
    modeOfTransport: {
		type: String
    },
    status: {
		type: Boolean
	},
})


module.exports = {
	model: mongoose.model(modelId, Schema),
	route: route
}