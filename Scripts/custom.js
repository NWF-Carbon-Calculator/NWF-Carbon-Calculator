//Button logic to hide and show content-containers
$('#btn_welcome').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_welcome').insertAfter('#startDiv');
  $('#container_welcome').show();
})
$('#btn_electricity').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_electricity').insertAfter('#startDiv');
  $('#container_electricity').show();
})
$('#btn_appliance').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_appliance').insertAfter('#startDiv');
  $('#container_appliance').show();
})
$('#btn_vampire').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_vampire').insertAfter('#startDiv');
  $('#container_vampire').show();
})
$('#btn_record-data').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_record-data').insertAfter('#startDiv');
  $('#container_record-data').show();
})
$('#btn_transportation').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_transportation').insertAfter('#startDiv');
  $('#container_transportation').show();
})
$('#btn_trash').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_trash').insertAfter('#startDiv');
  $('#container_trash').show();
})
$('#btn_paper').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_paper').insertAfter('#startDiv');
  $('#container_paper').show();
})
$('#btn_bottles').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_bottles').insertAfter('#startDiv');
  $('#container_bottles').show();
})
$('#btn_cups').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_cups').insertAfter('#startDiv');
  $('#container_cups').show();
})
$('#btn_summary').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_summary').insertAfter('#startDiv');
  $('#container_summary').show();
  // Needs to draw the chart after unhiding div otherwise will not display correctly
  drawChart();
})
$('#btn_methodology').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_methodology').insertAfter('#startDiv');
  $('#container_methodology').show();
})

// Updates the number of students when the value changes in the input
$('#NUMBER_OF_STUDENTS').change(function () {
  numberOfStudents = $('#NUMBER_OF_STUDENTS').val();
  $('#numberOfStudents').text($('#NUMBER_OF_STUDENTS').val());
  reCalculateSummary();
})

// *****Electricity Content Calculations*****
// Calculate and display Electricity Emission Factor (EEF)
$('#btn_calculate_EEF').click(function () {

  //get the value of the factors to be used in calculations
  var coal_factor = document.getElementById("coal_factor").innerHTML;
  var coal_percent = parseFloat(document.getElementById("coal_percent").innerHTML) / 100;
  var oil_factor = document.getElementById("oil_factor").innerHTML;
  var oil_percent = parseFloat(document.getElementById("oil_percent").innerHTML) / 100;
  var nat_gas_factor = document.getElementById("nat_gas_factor").innerHTML;
  var nat_gas_percent = parseFloat(document.getElementById("nat_gas_percent").innerHTML) / 100;

  //Is radio button for national average checked
  if (document.getElementById('national_average').checked) {
    //Calculate the national average EEF
    var EEF = coal_factor * coal_percent + oil_factor * oil_percent + nat_gas_factor * nat_gas_percent;

    //set text of EEF to national average
    document.getElementById("national_average_factor").innerHTML = EEF;
    document.getElementById("national_average_factor").value = EEF.toFixed(2);

    //Is radio button for custom average checked
  } else if (document.getElementById('custom_average').checked) {

    //get the custom values
    var coal_percent = document.getElementById("custom_coal_percent").value / 100;
    var oil_percent = document.getElementById("custom_oil_percent").value / 100;
    var nat_gas_percent = document.getElementById("custom_nat_gas_percent").value / 100;

    //Calculate the custom EEF
    var custom_EEF = coal_factor * coal_percent + oil_factor * oil_percent + nat_gas_factor * nat_gas_percent;

    //set text of EEF to custom value
    document.getElementById("custom_factor").value = custom_EEF.toFixed(2);
  }
})

//*************OTHER APPLIANCES*****************
var numberOfRows = 1;

// Add new row to lighting table
$('#btn_add_row').click(function () {
  numberOfRows++;
  var row = createRowHTML(numberOfRows);
  $("#table_light tbody").append(row);
})

let lineNo = 2;
$("#appliance_btn_add_row").click(function () {
  markup = "<tr><td><input type='text' id='appliance_type" + lineNo + "'</td>" +
    "<td><input type='text' id='appliance_wattage" + lineNo + "'</td>" +
    "<td><input type='text' id='appliance_count" + lineNo + "'</td>" +
    "<td><input type='text' id='appliance_before_option" + lineNo + "'</td>" +
    "<td><input type='text' id='appliance_after_option" + lineNo + "'</td></tr>";

    result_markup = "<tr><td><span id='appliance" + lineNo + "'></span></td>" +
    "<td><span id='appliance_before_per_day" + lineNo + "'></span></td>" +
    "<td><span id='appliance_after_per_day" + lineNo + "'></span></td>" +
    "<td><span id='appliance_before_per_year" + lineNo + "'></span></td>" +
    "<td><span id='appliance_after_per_year" + lineNo + "'></span></td>" +
    "<td><span id='appliance_before_CO2_per_day" + lineNo + "'></span></td>" +
    "<td><span id='appliance_after_CO2_per_day" + lineNo + "'></span></td>" +
    "<td><span id='appliance_before_CO2_per_year" + lineNo + "'></span></td>" +
    "<td><span id='appliance_after_CO2_per_year" + lineNo + "'></span></td></tr>";

    tableBody = $("#table_appliance tbody");
    tableBody.append(markup);
    tableBody2 = $("#table_appliance_results tbody");
    tableBody2.append(result_markup);
    lineNo++;
});

function calcAppliance() {
    var before_appliance_result_day = 0;
    var before_appliance_result_year = 0;
    var after_appliance_result_day = 0;
    var after_appliance_result_year = 0;
    var emissionsFactor = 1.2;
    var rowCount = $('#table_appliance >tbody >tr').length;
    appliance_total = [];
    console.log("row count " + rowCount);

    for (i = 1; i < rowCount; i++) {
        var device = $('#appliance_type' + i).val();
        console.log(device);
        var wattage = parseInt($('#appliance_wattage' + i).val());
        console.log(wattage);
        var count = parseInt($('#appliance_count' + i).val());
        var before_hours = parseInt($('#appliance_before_option' + i).val());
        var after_hours = parseInt($('#appliance_after_option' + i).val());

        var totalPerDayBefore = totalkWHPerDay(wattage, count, before_hours);
        console.log(totalPerDayBefore);
        var totalPerYearBefore = totalkwHPerYear(totalPerDayBefore);
        var totalCO2PerDayBefore = totalCO2Per16HrNight(totalPerDayBefore, emissionsFactor);
        var totalCO2PerYearBefore = totalCO2PerSchoolYear(totalCO2PerDayBefore);

        var totalPerDayAfter = totalkWHPerDay(wattage, count, after_hours);
        var totalPerYearAfter = totalkwHPerYear(totalPerDayAfter);
        var totalCO2PerDayAfter = totalCO2Per16HrNight(totalPerDayAfter, emissionsFactor);
        var totalCO2PerYearAfter = totalCO2PerSchoolYear(totalCO2PerDayAfter);

        $('#appliance' + i).text(device);
        $('#appliance_before_per_day' + i).text(totalPerDayBefore);
        $('#appliance_after_per_day' + i).text(totalPerDayAfter);
        $('#appliance_before_per_year' + i).text(totalPerYearBefore);
        $('#appliance_after_per_year' + i).text(totalPerYearAfter);
        $('#appliance_before_CO2_per_day' + i).text(totalCO2PerDayBefore);
        $('#appliance_after_CO2_per_day' + i).text(totalCO2PerDayAfter);
        $('#appliance_before_CO2_per_year' + i).text(totalCO2PerYearBefore);
        $('#appliance_after_CO2_per_year' + i).text(totalCO2PerYearAfter);

        before_appliance_result_day += parseInt(totalCO2PerDayBefore);
        before_appliance_result_year += parseInt(totalCO2PerYearBefore);

        after_appliance_result_day += parseInt(totalCO2PerDayAfter);
        after_appliance_result_year += parseInt(totalCO2PerYearAfter);

        var total_appliance_result_day = before_appliance_result_day - after_appliance_result_day;
        var total_appliance_result_year = before_appliance_result_year - after_appliance_result_year;
  //set totals
        $('#before_appliance_result_day').text(before_appliance_result_day);
        $('#before_appliance_result_year').text(before_appliance_result_year);

        $('#after_appliance_result_day').text(after_appliance_result_day);
        $('#after_appliance_result_year').text(after_appliance_result_year);

        $('#total_appliance_result_day').text(total_appliance_result_day);
        $('#total_appliance_result_year').text(total_appliance_result_year);
    }
    appliance_total.push(before_appliance_result_day, after_appliance_result_day);
    return appliance_total;
}
var before_appliance;
var after_appliance;

$('#btn_calculate_appliance').click(function () {
    var appliance_total = calcAppliance();
    before_appliance = appliance_total[0];
    after_appliance = appliance_total[1];

    /*$('#sumOtherBefore').text(before_appliance_result_day);
    $('#sumOtherAfter').text(after_appliance_result_day);
    $('#sumOtherSavings').text(total_appliance_result_day);
    reCalculateSummary(); */
})

$('#appliance_type1').val("Computer");
$('#appliance_wattage1').val(120);
$('#appliance_count1').val(1);
$('#appliance_before_option1').val(2);
$('#appliance_after_option1').val(2);


//***********ENERGY VAMPIRE**************
//device count - set #s for calculations
$('#vampire_count_1').val(1);
$('#vampire_count_2').val(1);
$('#vampire_count_3').val(3);
$('#vampire_count_4').val(1);
$('#vampire_count_5').val(2);
$('#vampire_count_6').val(4);
$('#vampire_count_7').val(6);
$('#vampire_count_8').val(4);
$('#vampire_count_9').val(1);
$('#vampire_count_10').val(7);
$('#vampire_count_11').val(2);

function calcVampire() {
    const VAMPIREINPUTS = 11;
    var total = 0;
    var emissionsFactor = 1.2;
    var before_result_day = 0;
    var before_result_year = 0;
    var after_result_day = 0;
    var after_result_year = 0;
    var total_result_day = 0;
    var total_result_year = 0;
    vampire_outputs = [];

      for (i = 1; i <= VAMPIREINPUTS; i++) {
        var device = $('#vampire_device_' + i).text();
        var numberOfDevice = $('#vampire_count_' + i).val();
        var before_action = $('#vampire_before_' + i + ' option:selected').text();
        var after_action = $('#vampire_after_' + i + ' option:selected').text();

        if (device === "Desktop Computer") {
          if (before_action === "Off") {
            b_action = 1;
          } else if (before_action === "Active") {
            b_action = 120;
          } else {
            b_action = 0;
          }

          if (after_action === "Off") {
            a_action = 1;
          } else if (after_action === "Active") {
            a_action = 120;
          } else {
            a_action = 0;
          }
        }

        if (device === "Laptop") {
          if (before_action === "Off") {
            b_action = 1;
          } else if (before_action === "Active") {
            b_action = 60;
          } else {
            b_action = 0;
          }

          if (after_action === "Off") {
            a_action = 1;
          } else if (after_action === "Active") {
            a_action = 60;
          } else {
            a_action = 0;
          }
        }

        if (device === "Tablet") {
          if (before_action === "Off") {
            b_action = 0.5;
          } else if (before_action === "Active") {
            b_action = 15;
          } else {
            b_action = 0;
          }

          if (after_action === "Off") {
            a_action = 0.5;
          } else if (after_action === "Active") {
            a_action = 120;
          } else {
            a_action = 0;
          }
        }

        if (device === "Flat Screen Monitor (LCD)") {
          if (before_action === "Off") {
            b_action = 1;
          } else if (before_action === "Active") {
            b_action = 28;
          } else {
            b_action = 0;
          }

          if (after_action === "Off") {
            a_action = 1;
          } else if (after_action === "Active") {
            a_action = 28;
          } else {
            a_action = 0;
          }
        }

        if (device === "Multi-Function Printer/Scanner/Copier") {
          if (before_action === "Off") {
            b_action = 0.1;
          } else if (before_action === "Active") {
            b_action = 300;
          } else {
            b_action = 0;
          }

          if (after_action === "Off") {
            a_action = 0.1;
          } else if (after_action === "Active") {
            a_action = 300;
          } else {
            a_action = 0;
          }
        }

        if (device === "Speakers") {
          if (before_action === "Off") {
            b_action = 0;
          } else if (before_action === "Active") {
            b_action = 8;
          } else {
            b_action = 0;
          }

          if (after_action === "Off") {
            a_action = 0;
          } else if (after_action === "Active") {
            a_action = 8;
          } else {
            a_action = 0;
          }
        }

        if (device === "SMART Board") {
          if (before_action === "Off") {
            b_action = 1;
          } else if (before_action === "Active") {
            b_action = 175;
          } else {
            b_action = 0;
          }

          if (after_action === "Off") {
            a_action = 1;
          } else if (after_action === "Active") {
            a_action = 175;
          } else {
            a_action = 0;
          }
        }

        if (device === "Projector") {
          if (before_action === "Off") {
            b_action = 1;
          } else if (before_action === "Active") {
            b_action = 340;
          } else {
            b_action = 0;
          }

          if (after_action === "Off") {
            a_action = 1;
          } else if (after_action === "Active") {
            a_action = 340;
          } else {
            a_action = 0;
          }
        }

        if (device === "Coffee Maker") {
          if (before_action === "Off") {
            b_action = 2;
          } else if (before_action === "Active") {
            b_action = 1150;
          } else {
            b_action = 0;

          }

          if (after_action === "Off") {
            a_action = 2;
          } else if (after_action === "Active") {
            a_action = 1150;
          } else {
            a_action = 0;
          }
        }

        if (device === "Personal Microwave") {
          if (before_action === "Off") {
            b_action = 4;
          } else if (before_action === "Active") {
            b_action = 175;
          } else {
            b_action = 0;
          }

          if (after_action === "Off") {
            a_action = 4;
          } else if (after_action === "Active") {
            a_action = 175;
          } else {
            a_action = 0;
          }
        }

        if (device === "Personal Mini-Refrigerator") {
          if (before_action === "Off") {
            b_action = 0;
          } else if (before_action === "Active") {
            b_action = 278;
          } else {
            b_action = 0;
          }

          if (after_action === "Off") {
            a_action = 0;
          } else if (after_action === "Active") {
            a_action = 278;
          } else {
            a_action = 0;
          }
        }

        // calculations before
        before_totalOvernight = totalkWhConsumedOvernight(numberOfDevice, b_action);
        before_totalkWhPerYear = totalkWhPerSchoolYear(before_totalOvernight);
        before_totalCO2PerNight = totalCO2Per16HrNight(before_totalOvernight, emissionsFactor);
        before_totalCO2PerYear = totalCO2PerSchoolYear(before_totalCO2PerNight);

        after_totalOvernight = totalkWhConsumedOvernight(numberOfDevice, a_action);
        after_totalkWhPerYear = totalkWhPerSchoolYear(after_totalOvernight);
        after_totalCO2PerNight = totalCO2Per16HrNight(after_totalOvernight, emissionsFactor);
        after_totalCO2PerYear = totalCO2PerSchoolYear(after_totalCO2PerNight);
        //set calculations
        $('#vampire_before_kWhPerDay_' + i).text(before_totalOvernight);
        $('#vampire_after_kWhPerDay_' + i).text(after_totalOvernight);

        $('#vampire_before_kWhPerSchoolYr_' + i).text(before_totalkWhPerYear);
        $('#vampire_after_kWhPerSchoolYr_' + i).text(after_totalkWhPerYear);

        $('#vampire_before_CO2PerDay_' + i).text(before_totalCO2PerNight);
        $('#vampire_after_CO2PerDay_' + i).text(after_totalCO2PerNight);

        $('#vampire_before_CO2PerSchoolYr_' + i).text(before_totalCO2PerYear);
        $('#vampire_after_CO2PerSchoolYr_' + i).text(after_totalCO2PerYear);
        //add up totals
        before_result_day += parseInt(before_totalCO2PerNight);
        before_result_year += parseInt(before_totalCO2PerYear);

        after_result_day += parseInt(after_totalCO2PerNight);
        after_result_year += parseInt(after_totalCO2PerYear);

        total_result_day = before_result_day - after_result_day;
        total_result_year = before_result_year - after_result_year;
        //set totals
        $('#before_result_day').text(before_result_day);
        $('#before_result_year').text(before_result_year);

        $('#after_result_day').text(after_result_day);
        $('#after_result_year').text(after_result_year);

        $('#total_result_day').text(total_result_day);
        $('#total_result_year').text(total_result_year);
    }
    vampire_outputs.push(before_result_day, after_result_day);
    return vampire_outputs;
}
var before_vampire;
var after_vampire;

$('#btn_calculate_vampire').click(function () {
    var total = calcVampire();
    console.log("total " + total);
    before_vampire = total[0];
    after_vampire = total[1];
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
  var stringHTML = "<tr><td scope='row'>" + counter + "</td>";
  stringHTML += "<td><input type='text' id='number_switches" + counter + "'></td>";
  stringHTML += "<td><input type='text' id='watts_bulb" + counter + "'></td>";
  stringHTML += "<td><input type='text' id='before_option" + counter + "'></td>";
  stringHTML += "<td><input type='text' id='after_option" + counter + "'></td></tr>";
  return stringHTML;
}

// *****Transportation Content Calculations*****
const TRANSPORTATIONINPUTS = 14;
const TRANSPORTATIONRESULTS = 16;
var transportationCarbonBefore = 0;
var transportationCarbonAfter = 0;

// Calculate carbon impact from user inputs
$('#btn_calculate_transportation').click(function () {

  var gallonsBurnedBeforeAction = 0;
  var gallonsBurnedAfterAction = 0;
  var weeklyCarbonEmitted = 0;
  var costSavings = 0;
  var distanceTraveled = $('#transportation_input1').val();
  var daysDriven = $('#transportation_input3').val();
  var mpg = $('#transportation_input5').val();
  var daysCarpool = $('#transportation_input7').val();
  var mpgCarpool = $('#transportation_input9').val();
  var peopleInCarpool = $('#transportation_input11').val();

  gallonsBurnedBeforeAction = gallonsBurned(distanceTraveled, daysDriven, mpg);
  $('#transportation_results1').val(gallonsBurnedBeforeAction);
  weeklyCarbonEmitted = weeklyCarbonDrivingAlone(gallonsBurnedBeforeAction);
  $('#transportation_results3').val(weeklyCarbonEmitted);
  transportationCarbonBefore += parseFloat(weeklyCarbonEmitted);

  distanceTraveled = $('#transportation_input2').val();
  daysDriven = $('#transportation_input4').val();
  mpg = $('#transportation_input6').val();

  gallonsBurnedAfterAction = gallonsBurned(distanceTraveled, daysDriven, mpg);
  $('#transportation_results2').val(gallonsBurnedAfterAction);
  weeklyCarbonEmitted = weeklyCarbonDrivingAlone(gallonsBurnedAfterAction);
  $('#transportation_results4').val(weeklyCarbonEmitted);
  transportationCarbonAfter += parseFloat(weeklyCarbonEmitted);

  distanceTraveled = $('#transportation_input1').val();
  gallonsBurnedBeforeAction = gallonsBurned(distanceTraveled, daysCarpool, mpgCarpool);
  $('#transportation_results5').val(gallonsBurnedBeforeAction);
  weeklyCarbonEmitted = weeklyCarbonDrivingCarpool(gallonsBurnedBeforeAction, peopleInCarpool);
  $('#transportation_results7').val(weeklyCarbonEmitted);
  transportationCarbonBefore += parseFloat(weeklyCarbonEmitted);
  $('#transportation_results11').val(transportationCarbonBefore);

  distanceTraveled = $('#transportation_input2').val();
  daysCarpool = $('#transportation_input8').val();
  mpgCarpool = $('#transportation_input10').val();
  peopleInCarpool = $('#transportation_input12').val();
  gallonsBurnedAfterAction = gallonsBurned(distanceTraveled, daysCarpool, mpgCarpool);
  $('#transportation_results6').val(gallonsBurnedAfterAction);
  weeklyCarbonEmitted = weeklyCarbonDrivingCarpool(gallonsBurnedAfterAction, peopleInCarpool);
  $('#transportation_results8').val(weeklyCarbonEmitted);
  transportationCarbonAfter += parseFloat(weeklyCarbonEmitted);
  $('#transportation_results13').val(transportationCarbonAfter);

  $('#transportation_results9').val(0);
  $('#transportation_results10').val(0);

  var totalSavings = 0;
  totalSavings = transportationCarbonBefore - transportationCarbonAfter;
  $('#transportation_results15').val(totalSavings);

  transportationCarbonBefore *= 36;
  $('#transportation_results12').val(transportationCarbonBefore);
  transportationCarbonAfter *= 36;
  $('#transportation_results14').val(transportationCarbonAfter);
  totalSavings = transportationCarbonBefore - transportationCarbonAfter;
  totalSavings = totalSavings.toFixed(2);
  $('#transportation_results16').val(totalSavings);

  // Calculating savings in dollars
  var gasAloneSavings = parseFloat($('#transportation_results1').val()) - parseFloat($('#transportation_results2').val());
  var gasCarpoolSavings = parseFloat($('#transportation_results5').val()) - parseFloat($('#transportation_results6').val());
  costSavings = calculateTransportationSavings(gasAloneSavings, gasCarpoolSavings);

  // Changing summary content
  $('#sumTranBefore').text(transportationCarbonBefore);
  $('#sumTranAfter').text(transportationCarbonAfter);
  $('#sumTranEmissionSavings').text(totalSavings);
  $('#sumTranCostSavings').text(costSavings);
  reCalculateSummary();
})

// Clear input values for transportation contents
$('#btn_reset_transportation').click(function () {
  for (let i = 1; i <= TRANSPORTATIONINPUTS; i++) {
    $('#transportation_input' + i).val("");
  }
  for (let i = 1; i <= TRANSPORTATIONRESULTS; i++) {
    $('#transportation_results' + i).val("");
  }
  transportationCarbonAfter = 0;
  transportationCarbonBefore = 0;
})

// Automatically add values to debug calculations
$('#transportation_input1').val(20);
$('#transportation_input2').val(18);
$('#transportation_input3').val(4);
$('#transportation_input4').val(3);
$('#transportation_input5').val(18);
$('#transportation_input6').val(33);
$('#transportation_input7').val(4);
$('#transportation_input8').val(5);
$('#transportation_input9').val(23);
$('#transportation_input10').val(34);
$('#transportation_input11').val(2);
$('#transportation_input12').val(4);
$('#transportation_input13').val(1);
$('#transportation_input14').val(1);

// *****Trash Content Calculations*****
const TRASHINPUTS = 4;

// Trash (paul's part)
$('#btn_calculate_trash').click(function () {
  calculate();
  reCalculateSummary();
})


// Calculate carbon impact from user inputs (trash)
var trashCarbonBefore = 0;
var trashCarbonAfter = 0;

calculate = function () {
  var trashinput1 = document.getElementById('trash_input1').value;
  var trashinput2 = document.getElementById('trash_input2').value;
  var answer = parseInt(trashinput2) - parseInt(trashinput1);
  document.getElementById('trash_results1').innerHTML = answer;

  var trashinput3 = document.getElementById('trash_input3').value;
  var trashinput4 = document.getElementById('trash_input4').value;
  var answer2 = (parseInt(trashinput3) * answer) * 0.36; //old value which is 1.27 new one should be 0.36
  document.getElementById('trash_results2').innerHTML = answer2;



  var answer3 = (parseInt(trashinput4) * answer) * 0.36;
  document.getElementById('trash_results4').innerHTML = answer3;

  var answer4 = answer2 - answer3;
  document.getElementById('trash_results6').innerHTML = answer4;

  var answer5 = answer2 * 36;
  document.getElementById('trash_results3').innerHTML = answer5;
  beforeTrashCost = answer5*0.0004; //this is cost per pounds this is also used for cost savings portion for summary

  trashCarbonBefore = answer5; //this is used for the chart
  //1) before action carbon x36 week
  document.getElementById("sumTrashBefore").innerHTML = answer5;


  //first test for rounding decimals to 2 starts here 4.08pm
  //will implement later if required as of currently, it is good.
  var answer6 = answer3 * 36;

  document.getElementById('trash_results5').innerHTML = answer6;
  //2) after action carbon x36 week
  trashCarbonAfter = answer6;
  document.getElementById("sumTrashAfter").innerHTML = answer6;
  afterTrashCost = answer6*0.0004; //this is cost per pounds and also used for cost savings portion for summary

  var answer7 = answer5 - answer6;
  document.getElementById('trash_results7').innerHTML = answer7;

  //3) cost savings x constant value
  document.getElementById("sumTrashEmissionSavings").innerHTML = answer7;
  document.getElementById("sumTrashCostSavings").innerHTML = beforeTrashCost-afterTrashCost;

}


// Clear input values for trash contents
$('#btn_reset_trash').click(function () {
  for (let i = 1; i <= TRASHINPUTS; i++) {
    $('#trash_input' + i).val("");
  }
})

// *****Paper Content Calculations*****
const PAPERINPUTS = 10;

$('#btn_calculate_paper').click(function () {
  calculatev2();
  reCalculateSummary();
})

var paperCarbonBefore = 0;
var paperCarbonAfter = 0;
calculatev2 = function () {


  //two inputs
  var paperinput1 = document.getElementById('paper_input1').value;
  var paperinput2 = document.getElementById('paper_input2').value;



  // two options percentages
  var paperoption1 = document.getElementById('yn1').value;
  var paperoption2 = document.getElementById('yn2').value;

  //two results option for above


  var beforeTotalCost = 0;
  //if states for the following options
  if (paperoption1 == "0") {
    panswer1 = parseInt(paperinput1) * 44;
    beforeTotalCost = 10.99 * paperinput1;
    presult1 = panswer1;
    document.getElementById('paper_results1').innerHTML = panswer1;
  } else if (paperoption1 == "30") {
    panswer1 = parseInt(paperinput1) * 37;
    beforeTotalCost = 11.49 * paperinput1;
    presult1 = panswer1;
    document.getElementById('paper_results1').innerHTML = panswer1;

  } else if (paperoption1 == "100") {
    panswer1 = parseInt(paperinput1) * 19;
    beforeTotalCost = 13.09 * paperinput1;
    presult1 = panswer1;
    document.getElementById('paper_results1').innerHTML = panswer1;


    //top side for yn1 bottom side for yn2

    //OLD VALUES if 0% was selected times 15, else if 30% then times 13
    //else if 100% times 8

    //NEW VALUES if 0% was selected times 44, else if 30% then times 37
    //else if 100% times 19

    //personal side note: that is actually really substainial.


    //cost/REEM for NEW VALUES
    // 0 = 10.99
    // 30 = 11.49
    // 100 = 13.09

    //cost/REEM for OLD VALUES
    // 0 = 4.00
    // 30 = 5.20
    // 100 = 5.80

  }

  var afterTotalCost = 0;
  if (paperoption2 == "0") {
    panswer2 = parseInt(paperinput2) * 44;
    afterTotalCost = 10.99 * paperinput2;
    presult2 = panswer2;
    document.getElementById('paper_results2').innerHTML = panswer2;
    paperCost = panswer2*10.99;
    document.getElementById("sumPaperCostSavings").innerHTML = paperCost;

  } else if (paperoption2 == "30") {
    panswer2 = parseInt(paperinput2) * 37;
    afterTotalCost = 11.49 * paperinput2;
    presult2 = panswer2;
    document.getElementById('paper_results2').innerHTML = panswer2;
    paperCost = panswer2*11.49;
    document.getElementById("sumPaperCostSavings").innerHTML = paperCost;

  } else if (paperoption2 == "100") {
    panswer2 = parseInt(paperinput2) * 19;
    afterTotalCost = 13.09 * paperinput2;
    presult2 = panswer2;
    document.getElementById('paper_results2').innerHTML = panswer2;
    paperCost = panswer2*13.09;
    document.getElementById("sumPaperCostSavings").innerHTML = paperCost;
  }

var totalCost = beforeTotalCost - afterTotalCost;
$('#sumPaperCostSavings').text(totalCost);


  panswersum1 = panswer1;
  document.getElementById('paper_resultsum1').innerHTML = panswer1;
  panswersum2 = panswer2;
  document.getElementById('paper_resultsum3').innerHTML = panswer2;

  panswerDIFF = panswer1 - panswer2;
  document.getElementById('paper_resultsum5').innerHTML = panswerDIFF;

  panswersum3 = panswer1 * 36;
  document.getElementById('paper_resultsum2').innerHTML = panswersum3;


  //somewhere here for carbon before for summary
  paperCarbonBefore = panswersum3;
  document.getElementById("sumPaperBefore").innerHTML = panswersum3;

  panswersum4 = panswer2 * 36;
  document.getElementById('paper_resultsum4').innerHTML = panswersum4;
  //somewhere here for carbon after for summary
  paperCarbonAfter = panswersum4;
  document.getElementById("sumPaperAfter").innerHTML = panswersum4;

  panswerDIFF2 = panswersum3 - panswersum4;
  document.getElementById('paper_resultsum6').innerHTML = panswerDIFF2;
  //somewhere here for cost savings x some constant value?
  document.getElementById("sumPaperEmissionSavings").innerHTML = panswerDIFF2;

  console.log(panswer1);
  console.log(panswer2);


}
// Clear input values for paper contents
$('#btn_reset_paper').click(function () {
  for (let i = 1; i <= PAPERINPUTS; i++) {
    $('#paper_input' + i).val("");
  }
})


// *****Solid Waste-Plastic Bottles Content Calculations*****
const BOTTLESINPUTS = 4;
// Calculate carbon impact from user inputs
$('#btn_calculate_bottles').click(function () {
  calculate1();
  reCalculateSummary();
})

var bottleCarbonBefore = 0;
var bottleCarbonAfter = 0;

calculate1 = function () {
  var bottleinput1 = document.getElementById('bottles_input1').value;
  var bottleinput2 = document.getElementById('bottles_input2').value;

  var answer = (parseInt(bottleinput1) * 0.04);
  document.getElementById('bottles_results1').value = answer;

  var answer2 = (parseInt(bottleinput2) * 0.04);
  document.getElementById('bottles_results2').value = answer2;

  var answer3 = (answer * 2.17);
  document.getElementById('bottles_results3').value = answer3;

  var answer4 = (answer2 * 2.17);
  document.getElementById('bottles_results4').value = answer4;

  var bottleinput3 = document.getElementById('bottles_input').value;
  var bottleinput4 = document.getElementById('bottles_input0').value;

  //before taking action
  if (bottleinput3 == "") {
    answer5 = "";
    document.getElementById('bottles_results5').value = answer5.toFixed(2);
  } else if (bottleinput3 == "1.15") {
    answer5 = answer * 1.15;
    result = answer5;
    document.getElementById('bottles_results5').value = answer5.toFixed(2);
  } else if (bottleinput3 == "0") {
    answer5 = answer * 0;
    result = answer5;
    document.getElementById('bottles_results5').value = answer5.toFixed(2);
  }

  //after taking action
  if (bottleinput4 == "") {
    answer6 = "";
    result = answer5;
    document.getElementById('bottles_results6').value = answer6.toFixed(2);
  } else if (bottleinput4 == "1.15") {
    answer6 = answer2 * 1.15;
    result = answer6;
    document.getElementById('bottles_results6').value = answer6.toFixed(2);
  } else if (bottleinput4 == "0") {
    answer6 = answer2 * 0;
    result = answer6;
    document.getElementById('bottles_results6').value = answer6.toFixed(2);
  }

  console.log(answer5);
  console.log(answer6);

  var answer7 = (answer3 - answer5);
  document.getElementById('bottles_results7').value = answer7.toFixed(2);

  var answer8 = (answer7 * 36);
  document.getElementById('bottles_results8').value = answer8.toFixed(2);
  bottleCarbonBefore = answer8;
  document.getElementById("sumPlasticBefore").innerHTML = answer8;

  var answer9 = (answer4 - answer6);
  document.getElementById('bottles_results9').value = answer9.toFixed(2);

  var answer10 = (answer9 * 36);
  document.getElementById('bottles_results10').value = answer10.toFixed(2);
  bottleCarbonAfter = answer10;
  document.getElementById("sumPlasticAfter").innerHTML = answer10;

  var answer11 = (answer7 - answer9);
  document.getElementById('bottles_results11').value = answer11.toFixed(2);

  var answer12 = (answer11 * 36);
  document.getElementById('bottles_results12').value = answer12.toFixed(2);
  document.getElementById("sumPlasticEmissionSavings").innerHTML = answer12;

}

// Clear input values for bottles contents
$('#btn_reset_bottles').click(function () {
  for (let i = 1; i <= BOTTLESINPUTS; i++) {
    $('#bottles_input' + i).val("");
  }
})

// *****Solid Waste-Beverage Cups Content Calculations*****
const CUPSINPUTS = 4;
// Calculate carbon impact from user inputs
$('#btn_calculate_cups').click(function () {
  calculate2();
  reCalculateSummary();
})

var cupCarbonBefore = 0;
var cupCarbonAfter = 0;

calculate2 = function () {

  var cupinput1 = document.getElementById('cups_input1').value;
  var cupinput2 = document.getElementById('cups_input2').value;
  var cupinput3 = document.getElementById('cups_input3').value;
  var cupinput4 = document.getElementById('cups_input4').value;

  //before taking action
  if (cupinput1 == "0") {
    canswer = parseInt(cupinput3) * 0.25;
    document.getElementById('cup_results1').value = canswer;
  } else if (cupinput1 == "1") {
    canswer = parseInt(cupinput3) * 0;
    document.getElementById('cup_results1').value = canswer;
  } else if (cupinput1 == "0.25") {
    canswer = parseInt(cupinput3) * 0.25;
    document.getElementById('cup_results1').value = canswer;
  }

  //after taking action
  if (cupinput2 == "0") {
    canswer1 = parseInt(cupinput4) * 0.25;
    document.getElementById('cup_results3').value = canswer1;
  } else if (cupinput2 == "1") {
    canswer1 = parseInt(cupinput4) * 0;
    document.getElementById('cup_results3').value = canswer1;
  } else if (cupinput2 == "0.25") {
    canswer1 = parseInt(cupinput4) * 0.25;
    document.getElementById('cup_results3').value = canswer1;
  }

  var canswer2 = (canswer * 36);
  document.getElementById('cup_results2').value = canswer2;
  cupCarbonBefore = canswer2;
  document.getElementById("sumBeverageBefore").innerHTML = canswer2;

  var canswer3 = (canswer1 * 36);
  document.getElementById('cup_results4').value = canswer3;
  cupCarbonAfter = canswer3;
  document.getElementById("sumBeverageAfter").innerHTML = canswer3;

  console.log(canswer);
  console.log(canswer1);

  var canswer4 = (canswer - canswer1);
  document.getElementById('cup_results5').value = canswer4;

  var canswer5 = (canswer2 - canswer3);
  document.getElementById('cup_results6').value = canswer5;
  document.getElementById("sumBeverageEmissionSavings").innerHTML = canswer5;

}

// Clear input values for cups contents
$('#btn_reset_cups').click(function () {
  for (let i = 1; i <= CUPSINPUTS; i++) {
    $('#cups_input' + i).val("");
  }
})

// *****Summary Content Calculations*****
//Google Charts Testing Core
google.load("visualization", "1.1", {
  packages: ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Category', 'Before Action', 'After Action'],
    ['Lighting', lighting_emmissions_before, lighting_emmissions_after],
    // ['Lighting', 3000, 1232],
    ['Energy Vampires', before_vampire, after_vampire],
    ['Appliances', before_appliance, after_appliance],
    ['Transportation', transportationCarbonBefore, transportationCarbonAfter],
    ['Trash', trashCarbonBefore, trashCarbonAfter],
    ['Paper', paperCarbonBefore, paperCarbonAfter],
    ['Plastics', 660, 320],
    ['Cups', 1030, 540]
  ]);

  var options = {
    // title: "Carbon Emission Results: Before and After Taking Action",
    titlePosition: "none",
    animation: {
      duration: 3000,
      easing: 'out',
      startup: true
    },
    colors: ['#ff9500', '#0084c2'],
    vAxis: {
      title: "Carbon Emitted (pounds)"
    },
    height: 500
  };

  chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function reCalculateSummary() {

  // Emissions before taking action sum
  var totalBeforeAction = 0;
  totalBeforeAction += parseFloat($('#sumLightBefore').text());
  totalBeforeAction += parseFloat($('#sumVampireBefore').text());
  totalBeforeAction += parseFloat($('#sumOtherBefore').text());
  totalBeforeAction += parseFloat($('#sumTranBefore').text());
  totalBeforeAction += parseFloat($('#sumTrashBefore').text());
  totalBeforeAction += parseFloat($('#sumPaperBefore').text());
  totalBeforeAction += parseFloat($('#sumPlasticBefore').text());
  totalBeforeAction += parseFloat($('#sumBeverageBefore').text());
  $('#sumTotalBefore').text(totalBeforeAction);

  // Emissions after taking action sum
  var totalAfterAction = 0;
  totalAfterAction += parseFloat($('#sumLightAfter').text());
  totalAfterAction += parseFloat($('#sumVampireAfter').text());
  totalAfterAction += parseFloat($('#sumOtherAfter').text());
  totalAfterAction += parseFloat($('#sumTranAfter').text());
  totalAfterAction += parseFloat($('#sumTrashAfter').text());
  totalAfterAction += parseFloat($('#sumPaperAfter').text());
  totalAfterAction += parseFloat($('#sumPlasticAfter').text());
  totalAfterAction += parseFloat($('#sumBeverageAfter').text());
  $('#sumTotalAfter').text(totalAfterAction);

  // Emissions savings sum
  var totalEmissionSavings = 0;
  totalEmissionSavings += parseFloat($('#sumLightEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumVampireEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumOtherEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumTranEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumTrashEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumPaperEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumPlasticEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumBeverageEmissionSavings').text());
  $('#sumEmissionSavings').text(totalEmissionSavings);

  // Electricity savings sum
  var electricitySavings = 0;
  electricitySavings += parseFloat($('#sumLightElectricitySavings').text());
  electricitySavings += parseFloat($('#sumVampireElectricitySavings').text());
  electricitySavings += parseFloat($('#sumOtherElectricitySavings').text());
  // electricitySavings += parseFloat($('#sumTranElectricitySavings').text());
  // electricitySavings += parseFloat($('#sumTrashElectricitySavings').text());
  // electricitySavings += parseFloat($('#sumPaperElectricitySavings').text());
  // electricitySavings += parseFloat($('#sumPlasticElectricitySavings').text());
  // electricitySavings += parseFloat($('#sumBeverageElectricitySavings').text());
  $('#sumElectricitySavings').text(electricitySavings);

  // Cost savings sum
  var costSavings = 0;
  costSavings += parseFloat($('#sumLightCostSavings').text());
  costSavings += parseFloat($('#sumVampireCostSavings').text());
  costSavings += parseFloat($('#sumOtherCostSavings').text());
  costSavings += parseFloat($('#sumTranCostSavings').text());
  costSavings += parseFloat($('#sumTrashCostSavings').text());
  costSavings += parseFloat($('#sumPaperCostSavings').text());
  costSavings += parseFloat($('#sumPlasticCostSavings').text());
  costSavings += parseFloat($('#sumBeverageCostSavings').text());
  $('#sumCostSavings').text(costSavings);

  // Per student calculation
  var studentBefore = totalBeforeAction / numberOfStudents;
  $('#sumStudentTotalBefore').text(studentBefore.toFixed(2));

  var studentAfter = totalAfterAction / numberOfStudents;
  $('#sumStudentTotalAfter').text(studentAfter.toFixed(2));

  var studentEmissions = totalEmissionSavings / numberOfStudents;
  $('#sumStudentEmissionSavings').text(studentEmissions.toFixed(2));

  // Equivalency calculation
  var milesEquivalent = totalEmissionSavings / GALLONCO2 * AVERAGEMPG;
  $('#carEquiv').text(milesEquivalent.toFixed(2));

  var numberOfCars = totalEmissionSavings / YEARLYCARCO2;
  $('#passEquiv').text(numberOfCars.toFixed(2));

  var treeSeedlings = totalEmissionSavings / TREECO2;
  $('#treeEquiv').text(treeSeedlings.toFixed(2));
}

//************School Lighting********
//Author: James.
//Desc: Do all the calculations for the School Lighting page
//variables for lighting
var number_switches1 = $('#number_switches1').val();
var watts_bulb1 = $('#watts_bulb1').val();
var before_action1 = $('#before_action1').val();
var after_action1 = $('#after_action1').val();

var number_switches2 = $('#number_switches2').val();
var watts_bulb2 = $('#watts_bulb2').val();
var before_action2 = $('#before_action2').val();
var after_action2 = $('#after_action2').val();

var number_switches3 = $('#number_switches3').val();
var watts_bulb3 = $('#watts_bulb3').val();
var before_action3 = $('#before_action3').val();
var after_action3 = $('#after_action3').val();

var number_switches4 = $('#number_switches4').val();
var watts_bulb4 = $('#watts_bulb4').val();
var before_action4 = $('#before_action4').val();
var after_action4 = $('#after_action4').val();

var number_switches5 = $('#number_switches5').val();
var watts_bulb5 = $('#watts_bulb5').val();
var before_action5 = $('#before_action5').val();
var after_action5 = $('#after_action5').val();

var number_switches6 = $('#number_switches6').val();
var watts_bulb6 = $('#watts_bulb6').val();
var before_action6 = $('#before_action6').val();
var after_action6 = $('#after_action6').val();

var number_switches7 = $('#number_switches7').val();
var watts_bulb7 = $('#watts_bulb7').val();
var before_action7 = $('#before_action7').val();
var after_action7 = $('#after_action7').val();

var number_switches8 = $('#number_switches8').val();
var watts_bulb8 = $('#watts_bulb8').val();
var before_action8 = $('#before_action8').val();
var after_action8 = $('#after_action8').val();

var number_switches9 = $('#number_switches9').val();
var watts_bulb9 = $('#watts_bulb9').val();
var before_action9 = $('#before_action9').val();
var after_action9 = $('#after_action9').val();

var number_switches10 = $('#number_switches10').val();
var watts_bulb10 = $('#watts_bulb10').val();
var before_action10 = $('#before_action10').val();
var after_action10 = $('#after_action10').val();

// Calculate Lighting CO2 Before taking action
$('#btn_calculate_lighting').click(function () {
    //calculate CO2 before action (per row)
    var lighting_emmissions_row_1_before = (EEF * (number_switches1 * watts_bulb1 * before_action1 / 1000));
    var lighting_emmissions_row_2_before = (EEF * (number_switches1 * watts_bulb1 * before_action2 / 1000));
    var lighting_emmissions_row_3_before = (EEF * (number_switches1 * watts_bulb1 * before_action3 / 1000));
    var lighting_emmissions_row_4_before = (EEF * (number_switches1 * watts_bulb1 * before_action4 / 1000));
    var lighting_emmissions_row_5_before = (EEF * (number_switches1 * watts_bulb1 * before_action5 / 1000));
    var lighting_emmissions_row_6_before = (EEF * (number_switches1 * watts_bulb1 * before_action6 / 1000));
    var lighting_emmissions_row_7_before = (EEF * (number_switches1 * watts_bulb1 * before_action7 / 1000));
    var lighting_emmissions_row_8_before = (EEF * (number_switches1 * watts_bulb1 * before_action8 / 1000));
    var lighting_emmissions_row_9_before = (EEF * (number_switches1 * watts_bulb1 * before_action9 / 1000));
    var lighting_emmissions_row_10_before = (EEF * (number_switches1 * watts_bulb1 * before_action10 / 1000));
    //sum of rows
    var lighting_emmissions_before = lighting_emmissions_row_1_before + lighting_emmissions_row_2_before +
      lighting_emmissions_row_3_before + lighting_emmissions_row_4_before + lighting_emmissions_row_5_before +
      lighting_emmissions_row_6_before + lighting_emmissions_row_7_before + lighting_emmissions_row_8_before +
      lighting_emmissions_row_9_before + lighting_emmissions_row_10_before;

    //calculate CO2 after action
    var lighting_emmissions_row_1_after = (EEF * (number_switches1 * watts_bulb1 * after_action1 / 1000));
    var lighting_emmissions_row_2_after = (EEF * (number_switches1 * watts_bulb1 * after_action2 / 1000));
    var lighting_emmissions_row_3_after = (EEF * (number_switches1 * watts_bulb1 * after_action3 / 1000));
    var lighting_emmissions_row_4_after = (EEF * (number_switches1 * watts_bulb1 * after_action4 / 1000));
    var lighting_emmissions_row_5_after = (EEF * (number_switches1 * watts_bulb1 * after_action5 / 1000));
    var lighting_emmissions_row_6_after = (EEF * (number_switches1 * watts_bulb1 * after_action6 / 1000));
    var lighting_emmissions_row_7_after = (EEF * (number_switches1 * watts_bulb1 * after_action7 / 1000));
    var lighting_emmissions_row_8_after = (EEF * (number_switches1 * watts_bulb1 * after_action8 / 1000));
    var lighting_emmissions_row_9_after = (EEF * (number_switches1 * watts_bulb1 * after_action9 / 1000));
    var lighting_emmissions_row_10_after = (EEF * (number_switches1 * watts_bulb1 * after_action10 / 1000));
    //sum of rows
    var lighting_emmissions_after = lighting_emmissions_row_1_after + lighting_emmissions_row_2_after +
      lighting_emmissions_row_3_after + lighting_emmissions_row_4_after + lighting_emmissions_row_5_after +
      lighting_emmissions_row_6_after + lighting_emmissions_row_7_after + lighting_emmissions_row_8_after +
      lighting_emmissions_row_9_after + lighting_emmissions_row_10_after;

    //calculate co2 before and after and per 180 day school years and the difference between the two
    document.getElementById('lighting_co2_before').innerHTML = lighting_emmissions_before;
    document.getElementById('lighting_co2_before_180').innerHTML = lighting_emmissions_before * 180;
    document.getElementById('lighting_co2_after').innerHTML = lighting_emmissions_after;
    document.getElementById('lighting_co2_after_180').innerHTML = lighting_emmissions_after * 180;
    document.getElementById('lighting_co2_saved').innerHTML = lighting_emmissions_before - lighting_emmissions_after;
    document.getElementById('lighting_co2_saved_180').innerHTML = (lighting_emmissions_before - lighting_emmissions_after) * (180);

})//End calculations for school lighting
