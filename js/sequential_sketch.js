let img = [];
let pen_pos = [];
let robotic_arm;
let railing;
let scale = 1.10;
let selected_pen;
let started;
let pos_x;
let found;
let noofpens;
let temp;

function preload() {
    let i;
    for (i = 0; i <= 15; i++) {
        img[i] = loadImage('assets/pens/PenAsset ' + (i + 1) + '.png');
    }
    robotic_arm = loadImage('assets/robotic-arm.png');
    railing = loadImage('assets/railing.png');
}

function setup() {
    let canvas = createCanvas(1090 * scale, 510 * scale);
    canvas.parent('sketch-holder');

    let i;
    for (i = 0; i < img.length; i++) {
        img[i].loadPixels();
    }

    robotic_arm.loadPixels();
    railing.loadPixels();
    pos_x = -100;
    found = 0;
    started = false;
    temp = 0;
    noofpens = 0;

}


function draw() {
    background('#FFF9FB');
    let x;
    let i = 0;
    for (x = 0; x < 1150; x = x + 70) {
        if (i <= 15) {
            image(img[i], x * scale, 150 * scale, img[i].width * scale, img[i].height * scale);
            pen_pos[i] = x * scale - (img[i].width * scale) / 2;
        }
        i++;
    }
    image(railing, 0, 0, (railing.width * scale) / 1.2, (railing.height * scale) / 1.25);

    box_check();

    if (started) {

        image(robotic_arm, pos_x, 25, (robotic_arm.width * scale) / 1.6, (robotic_arm.height * scale) / 1.6);
        //Robotic Arm Movement
        if (!found) {
            pos_x += 1;
            temp++;
        }
        if(temp> (1090 *scale)/16)
        {
            temp = 0;
            noofpens++;
            updatePen();
        }
        //Pen Found!
        if (pos_x === Math.floor(pen_pos[selected_pen]) - 4) {
            found = 1;
            noLoop();
        }



        // if (pos_x > 1085 * scale) {
        //     pos_x = -100;
        // }

    }
}

function updatePen()
{
    let text_no = $('#colored-pen-count');
    text_no.text("Iteration Number: "+noofpens);
}

function reset() {
    setup();
    loop();
    let text_no = $('#colored-pen-count');
    text_no.text("Iteration Number: 0");
}

function box_check() {
    let box0 = $(".c0");
    box0.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });

    let box1 = $(".c1");
    box1.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });

    let box2 = $(".c2");
    box2.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });

    let box3 = $(".c3");
    box3.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });

    let box4 = $(".c4");
    box4.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });
    let box5 = $(".c5");
    box5.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });
    let box6 = $(".c6");
    box6.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });
    let box7 = $(".c7");
    box7.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });
    let box8 = $(".c8");
    box8.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });
    let box9 = $(".c9");
    box9.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });
    let box10 = $(".c10");
    box10.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });
    let box11 = $(".c11");
    box11.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });
    let box12 = $(".c12");
    box12.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });
    let box13 = $(".c13");
    box13.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });
    let box14 = $(".c14");
    box14.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });
    let box15 = $(".c15");
    box15.on('click', function () {
        reset();
        let x = $(this).attr("class");
        x = x.replace(" box", "");
        x = x.replace("c", "");
        selected_pen = int(x);
        started = true;
    });


}


