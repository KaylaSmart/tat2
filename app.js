const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser= require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

const indexRoutes = require("./routes/index");

const port = process.env.PORT || 5000;

const store = new MongoDBStore({
    uri: 'mongodb://heroku_brhkhvv1:8ui5baeumt1r5vg4j93vq0b651@ds055574.mlab.com:55574/heroku_brhkhvv1',
    collection: 'mySessions',   
    useUnifiedTopology: true 
});


mongoose.connect('mongodb://heroku_brhkhvv1:8ui5baeumt1r5vg4j93vq0b651@ds055574.mlab.com:55574/heroku_brhkhvv1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to DB!');
    }).catch(err => {
         console.log('ERROR', err.message);     
    });

    mongoose.Promise = global.Promise;

    mongoose.set('useCreateIndex', true, );

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(logger('dev'));


app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use('/', indexRoutes );


app.listen(port, ()=>{
    console.log('app listening on port ......5000')
});


//mongodb://heroku_brhkhvv1:8ui5baeumt1r5vg4j93vq0b651@ds055574.mlab.com:55574/heroku_brhkhvv1