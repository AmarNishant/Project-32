const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var time = 0;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    

    Engine.update(engine);

    // write code to display time in correct format here
    noStroke();
    textSize(35)
    fill("white")
    if(time === 0){
        text("Time : 12 PM", 100, 50);
    }
    if(time === 1){
        text("Time : " + time + " PM", 100, 50);
    }
    if(time === 2){
        text("Time : " + time + " PM", 100, 50);
    }
    if(time === 3){
        text("Time : " + time + " PM", 100, 50);
    }
    if(time === 4){
        text("Time : " + time + " PM", 100, 50);
    }
    if(time === 5){
        text("Time : " + time + " PM", 100, 50);
    }
    if(time === 6){
        text("Time : " + time + " PM", 100, 50);
    }
    if(time === 7){
        text("Time : " + time + " PM", 100, 50);
    }
    if(time === 8){
        text("Time : " + time + " PM", 100, 50);
    }
    if(time === 9){
        text("Time : " + time + " PM", 100, 50);
    }
    if(time === 10){
        text("Time : " + time + " PM", 100, 50);
    }
    if(time === 11){
        text("Time : " + time + " PM", 100, 50);
    }
    if(time === 12){
        text("Time : " + time + " AM", 100, 50);
    }
    if(time === -1){
        text("Time : " + time + " AM", 100, 50);
    }
    if(time === -2){
        text("Time : " + time + " AM", 100, 50);
    }
    if(time === -3){
        text("Time : " + time + " AM", 100, 50);
    }
    if(time === -4){
        text("Time : " + time + " AM", 100, 50);
    }
    if(time === -5){
        text("Time : " + time + " AM", 100, 50);
    }
    if(time === -6){
        text("Time : " + time + " AM", 100, 50);
    }
    if(time === -7){
        text("Time : " + time + " AM", 100, 50);
    }
    if(time === -8){
        text("Time : " + time + " AM", 100, 50);
    }
    if(time === -9){
        text("Time : " + time + " AM", 100, 50);
    }
    if(time === -10){
        text("Time : " + time + " AM", 100, 50);
    }
    if(time === -11){
        text("Time : " + time + " AM", 100, 50);
    }

}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    // console.log(datetime);
    
    if(hour>=04 && hour<06){
        bg = "sunrise1.png";
    } else if(hour>=06 && hour<08){
        bg = "sunrise2.png";
    } else if(hour>=08 && hour<10) {
        bg = "sunrise3.png";
    } else if(hour>=10 && hour<12) {
        bg = "sunrise4.png";
    } else if(hour>=12 && hour<14) {
        bg = "sunrise5.png";
    } else if(hour>=14 && hour<16) {
        bg = "sunrise6.png";
    } else if(hour>=16 && hour<18) {
        bg = "sunset7.png";
    } else if(hour>=18 && hour<20) {
        bg = "sunset8.png";
    } else if(hour>=20 && hour<22) {
        bg = "sunset9.png";
    } else if(hour>=22 && hour<24) {
        bg = "sunset10.png";
    } else if(hour>=24 && hour<02) {
        bg = "sunset11.png";
    } else if(hour>=02 && hour<04) {
        bg = "sunset12.png";
    }

    time = hour - 12;
    
    backgroundImg = loadImage(bg);
    console.log(bg);
    console.log(backgroundImg);
    console.log(time);
}