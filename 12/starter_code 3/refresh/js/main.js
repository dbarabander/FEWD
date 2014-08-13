
function redBox(){
	$("#red-box").addClass("redBackground");
}

function replaceName(){
	$("#name span").replaceWith( "<h2>Dan</h2>" );

	// this also works--> $("name span").html("Dan");
}

function green(){
	$("#green-text").addClass("greenText");
}

function border(){
	$(".box .change-this").addClass("borderAdd");
	$(".box").eg(3).find(".change-this").addClass("border");
	//we don't need the period when assignign the class, only when selecting it
}

$(document).ready(function(){
	$("#red-box").on('click', redBox);
	$("#name").on('click', replaceName);
	$("#green-text").on('click', green);
	$(".box").on('click', border);



});