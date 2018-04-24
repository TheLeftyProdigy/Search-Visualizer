let img =[];

function preload()
{
    img[0] = loadImage('assets/pens/PenAsset 1.png');
    img[1] = loadImage('assets/pens/PenAsset 2.png');
    img[2] = loadImage('assets/pens/PenAsset 3.png');
    img[3] = loadImage('assets/pens/PenAsset 4.png');
    img[4] = loadImage('assets/pens/PenAsset 5.png');
    img[5] = loadImage('assets/pens/PenAsset 6.png');
    img[6] = loadImage('assets/pens/PenAsset 7.png');
    img[7] = loadImage('assets/pens/PenAsset 8.png');
    img[8] = loadImage('assets/pens/PenAsset 9.png');
    img[9] = loadImage('assets/pens/PenAsset 10.png');
    img[10] = loadImage('assets/pens/PenAsset 11.png');
    img[11] = loadImage('assets/pens/PenAsset 12.png');
    img[12] = loadImage('assets/pens/PenAsset 13.png');
    img[13] = loadImage('assets/pens/PenAsset 14.png');
    img[14] = loadImage('assets/pens/PenAsset 15.png');
    img[15] = loadImage('assets/pens/PenAsset 16.png');
}

function setup() {
    let canvas = createCanvas(1150, 500);
    canvas.parent('sketch-holder');

    let i;
    for (i = 0; i < img.length; i++) {
        img[i].loadPixels();
    }



}

function draw() {
    let x;
    i = 0;
    for(x=0;x<1150;x=x+70)
    {
        if(i<=15)
        {
            image(img[i],x,150);
        }
        i++;
    }


}