function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 10, 10, 600, 460);
    fill("green");
    stroke("blue");
    circle(10, 10, 50);
    circle(600, 10, 50);
    circle(10, 460, 50);
    circle(600, 460, 50);
    ellipse(56, 46, 55, 55);
    rect(30, 20, 55, 55);
}