//A2Welcome:
//Get data from GET string:
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

function eraseCookie(name) {
	createCookie(name,"",-1);
}

var userName = readCookie ("username");
var difficulty = readCookie ("difficulty");
var score = readCookie("highscore");

var forgetButton = document.getElementById ( "forget" );
var startButton = document.getElementById ( "start" );

var statsElm = document.getElementById ( "stats" );
statsElm.innerHTML = "Welcome " + userName + "! <br />Selected difficulty is: " + difficulty + "<br /> High score: " + score;

forgetButton.onclick = function () {
	event.preventDefault ();
	
	eraseCookie ("username");
	eraseCookie ("difficulty");
	eraseCookie ("highscore");

	window.location.href = "A1Welcome.htm";
}

startButton.onclick = function () {
	event.preventDefault ();
	window.location.href = "B1Game.htm";
}