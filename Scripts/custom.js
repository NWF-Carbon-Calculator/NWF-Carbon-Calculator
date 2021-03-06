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
  var EEF = calcEEF();
  document.getElementById("show_eef").value = calcEEF().toFixed(2);
  document.getElementById("whichPlan").innerHTML = whichPlan();
})
$('#btn_vampire').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_vampire').insertAfter('#startDiv');
  $('#container_vampire').show();
  var EEF = calcEEF();
  document.getElementById("show_eef").value = calcEEF().toFixed(2);
  document.getElementById("whichPlan").innerHTML = whichPlan();
})
$('#btn_record-data').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_record-data').insertAfter('#startDiv');
  $('#container_record-data').show();
  //display EEF and plan name in box upon navigation to School Lighting tab
  document.getElementById("show_eef").value = calcEEF().toFixed(2);
  document.getElementById("whichPlan").innerHTML = whichPlan();
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
$('#btn_bottlesCups').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_bottlesCups').insertAfter('#startDiv');
  $('#container_bottlesCups').show();
})
$('#btn_food').click(function () {
  $(".button-wrapper").find(".btn").removeClass('active');
  $(this.id).addClass('active');
  $('.content-container').hide();
  $('#container_food').insertAfter('#startDiv');
  $('#container_food').show();
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

//calculate EEF
function calcEEF() {
  //get the value of the factors to be used in calculations
  var coal_factor = document.getElementById("coal_factor").innerHTML;
  var coal_percent = parseFloat(document.getElementById("coal_percent").innerHTML) / 100;
  var oil_factor = document.getElementById("oil_factor").innerHTML;
  var oil_percent = parseFloat(document.getElementById("oil_percent").innerHTML) / 100;
  var nat_gas_factor = document.getElementById("nat_gas_factor").innerHTML;
  var nat_gas_percent = parseFloat(document.getElementById("nat_gas_percent").innerHTML) / 100;
  var EEF;

  //Is radio button for national average checked
  if (document.getElementById('national_average').checked) {
    //Calculate the national average EEF
    var EEF = coal_factor * coal_percent + oil_factor * oil_percent + nat_gas_factor * nat_gas_percent;

    //Is radio button for custom average checked
  } else if (document.getElementById('custom_average').checked) {

    //get the custom values
    var coal_percent = document.getElementById("custom_coal_percent").value / 100;
    var oil_percent = document.getElementById("custom_oil_percent").value / 100;
    var nat_gas_percent = document.getElementById("custom_nat_gas_percent").value / 100;

    //Calculate the custom EEF
    var EEF = coal_factor * coal_percent + oil_factor * oil_percent + nat_gas_factor * nat_gas_percent;

  }
  return EEF;

}
// Calculate and display Electricity Emission Factor (EEF)

$('#btn_calculate_EEF').click(function () {

  if (document.getElementById('national_average').checked) {

    //set text of EEF to national average
    document.getElementById("national_average_factor").value = calcEEF().toFixed(2);

  } else if (document.getElementById('custom_average').checked) {

    //set text of EEF to custom value
    document.getElementById("custom_factor").value = calcEEF().toFixed(2);
  }

})

//determine if user selected national average or state average radio box in electricity tab
function whichPlan() {

  var planName;
  if (document.getElementById('national_average').checked) {

    planName = "National Average";

  } else if (document.getElementById('custom_average').checked) {

    planName = "State-Based Average";

  }
  return planName;

}



//************School Lighting********

	//calculate CO2 before action (per row)


var lighting_emmissions_before;
var lighting_emmissions_after;
// Calculate Lighting CO2 Before taking action
$('#btn_calculate_lighting').click(function () {

var EEF = calcEEF();
var number_switches1 = document.getElementById("number_switches1").value;
var watts_bulb1 = document.getElementById("watts_bulb1").value;
var before_action1 = document.getElementById("before_action1").value;
var after_action1 = document.getElementById("after_action1").value;

var number_switches2 = document.getElementById("number_switches2").value;
var watts_bulb2 = document.getElementById("watts_bulb2").value;
var before_action2 = document.getElementById("before_action2").value;
var after_action2 = document.getElementById("after_action2").value;

var number_switches3 = document.getElementById("number_switches3").value;
var watts_bulb3 = document.getElementById("watts_bulb3").value;
var before_action3 = document.getElementById("before_action3").value;
var after_action3 = document.getElementById("after_action3").value;

var number_switches4 = document.getElementById("number_switches4").value;
var watts_bulb4 = document.getElementById("watts_bulb4").value;
var before_action4 = document.getElementById("before_action4").value;
var after_action4 = document.getElementById("after_action4").value;

var number_switches5 = document.getElementById("number_switches5").value;
var watts_bulb5 = document.getElementById("watts_bulb5").value;
var before_action5 = document.getElementById("before_action5").value;
var after_action5 = document.getElementById("after_action5").value;

var number_switches6 = document.getElementById("number_switches6").value;
var watts_bulb6 = document.getElementById("watts_bulb6").value;
var before_action6 = document.getElementById("before_action6").value;
var after_action6 = document.getElementById("after_action6").value;

var number_switches7 = document.getElementById("number_switches7").value;
var watts_bulb7 = document.getElementById("watts_bulb7").value;
var before_action7 = document.getElementById("before_action7").value;
var after_action7 = document.getElementById("after_action7").value;

var number_switches8 = document.getElementById("number_switches8").value;
var watts_bulb8 = document.getElementById("watts_bulb8").value;
var before_action8 = document.getElementById("before_action8").value;
var after_action8 = document.getElementById("after_action8").value;

var number_switches9 = document.getElementById("number_switches9").value;
var watts_bulb9 = document.getElementById("watts_bulb9").value;
var before_action9 = document.getElementById("before_action9").value;
var after_action9 = document.getElementById("after_action9").value;

var number_switches10 = document.getElementById("number_switches10").value;
var watts_bulb10 = document.getElementById("watts_bulb10").value;
var before_action10 = document.getElementById("before_action10").value;
var after_action10 = document.getElementById("after_action10").value;
	function calcLightingBefore() {
		var lighting_emmissions_row_1_before = (EEF * (number_switches1 * watts_bulb1 * before_action1 / 1000));
    var lighting_emmissions_row_2_before = (EEF * (number_switches2 * watts_bulb2 * before_action2 / 1000));
    var lighting_emmissions_row_3_before = (EEF * (number_switches3 * watts_bulb3 * before_action3 / 1000));
    var lighting_emmissions_row_4_before = (EEF * (number_switches4 * watts_bulb4 * before_action4 / 1000));
    var lighting_emmissions_row_5_before = (EEF * (number_switches5 * watts_bulb5 * before_action5 / 1000));
    var lighting_emmissions_row_6_before = (EEF * (number_switches6 * watts_bulb6 * before_action6 / 1000));
    var lighting_emmissions_row_7_before = (EEF * (number_switches7 * watts_bulb7 * before_action7 / 1000));
    var lighting_emmissions_row_8_before = (EEF * (number_switches8 * watts_bulb8 * before_action8 / 1000));
    var lighting_emmissions_row_9_before = (EEF * (number_switches9 * watts_bulb9 * before_action9 / 1000));
    var lighting_emmissions_row_10_before = (EEF * (number_switches10 * watts_bulb10 * before_action10 / 1000));


    //sum of rows
    var lighting_emmissions_before = lighting_emmissions_row_1_before + lighting_emmissions_row_2_before +
      lighting_emmissions_row_3_before + lighting_emmissions_row_4_before + lighting_emmissions_row_5_before +
      lighting_emmissions_row_6_before + lighting_emmissions_row_7_before + lighting_emmissions_row_8_before +
      lighting_emmissions_row_9_before + lighting_emmissions_row_10_before;

		return lighting_emmissions_before;
	}
	function calcLightingAfter() {
		//calculate CO2 after action
    var lighting_emmissions_row_1_after = (EEF * (number_switches1 * watts_bulb1 * after_action1 / 1000));
    var lighting_emmissions_row_2_after = (EEF * (number_switches2 * watts_bulb2 * after_action2 / 1000));
    var lighting_emmissions_row_3_after = (EEF * (number_switches3 * watts_bulb3 * after_action3 / 1000));
    var lighting_emmissions_row_4_after = (EEF * (number_switches4 * watts_bulb4 * after_action4 / 1000));
    var lighting_emmissions_row_5_after = (EEF * (number_switches5 * watts_bulb5 * after_action5 / 1000));
    var lighting_emmissions_row_6_after = (EEF * (number_switches6 * watts_bulb6 * after_action6 / 1000));
    var lighting_emmissions_row_7_after = (EEF * (number_switches7 * watts_bulb7 * after_action7 / 1000));
    var lighting_emmissions_row_8_after = (EEF * (number_switches8 * watts_bulb8 * after_action8 / 1000));
    var lighting_emmissions_row_9_after = (EEF * (number_switches9 * watts_bulb9 * after_action9 / 1000));
    var lighting_emmissions_row_10_after = (EEF * (number_switches10 * watts_bulb10 * after_action10 / 1000));
    //sum of rows
    var lighting_emmissions_after = lighting_emmissions_row_1_after + lighting_emmissions_row_2_after +
      lighting_emmissions_row_3_after + lighting_emmissions_row_4_after + lighting_emmissions_row_5_after +
      lighting_emmissions_row_6_after + lighting_emmissions_row_7_after + lighting_emmissions_row_8_after +
      lighting_emmissions_row_9_after + lighting_emmissions_row_10_after;

		return lighting_emmissions_after;
	}
	 lighting_emmissions_before = calcLightingBefore()*180;
	 lighting_emmissions_after = calcLightingAfter()*180;
    //calculate co2 before and after and per 180 day school years and the difference between the two
    document.getElementById('lighting_co2_before').value = calcLightingBefore().toFixed(2);
    document.getElementById('lighting_co2_before_180').value = (calcLightingBefore() * 180).toFixed(2);
    document.getElementById('lighting_co2_after').value = calcLightingAfter().toFixed(2);
    document.getElementById('lighting_co2_after_180').value = (calcLightingAfter() * 180).toFixed(2);
    document.getElementById('lighting_co2_saved').value = (calcLightingBefore() - calcLightingAfter()).toFixed(2);
    document.getElementById('lighting_co2_saved_180').value = ((calcLightingBefore() - calcLightingAfter()) * (180)).toFixed(2);



	//Calculations for summary table
    document.getElementById('sumLightBefore').innerHTML = (calcLightingBefore() * 180).toFixed(2);
	document.getElementById('sumLightAfter').innerHTML = (calcLightingAfter() * 180).toFixed(2);
	document.getElementById('sumLightEmissionSavings').innerHTML = ((calcLightingBefore() - calcLightingAfter()) * (180)).toFixed(2);
	document.getElementById('sumLightElectricitySavings').innerHTML = ((calcLightingBefore() - calcLightingAfter()) * (180) * (EEF)).toFixed(2);
	document.getElementById('sumLightCostSavings').innerHTML = ((calcLightingBefore() - calcLightingAfter()) * (180) * (EEF) * (ELECTRICITYCOST)).toFixed(2);


    reCalculateSummary();
})//End calculations for school lighting

//*************OTHER APPLIANCES*****************
var numberOfRows = 1;

// Set #s for calculations/debug
// $('#appliance_type1').val("Computer");
// $('#appliance_wattage1').val(120);
// $('#appliance_count1').val(1);
// $('#appliance_before_option1').val(2);
// $('#appliance_after_option1').val(2);

// Add new row to lighting table
$('#btn_add_row').click(function () {
  numberOfRows++;
  var row = createRowHTML(numberOfRows);
  $("#table_light tbody").append(row);
})

let lineNo = 2;
$("#appliance_btn_add_row").click(function () {
  markup = "<tr><td align=center><input type='text' id='appliance_type" + lineNo + "'</td>" +
    "<td align=center><input type='text' id='appliance_wattage" + lineNo + "'</td>" +
    "<td align=center><input type='text' id='appliance_count" + lineNo + "'</td>" +
    "<td align=center><input type='text' id='appliance_before_option" + lineNo + "'</td>" +
    "<td align=center><input type='text' id='appliance_after_option" + lineNo + "'</td></tr>";

  result_markup = "<tr><td><input type='text' id='appliance" + lineNo + "' readonly></td>" +
    "<td><input type='text' id='appliance_before_per_day" + lineNo + "' readonly></td>" +
    "<td><input type='text' id='appliance_after_per_day" + lineNo + "' readonly></td>" +
    "<td><input type='text' id='appliance_before_per_year" + lineNo + "' readonly></td>" +
    "<td><input type='text' id='appliance_after_per_year" + lineNo + "' readonly></td>" +
    "<td><input type='text' id='appliance_before_CO2_per_day" + lineNo + "' readonly></td>" +
    "<td><input type='text' id='appliance_after_CO2_per_day" + lineNo + "' readonly></td>" +
    "<td><input type='text' id='appliance_before_CO2_per_year" + lineNo + "' readonly></td>" +
    "<td><input type='text' id='appliance_after_CO2_per_year" + lineNo + "' readonly></td></tr>";

  tableBody = $("#table_appliance tbody");
  tableBody.append(markup);
  tableBody2 = $("#table_appliance_results tbody");
  tableBody2.append(result_markup);
  lineNo++;
});

function calcAppliance() {
  var EEF = document.getElementById("show_eef").value = calcEEF().toFixed(2);
  //document.getElementById("whichPlan").innerHTML = whichPlan();
  var before_appliance_result_day = 0;
  var before_appliance_result_year = 0;
  var after_appliance_result_day = 0;
  var after_appliance_result_year = 0;
  var emissionsFactor = EEF;
  var appliance_before_kwh_perYear = 0;
  var appliance_after_kwh_perYear = 0;
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
    console.log(totalCO2PerYearBefore);

    var totalPerDayAfter = totalkWHPerDay(wattage, count, after_hours);
    var totalPerYearAfter = totalkwHPerYear(totalPerDayAfter);
    var totalCO2PerDayAfter = totalCO2Per16HrNight(totalPerDayAfter, emissionsFactor);
    var totalCO2PerYearAfter = totalCO2PerSchoolYear(totalCO2PerDayAfter);

    $('#appliance' + i).val(device);
    $('#appliance_before_per_day' + i).val(totalPerDayBefore.toFixed(2));
    $('#appliance_after_per_day' + i).val(totalPerDayAfter.toFixed(2));
    $('#appliance_before_per_year' + i).val(totalPerYearBefore.toFixed(2));
    $('#appliance_after_per_year' + i).val(totalPerYearAfter.toFixed(2));
    $('#appliance_before_CO2_per_day' + i).val(totalCO2PerDayBefore.toFixed(2));
    $('#appliance_after_CO2_per_day' + i).val(totalCO2PerDayAfter.toFixed(2));
    $('#appliance_before_CO2_per_year' + i).val(totalCO2PerYearBefore.toFixed(2));
    $('#appliance_after_CO2_per_year' + i).val(totalCO2PerYearAfter.toFixed(2));

    appliance_before_kwh_perYear += parseFloat(totalPerYearBefore);
    appliance_after_kwh_perYear += parseFloat(totalPerYearAfter);

    before_appliance_result_day += parseFloat(totalCO2PerDayBefore);
    before_appliance_result_year += parseFloat(totalCO2PerYearBefore);

    after_appliance_result_day += parseFloat(totalCO2PerDayAfter);
    after_appliance_result_year += parseFloat(totalCO2PerYearAfter);

    var total_appliance_result_day = before_appliance_result_day - after_appliance_result_day;
    var total_appliance_result_year = before_appliance_result_year - after_appliance_result_year;
    //set totals
    $('#before_appliance_result_day').val(before_appliance_result_day.toFixed(2));
    $('#before_appliance_result_year').val(before_appliance_result_year.toFixed(2));

    $('#after_appliance_result_day').val(after_appliance_result_day.toFixed(2));
    $('#after_appliance_result_year').val(after_appliance_result_year.toFixed(2));

    $('#total_appliance_result_day').val(total_appliance_result_day.toFixed(2));
    $('#total_appliance_result_year').val(total_appliance_result_year.toFixed(2));
  }
  appliance_total.push(before_appliance_result_year, after_appliance_result_year, total_appliance_result_year,
    appliance_before_kwh_perYear, appliance_after_kwh_perYear);
  return appliance_total;
}

var before_appliance;
var after_appliance;
var before_appliance_cost = 0;
var after_appliance_cost = 0;
var total_appliance = 0;
var before_appliance_kwh = 0;
var after_appliance_kwh = 0;
var total_appliance_kwh = 0;
var appliance_cost_savings = 0;

$('#btn_calculate_appliance').click(function () {
  var appliance_total = calcAppliance();
  before_appliance = appliance_total[0];
  after_appliance = appliance_total[1];
  total_appliance = appliance_total[2];
  before_appliance_kwh = appliance_total[3];
  after_appliance_kwh = appliance_total[4];

  total_appliance_kwh = before_appliance_kwh - after_appliance_kwh;
  appliance_cost_savings = total_appliance_kwh * 10.43;
  console.log(appliance_total);

  $('#sumOtherBefore').text(before_appliance.toFixed(2));
  $('#sumOtherAfter').text(after_appliance.toFixed(2));
  $('#sumOtherEmissionSavings').text(total_appliance.toFixed(2));
  $('#sumOtherElectricitySavings').text(total_appliance_kwh.toFixed(2));
  $('#sumOtherCostSavings').text(appliance_cost_savings.toFixed(2));

  reCalculateSummary();
})

$('#appliance_btn_reset').click(function () {
  var rowCount = $('#table_appliance >tbody >tr').length;
  for (let i = 1; i <= rowCount; i++) {
    $('#appliance_type' + i).val("");
    $('#appliance_wattage' + i).val("");
    $('#appliance_count' + i).val("");
    $('#appliance_before_option' + i).val("");
    $('#appliance_after_option' + i).val("");
  }
})




//***********ENERGY VAMPIRE**************
//device count - set #s for calculations/debug
// $('#vampire_count_1').val(1);
// $('#vampire_count_2').val(1);
// $('#vampire_count_3').val(3);
// $('#vampire_count_4').val(1);
// $('#vampire_count_5').val(2);
// $('#vampire_count_6').val(4);
// $('#vampire_count_7').val(6);
// $('#vampire_count_8').val(4);
// $('#vampire_count_9').val(1);
// $('#vampire_count_10').val(7);
// $('#vampire_count_11').val(2);

const VAMPIREINPUTS = 11;

function calcVampire() {
  var total = 0;
  var EEF = document.getElementById("show_eef").value = calcEEF().toFixed(2);
  var emissionsFactor = EEF;
  var before_result_day = 0;
  var before_result_year = 0;
  var after_result_day = 0;
  var after_result_year = 0;
  var total_result_day = 0;
  var total_result_year = 0;
  var vampire_before_kwh_perYear = 0;
  var vampire_after_kwh_perYear = 0;
  var b_action;
  var a_action;
  vampire_outputs = [];

  for (i = 1; i <= VAMPIREINPUTS; i++) {
    var device = $('#vampire_device_' + i).text();
    var numberOfDevice = $('#vampire_count_' + i).val();
    var before_action = $('#vampire_before_' + i + ' option:selected').text();
    var after_action = $('#vampire_after_' + i + ' option:selected').text();

    console.log(device);

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
        a_action = 15;
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
        b_action = 600;
      } else {
        b_action = 0;
      }

      if (after_action === "Off") {
        a_action = 4;
      } else if (after_action === "Active") {
        a_action = 600;
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
    before_totalkWhPerYear = totalkwHPerYear(before_totalOvernight);
    before_totalCO2PerNight = totalCO2Per16HrNight(before_totalOvernight, emissionsFactor);
    before_totalCO2PerYear = totalCO2PerSchoolYear(before_totalCO2PerNight);

    after_totalOvernight = totalkWhConsumedOvernight(numberOfDevice, a_action);
    after_totalkWhPerYear = totalkwHPerYear(after_totalOvernight);
    after_totalCO2PerNight = totalCO2Per16HrNight(after_totalOvernight, emissionsFactor);
    after_totalCO2PerYear = totalCO2PerSchoolYear(after_totalCO2PerNight);
    //set calculations
    $('#vampire_before_kWhPerDay_' + i).val(before_totalOvernight.toFixed(2));
    $('#vampire_after_kWhPerDay_' + i).val(after_totalOvernight.toFixed(2));

    $('#vampire_before_kWhPerSchoolYr_' + i).val(before_totalkWhPerYear.toFixed(2));
    $('#vampire_after_kWhPerSchoolYr_' + i).val(after_totalkWhPerYear.toFixed(2));

    $('#vampire_before_CO2PerDay_' + i).val(before_totalCO2PerNight.toFixed(2));
    $('#vampire_after_CO2PerDay_' + i).val(after_totalCO2PerNight.toFixed(2));

    $('#vampire_before_CO2PerSchoolYr_' + i).val(before_totalCO2PerYear.toFixed(2));
    $('#vampire_after_CO2PerSchoolYr_' + i).val(after_totalCO2PerYear.toFixed(2));
    //add up totals
    vampire_before_kwh_perYear += parseFloat(before_totalkWhPerYear);
    vampire_after_kwh_perYear += parseFloat(after_totalkWhPerYear);

    before_result_day += parseFloat(before_totalCO2PerNight);
    before_result_year += parseFloat(before_totalCO2PerYear);

    after_result_day += parseFloat(after_totalCO2PerNight);
    after_result_year += parseFloat(after_totalCO2PerYear);

    total_result_day = before_result_day - after_result_day;
    total_result_year = before_result_year - after_result_year;
    //set totals
    $('#before_result_day').val(before_result_day.toFixed(2));
    $('#before_result_year').val(before_result_year.toFixed(2));

    $('#after_result_day').val(after_result_day.toFixed(2));
    $('#after_result_year').val(after_result_year.toFixed(2));

    $('#total_result_day').val(total_result_day.toFixed(2));
    $('#total_result_year').val(total_result_year.toFixed(2));
  }
  vampire_outputs.push(before_result_year, after_result_year, total_result_year,
    vampire_before_kwh_perYear, vampire_after_kwh_perYear);

  return vampire_outputs;
}

var before_vampire;
var after_vampire;
var before_vampire_cost = 0;
var after_vampire_cost = 0;
var vampire_savings = 0;
var before_vampire_kwh = 0;
var after_vampire_kwh = 0;
var total_vampire_kwh = 0;

$('#btn_calculate_vampire').click(function () {
  var total = calcVampire();
  console.log("total " + total);
  before_vampire = total[0];
  after_vampire = total[1];
  total_vampire = total[2];
  before_vampire_kwh = total[3];
  after_vampire_kwh = total[4];

  total_vampire_kwh = before_vampire_kwh - after_vampire_kwh;
  vampire_savings = total_vampire_kwh * 10.43;

  $('#sumVampireBefore').text(before_vampire.toFixed(2));
  $('#sumVampireAfter').text(after_vampire.toFixed(2));
  $('#sumVampireEmissionSavings').text(total_vampire.toFixed(2));
  $('#sumVampireElectricitySavings').text(total_vampire_kwh.toFixed(2));
  $('#sumVampireCostSavings').text(vampire_savings.toFixed(2));

  console.log(vampire_savings);
  reCalculateSummary();
})

$('#btn_reset_vampire').click(function () {
  for (let i = 1; i <= VAMPIREINPUTS; i++) {
    $('#vampire_count_' + i).val("");
  }
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
  $('#transportation_results11').val(transportationCarbonBefore.toFixed(2));

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
  $('#transportation_results15').val(totalSavings.toFixed(2));

  transportationCarbonBefore *= 36;
  $('#transportation_results12').val(transportationCarbonBefore.toFixed(2));
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
// $('#transportation_input1').val(20);
// $('#transportation_input2').val(18);
// $('#transportation_input3').val(4);
// $('#transportation_input4').val(3);
// $('#transportation_input5').val(18);
// $('#transportation_input6').val(33);
// $('#transportation_input7').val(4);
// $('#transportation_input8').val(5);
// $('#transportation_input9').val(23);
// $('#transportation_input10').val(34);
// $('#transportation_input11').val(2);
// $('#transportation_input12').val(4);
// $('#transportation_input13').val(1);
// $('#transportation_input14').val(1);

// *****Trash Content Calculations*****
const TRASHINPUTS = 11;

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
  document.getElementById('trash_results1').value = answer;

  var trashinput3 = document.getElementById('trash_input3').value;
  var trashinput4 = document.getElementById('trash_input4').value;

  var answer2 = (parseInt(trashinput3) * answer) * 0.36; //old value which is 1.27 new one should be 0.36



  document.getElementById('trash_summary1').value = answer2; //changed from trash_results2 to trashsummary to be more consistent




  var answer3 = (parseInt(trashinput4) * answer) * 0.36;
  document.getElementById('trash_summary3').value = answer3.toFixed(2);

  var answer4 = answer2 - answer3;
  document.getElementById('trash_summary5').value = answer4.toFixed(2);

  var answer5 = answer2 * 36;
  document.getElementById('trash_summary2').value = answer5.toFixed(2);
  beforeTrashCost = answer5 * 0.0004; //this is cost per pounds this is also used for cost savings portion for summary

  trashCarbonBefore = answer5; //this is used for the chart
  //1) before action carbon x36 week
  document.getElementById("sumTrashBefore").innerHTML = answer5.toFixed(2);


  //first test for rounding decimals to 2 starts here 4.08pm
  //will implement later if required as of currently, it is good.
  var answer6 = answer3 * 36;

  document.getElementById('trash_summary4').value = answer6.toFixed(2);
  //2) after action carbon x36 week
  trashCarbonAfter = answer6;
  document.getElementById("sumTrashAfter").innerHTML = answer6.toFixed(2);
  afterTrashCost = answer6 * 0.0004; //this is cost per pounds and also used for cost savings portion for summary

  var answer7 = answer5 - answer6;
  document.getElementById('trash_summary6').value = answer7.toFixed(2);

  //3) cost savings x constant value
  var trashCostSavings = 0;
  trashCostSavings = beforeTrashCost - afterTrashCost;
  document.getElementById("sumTrashEmissionSavings").innerHTML = answer7.toFixed(2);
  document.getElementById("sumTrashCostSavings").innerHTML = trashCostSavings.toFixed(2);
}

// 4/17/20 3:15pm have added .toFixed(2) to the results in order to round the decimals.


// Clear input values for trash contents
$('#btn_reset_trash').click(function () {
  for (let i = 1; i <= TRASHINPUTS; i++) {
    $('#trash_input' + i).val("");
    $('#trash_results' + i).val("");
    $('#trash_summary' + i).val("");

  }
})

// *****Paper Content Calculations*****
const PAPERINPUTS = 12;

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
    document.getElementById('paper_results1').value = panswer1;
  } else if (paperoption1 == "30") {
    panswer1 = parseInt(paperinput1) * 37;
    beforeTotalCost = 11.49 * paperinput1;
    presult1 = panswer1;
    document.getElementById('paper_results1').value = panswer1;

  } else if (paperoption1 == "100") {
    panswer1 = parseInt(paperinput1) * 19;
    beforeTotalCost = 13.09 * paperinput1;
    presult1 = panswer1;
    document.getElementById('paper_results1').value = panswer1;


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
    document.getElementById('paper_results2').value = panswer2;
    paperCost = panswer2 * 10.99;
    document.getElementById("sumPaperCostSavings").innerHTML = paperCost;

  } else if (paperoption2 == "30") {
    panswer2 = parseInt(paperinput2) * 37;
    afterTotalCost = 11.49 * paperinput2;
    presult2 = panswer2;
    document.getElementById('paper_results2').value = panswer2;
    paperCost = panswer2 * 11.49;
    document.getElementById("sumPaperCostSavings").innerHTML = paperCost;

  } else if (paperoption2 == "100") {
    panswer2 = parseInt(paperinput2) * 19;
    afterTotalCost = 13.09 * paperinput2;
    presult2 = panswer2;
    document.getElementById('paper_results2').value = panswer2;
    paperCost = panswer2 * 13.09;
    document.getElementById("sumPaperCostSavings").innerHTML = paperCost;
  }

  var totalCost = beforeTotalCost - afterTotalCost;
  $('#sumPaperCostSavings').text(totalCost.toFixed(2));


  panswersum1 = panswer1;
  document.getElementById('paper_summary1').value = panswer1;
  panswersum2 = panswer2;
  document.getElementById('paper_summary3').value = panswer2;


  panswerDIFF = panswer1 - panswer2;
  document.getElementById('paper_summary5').value = panswerDIFF;

  panswersum3 = panswer1 * 36;
  document.getElementById('paper_summary2').value = panswersum3;


  //somewhere here for carbon before for summary
  paperCarbonBefore = panswersum3;
  document.getElementById("sumPaperBefore").innerHTML = panswersum3;

  panswersum4 = panswer2 * 36;
  document.getElementById('paper_summary4').value = panswersum4;
  //somewhere here for carbon after for summary
  paperCarbonAfter = panswersum4;
  document.getElementById("sumPaperAfter").innerHTML = panswersum4;

  panswerDIFF2 = panswersum3 - panswersum4;
  document.getElementById('paper_summary6').value = panswerDIFF2;
  //somewhere here for cost savings x some constant value?
  document.getElementById("sumPaperEmissionSavings").innerHTML = panswerDIFF2;

  console.log(panswer1);
  console.log(panswer2);


}
// Clear input values for paper contents
//have added additional parameters to reset the selected values as of 4/15/20 7pm
$('#btn_reset_paper').click(function () {
  for (let i = 1; i <= PAPERINPUTS; i++) {
    $('#paper_input' + i).val(""); //paper inputs
    $('#yn' + i).val(""); //percentage drop down option
    $('#paper_results' + i).val(""); //first two results
    $('#paper_summary' + i).val(""); //summary results
  }
})



// *****Solid Waste Plastic Bottles & Beverage Cups Content Calculations*****
const BOTTLESCUPSINPUTS = 8;
const BOTTLESCUPSRESULTS = 12;
// Calculate carbon impact from user inputs
$('#btn_calculate_bottlesCups').click(function () {
  calculate1();
  reCalculateSummary();
})

var bottleCarbonBefore = 0;
var bottleCarbonAfter = 0;

calculate1 = function () {

  var bottleinput1 = document.getElementById('bottles_input1').value;
  var bottleinput2 = document.getElementById('bottles_input2').value;
  var bottleinput3 = document.getElementById('bottles_input7').value;
  var bottleinput4 = document.getElementById('bottles_input8').value;
  var bottleinput5 = document.getElementById('bottles_input3').value;
  var bottleinput6 = document.getElementById('bottles_input4').value;
  var bottleinput7 = document.getElementById('bottles_input5').value;
  var bottleinput8 = document.getElementById('bottles_input6').value;

  var answer = (parseInt(bottleinput1) * BOTTLEWEIGHS);
  document.getElementById('bottles_results1').value = answer.toFixed(2);

  var answer2 = (parseInt(bottleinput2) * BOTTLEWEIGHS);
  document.getElementById('bottles_results2').value = answer2.toFixed(2);

  var answer3 = (answer * PETREDUCED);
  document.getElementById('bottles_results3').value = answer3.toFixed(2);

  var answer4 = (answer2 * PETREDUCED);
  document.getElementById('bottles_results4').value = answer4.toFixed(2);

  //question #2 bottles
  //before taking action
  if (bottleinput3 == "") {
    answer5 = "";
    document.getElementById('bottles_results5').value = answer5.toFixed(2);
  } else if (bottleinput3 == "1.15") {
    answer5 = answer * PETRECYCLED;
    document.getElementById('bottles_results5').value = answer5.toFixed(2);
  } else if (bottleinput3 == "0") {
    answer5 = answer * 0;
    document.getElementById('bottles_results5').value = answer5.toFixed(2);
  }

  //question #2 bottles
  //after taking action
  if (bottleinput4 == "") {
    answer6 = "";
    document.getElementById('bottles_results6').value = answer6.toFixed(2);
  } else if (bottleinput4 == "1.15") {
    answer6 = answer2 * PETRECYCLED;
    document.getElementById('bottles_results6').value = answer6.toFixed(2);
  } else if (bottleinput4 == "0") {
    answer6 = answer2 * 0;
    document.getElementById('bottles_results6').value = answer6.toFixed(2);
  }

  //question #3 cups
  //before taking action
  if (bottleinput5 == "0") {
    canswer = parseInt(bottleinput7) * COPERCUP;
  } else if (bottleinput5 == "1") {
    canswer = parseInt(bottleinput7) * 0;
  } else if (bottleinput5 == "0.25") {
    canswer = parseInt(bottleinput7) * COPERCUP;
  }

  //question #3 cups
  //after taking action
  if (bottleinput6 == "0") {
    canswer1 = parseInt(bottleinput8) * COPERCUP;
  } else if (bottleinput6 == "1") {
    canswer1 = parseInt(bottleinput8) * 0;
  } else if (bottleinput6 == "0.25") {
    canswer1 = parseInt(bottleinput8) * COPERCUP;
  }

  bottleSavings = ((bottleinput1 - bottleinput2) * 36 * AVGCOSTBOTTLE);
  bottleSavings1 = ((bottleinput7 - bottleinput8) * 36 * AVGCOSTBEVCUP);
  bottleSavings2 = (bottleSavings + bottleSavings1);
  document.getElementById("sumPlasticCostSavings").innerHTML = bottleSavings2.toFixed(2);

  var canswer2 = (canswer * 36);
  var canswer3 = (canswer1 * 36);
  var canswer4 = (canswer - canswer1);
  var canswer5 = (canswer2 - canswer3);

  //before taking action
  //CO2 emissions per week
  var answer7 = (answer3 - answer5);
  var answer7_1 = (answer7 + canswer);
  document.getElementById('bottles_results7').value = answer7_1.toFixed(2);

  //before taking action
  //CO2 emissions per 36-week school year
  var answer8 = (answer7 * 36);
  var answer8_1 = (answer8 + canswer2);
  document.getElementById('bottles_results8').value = answer8_1.toFixed(2);
  bottleCarbonBefore = answer8_1;
  document.getElementById("sumPlasticBefore").innerHTML = answer8_1;

  //after taking action
  //CO2 emissions per week
  var answer9 = (answer4 - answer6);
  var answer9_1 = (answer9 + canswer1);
  document.getElementById('bottles_results9').value = answer9_1.toFixed(2);

  //after taking action
  //CO2 emissions per 36-week school year
  var answer10 = (answer9 * 36);
  var answer10_1 = (answer10 + canswer3);
  document.getElementById('bottles_results10').value = answer10_1.toFixed(2);
  bottleCarbonAfter = answer10_1;
  document.getElementById("sumPlasticAfter").innerHTML = answer10_1.toFixed(2);

  //Total CO2 emissions savings
  //CO2 emissions per week
  var answer11 = (answer7 - answer9);
  var answer11_1 = (answer11 + canswer4);
  document.getElementById('bottles_results11').value = answer11_1.toFixed(2);

  //Total CO2 emissions savings
  //CO2 emissions per 36-week school year
  var answer12 = (answer11 * 36);
  var answer12_1 = (answer12 + canswer5);
  document.getElementById('bottles_results12').value = answer12_1.toFixed(2);
  document.getElementById("sumPlasticEmissionSavings").innerHTML = answer12_1;
}

// Clear input values for Solid Waste Plastic Bottles & Beverage Cups
$('#btn_reset_bottlesCups').click(function () {
  for (let i = 1; i <= BOTTLESCUPSINPUTS; i++) {
    $('#bottles_input' + i).val("");
  }
  for (let i = 1; i <= BOTTLESCUPSRESULTS; i++) {
    $('#bottles_results' + i).val("");
  }
  bottleCarbonBefore = 0;
  bottleCarbonAfter = 0;
})

// *****Solid Waste Food Content Calculations*****
const FOODINPUTS = 10; //this input is literally all the inputs for food
const FOODSRESULTS = 8; // not sure if this is actually used for the reset to be honest.
// Calculate carbon impact from user inputs
$('#btn_calculate_FOOD').click(function () {
  calculate3();
  reCalculateSummary();
})

var foodCarbonBefore = 0;
var foodCarbonAfter = 0;

calculate3 = function () {
  //food calculations

  //this is creating the first two inputs as variables and two results as variables
  var foodinput1 = document.getElementById("food_input1").value; //before

  var foodinput2 = document.getElementById("food_input2").value; //after

  foodanswer1 = parseInt(foodinput1)*1.9;
  foodanswer2 = parseInt(foodinput2)*1.9;

  document.getElementById("food_results1").value = foodanswer1.toFixed(2);
  document.getElementById("food_results2").value = foodanswer2.toFixed(2);

  document.getElementById("food_results3").value = foodanswer1.toFixed(2); // before CO2 emissions SUMMARY (a bit confused whether its pounds to CO2 or actual waste lbs)

  document.getElementById("food_results5").value = foodanswer2.toFixed(2); // after CO2 emissions SUMMARY

  document.getElementById("food_results4").value = (foodanswer1*36).toFixed(2); // this is for the before section times 36 as for 36 weeks
  foodCarbonBefore = (foodanswer1*36).toFixed(2);
  console.log(foodCarbonBefore);
  document.getElementById("food_results6").value = (foodanswer2*36).toFixed(2); // this is for the after section times 36 as for 36 weeks
  foodCarbonAfter = (foodanswer2*36).toFixed(2);
  console.log(foodCarbonAfter);
  document.getElementById("food_results7").value = (foodanswer1+foodanswer2).toFixed(2);

  document.getElementById("food_results8").value = ((foodanswer1*36)-(foodanswer2*36)).toFixed(2); //this is the result for total CO2 emissions saved

  document.getElementById("sumFoodBefore").innerHTML = (foodanswer1*36).toFixed(2); // this is for the SUMMARY PAGE

  document.getElementById("sumFoodAfter").innerHTML = (foodanswer2*36).toFixed(2); // this is for the SUMMARY PAGE

  document.getElementById("sumFoodEmissionSavings").innerHTML = ((foodanswer1*36)-(foodanswer2*36)).toFixed(2); //summary page
}

// Clear input values for Solid Waste Food
$('#btn_reset_food').click(function () {
  for (let i = 1; i <= FOODINPUTS; i++) {
    $('#food_input' + i).val("");
    $('#food_results' + i).val("");
  }
  foodCarbonBefore = 0;
  foodCarbonAfter = 0;
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
    //['Lighting', 3000, 1232],
    ['Energy Vampires', before_vampire, after_vampire],
    ['Appliances', before_appliance, after_appliance],
    ['Transportation', transportationCarbonBefore, transportationCarbonAfter],
    ['Trash', trashCarbonBefore, trashCarbonAfter],
    ['Food', foodCarbonBefore, foodCarbonAfter],
    ['Paper', paperCarbonBefore, paperCarbonAfter],
    ['Plastics', bottleCarbonBefore, bottleCarbonAfter],
    //['Cups', 1030, 540]
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
  totalBeforeAction += parseFloat($('#sumFoodBefore').text());
  totalBeforeAction += parseFloat($('#sumPlasticBefore').text());
  //totalBeforeAction += parseFloat($('#sumBeverageBefore').text());
  $('#sumTotalBefore').text(totalBeforeAction.toFixed(2));

  // Emissions after taking action sum
  var totalAfterAction = 0;
  totalAfterAction += parseFloat($('#sumLightAfter').text());
  totalAfterAction += parseFloat($('#sumVampireAfter').text());
  totalAfterAction += parseFloat($('#sumOtherAfter').text());
  totalAfterAction += parseFloat($('#sumTranAfter').text());
  totalAfterAction += parseFloat($('#sumTrashAfter').text());
  totalAfterAction += parseFloat($('#sumPaperAfter').text());
  totalAfterAction += parseFloat($('#sumFoodAfter').text());
  totalAfterAction += parseFloat($('#sumPlasticAfter').text());
  //totalAfterAction += parseFloat($('#sumBeverageAfter').text());
  $('#sumTotalAfter').text(totalAfterAction.toFixed(2));

  // Emissions savings sum
  var totalEmissionSavings = 0;
  totalEmissionSavings += parseFloat($('#sumLightEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumVampireEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumOtherEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumTranEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumTrashEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumPaperEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumFoodEmissionSavings').text());
  totalEmissionSavings += parseFloat($('#sumPlasticEmissionSavings').text());
  //totalEmissionSavings += parseFloat($('#sumBeverageEmissionSavings').text());
  $('#sumEmissionSavings').text(totalEmissionSavings.toFixed(2));

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
  $('#sumElectricitySavings').text(electricitySavings.toFixed(2));

  // Cost savings sum
  var costSavings = 0;
  costSavings += parseFloat($('#sumLightCostSavings').text());
  costSavings += parseFloat($('#sumVampireCostSavings').text());
  costSavings += parseFloat($('#sumOtherCostSavings').text());
  costSavings += parseFloat($('#sumTranCostSavings').text());
  costSavings += parseFloat($('#sumTrashCostSavings').text());
  costSavings += parseFloat($('#sumPaperCostSavings').text());
  costSavings += parseFloat($('#sumPlasticCostSavings').text());
  //costSavings += parseFloat($('#sumBeverageCostSavings').text());
  $('#sumCostSavings').text(costSavings.toFixed(2));

  // Per student calculation
  var studentBefore = totalBeforeAction / numberOfStudents;
  $('#sumStudentTotalBefore').text(studentBefore.toFixed(2));

  var studentAfter = totalAfterAction / numberOfStudents;
  $('#sumStudentTotalAfter').text(studentAfter.toFixed(2));

  var studentEmissions = totalEmissionSavings / numberOfStudents;
  console.log("stud emm" + studentEmissions);
  console.log("totalem" + totalEmissionSavings);
  console.log("num of stud" + numberOfStudents);
  $('#sumStudentEmissionSavings').text(studentEmissions.toFixed(2));

  // Equivalency calculation
  var milesEquivalent = totalEmissionSavings / GALLONCO2 * AVERAGEMPG;
  $('#carEquiv').text(milesEquivalent.toFixed(2));

  var numberOfCars = totalEmissionSavings / YEARLYCARCO2;
  $('#passEquiv').text(numberOfCars.toFixed(2));

  var treeSeedlings = totalEmissionSavings / TREECO2;
  $('#treeEquiv').text(treeSeedlings.toFixed(2));
}
