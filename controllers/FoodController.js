var modelLocation = '../models/Food'


var util = require('util');
var express = require('express');
var bcrypt = require('bcryptjs');

/**  Model and route setup **/

var model = require(modelLocation).model;
const route = require(modelLocation).route;
const routeIdentifier = util.format('/%s', route);

/** Router setup **/

var router = express.Router();


// Create Food
router.post(routeIdentifier + '/create', function (req, res, next) {

    model.create(req.body, function (err, entry) {
        if (err) return res.send(err);
        return res.json({
            status: true,
            message: 'Food was created!'
        });
    });
});

// List Food
router.get(routeIdentifier + '/list', function (req, res, next) {
    model.find({}, function (err, objects) {
        if (err) return res.send(err);
        return res.json(objects);
    });
});


// Get Food by ID
router.get(routeIdentifier + '/get/:id', function (req, res, next) {
    model.findOne({
        '_id': req.params.id,
    }, function (err, entry) {
        if (err) return res.send(err);
        return res.json(entry);
    });
})

// Update Food
router.post(routeIdentifier + '/update/:id', function (req, res, next) {
    var query = {'_id': req.params.id};

    model.findOneAndUpdate(query, req.body, {upsert: true}, function(err, user) {
        if (err) return res.send(500, {error: err});

        return res.send({
            status: true,
            message: 'Food updated!'
        });
    });
})

 


module.exports = router;