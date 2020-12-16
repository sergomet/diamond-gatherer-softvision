const RIGHT_EDGE = 860;
const DOWN_EDGE = 540;
const OFFSET = 50;

class Diamond {
	constructor() {
		this.generatePositionAvoidHome();

		this.imageId = 'diamond';
		this.width = 26;
		this.height = 21;
	}

	forDraw() {
		return {
			imageId: this.imageId,
			drawImageParameters: [this.x, this.y],
		};
	}

	generatePositionAvoidHome() {
		this.generatePosition();

		const homeOffset = 2 * OFFSET;

		if (this.x < homeOffset && this.y < homeOffset) {
			return this.generatePosition();
		}

		if (this.x > DOWN_EDGE - homeOffset && this.y > RIGHT_EDGE - homeOffset) {
			return this.generatePosition();
		}
	}

	generatePosition() {
		this.x = Math.floor(Math.random() * RIGHT_EDGE + OFFSET);
		this.y = Math.floor(Math.random() * DOWN_EDGE + OFFSET);
	}
}

module.exports = Diamond;
