var mongoose = require('mongoose');

const route = 'food'; 	// Route: 'recipe' routes to /recipe
const modelId = 'Food';  	// Same name as file, no extension: Recipe'


var Schema = new mongoose.Schema({
    name: {
		type: String,
		required: true
	},
	cuisine: {
		type: String
    },
    ingredients: {
		type: String
    },
    lotNumber: {
		type: Number,
		unique: true
    },
    costOfProduction: {
		type: String
    },
    sellingCost: {
		type: String
    },
    createdAt: {
		type: Date
	},
})


module.exports = {
	model: mongoose.model(modelId, Schema),
	route: route
}