class PlayerMovement {
    constructor(x, y, xMax, yMax, step) {
        this.x = x;
        this.y = y;
        this.xNext = x;
        this.yNext = y;
        this.walkStep = step || 10;
        this.xMax = xMax || 270;
        this.yMax = yMax || 120;
    }

    left() {
        this.xNext -= this.walkStep;
    }

    right() {

        this.xNext += this.walkStep;
    }

    down() {
        this.yNext += this.walkStep;
    }

    up() {
        this.yNext -= this.walkStep;
    }

    position() {
        
        this.boundariesCheck();
        return [this.x, this.y];
    }

    boundariesCheck() {

        if (this.xNext < 0 || this.yNext < 0 || this.yNext > this.yMax || this.xNext > this.xMax) {
            alert('Oucchh!');
            this.xNext = this.x;
            this.yNext = this.y;
        } else {
            this.x = this.xNext;
            this.y = this.yNext;
        } 
    }

}

export { PlayerMovement }