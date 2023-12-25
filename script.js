// Set the date we're counting down to
var weddingDate = new Date("February 25, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var countdown = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the time remaining between now and the wedding date
    var distance = weddingDate - now;

    // Calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var months = Math.floor(days / 30); // Calculate remaining months

    // Display the countdown based on remaining days and months
    if (days === 60) {
        document.getElementById("timer").innerHTML = months + " MONTHS LEFT!!!";
    } else if (days === 30) {
        document.getElementById("timer").innerHTML = "1 MONTH LEFT!";
    } else {
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    }

    // If the countdown is over, display the message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "TODAY IS THE DAY!";
    }
}, 1000); // Update every 1 second

// Rest of your existing code remains unchanged...
