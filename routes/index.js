const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const forms = require('../controllers/controllers');

//index+
router.get('/', function(req, res) {
    res.render('new');
});


router.get('/about', function(req, res) {
    res.render('about');
});

router.get("/bookings", function(req,res){
    res.render('bookings');
});

// router.get('/contact', function(req, res) {
//     res.render('contact');
// });

router.get('/gallery', function(req, res) {
    res.render('gallery');
});

// router.post('/contact', forms.create);


module.exports = router; 