var total = 0; 
document.getElementById('addEntry').onclick = addFunc;

function addFunc() {
	var inputVal= document.getElementById('newEntry').value;
	inputVal = parseFloat(inputVal);
	var itemPrice = formatCcy(inputVal);

	document.getElementById('entries').innerHTML += '<tr><td></td><td>'+ itemPrice + '</td></tr>';
	var displayVal = document.getElementById('total');
	total += inputVal;
	displayVal.innerHTML = formatCcy(total);
	document.getElementById('newEntry').value = "";

	//get input value
	//add item to UI
	//update the total
	//replace the current total
}

function formatCcy(number){
	number = number.toFixed(2);
	number = '$'+ number;
	return number;
}