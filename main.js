// #first 
function counting() {
	 var today = new Date();

	 var day = today.getDate();
	 	if (day<10) day = "0"+day;
	 var month = today.getMonth()+1;
	 	if (month<10) month = "0"+month;
	 var year = today.getFullYear();

	 var hour = today.getHours();
	 	if(hour<10) hour = "0"+hour;
	 var minute= today.getMinutes();
	 	if (minute<10) minute = "0"+minute;
	 var second = today.getSeconds();
	 	if (second<10) second = "0"+second;
	 
	 document.getElementById("clock").innerHTML = day+"/"+month+"/"+year+"  |  "+hour+"-"+minute+"-"+second;

	 setTimeout("counting()", 1000);
 };

function check() {
	var number = document.getElementById("input1").value;
	
	if (number>0) document.getElementById("number-check").innerHTML="the number is positive";
	else if (number<0) document.getElementById("number-check").innerHTML="the number is negative";
	else if (number=="0") document.getElementById("number-check").innerHTML="this is zero";
	else document.getElementById("number-check").innerHTML="This is not a number";
};

// odd or not?



// #third

function show() {
	var number1 = parseInt(document.getElementById("input2").value);
	var number2 = parseInt(document.getElementById("input3").value);
	var write = "";
	
	
	for (i=number1; i<=number2; i++) {
		write = write + i + " ";
	}
	
	document.getElementById("summary").innerHTML = write;
};











