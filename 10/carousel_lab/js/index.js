
var imagesArray = ["images/food1.jpg","images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg","images/food8.jpg"];

index = 0;
total = 0;
counter = 0
var voteArray = [];

function nextImage(){
	if (index <= 6) {
	index += 1;
	counter +=1;
	changeImage(index);
	console.log(index);
	console.log(counter);
	}
	
};

function previousImage(){
	if (index > 0) {
	index -= 1;
	counter +=1;
	changeImage(index);
	console.log(index);
	console.log(counter);
	}
	
};

function changeImage(index){
	$('#image-to-vote-on').attr('src', imagesArray[index]);
};

function vote(){
	var currentVal = $("select").val();
	currentVal = parseInt(currentVal);
	Math.round(currentVal * 100) / 100
	voteArray.push(currentVal);
	nextImage();
	$("select").val("");

if (index == 7) {
			voteArray.forEach(function(element,index){
				total += element;
		});
		var average = total/voteArray.length;
		$("footer").append("<div id='average'>" + "Your average deliciousness score is: " + average + "</div>");

		}	
}



//counter for image index

//click listener for back and for skip

//function to move forward in the image array

//function to move backward in the image array

//function to update the image source in the DOM

$(document).ready(function(){
	$("input[value='Skip']").on('click', nextImage);
	$("input[value='Back']").on('click', previousImage);
	$("select").on('change', vote);

});
