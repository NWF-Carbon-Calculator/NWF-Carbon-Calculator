
// JavaScript Equivalent
// let btnElectricity = document.getElementById('btn_electricity');

// btnElectricity.addEventListener('click', function(){
//     let containElectricity = document.getElementById('container_electricity');
//     if (containElectricity.style.display === "none") {
//         containElectricity.style.display = "block"
//     } else {
//         containElectricity.style.display = "none";
//     }

// })

// Quick JQuery
// $('#container_transportation').insertAfter('#startDiv');
// $('#container_transportation').toggle();

$('#btn_welcome').click(function () {
    $('#container_welcome').insertAfter('#startDiv');
    $('#container_welcome').toggle();
})

$('#btn_electricity').click(function () {
    $('#container_electricity').insertAfter('#startDiv');
    $('#container_electricity').toggle();
})

$('#btn_record-data').click(function () {
    $('#container_record-data').insertAfter('#startDiv');
    $('#container_record-data').toggle();
})

$('#btn_summary').click(function () {
    $('#container_summary').insertAfter('#startDiv');
    $('#container_summary').toggle();
})

$('#btn_methodology').click(function () {
    $('#container_methodology').insertAfter('#startDiv');
    $('#container_methodology').toggle();
})

$('#btn_transportation').click(function () {
    $('#container_transportation').insertAfter('#startDiv');
    $('#container_transportation').toggle();
})

// *****Classroom Lighting Content Calculations*****
var numberOfRows = 1;

// Add new row to lighting table
$('#btn_add_row').click(function () {
    numberOfRows++;
    var row = createRowHTML(numberOfRows);
    $("#table_light tbody").append(row);
})

function createRowHTML(counter) {
    var stringHTML = "<tr><td scope='row'>"+counter+"</td>";
    stringHTML += "<td><input type='text' id='number_switches"+counter+"'></td>";
    stringHTML += "<td><input type='text' id='watts_bulb"+counter+"'></td>";
    stringHTML += "<td><input type='text' id='before_option"+counter+"'></td>";
    stringHTML += "<td><input type='text' id='after_option"+counter+"'></td></tr>";
    return stringHTML;
}

// *****Transportation Content Calculations*****
const TRANSPORTATIONINPUTS = 14;

// Calculate carbon impact from user inputs
$('#btn_calculate_transportation').click(function () {

    var gallonsBurnedBeforeAction = 0;
    var gallonsBurnedAfterAction = 0;
    var weeklyCarbonEmitted = 0;
    var distanceTraveled = $('#transportation_input1').val();
    var daysDriven = $('#transportation_input3').val();
    var mpg = $('#transportation_input5').val();
    var daysCarpool = $('#transportation_input7').val();
    var mpgCarpool = $('#transportation_input9').val();
    var peopleInCarpool = $('#transportation_input11').val();
    
    gallonsBurnedBeforeAction = gallonsBurned(distanceTraveled,daysDriven,mpg);
    $('#transportation_results1').text(gallonsBurnedBeforeAction);
    weeklyCarbonEmitted = weeklyCarbonDrivingAlone(gallonsBurnedBeforeAction);
    $('#transportation_results3').text(weeklyCarbonEmitted);
    
    distanceTraveled = $('#transportation_input2').val();
    daysDriven = $('#transportation_input4').val();
    mpg = $('#transportation_input6').val();

    gallonsBurnedAfterAction = gallonsBurned(distanceTraveled,daysDriven,mpg);
    $('#transportation_results2').text(gallonsBurnedAfterAction);
    weeklyCarbonEmitted = weeklyCarbonDrivingAlone(gallonsBurnedAfterAction);
    $('#transportation_results4').text(weeklyCarbonEmitted);

    distanceTraveled = $('#transportation_input1').val();
    gallonsBurnedBeforeAction = gallonsBurned(distanceTraveled,daysCarpool,mpgCarpool);
    $('#transportation_results5').text(gallonsBurnedBeforeAction);
    weeklyCarbonEmitted = weeklyCarbonDrivingCarpool(gallonsBurnedBeforeAction, peopleInCarpool);
    $('#transportation_results7').text(weeklyCarbonEmitted);

    distanceTraveled = $('#transportation_input2').val();
    daysCarpool = $('#transportation_input8').val();
    mpgCarpool = $('#transportation_input10').val();
    peopleInCarpool = $('#transportation_input12').val();
    gallonsBurnedAfterAction = gallonsBurned(distanceTraveled,daysCarpool,mpgCarpool);
    $('#transportation_results6').text(gallonsBurnedAfterAction);
    weeklyCarbonEmitted = weeklyCarbonDrivingCarpool(gallonsBurnedAfterAction, peopleInCarpool);
    $('#transportation_results8').text(weeklyCarbonEmitted);
})

// Clear input values for transportation contents
$('#btn_reset_transportation').click(function () {
    for (let i = 1; i <= TRANSPORTATIONINPUTS; i++) {
        $('#transportation_input' + i).val("");
    }
})

// Automatically add values to debug calculations
$('#transportation_input1').val(3);
$('#transportation_input2').val(3);
$('#transportation_input3').val(4);
$('#transportation_input4').val(3);
$('#transportation_input5').val(22);
$('#transportation_input6').val(33);
$('#transportation_input7').val(4);
$('#transportation_input8').val(5);
$('#transportation_input9').val(23);
$('#transportation_input10').val(34);
$('#transportation_input11').val(2);
$('#transportation_input12').val(3);
$('#transportation_input13').val(1);
$('#transportation_input14').val(1);