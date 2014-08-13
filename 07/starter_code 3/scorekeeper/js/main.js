var total = 0;
document.getElementById('add5').onclick= add5; 
// there can only be one id so no [0] needed
document.getElementById('zero').onclick= reset;
document.getElementById('add10').onclick= add10;
document.getElementById('sub1').onclick = sub1;

function add5() {
	total += 5;
	document.getElementById('result').innerHTML = total;
}

function reset() {
	total = 0;
	document.getElementById('result').innerHTML = total;
}

function add10() {
	total += 10;
	document.getElementById('result').innerHTML = total;
}

function sub1() {
	total -= 1;
	document.getElementById('result').innerHTML = total;
}