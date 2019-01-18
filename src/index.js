const	express = require('express');
const	ejs	= require('ejs');
const	path = require('path');
const	app = express();
const	PORT = 4242;

app.set('view engine', 'ejs');

app.listen(PORT, function() {
	console.log("Connection has been established.");
});

function user(req ,res) {
	const	data = { username: req.params.username };

	res.render('user.ejs', data);
}

function index(req, res) {
	res.sendFile(path.join(__dirname + '../views/index.html'));
}

app.get('/', index);
app.get('/user/:username', user);