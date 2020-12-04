//Import packages to project.
const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const register=require('./router/register.js')


const app = express();


//access to public directory
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', 'views');
//To use the pug engine.
app.set('view engine', 'pug');


//middleware for body-parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
//Middleware for the routes
app.use('/', register);


//Connect to Database.
mongoose.connect(
	process.env.dbConnect,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
	(err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Database is connected');
		}
	}
);





//Testing route.
app.get('/test', (req, res) => {
	res.render('register');
});


//Declare variable port and initialize with port.
const port = process.env.port || 3000;
app.listen(port, () => {
	console.log(`server is running on port: ${port}`);
});
