// External modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Internal modules
var config = require('./config');
var userController = require('./controllers/UserController');

// Database setup

mongoose.connect(config.DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('  db connected')
});


// Express setup  
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/', userController);


// Server deployment 
var port = config.PORT || 3000;
app.listen(port)


console.log('\n--- Information ---');
console.log('  Port:',port);
console.log('  Database:',config.DB_PATH);
 