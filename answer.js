// Question 1: Value Detective
function describeValue(value) {
    let type = typeof value;
    // Using a ternary operator to easily check truthy/falsy
    let truthiness = value ? "truthy" : "falsy";
    
    return `${type} | ${truthiness}`;
}

// Question 2: Bangladesh Weekend Machine
function getDayType(day) {
    // Convert to lowercase to handle any letter case input
    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}

// Question 3: Username Gatekeeper
function validateUsername(username) {
    // The order of these if/else statements matters exactly as the instructions noted
    if (username.length < 4) {
        return "Too Short";
    } else if (username.includes(" ")) {
        return "No Space Allowed";
    } else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available";
    }
}

// Question 4: Dhaka CNG Fare Meter
// Adding default parameters for isNight and waitingMinutes
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50; // Minimum fare covering the first 2 km
    
    if (distance > 2) {
        fare += (distance - 2) * 15; // 15 taka for every km after the first 2
    }
    
    fare += waitingMinutes * 2; // Waiting charge
    
    if (isNight) {
        fare += fare * 0.20; // Adds 20% to the total fare
    }
    
    return fare;
}

// Question 5: Run Chase Commentator
// Written specifically as an arrow function as requested
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
    
    if (runsNeeded <= 0) {
        return "Won";
    } else if (ballsLeft <= 0) {
        return "Lost";
    }
    
    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict;
    
    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }
    
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};