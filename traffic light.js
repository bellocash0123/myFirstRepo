let stopLight = document.getElementById("stop-light");
let readyLight = document.getElementById("ready-light");
let goLight = document.getElementById("go-light");

let startBtn = document.getElementById("start")
let stopBtn = document.getElementById("stop")

goLight.className="circle";

function startEvent() {
   
    stopLight.className="circle color-red";
    setTimeout(function runLight(){
        stopLight.className="circle";
        readyLight.className="circle color-yellow"
    },1000)

    setTimeout(function runLight(){
        readyLight.className="circle";
        goLight.className="circle color-green"
    },2000)
    
}

function stopEvent() {
    goLight.className="circle color-green"
    stopLight.className="circle"
    setTimeout(function endLight() {
        goLight.className="circle";
        readyLight.className="circle color-yellow"
    },1000)

    setTimeout(function endLight(){
        readyLight.className="circle";
        stopLight.className="circle color-red";
    },2000)

}

startBtn.addEventListener("click", startEvent);
stopBtn.addEventListener('click', stopEvent);