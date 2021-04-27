// JavaScript Document
var totalSales = 0;
var orderString = ""; //global variables for all functions to use

function addItem(name, price, quantity) // function to validate and set values
{
	var salesPrice = 0
	var counter = 0;
	var n;
	var p;
	var q;
	if (name.trim() === "") //sets trimmed name unless empty
	{
		document.querySelector("#error").innerHTML = "*Please enter a name"; //sends error
	}
	else
	{
		n = name;
		counter++;
		document.querySelector("#error").innerHTML = "";//clears error
	}
	
	if (isNaN(price) || price.trim() === "") //validtes price
	{
		document.querySelector("#error2").innerHTML = "*Price must be a number"; //sends error
	}
	else
	{
		p = parseFloat(price);
		if (p < 0)
		{
			document.querySelector("#error2").innerHTML = "*Price must be positive"; //sends error
		}
		else
		{
		counter++;
		document.querySelector("#error2").innerHTML = "";//clears error
		}
	}
	
	if (isNaN(quantity))//validates quantity
	{
		document.querySelector("#error3").innerHTML = "*Quantity must be a whole number";//sends error
	}
	else
	{
		quantity = parseFloat(quantity);
		if(Number.isInteger(quantity))
		{
			q = quantity;
			if (q < 0)
			{
				document.querySelector("#error3").innerHTML = "*Quantity must be positive";//sends error
			}
			else
			{
				counter++;
				document.querySelector("#error3").innerHTML = "";//clears error
			}

		}
		else
		{
			document.querySelector("#error3").innerHTML = "*Quantity must be a whole number";//sends error
		}
	}
	
	if (counter !== 3) //if everything runs then continue
	{
		alert("Please fill the form correctly.");
	}
	else
	{
		salesPrice = p * q;
		totalSales = totalSales + salesPrice;
		document.querySelector("#salesPrice").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(salesPrice);
		
		document.querySelector("#totalSales").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalSales);
		
		if (q === 1)
		{
			orderString = n + " " + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(salesPrice);
		}
		else
		{
			orderString = n + "(x" + q +")" + " " + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(salesPrice);
		}
		
		document.querySelector("#ordersSoFar").innerHTML = document.querySelector("#ordersSoFar").innerHTML + "<p><em>" + orderString + "</em></p>";
	}
}

function resetForm() //normal reset
{
	document.querySelector("#salesPrice").innerHTML = 0;
}

function clearOrders() //big reset
{
	document.querySelector("#ordersSoFar").innerHTML = ""; //clears html
	document.querySelector("#totalSales").innerHTML = "";
	totalSales = 0;
}

document.addEventListener('DOMContentLoaded', init, false); //adds listenters when dom loads
function init()
{
	document.querySelector("#button").addEventListener('click', function(){addItem(document.querySelector("#textfield").value, 		 							document.querySelector("#textfield2").value, document.querySelector("#textfield3").value)});
	
	document.querySelector("#button2").addEventListener('click', resetForm);
	
	document.querySelector("#button3").addEventListener('click', clearOrders);
}