window.onscroll = function showHeader() {

    var header = document.querySelector('.navbar');

    if (window.pageYOffset > 50) {
        header.classList.add('navbar_fixed');
    } else {
        header.classList.remove('navbar_fixed');
    }
}

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