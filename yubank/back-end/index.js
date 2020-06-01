require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
//const router = express.Router();
/*const indexRouter = require('./routes/index');
const configRouter = require('./routes/config');
const profileRouter = require('./routes/profile');
const tasksRouter = require('./routes/tasks');
const categoriesRouter = require('./routes/categories');
const statusesRouter = require('./routes/statuses');
const usersRouter = require('./routes/users');
const scopesRouter = require('./routes/scopes');
*/
const app = express();


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./src/controllers/users.controller.js')(app);

//app.use('/', indexRouter);/*
/*app.use('/profile', profileRouter);
app.use('/config', configRouter);
app.use('/tasks', tasksRouter)
app.use('/categories', categoriesRouter)
app.use('/statuses', statusesRouter)
app.use('/users', usersRouter)
app.use('/scopes', scopesRouter)*/

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function(req, res){
    res.send('Página inicial.');
})

app.listen( process.env.PORT || 8000, function(){
    var message = "Server running on port 8000 / IP to local network access: 192.168.43.194:8000"
    console.log(message);
});
