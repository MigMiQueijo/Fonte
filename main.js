let noseX = 0;
let noseY = 0;
let colocaladooutamanho = 0;
let posicaoRight = 0;
let posicaoLeft = 0;

function preload() {
    
}
function setup(){
    video = createCapture(VIDEO);
    video.size(380,380);
    canvas = createCanvas(500,500);
    canvas.center();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}
function draw(){
    background("black");
    fill("orange")
    stroke("red")
    textSize(colocaladooutamanho)
    text("O design da Byju's é feio", 20, 200)
}
function modelLoaded() {
    console.log("modelo inicializado(palavra longa hein)");
}
function gotPoses(results){
    if (results.length > 0) {
        noseX = results[0].pose.nose.x 
        noseY = results[0].pose.nose.y
        posicaoLeft = results[0].pose.leftWrist.x
        posicaoRight = results[0].pose.rightWrist.x
        colocaladooutamanho = Math.floor(posicaoLeft - posicaoRight)
    }
}