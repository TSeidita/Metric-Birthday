let birthDate = new Date('12/28/1987');
let currentDate = new Date();
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;

document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
    //take input from form
    birthDate = document.getElementById("birthday").value;
    //convert form string to usable format
    let birthYear = birthDate.substr(0, 4);
    let birthMonth = birthDate.substr(5, 2);
    let birthDay = birthDate.substr(8, 2);
    birthDate = new Date(`${birthMonth}/${birthDay}/${birthYear}`);
    //calculate amount of time from birthday to now
    let timeSince = currentDate - birthDate;
    let days = Math.floor((timeSince / day));
    let hours = Math.floor(((timeSince % day) / hour));
    let minutes = Math.floor(((timeSince % hour) / minute));
    document.getElementById("bdayscript").innerHTML = `Your birthday is ${birthDate}. It's been ${days} days, ${hours} hours, ${minutes} minutes since your birthday.`;
    megaDay("megadayone", 1000, "first");
    megaDay("megadayfive", 5000, "fifth");
    megaDay("megadayten", 10000, "tenth");
    megaDay("megadayfifteen", 15000, "fifteenth");
    megaDay("megadaytwentyfive", 25000, "twenty-fifth");
})

let megaDay = function (metricBDay, dayCount, dayString) {
    let plusOneDay = birthDate.getTime() + (dayCount * day);
    let timeTil = plusOneDay - currentDate;
    if (timeTil <= 0) {
        let dateObject = new Date(plusOneDay);
        let humanDate = dateObject.toLocaleString();
        document.getElementById(metricBDay).innerHTML = `Sadly, you already missed your ${dayString} megaday on ${humanDate}.`;
    } else {
        let days = Math.floor((timeTil / day));
        let hours = Math.floor(((timeTil % day) / hour));
        let minutes = Math.floor(((timeTil % hour) / minute));
        let dateObject = new Date(plusOneDay);
        let humanDate = dateObject.toLocaleString();
        document.getElementById(metricBDay).innerHTML = `You turn ${dayCount} days old on ${humanDate}. That's in ${days} days, ${hours} hours, ${minutes} minutes.`
    }
}