const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const routes = require('./app/routes');
const Player = require('./app/Player');

http.listen(5000, function () {
	console.log('[SERVER STARTED AT PORT 5000]');
});

app.use(express.static(__dirname + '/public'));
app.use('/', routes);

const game = require('./app/Game').start();
console.log('[GAME CREATED]');

io.on('connection', function (socket) {
	console.log('[SOCKET CONNECTED]' + socket.id);

	socket.on('game-join', function (playerName) {
		console.log('[JOIN GAME]');

		const player = new Player(playerName);

		game.join(player);

		console.dir(game);

		// const gameId = 'game-' + socket.id;
		// const players = [new Player()];

		// setInterval(function () {
		// 	const objectsForDraw = [];
		// 	const id = game.id;
		// 	games[id].players.forEach(function (player) {
		// 		objectsForDraw.push(player.forDraw());
		// 	});
		// 	io.to(id).emit('game-loop', objectsForDraw);
		// }, 1000 / 60);

		// games[gameId] = game;
		// console.log('[User joined ' + gameId + '] room');
		// socket.join(gameId);
	});
});

const chatUsers = {};
const games = {};
