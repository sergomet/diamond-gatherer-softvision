const arr = ["Love", "I", "Javascript"];
arr.unshift(...arr.splice(1, 1));
console.log(arr);

const arr2 = ["Paul", 1, false, { name: "Jon Snow" }, [1, 2, 3], null, undefined, function () { console.log('Test') }];
arr2.forEach((item, index) => {
    console.log(index, item, typeof item);
});


class Shape { 
    constructor(canvas, width, height, color, x, y) {
        this.width = width || 60;
        this.height = height || 60;
        this.color = color || 'red';
        this.x = x || 0;
        this.y = y || 0;
        this.canvas = canvas;
    }

    show() {
        let context = this.canvas.getContext('2d');
        context.fillStyle = this.color;
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    generatePosition() {
        this.x = this.getRandomInt(this.canvas.width-this.width);
        this.y = this.getRandomInt(this.canvas.height-this.height);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

}

const button = document.getElementById('button');
const canvas = document.querySelector('canvas');

button.addEventListener('click', () => {
    const square = new Shape(canvas);
    square.generatePosition();
    square.show();
});