var msg = "sup";

function updateMessage() {
	var el = document.getElementById("message");
	el.textContent = msg;
}

var whatever = document.getElementById("things1");
whatever.innerHTML += "<h3>Money</h3>";

whatever = document.getElementById("things2");
whatever.innerHTML += "<h3>Power</h3>";

whatever = document.getElementById("things3");
whatever.innerHTML += "<h3>Fame</h3>";

var el = document.getElementById('info');
var randomNum = Math.floor((Math.random() * 10) + 1);// Write the number into that element
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';

// updateMessage();