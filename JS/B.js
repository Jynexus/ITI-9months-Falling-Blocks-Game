
//B2Game:
function createCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		
		expires = "; expires=" + date.toGMTString();
	}

	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1,c.length);

		if (c.indexOf(nameEQ) == 0) 
			return c.substring(nameEQ.length,c.length);
	}

	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

var lives = 3;
var score = 0;
var genSpeed;
var boxSize = 30;

var difficulty = readCookie("difficulty");

//Difficulty level:
if ( difficulty == "easy" )
	genSpeed = 1000;
else if (difficulty == "normal")
	genSpeed = 800;
else
	genSpeed = 600;

var playingArea = document.getElementById ("playing-area");
var boxDrop = document.getElementById ("box-drop");
var scorePanel = document.getElementById ("scorePanel");

function createBlock() {
	var box = document.createElement ("div");
	box.style.height = boxSize + "px";
	box.style.width = boxSize + "px";
	box.style.position = "absolute";
	box.style.top = "70px";
	box.style.borderRadius = "3px";
	box.style.border = "1px solid #333";

	box.style.left = ( Math.random () * 225 + 530 )  + "px";	//box horizontal position.

	return box;
}

function getBlockColor() {
	var rnd = Math.floor ( Math.random () * 11 );
	var color;
	if (rnd < 8)
		color = "green";	//increases score.

	else if (rnd == 8)
		color = "blue";	//increases block size.

	else if (rnd == 9)
		color = "yellow"; //decreases block size.

	else
		color = "red";	//ends the game.

	return color;
}

//generation interval decreases by 50 milliseconds every 15000 milliseconds.
function generateFunction() {
	//generating the boxes:
	generateInt = setInterval (function () {
		var box = createBlock();
		box.style.backgroundColor = getBlockColor();

		playingArea.insertBefore (box, boxDrop); // appending the box to the playing area.

		var topPosition = 70;

		var dropInt = setInterval(function () { // box drop animation.
			if (topPosition < 470 - boxSize / 2) {
				topPosition += 1;
				box.style.top = topPosition + "px";
			}
			else {
				if (box.style.backgroundColor == "green") {
					lives--;
					scorePanel.innerHTML = "<p>Score: " + score + "</p><p>Lives left: " + lives + "</p>";

					if (lives == 0) {
						if (score > readCookie("highscore")) {
							eraseCookie ("highscore")
							createCookie("highscore" , score , 30);
							window.location.href = "C1GameOver.htm";
						}
						else {
							createCookie ("currentscore" , score , 1);
							window.location.href = "C2GameOver.htm";
						}
					}
				}

				box.parentNode.removeChild(box);	//remove boxes that hit the bottom of the playing area.
				clearInterval(dropInt);
			}
		}, 15 );

		//clicking a box event:
		box.addEventListener('click', function () {
			if (box.style.backgroundColor == "green") {
					score++;
					scorePanel.innerHTML = "<p>Score: " + score + "</p><p>Lives left: " + lives + "</p>";
				}
				else if (box.style.backgroundColor == "yellow") {
					if (boxSize > 10)
						boxSize -= 10;
				}
				else if (box.style.backgroundColor == "blue" && boxSize < 70) {
					boxSize += 10;
				}
				else if (box.style.backgroundColor == "red") {
					if (score > readCookie("highscore")) {
						createCookie("highscore", score , 30);
						window.location.href = "C1GameOver.htm";
					}
					else {
						createCookie ("currentscore" , score , 1);
						window.location.href = "C2GameOver.htm";
					}
				}

				box.parentNode.removeChild(box);
				clearInterval(dropInt);
		});

	}, genSpeed) // generateInt

	// call the function again with a delay.
	setTimeout (function () {
		clearInterval (generateInt);
		if (genSpeed > 300)
			genSpeed -= 150;
		generateFunction();
	}, 15000);
}

generateFunction ();