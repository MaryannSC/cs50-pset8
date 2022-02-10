document.addEventListener('DOMContentLoaded', function() {

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
        let units = "";
        for (let m of measure) {
            if (m.checked) {
                units = m.value;
            }
        }

        let calc = (seconds + 60 * minutes + 3600 * hours) / (distance / 100);

        hours = Math.floor(calc/3600);
        calc = calc % 3600;
        minutes = Math.floor(calc/60);
        seconds = (calc % 60).toFixed(1);

        let time = document.getElementById("time");
        let unit = document.getElementById("unit");

        result.className = "answer-visible";

        if (hours > 0) {
            hours = hours.toString() + ":";
        }
        else {
            hours = "";
        }

        minutes = minutes.toString();
        if (hours !== "") {
            if (parseInt(minutes) < 10) {
                minutes = "0" + minutes;
            }
        }

        if (seconds < 10) {
            seconds = ":0" + seconds.toString();
        }
        else {
            seconds = ":" + seconds.toString();
        }

        time.innerHTML = hours + minutes + seconds;
        unit.innerHTML = units;

    });

});


