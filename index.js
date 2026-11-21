let homeSccore = 0;
let guestScore = 0;

function addHome(points) {
    homeSccore += points
    document.getElementById("home-score").innerText = homeSccore;
}

function addGuest(points) {
    guestScore += points
    document.getElementById("guest-score").innerText = guestScore;
}

