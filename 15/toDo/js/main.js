$(document).ready(function(){

var totalCounter = 0;

$('#add-to-do').click(function(){
var toDo = $('#todo').val();
var toDoItem = "<li> <span class='editable'>" + toDo + "</span> <a class='edit'>Edit</a> <a class='remove'>Remove</a> </li>";
$('#to-do-list').append(toDoItem);
$('#todo').val('');
totalCounter += 1;
updateTotalCounter(totalCounter);
});

$('ul').on('click','.edit',function(){
var editToDo = ($(this).siblings('.editable'));
console.log(editToDo);
var editToDoItem = ($(this).parent('.editable').replaceWith($('<input type = text>').attr({id:'name',value:editToDo.text()})));
$(this).parent().replaceWith(editToDoItem);

//

// 1. Select List Item that the user has clicked on
// 2. Get the text in this list item and store it to a variable
// 3. Replace the text with an input field and update the value to said variable
// 4. Add a save button after the input field
// 5. Select the input field
// 6. Store the value of the input to a variable
// 7. Remove the input and replace the li with the value of the variable

});

$('ul').on('click','.remove',function(){
$(this).parent().remove();
totalCounter-=1;
updateTotalCounter(totalCounter);
});

$('#clear-list').click(function(){
$('li').remove('li');
totalCounter = 0;
updateTotalCounter(totalCounter);

});

$('ul').on('click','li', function(){
$(this).toggleClass("cross");
if($(this).hasClass("cross")){
	totalCounter -= 1;
}

else{
	totalCounter += 1;
}
updateTotalCounter(totalCounter)

});

$('#clear-completed').click(function(){
$('li.cross').remove('li.cross');
});


$('ul').on('hover','li',function(){


});

function updateTotalCounter(totalCounter){
	$('span').html(totalCounter);
}


});






