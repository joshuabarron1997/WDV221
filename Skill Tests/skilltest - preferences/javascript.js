// JavaScript Document

	const fontsArray = ["'Times New Roman', Times, serif", "Arial, Helvetica, sans-serif", "Impact, Charcoal, sans-serif"];

	function changeColor(inColor)
	{
		document.querySelector("body").style.backgroundColor = inColor;	
	}

	function changeFont(font)
	{
		document.querySelector("#container").style.fontFamily = font;
	}

	document.addEventListener('DOMContentLoaded', init, false);
	function init()
	{
		document.getElementById("radio").addEventListener('click', function(){changeColor("red")});
		document.getElementById("radio2").addEventListener('click', function(){changeColor("green")});
		document.getElementById("radio3").addEventListener('click', function(){changeColor("blue")});
		
		
		for (var c = 0; c < fontsArray.length; c++)
		{
			document.querySelector("#selectFont").innerHTML += "<option name = '" + fontsArray[c] + "'>" + fontsArray[c] + "</option>";
		}
		
	}