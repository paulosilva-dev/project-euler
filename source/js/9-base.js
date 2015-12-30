var main = function() {
	
	// problem 1
	$('.btn-1').click(function(){
		var prob1 = multiplesOf([3,5],1000);
		console.log("prob1: " + prob1);
		$('.1').text(prob1);
	});
	
	// problem 2
	$('.btn-2').click(function(){
		var prob2 = evenFib(4000000);
		console.log("prob2: " + prob2);
		$('.2').text(prob2);
	});
	
	// problem 3
	$('.btn-3').click(function(){
		var prob3 = primeFactors(600851475143);
		console.log("prob3: "+ prob3[prob3.length-1]);
		console.log("factors: "+ prob3);
		$('.3').text(prob3[prob3.length-1]);
	});
	
	// problem 4
	// wip
	var num = 1005445001;
	console.log("num: "+num+" : "+isItPalindrome(num));
};
// end of main function

$(document).ready(main);