
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const engine  = require('ejs-mate');
const cors = require('cors');
const app = express();


 
// database
require('./database');



//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({origin: 'http://localhost:4200'}));

// static files
app.use(express.static(path.join(__dirname, 'views')));


const routes = require('./routes/player.routes');

  
// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
    