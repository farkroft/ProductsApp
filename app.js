// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product.route'); // Imports routes for the products
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://fajar:nosalvation1@ds031741.mlab.com:31741/productstutorial';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

var port = 3001;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});