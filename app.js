/**
 *  George
 *  2015/7/19 15:26
 */

var express = require('express');
var app = express();
var port = process.env.PORT || 80;


app.get('/', function (req,res) {
    res.json({success:1});
})


app.listen(port);