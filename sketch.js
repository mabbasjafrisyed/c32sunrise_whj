//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

//var engine, world;
var backgroundImg;

var bg ;

function preload() {
    backgroundImg = loadImage("sunset11.png");
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    //engine = Engine.create();
    //world = engine.world;
}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg) 
        background(backgroundImg);

    //Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    var responseJson = await response.json({"abbreviation":"IST","client_ip":"76.26.154.217","datetime":"2021-05-16T04:00:48.313371+05:30","day_of_week":0,"day_of_year":136,"dst":false,"dst_from":null,"dst_offset":0,"dst_until":null,"raw_offset":19800,"timezone":"Asia/Kolkata","unixtime":1621117848,"utc_datetime":"2021-05-15T22:30:48.313371+00:00","utc_offset":"+05:30","week_number":19});
    var datetime = responseJson.datetime
    // write code slice the datetime
    hour = datetime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }else if(hour>=06 && hour==0){
        bg = "sunrise2.png";
    }else if(hour>=23 && hour==0){
        bg = "sunrise10.png";
    }else if(hour>=0 && hour==03){
        bg = "sunrise11.png";
    }else{
        bg = "sunrise12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
