const express = require('express');
const session = require('express-session');
const app = express();
// const db = require("./oldfiles/models/dex");
const bodyParser= require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');
const path = require('path');

//DB comnection

// require("./database/connection");
// const { Sequelize } = require("sequelize");



const indexRoutes = require("./routes/index");

const port = process.env.PORT || 5000;



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



// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

