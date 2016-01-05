var main = function() {
	
	// problem 1
	$('.btn-1').click(function(){
		var prob1 = multiplesOf([3,5],1000);
		console.log('prob1: ' + prob1);
		$('.1').text(prob1);
	});
	
	// problem 2
	$('.btn-2').click(function(){
		var prob2 = evenFib(4000000);
		console.log('prob2: ' + prob2);
		$('.2').text(prob2);
	});
	
	// problem 3
	$('.btn-3').click(function(){
		var prob3 = primeFactors(600851475143);
		console.log('prob3: '+ prob3[prob3.length-1]);
		console.log('factors: '+ prob3);
		$('.3').text(prob3[prob3.length-1]);
	});
	
	// problem 4	
	$('.btn-4').click(function(){
		var prob4 = maxPali(999);
		console.log('prob4: ' + prob4);
		$('.4').text(prob4);
	});
	
	// alternative solution to prob 4
	// var prob4b = maxPalib(999);
	// console.log('prob4b: ' + prob4b);
	// problem 5
	$('.btn-5').click(function(){
		var prob5 = evenMultiple(20);
		console.log('prob5: ' + prob5);
		$('.5').text(prob5);
	});
	  
	// problem 6
	$('.btn-6').click(function(){
    var prob6 = sumSqrDiff(100);
    console.log('prob6: ' + prob6);
		$('.6').text(prob6);
	});
  
	// problem 7
	$('.btn-7').click(function(){
    var prob7 = nPrime(10001);
    console.log('prob7: ' + prob7);
		$('.7').text(prob7);
	});
  
  // problem 8
  
	$('.btn-8').click(function(){
    var numSeries =  '73167176531330624919225119674426574742355349194934';
        numSeries += '96983520312774506326239578318016984801869478851843';
        numSeries += '85861560789112949495459501737958331952853208805511';
        numSeries += '12540698747158523863050715693290963295227443043557';
        numSeries += '66896648950445244523161731856403098711121722383113';
        numSeries += '62229893423380308135336276614282806444486645238749';
        numSeries += '30358907296290491560440772390713810515859307960866';
        numSeries += '70172427121883998797908792274921901699720888093776';
        numSeries += '65727333001053367881220235421809751254540594752243';
        numSeries += '52584907711670556013604839586446706324415722155397';
        numSeries += '53697817977846174064955149290862569321978468622482';
        numSeries += '83972241375657056057490261407972968652414535100474';
        numSeries += '82166370484403199890008895243450658541227588666881';
        numSeries += '16427171479924442928230863465674813919123162824586';
        numSeries += '17866458359124566529476545682848912883142607690042';
        numSeries += '24219022671055626321111109370544217506941658960408';
        numSeries += '07198403850962455444362981230987879927244284909188';
        numSeries += '84580156166097919133875499200524063689912560717606';
        numSeries += '05886116467109405077541002256983155200055935729725';
        numSeries += '71636269561882670428252483600823257530420752963450';
    var prob8 = prob8Func(numSeries, 13);
    console.log('prob8: '+ prob8);
		$('.8').text(prob8);
	});
  
  // problem 9
	$('.btn-9').click(function(){
    var prob9 = prob9Func();
    console.log('prob9: '+ prob9);
    $('.9').text(prob9);
	});
  
	// used to check algorithm performance
	// var s = new Date();
	// var e = new Date();
	// console.log('> solved in: '+(e-s)+'ms');
};
// end of main function

$(document).ready(main);