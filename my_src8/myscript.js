// document.addEventListener('DOMContentLoaded', function() {

    console.log("Connected!");

    let form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        // prevent form from automatically realoading once submitted
        event.preventDefault();

        let hours = parseInt(document.getElementById("hours").value);
        let minutes = parseInt(document.getElementById("minutes").value);
        let seconds = parseInt(document.getElementById("seconds").value);
        let distance = parseInt(document.getElementById("distance").value);
        let result = document.getElementById("result");

        let measure = document.getElementsByName("measure");
        let units;
        for (let m of measure) {
            if (m.checked) {
                units = m.value;
            }
        }

        console.log("units = " + units);
        console.log('hours: ' + hours);
        console.log('minutes: ' + minutes);
        console.log('seconds: ' + seconds);
        console.log('distance: ' + distance);

        let calc = (seconds + 60 * minutes + 3600 * hours) / (distance / 100);
        console.log('pace: ' + calc + " seconds per 100");

        hours = Math.floor(calc/3600);
        console.log("Pace hours = " + hours);
        calc = calc % 3600;
        console.log("remainder = " + calc);
        minutes = Math.floor(calc/60);
        console.log("Pace minutes = " + minutes);
        seconds = Math.floor(calc % 60);
        console.log("Pace seconds = " + seconds);

        let hr = document.getElementById("hr");
        let min = document.getElementById("min");
        let sec = document.getElementById("sec");
        let unit = document.getElementById("unit");

        result.className = "answer-visible";
        hr.innerHTML = hours;
        minutes = minutes.toString();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        min.innerHTML = minutes;

        seconds = seconds.toString();
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        sec.innerHTML = seconds;
        unit.innerHTML = units;

    });

// });


