const express = require('express');
const router = express.Router();

const UserModel = require('../models/User');

// get all users
router.route('/users').get((req, res) => {
    UserModel.find((error, data) => {
        if (error){
            return next(error);
        }else{
            return res.json(data);
        }
    })
});

// add new user
router.route('/users').post((req, res, next) => {
    UserModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// get one user
router.route('/users/:id').get((req, res, next) => {
    UserModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// update user
router.route('/users/:id').put((req, res, next) => {
    UserModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
});

// delete user
router.route('/users/:id').delete((req, res, next) => {
    UserModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

module.exports = router;