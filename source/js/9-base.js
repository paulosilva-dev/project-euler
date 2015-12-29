var main = function() {
	
	// problem 1
	var prob1 = multiplesOf([3,5],1000);
	console.log("prob1: " + prob1);
	// $('.1').text(prob1);
	
	// problem 2
	var prob2 = evenFib(4000000);
	console.log("prob2: " + prob2);
	// $('.2').text(prob2);
	
};
// end of main function

$(document).ready(main);