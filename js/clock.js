var Seconds=1;
var Minutes=1;
var Hours=1;

function load()
{
    zHour = document.getElementById("Hour");
    zMinute = document.getElementById("Minute");
    zSecond = document.getElementById("Second");
    zHour.style.transform = "rotate(180deg) scale(1.2,1.4)";
    zMinute.style.transform = "rotate(180deg) scale(1,2)";
    zSecond.style.transform = "rotate(180deg) scale(0.5,2)";

    setInterval(Tick, 100);
}

function Tick()
{
    var currentTime = new Date();
    Hours = currentTime.getHours();
    Minutes = currentTime.getMinutes();
    Seconds = currentTime.getSeconds();

    zSecond.style.transform = "rotate("+(6*Seconds+180)+"deg) scale(0.5,2)";
    zMinute.style.transform = "rotate("+(6*Minutes+180+(Seconds / 60 * 6))+"deg) scale(1,2)";
    zHour.style.transform = "rotate("+(30*Hours+180+(Minutes / 60 * 30))+"deg) scale(1.2,1.4)";
}