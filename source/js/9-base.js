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
	$('.btn-4').click(function(){
		var prob4 = maxPali(999);
		console.log("prob4: " + prob4);
		$('.4').text(prob4);
	});
	
	// alternative solution to prob 4
	// var prob4b = maxPalib(999);
	// console.log("prob4b: " + prob4b);
	// problem 5
	$('.btn-5').click(function(){
		var prob5 = evenMultiple(20);
		console.log("prob5: " + prob5);
		$('.5').text(prob5);
	});
	
  
  
	$('.btn-6').click(function(){
    var prob6 = sumSqrDiff(100);
    console.log("prob6: " + prob6);
		$('.6').text(prob6);
	});
  
	// used to check algorithm performance
	// var s = new Date();
	// var e = new Date();
	// console.log("> solved in: "+(e-s)+"ms");
};
// end of main function

$(document).ready(main);