'use strict';
var express = require('express');
var router = express.Router();

/*=====
 SETUP
======*/

// set up Braintree

router.get('/', function (req, res) {
    res.redirect('index.html');
});

/*==========
 GET TOKEN
===========*/
router.get('/get_token', function (req,res) {
    // generate client token

});

/*===============
 PROCESS PAYMENT
================*/
router.post('/pay', function (req, res) {
    // create a transaction
});

module.exports = router;
