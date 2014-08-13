document.getElementById('submit').onclick = convertfunc;

function convertfunc(){
	var valueF = document.getElementById('far').value;
	var valueC = document.getElementById('cels').value;

	valueF = parseFloat(valueF);
	valueC = parseFloat(valueC);

	if (valueC == 0 && valueF != 0) {
			valueC = ((valueF-32) * 5) / 9;
			document.getElementById('cels').value = valueC;
	} 

	else (valueC != 0 && valueF == 0) {
			valueF = ((valueC*2)+30);
			document.getElementById('far').value = valueF;
	}
	
}
