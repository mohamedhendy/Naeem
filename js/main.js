$(function () {
	var countDownDate = new Date("may 5, 2020 15:37:25").getTime();
	
	// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;
		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Display the result in the element with id="demo"
		document.getElementById("day").innerHTML = days;
		document.getElementById("houre").innerHTML = hours;
		document.getElementById("minute").innerHTML = minutes;
		document.getElementById("second").innerHTML = seconds;
		// If the count down is finished, write some text 
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("timer").innerHTML = "EXPIRED";
		}
	}, 1000);

	// slide 

	$('#info').click(function () {
		$('.left').slideUp();
		$('#back').css('display', 'block');
		$('.leftwanted').slideToggle();
	})
	$('#back').click(function () {
		$('.left').slideDown();
		$(this).css('display', 'none');
		$('.leftwanted').slideToggle();
	})

	// Second 
	$('#cont').click(function () {
		$('.right').slideUp();
		$('#close').css('display', 'block');
		$('.rightwanted').slideDown();
	})

	$('#close').click(function () {
		$('.right').slideToggle();
		$(this).css('display', 'none');
		$('.rightwanted').slideToggle();
	})

	// Nice scroll 
	$("html, body, .leftwanted, .left, .rightwanted, .rightwanted").niceScroll({
		cursorcolor: "#EF0D33",
		cursorwidth: "12px",
		zindex: "100"
	});


})