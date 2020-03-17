var modelLocation = './models/User'


var util = require('util');
var express = require('express');
var bcrypt = require('bcryptjs');

/**  Model and route setup **/

var model = require(modelLocation).model;
 

model.find({role:1}, function (err, entry) {
    if (err) return res.send(err);
    if(entry.length == 0){
        //Create Admin User
        let admin = {};
        admin.name = "Admin";
        admin.email = 'admin@gmail.com';
        admin.password = '123456';
        admin.role = 1;

        model.create(admin, function (err, entry) {
            if (err){
                console.log(err)
            }
        });
    }
}); 