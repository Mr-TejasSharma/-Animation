var open=document.querySelector(".open")
var game=document.querySelector(".game")
var day=document.querySelector(".switchD")
var night=document.querySelector(".switchN")
var sun=document.querySelector(".sun")
var moon=document.querySelector(".moon")
var back=document.querySelector(".back img")
var road=document.querySelector(".road")
var frame=document.querySelector(".frame")
var wheel1=document.querySelector(".wheel1")
var wheel2=document.querySelector(".wheel2")
var body=document.querySelector("body")
var light=document.querySelector(".light")
var engine=new Audio("./Assets/Audios/engine.mp3")
var throttle=new Audio("./Assets/Audios/throttle.wav")
var brake=new Audio("./Assets/Audios/brake.mp3")
var drift=new Audio("./Assets/Audios/drift.mp3")
var horn=new Audio("./Assets/Audios/horn.wav")
var start=new Audio("./Assets/Audios/start.mp3")
var music=new Audio("./Assets/Audios/music.mp3")


day.addEventListener("click",function(){
    day.style.display="none";
    night.style.display="block";
    sun.style.display="none";
    moon.style.display="block";
    light.style.display="block";
    back.style.content="url('./Assets/Images/nightback.jpg')";
    road.style.filter="brightness(60%)";
    frame.style.filter="brightness(60%)";
    wheel1.style.filter="brightness(60%)";
    wheel2.style.filter="brightness(60%)";
});


night.addEventListener("click",function(){
    day.style.display="block";
    night.style.display="none";
    sun.style.display="block";
    moon.style.display="none";
    light.style.display="none";
    back.style.content="url('./Assets/Images/dayback.jpg')";
    road.style.filter="brightness(100%)";
    frame.style.filter="brightness(100%)";
    wheel1.style.filter="brightness(100%)";
    wheel2.style.filter="brightness(100%)";
});


body.addEventListener("keydown", function(event) {
  if (event.keyCode== "83") {
    game.style.display="block";
    open.style.display="none";
    frame.style.left="5"+"vw";
    light.style.left="32.5"+"vw";
    wheel1.style.left="7.2"+"vw";
    wheel2.style.left="17"+"vw";
    start.play();
    engine.play();
    engine.loop=true;
  }
});


body.addEventListener("keydown", function(event) {
  if (event.keyCode== "37"&&(parseInt((frame.style.left).split('v')[0])-20)>-20) {
    frame.style.left=`${parseInt((frame.style.left).split('v')[0])-20}vw`;
    light.style.left=`${parseInt((light.style.left).split('v')[0])-20}vw`;
    wheel1.style.left=`${parseInt((wheel1.style.left).split('v')[0])-20}vw`;
    wheel2.style.left=`${parseInt((wheel2.style.left).split('v')[0])-20}vw`;
    brake.play();
  }
});


body.addEventListener("keydown", function(event) {
  if (event.keyCode == "38") {
    if(parseInt((frame.style.top).split('v')[0])>29){
      drift.play();
    }
    frame.style.top="29.5"+"vw";
    light.style.top="28"+"vw";
    wheel1.style.top="36"+"vw";
    wheel2.style.top="36"+"vw";
  }
});


body.addEventListener("keydown", function(event) {
  if (event.keyCode== "39"&&(parseInt((frame.style.left).split('v')[0])+10)<81) {
    frame.style.left=`${parseInt((frame.style.left).split('v')[0])+10}vw`;
    light.style.left=`${parseInt((light.style.left).split('v')[0])+10}vw`;
    wheel1.style.left=`${parseInt((wheel1.style.left).split('v')[0])+10}vw`;
    wheel2.style.left=`${parseInt((wheel2.style.left).split('v')[0])+10}vw`;
    throttle.play();
  }
});


body.addEventListener("keydown", function(event) {
  if (event.keyCode== "40") {
    if(parseInt((frame.style.top).split('v')[0])<37){
      drift.play();
    }
    frame.style.top="37"+"vw";
    light.style.top="35.5"+"vw";
    wheel1.style.top="43.5"+"vw";
    wheel2.style.top="43.5"+"vw";
  }
});


body.addEventListener("keypress", function(event) {
  if (event.key== "h") {
    horn.play();
  }
});


body.addEventListener("keydown", function(event) {
  if (event.keyCode== "77") {
    engine.pause();
    start.pause();
    music.pause();
  }
});


body.addEventListener("keydown", function(event) {
  if (event.keyCode== "80") {
    music.play();
  }
});