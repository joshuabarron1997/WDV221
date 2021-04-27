// JavaScript Document

	function enlargeImage(inImage)	{
		//alert("inside enlargeImage()" );
		document.getElementById(inImage).style.transform = "scale(2,2)"; //I changed get element ID to take the parameter instead of a static value
	}
	
	function originalSizeImage(inImage)	{
		//alert("inside originalSizeImage()");	
		document.getElementById(inImage).style.transform = "scale(1,1)";	// same here as above				
	}

	var todaysDate = new Date(); // creates a date object to use the day properties
	


	function convertDay()
		{
			
			var today = todaysDate.getDay(); //grabs the current day
			switch(today) // a switch statement to save the correct string for the current day
			{
			case 0:
				today = "Sunday";
				break;
			case 1:
				today = "Monday";
				break;
			case 2:
				today = "Tuesday";
				break;
			case 3:
				today = "Wednesay";
				break;
			case 4:
				today = "Thursday";
				break;
			case 5:
				today = "Friday";
				break;
			case 6:
				today = "Saturday";
				break;		
			default:
				today = "";
				break;
			}
		return today; // returns the correct string
		}
	
	function convertMonth() // this function converts the month property to the string form
		{
			
			var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]; 
			return months[ todaysDate.getMonth()]; // returns the proper month
		}
	
	function date() // I made a function here becasue I did not how large the line was otherwise
	{
		document.write(convertDay() + ", " + convertMonth() + " " + todaysDate.getDate() + ", " + todaysDate.getFullYear());
	}



	var customerName = "Please Sign In"; // creating the customer name variable with some default text
	
	function signInPrompt() // function to sign in with a prompt
	{
		customerName = prompt("Please enter your name."); // prompts name
		document.getElementById("login").innerHTML = "Hello, " + customerName.toUpperCase(); // changes the customeName variable to reflect the new info
	}
	


	// step 5 & 6
	document.addEventListener('DOMContentLoaded', init, false);
	function init()
	{
		document.getElementById("bgColor_1").addEventListener('click', function(){bodyColor("blue")});
		document.getElementById("bgColor_2").addEventListener('click', function(){bodyColor("lightblue")});
		document.getElementById("bgColor_3").addEventListener('click', function(){bodyColor("darkblue")});
		document.getElementById("signin").addEventListener('click', signInPrompt);



		function bodyColor(color)
		{
			document.getElementById("body").style.backgroundColor = color;
		}
		
		document.getElementById("copyright").innerHTML = "Copyright &copy; " + todaysDate.getFullYear();
		document.getElementById("login").innerHTML = "Hello, " + customerName;
	}


























