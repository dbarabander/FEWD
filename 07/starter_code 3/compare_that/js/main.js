document.getElementById('submit').onclick = compare;
var comp;

function compare(){
	var valueA = document.getElementById('a').value;//returns whatever is the value of that input field
	var valueB = document.getElementById('b').value;

	valueA = parseInt(valueA);
	valueB = parseInt(valueB);

	if (valueA > valueB){
		comp =">";
	}
	else if(valueA < valueB){
		comp = "<";
	}
	else if (valueA == valueB){
		comp = "=";
	}

		document.getElementById('compare').innerHTML = comp;
}