let count = 0
let plusOnePoint = count + 1
let plusTwoPoints = count + 2
let plusThreePoints = count + 3

let homePointsEl = document.getElementById("home_points")
let guestPointsEl = document.getElementById("guest_points")

let guestCount = 0




function homeScore1() {
    count += 1
    homePointsEl.textContent = count


}

function homeScore2() {
    count += 2
    homePointsEl.textContent = count
}


function homeScore3() {
    count += 3
    homePointsEl.textContent = count

}


function textContentTransform() {
    const score = document.getElementById("home_points");

    // Check the current transform style to determine if it is already scaled
    if (score.style.transform === "scale(1.2)") {
        // If it is already scaled, reset it to its original scale
        score.style.transform = "scale(1)";
    } else {
        // Otherwise, scale it up
        score.style.transform = "scale(1.2)";
    }
}

function textContentTransform2() {
    const score2 = document.getElementById("home_points");
   if (score2.style.transform === "rotate(360deg)") {
        score2.style.transform = "rotate(0deg)";

    } else {
        score2.style.transform = "rotate(360deg)"
    }


}

function textContentTransform3() {
    confetti();

}

function guestScore1() {
    guestCount += 1
    guestPointsEl.textContent = guestCount

}

function guestScore2() {
    guestCount += 2
    guestPointsEl.textContent = guestCount
}


function guestScore3() {
    guestCount += 3
    guestPointsEl.textContent = guestCount

}

function textContentTransformGuest() {
    const score = document.getElementById("guest_points");
     // Check the current transform style to determine if it is already scaled
     if (score.style.transform === "scale(1.2)") {
        // If it is already scaled, reset it to its original scale
        score.style.transform = "scale(1)";
    } else {
        // Otherwise, scale it up
        score.style.transform = "scale(1.2)";
    }
}

function textContentTransformGuest2() {
    const scoreGuest2 = document.getElementById("guest_points");
   if (scoreGuest2.style.transform === "rotate(360deg)") {
        scoreGuest2.style.transform = "rotate(0deg)";

    } else {
        scoreGuest2.style.transform = "rotate(360deg)"
    }


}

function textContentTransformGuest3() {
    confetti();

}

function checkScores() {
    // Get the current home and away scores from the HTML elements
    const homeScore = parseInt(document.getElementById("home_points").innerText);
    const awayScore = parseInt(document.getElementById("guest_points").innerText);

    revealVideoIfNeeded(homeScore, awayScore);
}

function revealVideoIfNeeded(homeScore, awayScore) {
    const videoContainer = document.getElementById('video-container');
  
    if (homeScore - awayScore >= 10) {
      videoContainer.style.display = "block"; // Reveal the video container
    } else {
      videoContainer.style.display = "none"; // Hide the video container if condition is not met
    }
}



