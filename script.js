var day=document.querySelector(".switchD")
var night=document.querySelector(".switchN")
var back=document.querySelector(".back img")
var road=document.querySelector(".road")
var frame=document.querySelector(".frame")
var wheel1=document.querySelector(".wheel1")
var wheel2=document.querySelector(".wheel2")
var body=document.querySelector("body")
var light=document.querySelector(".light")
day.addEventListener("click",function(){
    day.style.display="none";
    light.style.display="block";
    night.style.display="block";
    back.style.content="url('./Assets/nightback.jpg')";
    road.style.filter="brightness(60%)";
    frame.style.filter="brightness(60%)";
    wheel1.style.filter="brightness(60%)";
    wheel2.style.filter="brightness(60%)";
})
night.addEventListener("click",function(){
    day.style.display="block";
    night.style.display="none";
    light.style.display="none";
    back.style.content="url('./Assets/dayback.jpg')";
    road.style.filter="brightness(100%)";
    frame.style.filter="brightness(100%)";
    wheel1.style.filter="brightness(100%)";
    wheel2.style.filter="brightness(100%)";
})
body.addEventListener("keydown", function(event) {
    if (event.keyCode== "40") {
      frame.style.top="36.5"+"vw";
      light.style.top="35.5"+"vw";
      wheel1.style.top="43.5"+"vw";
      wheel2.style.top="43.5"+"vw";
    }
  });
body.addEventListener("keydown", function(event) {
    if (event.keyCode == "38") {
      frame.style.top="29"+"vw";
      light.style.top="28"+"vw";
      wheel1.style.top="36"+"vw";
      wheel2.style.top="36"+"vw";
    }
  });