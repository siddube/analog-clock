class ClockHand {
    constructor(l, w, type) {
        this.length =l;
        this.width = w;
        this.type = type;
    }

    draw() {
        if(this.type === 'second') {
            push();
            stroke(200, 0, 0);
            strokeWeight(this.width);
            let angle = map(second(), 0, 60, 0, 360);
            rotate(radians(angle));
            line(0, 0, 0, -this.length);
            pop();
        }
        if(this.type === 'minute') {
            push();
            strokeWeight(this.width);
            let angle = map(minute(), 0, 60, 0, 360);
            rotate(radians(angle));
            line(0, 0, 0, -this.length);
            pop();
        }
        if(this.type === 'hour') {
            push();
            strokeWeight(this.width);
            let angle = map(hour(), 0, 12, 0, 360);
            rotate(radians(angle));
            line(0, 0, 0, -this.length);
            pop();
        }
    }
}

let secondHand = new ClockHand(140, 1, 'second');
let minuteHand = new ClockHand(120, 3, 'minute');
let hourHand = new ClockHand(100, 5, 'hour');

function setup() {
    createCanvas(800, 600);
    background(51, 119, 255);
    let div = createDiv(`
    <p class="text">A simple analog clock coded with p5.js</p>
    <p class="text">By Siddube</p>
    `);
}

function draw() {
    background(51, 119, 255);
    translate(width/2, height/2);
    ellipse(0, 0, 360, 360);

    secondHand.draw();
    minuteHand.draw();
    hourHand.draw();

    let hours = 12;
    var hourStep = 360 / hours;
    let mins = 60;
    var minStep = 360 / mins;
    for(let i = 0; i< hours; i++) {
        push();
        rotate(radians(hourStep * i));
        translate(0, - 155);
        line(0, 0, 0, - 25);
        pop();
    }
    for(let i = 0; i< mins; i++) {
        push();
        rotate(radians(minStep * i));
        translate(0, - 175);
        line(0, 0, 0, - 5);
        pop();
    }
}
