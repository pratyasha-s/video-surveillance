status1="";
input="";


function setup(){
    canvas=createCanvas(400,400)
    canvas.center()
    video=createCapture(VIDEO);
    video.hide()

}
function draw(){
  image(video,0,0,400,400)
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status is : detecting objects ";
     input=document.getElementById("inputbox").value;
}
function modelLoaded(){
    console.log(modelLoaded);
    status1=true;
}