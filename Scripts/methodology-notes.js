//Place to setup the variables needed for calulation of carbon
//Round numbers to two decimal places using .toFixed(2) function

// *****ELECTRICITY*****

// *****CLASSROOM LIGHTING*****


// *****TRANSPORTATION*****
// One gallon of gas generates f(x) lbs of CO2
const GALLONCO2 = 20;

function gallonsBurned (roundtripDistance, daysDriven, mpg) {
    var carbonImpact = 0;
    carbonImpact = roundtripDistance / mpg * daysDriven;
    return carbonImpact.toFixed(2);
}

function weeklyCarbonDrivingAlone (gallonsBurned) {
    var carbonImpact = 0;
    carbonImpact = gallonsBurned * GALLONCO2;
    return carbonImpact.toFixed(2);
}

function weeklyCarbonDrivingCarpool (gallonsBurned, numberOfPeople) {
    var carbonImpact = 0;
    carbonImpact = gallonsBurned * GALLONCO2 / numberOfPeople;
    return carbonImpact.toFixed(2);
}

