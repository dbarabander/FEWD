//6 click listeners for nav
//user clicks international tab
//event .preventdefault, don't do what you tought you wanted to do, i'm going to overwrite it. nothing to happen, just want to update content in drawer


//remove active class from all sibling nav elements
//toggleClass for the button ew just clicked 

//check if we added teh active class

// if the element has the class active
// then we know we want the drawer to stay open

//check to see if the drawer/nav is open 
//if it is, show appropriate content-->hiding other content, and showing the content you want for this one
//else if not open
	//slide down drawer
	//show appropraite content

//if element does not have the active class, slide up the door
//toggling checks to see if it's there--> if not there it will add it, if it is there, it will remove it
//dlick on technology, if its not active, it will add it 

$(document).ready(function(){

$('.international').on('click',function(event){
	event.preventDefault();

	$('#primary-nav .international').siblings().removeClass('active');
	$('#primary-nav .international').toggleClass('active');

if ($('#primary-nav .international').hasClass('active')){//this gives it a class of open {
		if ($('#slide-down').hasClass('slideopen')){
				$('#slide-down .drop.open').hide().removeClass('open');//go find hte slide down div, then find all the elemtns that have the class drop, 
				//but i only care about the one that has the class open...has drop AND open. remove the open class//inside of slide down, there are elements that have drop down, but i only want the one that is open right now
				$('.drop.international').show().addClass('open');
		}//all this is doing is swithcing between th different drops

		else {
			$('#slide-down .drop').hide(); //hides just in case just to insure no flag of content
			$('.drop.international').show().addClass('open');
			$('#slide-down').slideDown(150).addClass('slideopen');
		}
} 
else{
	$('#slide-down').slideUp(150).removeClass('slideopen');
}

	// $('li').attr('class','active');
	//priamry nav is parent of all elements
	//to single , primary-nav would just get main box
	//the space indicates it is a child element of the other one
	//.drop.international ==>//div class = "drop international"
});

$('.politics').on('click',function(event){
	event.preventDefault();

	$('#primary-nav .politics').siblings().removeClass('active');
	$('#primary-nav .politics').toggleClass('active');

	if ($('#primary-nav .politics').hasClass('active')){
		if ($('#slide-down').hasClass('slideopen')) {
			$('#slide-down .drop.open').hide().removeClass('open');
		    $('#slide-down .drop.politics').show().addClass('open');
		    } 

		else {
			$('#slide-down .drop').hide().removeClass('open');
		    $('.drop.politics').show().addClass('open');
			$('#slide-down').slideDown(150).addClass('slideopen');
			}
	}
	else {
		$('#slide-down').slideUp(150).removeClass('slideopen');
		}
 
});

$('.business').on('click',function(event){
	event.preventDefault();

	$('#primary-nav .business').siblings().removeClass('active');
	$('#primary-nav .business').toggleClass('active');

	if ($('#primary-nav .business').hasClass('active')){
		if ($('#slide-down').hasClass('slideopen')){
			$('#slide-down .drop.open').hide().removeClass('open');
			$('#slide-down .drop.business').show().addClass('open');
		}
		else{
			$('#slide-down .drop').hide().removeClass('open');
			$('#slide-down .drop.business').show().addClass('open');
			$('#slide-down').slideDown(150).addClass('slideopen');
		}
	}

	else{
		$('#slide-down').slideUp(150).removeClass('slideopen');
		}
});

$('.technology').on('click',function(event){
	event.preventDefault();

	$('#primary-nav .technology').siblings().removeClass('active');
	$('#primary-nav .technology').toggleClass('active');

	if ($('#primary-nav .technology').hasClass('active')){
		if ($('#slide-down').hasClass('slideopen')){
			$('#slide-down .drop.open').hide().removeClass('open');
			$('#slide-down .drop.technology').show().addClass('open');
		}
		else{
			$('#slide-down .drop').hide().removeClass('open');
			$('#slide-down .drop.technology').show().addClass('open');
			$('#slide-down').slideDown(150).addClass('slideopen');
		}
	}

	else{
		$('#slide-down').slideUp(150).removeClass('slideopen');
		}
});

$('.culture').on('click',function(event){
	event.preventDefault();

	$('#primary-nav .culture').siblings().removeClass('active');
	$('#primary-nav .culture').toggleClass('active');

	if ($('#primary-nav .culture').hasClass('active')){
		if ($('#slide-down').hasClass('slideopen')){
			$('#slide-down .drop.open').hide().removeClass('open');
			$('#slide-down .drop.culture').show().addClass('open');
		}
		else{
			$('#slide-down .drop').hide().removeClass('open');
			$('#slide-down .drop.culture').show().addClass('open');
			$('#slide-down').slideDown(150).addClass('slideopen');
		}
	}

	else{
		$('#slide-down').slideUp(150).removeClass('slideopen');
		}
});

$('.blogs').on('click',function(event){
	event.preventDefault();

	$('#primary-nav .blogs').siblings().removeClass('active');
	$('#primary-nav .blogs').toggleClass('active');

	if ($('#primary-nav .blogs').hasClass('active')){
		if ($('#slide-down').hasClass('slideopen')){
			$('#slide-down .drop.open').hide().removeClass('open');
			$('#slide-down .drop.blogs').show().addClass('open');
		}
		else{
			$('#slide-down .drop').hide().removeClass('open');
			$('#slide-down .drop.blogs').show().addClass('open');
			$('#slide-down').slideDown(150).addClass('slideopen');
		}
	}

	else{
	
		$('#slide-down').slideUp(150).removeClass('slideopen');
		}
});
});

// $('.politics').on('click',politicsfunc);


// function politicsfunc(){
// $('#primary-nav .politics').siblings.removeClass('active');
// $('#primary-nav .politics').toggleClass('active');

// if $('#primary-nav .politics').hasClass('active'){
// 	if $('.drop .politics'.hasClass('open')) {
// 	   $('.drop.politics').removeClass('open')

// 	};
// }
// if clicked thing is already open and clicked on, minimize it
// if slide thing is out alraedy but clicked thing is not active, make it active

// if $click thing is not already open, open it
// }

// $('.politics').click(#);
// $('.business').click(#);
// $('.technology').click(#);
// $('.culture').click(#);
// $('.blogs').click(#);

// function siblings(){

// }










