$(document).ready(function(){
	$("#switcher li").click(function(){
		var theme = $(this).attr("class");
		$("body").attr("class",theme); 
	});
});