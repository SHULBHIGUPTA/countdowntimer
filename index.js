var countDownDate = new Date("Nov 7,2022 01:46:35").getTime();

var x = setInterval(function(){
var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance/(1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("day").innerHTML = days;
document.getElementById("hour").innerHTML = hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML = seconds;

if (distance < 0) {
    clearInternal(x);
    document.getElementById("end").innerHTML = "TIME UP";
    document.getElementById("day").innerHTML = '0';
    document.getElementById("hour").innerHTML = '0';
    document.getElementById("minute").innerHTML = '0';
    document.getElementById("second").innerHTML = '0';
}
}, 1000);