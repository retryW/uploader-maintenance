#!/usr/bin/env node
// server.js
// load the things we need
const express = require('express');
const proxy = require('express-http-proxy');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// index page GET
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(1337);
console.log('1337 is the magic port');
