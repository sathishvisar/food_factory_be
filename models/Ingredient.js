var mongoose = require('mongoose');

const route = 'ingredient'; 	// Route: 'recipe' routes to /recipe
const modelId = 'Ingredient';  	// Same name as file, no extension: Recipe'


var Schema = new mongoose.Schema({
    name: {
		type: String,
	},
	availableQuantity: {
		type: Number,
    },
    thresholdQuantity: {
		type: Number,
    },
    lotNumber: {
		type: Number,
		unique: true
    },
    price: {
		type: String
    },
    vendorName: {
		type: String
    },
    vendorEmail: {
		type: Date
	},
})


module.exports = {
	model: mongoose.model(modelId, Schema),
	route: route
}