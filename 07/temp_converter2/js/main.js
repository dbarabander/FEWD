document.getElementById('submit').onclick = convertfunc;
document.getElementById('clear').onclick = clearfunc;

function convertfunc(){
	var valueF = document.getElementById('far').value;
	var valueC = document.getElementById('cels').value;

	var valueFl = parseFloat(valueF);
	var valueCl = parseFloat(valueC);


		if (!isNaN(valueCl) || !isNaN(valueFl)){


				if (valueC.length != 0 && valueF.length != 0){
						document.getElementById('error').innerHTML="One box must be empty";
				}
				
				else if (valueC.length == 0) {
						valueCl = ((valueFl-32) * 5) / 9;
						document.getElementById('cels').value = Math.round(valueCl);
			       		// document.getElementById('error').innerHTML="";
				 } 

				else if (valueF.length == 0) {
						valueFl = ((valueCl * (9/ 5)) +32);
						document.getElementById('far').value = Math.round(valueFl);
			      		// document.getElementById('error').innerHTML="";
				}

				else if (valueC.length == 0 && valueF.length == 0){
						document.getElementById('far').value="";
						document.getElementById('cels').value="";
				}
		}
		

	temp(valueFl,valueCl);
	
}

function clearfunc(){
	document.getElementById('far').value="";
	document.getElementById('cels').value="";
	document.getElementById('error').innerHTML="";
	document.getElementsByTagName('body')[0].className = "original";
}

// function classNameForTemperature(temperature) {
//   if (temperature <= 0) {
//     return "coldpic";
//   } else if (temperature < 10) {
//     return "chillypic";
//   } else if (temperature < 29.4) {
//     return "warm";
//   } else {
//     return "hot";
//   }
// }

function temp(valueFl,valueCl){
	if (!isNaN(valueCl) || !isNaN(valueFl)){

		if (valueFl <=32 || valueCl <= 0){
		document.getElementsByTagName('body')[0].className = "coldpic";
		}

		else if ((valueFl>32 && valueFl <50) || (valueCl >= 0 && valueCl<10)) {
		document.getElementsByTagName('body')[0].className = "chillypic";
		}

		else if ((valueFl>= 50 && valueFl <85) || (valueCl >= 10 && valueCl <29.4)) {
		document.getElementsByTagName('body')[0].className = "warm";
		}

		else {
			document.getElementsByTagName('body')[0].className = "hot";
		}
	}
	else{
		document.getElementById('error').innerHTML="Please enter a number";
	}

}


// function darkfunc(){
// 	document.getElementById('submit').className = 'dark';
// }

// function returnfunc(){
// 	document.getElementById('submit').className = 'buttons';
// }


