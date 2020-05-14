const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
//index+
router.get('/', function(req, res) {
    res.render('hometwo');
});

router.get('/about', function(req, res) {
    res.render('about');
});


router.get('/contact', function(req, res) {
    res.render('contact');
});

router.get('/gallery', function(req, res) {
    res.render('gallery');
});



module.exports = router; 