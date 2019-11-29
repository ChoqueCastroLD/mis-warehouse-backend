// Load .env Enviroment Variables to process.env
require('mandatoryenv').load([
    'PORT'
]);

// Require dependencies

const http = require('http');
const socketio = require('socket.io');
const express = require('express');
const sharedsession = require("express-socket.io-session");
const session = require("express-session")({
    secret: "my-secret",
    resave: true,
    saveUninitialized: true
});


const { PORT } = process.env;

const app = express();

app.set('trust proxy', 1);
app.use(session);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

const server = http.createServer(app);
const io = socketio(server);

io.use(sharedsession(session, {
    autoSave:true
}));

io.on('connection', require('./events/events'));

// Express
app.use(express.static(__dirname + '/public/static'));
app.use(require('./routes/router'));

// Start

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});