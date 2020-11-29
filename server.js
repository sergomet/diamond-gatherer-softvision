const express = require('express');
const { parse } = require('path');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const Game = require('./app/game');
const Player = require('./app/player');

let counter = 0;

http.listen(5000, function () {
	console.log('[SERVER STARTED AT PORT 5000]');
});

app.get('/', function (request, response) {
	response.sendFile(__dirname + '/index.html');
});

app.get('/about', function (request, response) {
	response.sendFile(__dirname + '/about.html');
});

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	console.log('[SOCKET CONNECTED]' + socket.id);

	socket.emit('counter', counter);
	socket.on('counter-add', function () {
		counter++;
		console.log('[COUNTER ADD]', counter);
		io.sockets.emit('counter', counter);
	});

	socket.on('join-chat', function (userName) {
		console.log('[USER JOINED CHAT]', socket.id, userName);
		chatUsers[socket.id] = userName;
		socket.join('chat');
		socket.emit('joined-chat');
		io.to('chat').emit('users_online-chat', Object.keys(chatUsers).length);
		socket.to('chat').emit('enter-chat', `${userName} has joined the chat.`);
	});

	socket.on('send-message', function (message, color) {
		console.log('[USER SENT MESSAGE]', message);
		io.to('chat').emit(
			'new-message',
			`${chatUsers[socket.id]}: <span style="color: ${color}">${message}</span>`
		);
	});

	socket.on('leave-chat', function () {
		console.log('[USER LEFT CHAT]', socket.id);
		let userName = chatUsers[socket.id];
		delete chatUsers[socket.id];
		socket.leave('chat');
		socket.emit('menu');
		io.to('chat').emit('users_online-chat', Object.keys(chatUsers).length);
		io.to('chat').emit('users_online-chat', Object.keys(chatUsers).length);
		socket.to('chat').emit('enter-chat', `${userName} has left the chat.`);
	});

	socket.on('create-game', function (gameName) {
		console.log('[NEW GAME CREATED]');
		const gameId = 'game-' + socket.id;
		const players = [new Player()];
		const game = new Game({
			id: gameId,
			players: players,
		});

		setInterval(function () {
			gameLoop(game.id);
		}, 1000 / 60);

		games[gameId] = game;
		console.log('[User joined ' + gameId + '] room');
		socket.join(gameId);
	});
});

function gameLoop(id) {
	const objectsForDraw = [];
	games[id].players.forEach(function (player) {
		objectsForDraw.push(player.forDraw());
	});
	io.to(id).emit('game-loop', objectsForDraw);
}

const chatUsers = {};
const games = {};
