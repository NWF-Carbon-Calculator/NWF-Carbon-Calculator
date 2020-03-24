

// Calculate and display Electricity Emission Factor (EEF)
$('#btn_calculate_EEF').click(function () {
	
	//get the value of the factors to be used in calculations
	var coal_factor = document.getElementById("coal_factor").innerHTML;
	var coal_percent = document.getElementById("coal_percent").value;
	var oil_factor = document.getElementById("oil_factor").innerHTML;
	var oil_percent = document.getElementById("oil_percent").value;
	var nat_gas_factor = document.getElementById("nat_gas_factor").innerHTML;
	var nat_gas_percent = document.getElementById("nat_gas_percent").value;
	
	//Is radio button for national average checked 
	if(document.getElementById('national_average').checked) {
		//Calculate the national average EEF
		var EEF = coal_factor*coal_percent+oil_factor*oil_percent+nat_gas_factor*nat_gas_percent;
		//set text of EEF to national average
		document.getElementById("national_average_factor").innerHTML = EEF;
	//Is radio button for custom average checked 
	}else if(document.getElementById('custom_average').checked) {
		//get the custom values
		var coal_percent = document.getElementById("custom_coal_percent").value;
		var oil_percent = document.getElementById("custom_oil_percent").value;
		var nat_gas_percent = document.getElementById("custom_nat_gas_percent").value;
		//Calculate the custom EEF
		var custom_EEF = coal_factor*coal_percent+oil_factor*oil_percent+nat_gas_factor*nat_gas_percent;
		//set text of EEF to custom value
		document.getElementById("national_average_factor").innerHTML = custom_EEF;
  
}

})