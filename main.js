song="";
function preload(){
    song=loadSound("x-mas song.mp3");
}
function setup(){   
    canvas=createCanvas(550,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(550,500);
    video.hide(); 
}
function draw(){
    image(video,0,0,550,500);
}
function play(){
    song.play();
}