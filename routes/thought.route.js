const express = require('express');
const router = express.Router();

const ThoughtModel = require('../models/Thought');

// get all thoughts
router.route('/thoughts').get((req, res) => {
    ThoughtModel.find((error, data) => {
        if (error){
            return next(error);
        }else{
            return res.json(data);
        }
    })
});

// add new user
router.route('/thoughts').post((req, res) => {
    ThoughtModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// get one thought
router.route('/thoughts/:id').get((req, res) => {
    ThoughtModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// update thought
router.route('/thoughts/:id').put((req, res, next) => {
    ThoughtModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
});

// delete thought
router.route('/thoughts/:id').delete((req, res, next) => {
    ThoughtModel.findByIdAndRemove(req.params.id, (error, data) => {
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