// JavaScript Equivelent
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
$('#container_transportation').insertAfter('#startDiv');
$('#container_transportation').toggle();

$('#btn_welcome').click(function() {
    $('#container_welcome').insertAfter('#startDiv');
    $('#container_welcome').toggle();
})

$('#btn_electricity').click(function() {
    $('#container_electricity').insertAfter('#startDiv');
    $('#container_electricity').toggle();
})

$('#btn_record-data').click(function() {
    $('#container_record-data').insertAfter('#startDiv');
    $('#container_record-data').toggle();
})

$('#btn_summary').click(function() {
    $('#container_summary').insertAfter('#startDiv');
    $('#container_summary').toggle();
})

$('#btn_methodology').click(function() {
    $('#container_methodology').insertAfter('#startDiv');
    $('#container_methodology').toggle();
})

$('#btn_transportation').click(function() {
    $('#container_transportation').insertAfter('#startDiv');
    $('#container_transportation').toggle();
})
