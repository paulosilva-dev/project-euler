var main = function() {
	var prob1 = multiplesOf([3,5],1000);
	
	console.log("prob1: " + prob1);
	
	$('.1').text(prob1);
};
// end of main function

$(document).ready(main);