A0Splash:
//check for cookie: 

setTimeout ( function () {
	if ( document.cookie )
		window.location.href = "A2Welcome.htm";
	else
		window.location.href = "A1Welcome.htm";
} , 1000 );