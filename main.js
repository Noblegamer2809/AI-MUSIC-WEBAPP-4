song1="";
song2 ="";
RightWristX = "";
RightWristY = "";
LeftWrsitX = "";
LeftWristY = "";
SongStatus = "";
scoreLeftWrist = "";
scoreRightWrist = "";
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    



}

function gotPoses(results)
{
    if(results.length > 0)
  {

    RightWristY = results[0].pose.rightWrist.y;
    RightWristX = results[0].pose.rightWrist.x;
    scoreRightWrist =  results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
  }
  if(results.length > 0)
  {

    LeftWristY = results[0].pose.leftWrist.y;
    LeftWristX = results[0].pose.leftWrist.x;
    scoreLeftWrist =  results[0].pose.keypoints[10].score;
    console.log(scoreLeftWrist);
  }
}

function modelLoaded()
{
    console.log("model is initiated");
}
 
function draw()
{
    image(video, 0, 0, 600, 500);
    circle(LeftWrsitX, LeftWristY, 15);
    circle(RightWrsitX, RightWristY, 15);
    if(scoreLeftWrist > 0.2)
    {
      
      circle(LeftWristX, LeftWristY, 20);

      song2.stop
    }
    
    song1_status = song1.isPlaying();
    if(song1_status == false)
    {
      song1.play();
      document.getElementById("song").innerHTML = "song name : song 1";
    }
}

function preload()
[
    song1=loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
]