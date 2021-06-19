const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

const {dbConnection} = require('./database/db');
dbConnection();
const post = require('./routes/post');

app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json);
app.use(cors());

app.use('/', post);

app.use(function(req, res, next) {
    next(createError(404));
  });
  
app.use(function(err, req, res, next) {
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};
  
res.status(err.status || 500);
  });
  
  
app.listen(port, ()=>{
    console.log("Escuchando en puerto", + port)
})