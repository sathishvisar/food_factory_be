var userModel = '../models/User'


var util = require('util');
var express = require('express');

/**  Model and route setup **/

var User = require(userModel).model;
const route = require(userModel).route;
 
/** Router setup **/

var router = express.Router();


// Configure JWT
var jwt = require('jsonwebtoken');  
var bcrypt = require('bcryptjs');
var config = require('../config');  



router.post('/login', function(req, res) {

    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      
      // check if the password is valid
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
  
      // if user is found and password is valid
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: config.expiresIn
      });
  
      // return the information including token as JSON
      res.status(200).send({ 
        status: true, 
        user_id: user._id,
        role: user.role,
        token: token,
        expiresIn:config.expiresIn
      });
    });
  
  });





module.exports = router;