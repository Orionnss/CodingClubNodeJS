const	express = require('express');
const	path = require('path');
const	app = express();
const	PORT = 4242;

app.listen(PORT, function() {
	console.log("Connection has been established.");
});

function index(req, res) {
	res.sendFile(path.join(__dirname + '/pages/index.html'));
}

app.get('/', index);