song1="";
song2="";

function setup(){
canvas= createCanvas(600,500);
canvas.center();

video= createCapture(VIDEO);
video.hide();

poseNet= ml5.poseNet(video, modelLoaded);
}

function preload(){
    song1=loadSound("double take audio.mp3");
    song2=loadSound("dandelions.mp3");
}
function draw(){
   image(video,0,0,600,500);
}
function play(){
    song.play();
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}