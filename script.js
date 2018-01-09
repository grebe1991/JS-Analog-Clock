// Save clock hands into variables
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

setInterval(startClock, 1000);

function startClock() {
    // The current Hours, Minutes and Seconds from the date object
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

// Transform each time unit into corresponding degree to be shown on the clock
    let hrPosition = (360 / 12 * hr) + ((min * 360 / 60) / 12);
    let minPosition = (360 / 60 * min) + ((sec * 360 / 60) / 60);
    let secPosition = 360 / 60 * sec;

    HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
    MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;
    SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
}