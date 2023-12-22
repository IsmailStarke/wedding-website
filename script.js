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
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the countdown is over, display the message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "TODAY IS THE DAY!";
    }
}, 1000); // Update every 1 second


document.addEventListener('DOMContentLoaded', function () {
    const openNav = document.querySelector('.navbar-toggler');
    const closeNav = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay-menu');

    openNav.addEventListener('click', function () {
        overlay.style.width = '100%';
    });

    closeNav.addEventListener('click', function () {
        overlay.style.width = '0';
    });
});

