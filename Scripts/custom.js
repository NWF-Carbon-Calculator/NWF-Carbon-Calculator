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
$('#btn_transportation').click(function () {
    $(".button-wrapper").find(".btn").removeClass('active');
    $(this.id).addClass('active');
    $('.content-container').hide();
    $('#container_transportation').insertAfter('#startDiv');
    $('#container_transportation').show();
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

    gallonsBurnedBeforeAction = gallonsBurned(distanceTraveled, daysDriven, mpg);
    $('#transportation_results1').text(gallonsBurnedBeforeAction);
    weeklyCarbonEmitted = weeklyCarbonDrivingAlone(gallonsBurnedBeforeAction);
    $('#transportation_results3').text(weeklyCarbonEmitted);

    distanceTraveled = $('#transportation_input2').val();
    daysDriven = $('#transportation_input4').val();
    mpg = $('#transportation_input6').val();

    gallonsBurnedAfterAction = gallonsBurned(distanceTraveled, daysDriven, mpg);
    $('#transportation_results2').text(gallonsBurnedAfterAction);
    weeklyCarbonEmitted = weeklyCarbonDrivingAlone(gallonsBurnedAfterAction);
    $('#transportation_results4').text(weeklyCarbonEmitted);

    distanceTraveled = $('#transportation_input1').val();
    gallonsBurnedBeforeAction = gallonsBurned(distanceTraveled, daysCarpool, mpgCarpool);
    $('#transportation_results5').text(gallonsBurnedBeforeAction);
    weeklyCarbonEmitted = weeklyCarbonDrivingCarpool(gallonsBurnedBeforeAction, peopleInCarpool);
    $('#transportation_results7').text(weeklyCarbonEmitted);

    distanceTraveled = $('#transportation_input2').val();
    daysCarpool = $('#transportation_input8').val();
    mpgCarpool = $('#transportation_input10').val();
    peopleInCarpool = $('#transportation_input12').val();
    gallonsBurnedAfterAction = gallonsBurned(distanceTraveled, daysCarpool, mpgCarpool);
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

//Google Charts Testing Core
google.load("visualization", "1.1", {
    packages: ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Category', 'Before Action', 'After Action'],
        ['Lighting', 1000, 400],
        ['Energy Vampires', 1030, 540],
        ['Appliances', 1170, 460],
        ['Transportation', 1000, 400],
        ['Trash', 880, 800],
        ['Paper', 700, 460],
        ['Plastics', 660, 320],
        ['Cups', 1030, 540]
    ]);

    var options = {
        title: "Carbon Emission Results: Before and After Taking Action",
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

// *****Trash Content Calculations*****
const TRASHINPUTS = 4;

// Trash (paul's part)
$('#btn_calculate_trash').click(function () {
    calculate();
})

// Calculate carbon impact from user inputs (trash)
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

    //first test for rounding decimals to 2 starts here 4.08pm
    //will implement later if required as of currently, it is good.
    var answer6 = answer3 * 36;

    document.getElementById('trash_results5').innerHTML = answer6;

    var answer7 = answer5 - answer6;
    document.getElementById('trash_results7').innerHTML = answer7;
}

// Clear input values for trash contents
$('#btn_reset_trash').click(function () {
    for (let i = 1; i <= TRASHINPUTS; i++) {
        $('#trash_input' + i).val("");
    }
})

// paper (paul's part)

const PAPERINPUTS = 10;

$('#btn_calculate_paper').click(function () {
    calculatev2();
})

calculatev2 = function () {


    //two inputs
    var paperinput1 = document.getElementById('paper_input1').value;
    var paperinput2 = document.getElementById('paper_input2').value;



    // two options percentages
    var paperoption1 = document.getElementById('yn1').value;
    var paperoption2 = document.getElementById('yn2').value;

    //two results option for above


    //if states for the following options
    if (paperoption1 == "0") {
        panswer1 = parseInt(paperinput1) * 44;
        presult1 = panswer1;
        document.getElementById('paper_results1').innerHTML = panswer1;
    } else if (paperoption1 == "30") {
        panswer1 = parseInt(paperinput1) * 37;
        presult1 = panswer1;
        document.getElementById('paper_results1').innerHTML = panswer1;

    } else if (paperoption1 == "100") {
        panswer1 = parseInt(paperinput1) * 19;
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

    } if (paperoption2 == "0") {
        panswer2 = parseInt(paperinput2) * 44;
        presult2 = panswer2;
        document.getElementById('paper_results2').innerHTML = panswer2;
    } else if (paperoption2 == "30") {
        panswer2 = parseInt(paperinput2) * 37;
        presult2 = panswer2;
        document.getElementById('paper_results2').innerHTML = panswer2;
    } else if (paperoption2 == "100") {
        panswer2 = parseInt(paperinput2) * 19;
        presult2 = panswer2;
        document.getElementById('paper_results2').innerHTML = panswer2;
    }
    panswersum1 = panswer1;
    document.getElementById('paper_resultsum1').innerHTML = panswer1;
    panswersum2 = panswer2;
    document.getElementById('paper_resultsum3').innerHTML = panswer2;

    panswerDIFF = panswer1 - panswer2;
    document.getElementById('paper_resultsum5').innerHTML = panswerDIFF;

    panswersum3 = panswer1 * 36;
    document.getElementById('paper_resultsum2').innerHTML = panswersum3;

    panswersum4 = panswer2 * 36;
    document.getElementById('paper_resultsum4').innerHTML = panswersum4;

    panswerDIFF2 = panswersum3 - panswersum4;
    document.getElementById('paper_resultsum6').innerHTML = panswerDIFF2;

    console.log(panswer1);
    console.log(panswer2);


}
// Clear input values for paper contents
$('#btn_reset_paper').click(function () {
    for (let i = 1; i <= PAPERINPUTS; i++) {
        $('#paper_input' + i).val("");
    }
})


// *****Plastic Bottle Content Calculations*****
const BOTTLESINPUTS = 4;
// Calculate carbon impact from user inputs
$('#btn_calculate_bottles').click(function () {
    calculate1();
})

calculate1 = function () {
    var bottleinput1 = document.getElementById('bottles_input1').value;
    var bottleinput2 = document.getElementById('bottles_input2').value;

    var answer = (parseInt(bottleinput1) * 0.04);
    document.getElementById('bottles_results1').innerHTML = answer;

    var answer2 = (parseInt(bottleinput2) * 0.04);
    document.getElementById('bottles_results2').innerHTML = answer2;

    var answer3 = (answer * 2.17);
    document.getElementById('bottles_results3').innerHTML = answer3;

    var answer4 = (answer2 * 2.17);
    document.getElementById('bottles_results4').innerHTML = answer4;

    var bottleinput3 = document.getElementById('bottles_input').value;
    var bottleinput4 = document.getElementById('bottles_input0').value;

    //before taking action
    if (bottleinput3 == "") {
        answer5 = "";
        document.getElementById('bottles_results5').innerHTML = answer5;
    } else if (bottleinput3 == "1.15") {
        answer5 = answer * 1.15;
        result = answer5;
        document.getElementById('bottles_results5').innerHTML = answer5;
    } else if (bottleinput3 == "0") {
        answer5 = answer * 0;
        result = answer5;
        document.getElementById('bottles_results5').innerHTML = answer5;
    }

    //after taking action
    if (bottleinput4 == "") {
        answer6 = "";
        result = answer5;
        document.getElementById('bottles_results6').innerHTML = answer6;
    } else if (bottleinput4 == "1.15") {
        answer6 = answer2 * 1.15;
        result = answer6;
        document.getElementById('bottles_results6').innerHTML = answer6;
    } else if (bottleinput4 == "0") {
        answer6 = answer2 * 0;
        result = answer6;
        document.getElementById('bottles_results6').innerHTML = answer6;
    }

    console.log(answer5);
    console.log(answer6);

    var answer7 = (answer3 - answer5);
    document.getElementById('bottles_results7').innerHTML = answer7;

    var answer8 = (answer7 * 36);
    document.getElementById('bottles_results8').innerHTML = answer8;

    var answer9 = (answer4 - answer6);
    document.getElementById('bottles_results9').innerHTML = answer9;

    var answer10 = (answer9 * 36);
    document.getElementById('bottles_results10').innerHTML = answer10;

    var answer11 = (answer7 - answer9);
    document.getElementById('bottles_results11').innerHTML = answer11;

    var answer12 = (answer11 * 36);
    document.getElementById('bottles_results12').innerHTML = answer12;

}

// Clear input values for bottles contents
$('#btn_reset_bottles').click(function () {
    for (let i = 1; i <= BOTTLESINPUTS; i++) {
        $('#bottles_input' + i).val("");
    }
})


// *****Beverage Cups Content Calculations*****
const CUPSINPUTS = 4;
// Calculate carbon impact from user inputs
$('#btn_calculate_cups').click(function () {
    calculate2();
})

calculate2 = function () {

    var cupinput1 = document.getElementById('cups_input1').value;
    var cupinput2 = document.getElementById('cups_input2').value;
    var cupinput3 = document.getElementById('cups_input3').value;
    var cupinput4 = document.getElementById('cups_input4').value;

    //before taking action
    if (cupinput1 == "0") {
        canswer = parseInt(cupinput3) * 0.25;
        document.getElementById('cup_results1').innerHTML = canswer;
    } else if (cupinput1 == "1") {
        canswer = parseInt(cupinput3) * 0;
        document.getElementById('cup_results1').innerHTML = canswer;
    } else if (cupinput1 == "0.25") {
        canswer = parseInt(cupinput3) * 0.25;
        document.getElementById('cup_results1').innerHTML = canswer;
    }

    //after taking action
    if (cupinput2 == "0") {
        canswer1 = parseInt(cupinput4) * 0.25;
        document.getElementById('cup_results3').innerHTML = canswer1;
    } else if (cupinput2 == "1") {
        canswer1 = parseInt(cupinput4) * 0;
        document.getElementById('cup_results3').innerHTML = canswer1;
    } else if (cupinput2 == "0.25") {
        canswer1 = parseInt(cupinput4) * 0.25;
        document.getElementById('cup_results3').innerHTML = canswer1;
    }

    var canswer2 = (canswer * 36);
    document.getElementById('cup_results2').innerHTML = canswer2;

    var canswer3 = (canswer1 * 36);
    document.getElementById('cup_results4').innerHTML = canswer3;

    console.log(canswer);
    console.log(canswer1);

    var canswer4 = (canswer - canswer1);
    document.getElementById('cup_results5').innerHTML = canswer4;

    var canswer5 = (canswer2 - canswer3);
    document.getElementById('cup_results6').innerHTML = canswer5;

}

// Clear input values for bottles contents
$('#btn_reset_cups').click(function () {
    for (let i = 1; i <= CUPSINPUTS; i++) {
        $('#cups_input' + i).val("");
    }
})

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

const VAMPIREINPUTS = 11;
var b_action;
var a_action;
var total;
var totalkWhPerSchoolYear;
var totalCO2Per16HrNight;
var totalCO2PerSchoolYear;
var emissionsFactor = 1.2;
var before_result_day = 0;
var before_result_year = 0;
var after_result_day = 0;
var after_result_year = 0;
var total_result_day= 0;
var total_result_year= 0;

$('#btn_calculate_vampire').click(function () {
    for (i=1; i <= VAMPIREINPUTS; i++) {
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

        console.log(before_action);
        console.log(after_action);
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
        $('#vampire_before_kWhPerDay_' + i).val(before_totalOvernight);
        $('#vampire_after_kWhPerDay_' + i).val(after_totalOvernight);

        $('#vampire_before_kWhPerSchoolYr_' + i).val(before_totalkWhPerYear);
        $('#vampire_after_kWhPerSchoolYr_' + i).val(after_totalkWhPerYear);

        $('#vampire_before_CO2PerDay_' + i).val(before_totalCO2PerNight);
        $('#vampire_after_CO2PerDay_' + i).val(after_totalCO2PerNight);

        $('#vampire_before_CO2PerSchoolYr_' + i).val(before_totalCO2PerYear);
        $('#vampire_after_CO2PerSchoolYr_' + i).val(after_totalCO2PerYear);
        //add up totals
        before_result_day += parseInt(before_totalCO2PerNight);
        before_result_year += parseInt(before_totalCO2PerYear);

        after_result_day += parseInt(after_totalCO2PerNight);
        after_result_year += parseInt(after_totalCO2PerYear);

        total_result_day = before_result_day - after_result_day;
        total_result_year = before_result_year - after_result_year;
        //set totals
        $('#before_result_day').val(before_result_day);
        $('#before_result_year').val(before_result_year);

        $('#after_result_day').val(after_result_day);
        $('#after_result_year').val(after_result_year);

        $('#total_result_day').val(total_result_day);
        $('#total_result_year').val(total_result_year);
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

function createRowHTMLAppliance(counter) {
    var stringHTML = "<tr><td scope='row'>" + counter + "</td>";
    stringHTML += "<td><input type='text' id='appliance_wattage" + counter + "'></td>";
    stringHTML += "<td><input type='text' id='appliance_count" + counter + "'></td>";
    stringHTML += "<td><input type='text' id='appliance_before_option" + counter + "'></td>";
    stringHTML += "<td><input type='text' id='appliance_after_option" + counter + "'></td></tr>";
    return stringHTML;
}
$('#appliance_btn_add_row').click(function () {
    numberOfRows++;
    var row = createRowHTMLAppliance(numberOfRows);
    $("#table_appliance tbody").append(row);
})


$('#btn_calculate_appliance').click(function () {
  var wattage = parseInt($('#appliance_wattage').val());
  console.log(wattage);
  var count = parseInt($('#appliance_count').val());
  var before_hours = parseInt($('#appliance_before_option').val());
  var after_hours = parseInt($('#appliance_after_option').val());

  var totalPerDayBefore = totalkWHPerDay(wattage, count, before_hours);
  console.log(totalPerDayBefore);
  var totalPerYearBefore = totalkwHPerYear(totalPerDayBefore);
  var totalCO2PerDayBefore = totalCO2Per16HrNight(totalPerDayBefore, emissionsFactor);
  var totalCO2PerYearBefore = totalCO2PerSchoolYear(totalCO2PerDayBefore);

  var totalPerDayAfter = totalkWHPerDay(wattage, count, after_hours);
  var totalPerYearAfter = totalkwHPerYear(totalPerDayAfter);
  var totalCO2PerDayAfter = totalCO2Per16HrNight(totalPerDayAfter, emissionsFactor);
  var totalCO2PerYearAfter = totalCO2PerSchoolYear(totalCO2PerDayAfter);

  $('#appliance_before_per_day').val(totalPerDayBefore);
  $('#appliance_after_per_day').val(totalPerDayAfter);
  $('#appliance_before_per_year').val(totalPerYearBefore);
  $('#appliance_after_per_year').val(totalPerYearAfter);
  $('#appliance_before_CO2_per_day').val(totalCO2PerDayBefore);
  $('#appliance_after_CO2_per_day').val(totalCO2PerDayAfter);
  $('#appliance_before_CO2_per_year').val(totalCO2PerYearBefore);
  $('#appliance_after_CO2_per_year').val(totalCO2PerYearAfter);

  var before_appliance_result_day = parseInt(totalCO2PerDayBefore);
  var before_appliance_result_year = parseInt(totalCO2PerYearBefore);

  var after_appliance_result_day = parseInt(totalCO2PerDayAfter);
  var after_appliance_result_year = parseInt(totalCO2PerYearAfter);

  var total_appliance_result_day = before_appliance_result_day - after_appliance_result_day;
  var total_appliance_result_year = before_appliance_result_year - after_appliance_result_year;
  //set totals
  $('#before_appliance_result_day').val(before_appliance_result_day);
  $('#before_appliance_result_year').val(before_appliance_result_year);

  $('#after_appliance_result_day').val(after_appliance_result_day);
  $('#after_appliance_result_year').val(after_appliance_result_year);

  $('#total_appliance_result_day').val(total_appliance_result_day);
  $('#total_appliance_result_year').val(total_appliance_result_year);
})

$('#appliance_wattage').val(120);
$('#appliance_count').val(1);
$('#appliance_before_option').val(2);
$('#appliance_after_option').val(2);
