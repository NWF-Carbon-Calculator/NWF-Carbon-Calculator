//Place to setup the variables and functions needed for calulation of carbon output
var numberOfStudents = 32;
// *****ELECTRICITY*****

// *****CLASSROOM LIGHTING*****


// *****TRANSPORTATION*****
// One gallon of gas generates f(x) lbs of CO2
const GALLONCO2 = 19.64;

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

//***********OTHER APPLIANCES************
function totalkWHPerDay(wattage, count, action) {
  total = wattage * count * action;
  return total
}

function totalkwHPerYear(action){
  total = action * 180;
  return total;
}

// ****Energy Vampire*****
const HOURSAWAYFROMSCHOOL = 16;
const WATTSPERKW = 1000;
const days = 180;
var total;

function totalkWhConsumedOvernight(numberOfDevice, action) {
    total = numberOfDevice * HOURSAWAYFROMSCHOOL / WATTSPERKW * action;
    return total.toFixed(4);
}

function totalkWhPerSchoolYear(kWhConsumedOvernight) {
    total = kWhConsumedOvernight / days;
    return total.toFixed(4);
}

function totalCO2Per16HrNight(kWhConsumedOvernight, emissionsFactor) {
    total = kWhConsumedOvernight * emissionsFactor;
    return total.toFixed(4);
}

function totalCO2PerSchoolYear(CO2PerNight){
    total = CO2PerNight * 180;
    return total.toFixed(4);
}
