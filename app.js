// External modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Internal modules
var config = require('./config');
var authController = require('./controllers/AuthController');
var userController = require('./controllers/UserController');
var foodController = require('./controllers/FoodController');
var ingredientController = require('./controllers/IngredientController');
var orderController = require('./controllers/OrderController');

// Database setup

mongoose.connect(config.DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('  db connected')
  // Init
  var init = require('./init.service');
});


// Express setup  
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/auth',authController)
app.use('/', userController);
app.use('/', foodController);
app.use('/', ingredientController);
app.use('/', orderController);


// Server deployment 
var port = config.PORT || 3000;
app.listen(port)


console.log('\n--- Information ---');
console.log('  Port:',port);
console.log('  Database:',config.DB_PATH);
 