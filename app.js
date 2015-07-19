/**
 *  George
 *  2015/7/19 14:51
 */

var express = require('express');
var app = express();
var port = process.env.PORT || 80;
var bodyParse = require('body-parse');



app.get('/', function (req,res) {
    res.json({success:1});
})


app.listen(prot);