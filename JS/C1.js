//C1GameOver:
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

var stats = document.getElementById ("stats");
var playAgainButton = document.getElementById("playAgain");

stats.innerHTML = readCookie("username") + ", You got a new high score!! <br />" + readCookie ("highscore");

playAgainButton.onclick = function () {
	event.preventDefault ();

	window.location.href = "A0Splash.htm";
}