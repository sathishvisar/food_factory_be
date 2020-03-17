var modelLocation = '../models/User'


var util = require('util');
var express = require('express');

/**  Model and route setup **/

var model = require(modelLocation).model;
const route = require(modelLocation).route;
const routeIdentifier = util.format('/%s', route);

/** Router setup **/

var router = express.Router();


// Create User
router.post(routeIdentifier + '/create', function (req, res, next) {
    console.log('Got body:', req.body);

    // Validation
    if (req.body === undefined || req.body.email === undefined || req.body.password === undefined) {
        return res.json({
            status: false,
            message: 'Both email and password must be defined in the query string!'
        });
    }

    if (req.body.email === "") {
        return res.json({
            status: false,
            message: 'Email cannot be empty!'
        });
    }

    if (req.body.password === "") {
        return res.json({
            status: false,
            message: 'Password cannot be empty!'
        });
    }

    model.create(req.body, function (err, entry) {
        if (err) return res.send(err);
        return res.json({
            status: true,
            message: 'User was created!'
        });
    });
});

// List Users
router.get(routeIdentifier + '/list', function (req, res, next) {
    model.find({}, function (err, objects) {
        if (err) return res.send(err);
        return res.json(objects);
    });
});


// Get User by ID
router.get(routeIdentifier + '/get/:id', function (req, res, next) {
    model.findOne({
        '_id': req.params.id,
    }, function (err, entry) {
        if (err) return res.send(err);
        return res.json(entry);
    });
})

// Update User
router.post(routeIdentifier + '/update/:id', function (req, res, next) {
    var query = {'_id': req.params.id};
    
    model.findOneAndUpdate(query, req.body, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send({
            status: true,
            message: 'User updated!'
        });
    });
})





module.exports = router;