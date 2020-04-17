//Place to setup the variables and functions needed for calulation of carbon output
const GALLONCO2 = parseFloat($('#GAS_CO2_EQUIVALENT').text());
const AVERAGEMPG = parseFloat($('#AVERAGE_MPG').text());
const YEARLYCARCO2 = parseFloat($('#CO2_PER_CAR').text());
const TREECO2 = parseFloat($('#TREE_CO2').text());
const GASCOST = parseFloat($('#GAS_COST').text());

var numberOfStudents = 1;
// *****ELECTRICITY*****

// *****CLASSROOM LIGHTING*****


// *****TRANSPORTATION*****
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

function calculateTransportationSavings (gasAloneSavings, gasCarpoolSavings) {
    var savings =(gasAloneSavings * 36 + gasCarpoolSavings * 36) * GASCOST;
    return savings.toFixed(2);
}

// *****BOTTLES & CUPS*****
const BOTTLEWEIGHS = 0.04;
const PETREDUCED = 2.17;
const PETRECYCLED = 1.15;
const AVGCOSTBOTTLE = 1.50;
const AVGCOSTBEVCUP = 0.078;
const COPERCUP = 0.25;

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
    return total.toFixed(2);
}

function totalkWhPerSchoolYear(kWhConsumedOvernight) {
    total = kWhConsumedOvernight / days;
    return total.toFixed(2);
}

function totalCO2Per16HrNight(kWhConsumedOvernight, emissionsFactor) {
    total = kWhConsumedOvernight * emissionsFactor;
    return total.toFixed(2);
}

function totalCO2PerSchoolYear(CO2PerNight){
    total = CO2PerNight * 180;
    return total.toFixed(2);
}
