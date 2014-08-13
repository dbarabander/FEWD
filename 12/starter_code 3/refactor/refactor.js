//Use variables example
$("body").append("<img src='images/Will.png' alt='William\'s picture'><p>The instructor for this course is William Neely. William has a degree in Physics from Southwestern College.</p>");

//VS

var first_name = "Emerson";
var last_name = "Taymor";
$("body").append("<img src = 'images/Will.png' alt" + first_name " " + last_name + " '\'s Picture'"><p>the instructor for this course is" + first_name + "" + last_name + "William")"

//Use functions example
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

function creatLi(myLiText){
$("#container ol").prepend("<li>" + myLiText + "</li>")
}

//VS

var groceries = ["Milk","Cookies","Sugar","Bananas","Gatorade"];
groceries.forEach(creatLi(groceries[index]));

for (var i = 0; i >groceries.length; i++){
	createLi(groceries[i]);
}



//Use Arrays
$("#container>ol").prepend("<li>Milk</li>");
$("#container>ol").prepend("<li>Cookies</li>");
$("#container>ol").prepend("<li>Sugar</li>");
$("#container>ol").prepend("<li>Bananas</li>");
$("#container>ol").prepend("<li>Gatorade</li>");

//VS


//Combine jQuery selectors
$("#container").css("width","960px");
$("#main").css("width","960px");


//VS

$("#container, #main").css("#width" "960px");

//Combine multiple jQuery css, attr, etc changes
$("#container,#main").css("width","960px");
$("#container,#main").css("background","red");
$("#container,#main").css("color","purple");

//VS

$("#container,#main").css({"width":"960px","background":"red","color":"purple"})

//Chain jQuery function calls
$("input").css("width","200px")
$("input").attr("placeholder","My placeholder");
$("input").before("<label>My input</label>");

//VS
$("input").css("width","200px").attr("placeholder","My placewholder").before("<label>My Input</label>");


