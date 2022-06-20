let hr = document.querySelector(".hr")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")
setInterval(round,1000);
function round(){
    let time = new Date;
    let hrTime = time.getHours();
    let minTime = time.getMinutes();
    let secTime = time.getSeconds();
    // console.log(secTime);

    let rotationSec = 6*secTime;
    let rotationMin = 6*minTime;
    let rotationHr = 30*hrTime + minTime/2;


    sec.style.transform = `rotatez(${rotationSec}deg)`
    min.style.transform = `rotatez(${rotationMin}deg)`
    hr.style.transform = `rotatez(${rotationHr}deg)`
}