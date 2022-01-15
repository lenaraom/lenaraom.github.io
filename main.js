$(function(){
	$(".head_inner nav ul li.switch a").on("click", function(e){
		$("body").toggleClass("switchMode");
		e.preventDefault();
	});
}); 

window.onload = function() {
	let mask = document.getElementById('mask');
	mask.style.display = 'none';
};

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Danke!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


