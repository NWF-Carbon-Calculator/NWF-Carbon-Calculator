
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
	var lighting_emmissions_row_1_before = (EEF*(number_switches1*watts_bulb1*before_action1/1000));
	var lighting_emmissions_row_2_before = (EEF*(number_switches1*watts_bulb1*before_action2/1000));
	var lighting_emmissions_row_3_before = (EEF*(number_switches1*watts_bulb1*before_action3/1000));
	var lighting_emmissions_row_4_before = (EEF*(number_switches1*watts_bulb1*before_action4/1000));
	var lighting_emmissions_row_5_before = (EEF*(number_switches1*watts_bulb1*before_action5/1000));
	var lighting_emmissions_row_6_before = (EEF*(number_switches1*watts_bulb1*before_action6/1000));
	var lighting_emmissions_row_7_before = (EEF*(number_switches1*watts_bulb1*before_action7/1000));
	var lighting_emmissions_row_8_before = (EEF*(number_switches1*watts_bulb1*before_action8/1000));
	var lighting_emmissions_row_9_before = (EEF*(number_switches1*watts_bulb1*before_action9/1000));
	var lighting_emmissions_row_10_before = (EEF*(number_switches1*watts_bulb1*before_action10/1000));
	//sum of rows
	var lighting_emmissions_before=lighting_emmissions_row_1_before+lighting_emmissions_row_2_before+
	lighting_emmissions_row_3_before+lighting_emmissions_row_4_before+lighting_emmissions_row_5_before+
	lighting_emmissions_row_6_before+lighting_emmissions_row_7_before+lighting_emmissions_row_8_before+
	lighting_emmissions_row_9_before+lighting_emmissions_row_10_before;

	//calculate CO2 after action	
	var lighting_emmissions_row_1_after = (EEF*(number_switches1*watts_bulb1*after_action1/1000));
	var lighting_emmissions_row_2_after = (EEF*(number_switches1*watts_bulb1*after_action2/1000));
	var lighting_emmissions_row_3_after = (EEF*(number_switches1*watts_bulb1*after_action3/1000));
	var lighting_emmissions_row_4_after = (EEF*(number_switches1*watts_bulb1*after_action4/1000));
	var lighting_emmissions_row_5_after = (EEF*(number_switches1*watts_bulb1*after_action5/1000));
	var lighting_emmissions_row_6_after = (EEF*(number_switches1*watts_bulb1*after_action6/1000));
	var lighting_emmissions_row_7_after = (EEF*(number_switches1*watts_bulb1*after_action7/1000));
	var lighting_emmissions_row_8_after = (EEF*(number_switches1*watts_bulb1*after_action8/1000));
	var lighting_emmissions_row_9_after = (EEF*(number_switches1*watts_bulb1*after_action9/1000));
	var lighting_emmissions_row_10_after = (EEF*(number_switches1*watts_bulb1*after_action10/1000));
	//sum of rows
	var lighting_emmissions_after=lighting_emmissions_row_1_after+lighting_emmissions_row_2_after+
	lighting_emmissions_row_3_after+lighting_emmissions_row_4_after+lighting_emmissions_row_5_after+
	lighting_emmissions_row_6_after+lighting_emmissions_row_7_after+lighting_emmissions_row_8_after+
	lighting_emmissions_row_9_after+lighting_emmissions_row_10_after;
	
	//calculate co2 before and after and per 180 day school years and the difference between the two
	document.getElementById('lighting_co2_before').innerHTML = lighting_emmissions_before;
	document.getElementById('lighting_co2_before_180').innerHTML = lighting_emmissions_before*180;
	document.getElementById('lighting_co2_after').innerHTML = lighting_emmissions_after;
	document.getElementById('lighting_co2_after_180').innerHTML = lighting_emmissions_after*180;
	document.getElementById('lighting_co2_saved').innerHTML = lighting_emmissions_before - lighting_emmissions_after;
	document.getElementById('lighting_co2_saved_180').innerHTML = (lighting_emmissions_before - lighting_emmissions_after)*(180);
})//End calculations for school lighting