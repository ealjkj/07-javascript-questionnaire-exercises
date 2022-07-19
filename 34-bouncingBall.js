const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let fps = 300; 
const scale = 25;

setInterval(() => {
    requestAnimationFrame(draw);
}, 1000/fps)

class Ball {
    constructor(height, radius, color = 'purple') {
        this.x = canvas.width/2;
        this.height = height;
        this.r = radius;
        this.color = color;

        this.vel = 0;
        this.acc = -386.0885; // gravity in In/s^2
        this.bounceCount = 0;
    }

    display() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, canvas.height - this.r*scale -this.height*scale , this.r*scale, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        this.vel += this.acc/fps;
        this.height =Math.max(this.height + this.vel/fps, 0);
    }

    collidesWithFloor() {
        return this.height <= 0;
    }

    set nextMaxHeight(expectedHeight) {
        this.vel = Math.sqrt(-initialHeight*this.acc*2)*Math.sqrt(expectedHeight/initialHeight);
    }
}

// velocity becomes zero at -v0 / g;
// Then: expectedHeight = v0*t + gt^2/2
// expectedHeight = v0*(-v0/g) + v0^2/2g = v0^2(-1/g + 2/g) = v0^2/g
// v0 = sqrt(eh*g)

const initialHeight = 10; // In
const ballRadius = 1.5; // In
const ball = new Ball(initialHeight, ballRadius);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(ball.height);
    if(ball.collidesWithFloor()) {
        ball.height = 0.00001;
        ball.bounceCount += 1;
        ball.nextMaxHeight = Math.max(0, initialHeight-ball.bounceCount);
    }

    if(ball.bounceCount < 11) {
        ball.update();
    }
    ball.display();
    drawLines();
}


function drawLines() {
    for(let i = 0; i <= initialHeight; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - i*scale);
        ctx.lineTo(canvas.width, canvas.height - i*scale);
        ctx.stroke();
    }
}