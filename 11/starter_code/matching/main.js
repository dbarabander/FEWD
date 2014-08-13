
$(document).ready(function () {

guesses = 0;
var array = ['K','K','Q','Q'];

$('.card').on('click',flipFunction);


function flipFunction(){
        $(this).toggleClass('select');
        if ($(this).hasClass('select') && !$(this).hasClass('Q') && !$(this).hasClass('K') && array.length >0){
        	var rnd = Math.floor(Math.random() * array.length);
        	var pick = array[rnd];
			$(this).addClass(pick);
        	array.splice(rnd,1);
        	//call the sliced array 
        	guesses += 1;
        	console.log(guesses);
        	console.log(array);
        	
        	if (guesses >1) { 
        	compare(array);
        	}
        
		}
}
//Array right
function compare(array){
	if($('.select').length == 2){
			guesses++;
			console.log(guesses);
		if (($('.card.select').hasClass('Q') && !$('.card.select').hasClass('K')) || ($('.card.select').hasClass('K') && !$('.card.select').hasClass('Q'))) {
			
			$('.card.select').addClass('match');
		}

		else{
			$('.card.select').removeClass('select');
			$('.card.select').removeClass('match');

		}
	}
	else if ($('.select').length == 3) {
		console.log('three is a charm');
	}

	else if ($('.select').length == 4) {
		console.log('you won!');
	}
}


// function countElement(item,array) {
//     var count = 0;
//     $.each(array, function(i,v) { 
//     	if (v === item) count++; });
//     return count;
// }

// var a = ['foo','bar','foo'];
// var b = countElement('foo',a); // should return 2

// });


// $(document).ready(function() {
//     var classes = ['K','K','Q','Q'];
//     $('.card').on('click', function() {
//         $(this).toggleClass('select');
//         if ($(this).hasClass('select') && !$(this).hasClass('K') && !$(this).hasClass('Q') && classes.length > 0) {
//             var rnd = randomNumber(0,classes.length);
//             $(this).addClass(classes[rnd]);
//             classes.splice(rnd,1);
//         }
//     });
    
//     /**
//      * @return a random integer in the range [min, max).
//      */
//     function randomNumber(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//     }
});

