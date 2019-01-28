var express = require('express');
var bodyParser = require('body-parser');

// Import endpoints
var product = require('./routes/product.route');
var picture = require('./routes/picture.route');
var slider = require('./routes/slider.route');
var user = require('./routes/user.route');
var productinvest = require('./routes/productInvest.route')
var prodInvDet = require('./routes/productInvestDetail.route')
var userInv = require('./routes/userInvestor.route')
var investDet = require('./controllers/investorDetail.controller')
var payDet = require('./controllers/paymentDetail.controller')
var app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
// url using matlab
// var dev_db_url = 'mongodb://fajar:nosalvation1@ds031741.mlab.com:31741/productstutorial';
var dev_db_url = 'mongodb://localhost:27017/prod'
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
    useNewUrlParser: true
}).then(() => {
    console.log('Succesfully connected to the database')
}).catch(err => {
    console.log('cannot connect database', err)
    process.exit
})

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', picture);
app.use('/api/v1', product);
app.use('/api/v1', slider);
app.use('/api/v1', user);
app.use('/api/v1', productinvest);
app.use('/api/v1', prodInvDet)
app.use('/api/v1', userInv)
// app.use('/api/v1', investDet)
// app.use('/api/v1', payDet)

var port = 3001;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});