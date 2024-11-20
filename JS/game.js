/*A0Splash:
//check for cookie: 
if ( document.cookie )
	var userName = ;
	var difficulty = ;
	var score = ;
	window.location.href = "A2Welcome.htm?username="+userName+"&difficulty="+difficulty+"&highscore="+score;
else
	window.location.href = "A1Welcome.htm";
*/

/*A1Welcome:
var userName = document.forms.playerProfile.username.value;
var difficulty = document.forms.playerProfile.difficulty.value;
var startButton = document.forms.playerProfile.start;

startButton.onclick = function () {
	event.preventDefault ();
	document.cookie = "username="+userName+",difficulty="+difficulty+"score=0;expires=18 Dec 2018 12:00:00 UTC; path=/";
	window.location.href = "B2Game.htm?username="+userName+"&difficulty="+difficulty;
}
*/

/*A2Welcome:
//Get data from GET string:
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//All we’d need to do to get the parameters id and page are to call this:
var userName = getUrlVars()["username"];
var difficulty = getUrlVars()["difficulty"];
var score = getUrlVars()["score"];

var forgetButton = document.getElementById ( "forget" );
var startButton = document.getElementById ( "start" );

var statsElm = document.getElementById ( "stats" );
statsElm.innerHTML = "Welcome " + userName + "! <br />Selected difficulty is: " + difficulty + "<br /> High score: " + score;

forgetButton.onclick = function () {
	event.preventDefault ();
	//delete the cookie.
	window.location.href = "A1Welcome.htm";
}

startButton.onclick = function () {
	event.preventDefault ();
	window.location.href = "B2Game.htm?username=" + userName + "&difficulty=" + difficulty +"&highscore=" + score;
}
*/

/*B2Game:

//The Code
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//All we’d need to do to get the parameters id and page are to call this:
var first = getUrlVars()["id"];
var second = getUrlVars()["page"];

//Difficulty level:
var genSpeed;
if ( difficulty == "Easy" )
	genSpeed = 1000;
else if ( difficulty == "Normal" )
	genSpeed = 800;
else
	genSpeed = 600;

var playingArea = document.getElementById ( "playing-area" );
var boxProto = document.createElement ("div");

greenBox.style.height = "20px";
greenBox.style.width = "20px";
greenBox.style.backgroundColor = "green";
*/

/* random function check:
var rnd;
var green = 0
var brown = 0;
var red = 0;
var blue = 0;

for ( var i = 0 ; i <= 1000 ; i++ ) {
	rnd = Math.floor ( Math.random () * 11 );

	if ( rnd < 8 )
		green++;
	else if ( rnd == 8 )
		brown++;
	else if ( rnd == 9 )
		red++;
	else
		blue++;
}

//generation speed increases every 15000 milliseconds.
genSpeedInt = setInterval ( function () {
	genSpeed++;
} , 15000 );

var leftPosition = 0;
var topPosition = 0;

leftButton[0].onclick = function () {
	if ( rightInt )
		clearInterval ( rightInt );
	
	leftInt = setInterval ( function () {
		box.style.left = leftPosition+"px";
		if ( leftPosition > 0 )
			leftPosition -= 1;

		else
			clearInterval ( leftInt );
	} , 1 );
} */