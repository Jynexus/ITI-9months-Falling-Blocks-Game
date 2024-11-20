//A1Welcome:
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie() {
	createCookie("username","",-1);
}

var userName = document.forms.playerProfile.username.value;
var difficulty = document.forms.playerProfile.difficulty.value;
var startButton = document.forms.playerProfile.start;

	function cook () {
	event.preventDefault ();
	var userName = document.forms.playerProfile.username.value;
	var difficulty = document.forms.playerProfile.difficulty.value;
	var startButton = document.forms.playerProfile.start;
	createCookie ( "username" , userName , 30 );
	createCookie ( "difficulty" , difficulty , 30);
	createCookie ( "highscore" , 0 , 30);

	window.location.href = "B1Game.htm";
}