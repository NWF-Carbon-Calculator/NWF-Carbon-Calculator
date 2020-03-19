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
    var answer2 = (parseInt(trashinput3)*answer)*0.36; //old value which is 1.27 new one should be 0.36
    document.getElementById('trash_results2').innerHTML = answer2;

    var answer3 = (parseInt(trashinput4)*answer)*0.36;
    document.getElementById('trash_results4').innerHTML = answer3;

    var answer4 = answer2 - answer3;
    document.getElementById('trash_results6').innerHTML = answer4;

    var answer5  = answer2*36;
    document.getElementById('trash_results3').innerHTML = answer5;

    //first test for rounding decimals to 2 starts here 4.08pm
    //will implement later if required as of currently, it is good.
    var answer6 = answer3*36;
    
    document.getElementById('trash_results5').innerHTML = answer6;

    var answer7 = answer5-answer6;
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
    if(paperoption1 == "0") {
        panswer1 = parseInt(paperinput1)*44;
        presult1 = panswer1;
        document.getElementById('paper_results1').innerHTML = panswer1;
    }else if (paperoption1 == "30") {
        panswer1 = parseInt(paperinput1)*37;
        presult1 = panswer1;
        document.getElementById('paper_results1').innerHTML = panswer1;
        
    } else if (paperoption1 == "100"){
        panswer1 = parseInt(paperinput1)*19;
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

    }if(paperoption2 == "0") {
        panswer2 = parseInt(paperinput2)*44;
        presult2 = panswer2; 
        document.getElementById('paper_results2').innerHTML = panswer2;
    }else if (paperoption2 == "30") {
        panswer2 = parseInt(paperinput2)*37;
        presult2 = panswer2;
        document.getElementById('paper_results2').innerHTML = panswer2;
    } else if (paperoption2 == "100"){
        panswer2 = parseInt(paperinput2)*19;
        presult2 = panswer2;
        document.getElementById('paper_results2').innerHTML = panswer2;
}
panswersum1 = panswer1;
document.getElementById('paper_resultsum1').innerHTML = panswer1;
panswersum2 = panswer2;
document.getElementById('paper_resultsum3').innerHTML = panswer2;

panswerDIFF = panswer1-panswer2;
document.getElementById('paper_resultsum5').innerHTML = panswerDIFF;

panswersum3 = panswer1*36;
document.getElementById('paper_resultsum2').innerHTML = panswersum3;

panswersum4 = panswer2*36;
document.getElementById('paper_resultsum4').innerHTML = panswersum4;

panswerDIFF2 = panswersum3-panswersum4;
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