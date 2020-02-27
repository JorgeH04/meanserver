const path = require('path');
const morgan = require('morgan');
const express = require('express');
const engine  = require('ejs-mate');
const cors = require('cors');
const app = express();

const routes = require('../routes/player.routes');
module.exports = app => {


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
// Routes
routes(app);

// static files
app.use(express.static(path.join(__dirname, 'views')));
  
    return app;
  
  };