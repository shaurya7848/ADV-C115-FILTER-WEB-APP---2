function reload()
{

}

function draw()
{
image(video,0,0,300,300);
}

function setup()
{
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('poses',gotPoses);
}

function modelLoaded()
{
    console.log('posenet is intialized');
}

function gotPoses()
{
if(results.lenght > 0 )
{
console.log(results);
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
}
}

function take_snapshot()
{
    save("filteredimage.png");
}