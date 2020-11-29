class Game {
	constructor(options) {
		this.players = [];
		// this.id = options.id;
		// this.players = options.players;
		// this.start();
	}

	join(player) {
		this.players.push(player);
	}

	static start(options) {
		return new Game();
	}

	// start() {
	// 	const that = this;
	// 	setInterval(function () {
	// 		that.gameLoop(that.id);
	// 	}, 1000 / 60);
	// }

	// gameLoop(id) {
	// 	const objectsForDraw = [];
	// 	games[id].players.forEach(function (player) {
	// 		objectsForDraw.push(player.forDraw());
	// 	});
	// 	this.io.to(id).emit('game-loop', objectsForDraw);
	// }
}

module.exports = Game;
