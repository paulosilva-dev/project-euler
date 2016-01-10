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
  
  // problem 10
	$('.btn-10').click(function(){  
    var prob10 = prob10Func(2000000);
    console.log(prob10);
    $('.10').text(prob10);
	});
  
  // problem 11
	$('.btn-11').click(function(){
    var numGrid = []; 
    numGrid.push('08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08');
    numGrid.push('49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00');
    numGrid.push('81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65');
    numGrid.push('52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91');
    numGrid.push('22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80');
    numGrid.push('24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50');
    numGrid.push('32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70');
    numGrid.push('67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21');
    numGrid.push('24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72');
    numGrid.push('21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95');
    numGrid.push('78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92');
    numGrid.push('16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57');
    numGrid.push('86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58');
    numGrid.push('19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40');
    numGrid.push('04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66');
    numGrid.push('88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69');
    numGrid.push('04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36');
    numGrid.push('20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16');
    numGrid.push('20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54');
    numGrid.push('01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48');
    var prob11 = prob11Func(numGrid);
    console.log(prob11);
    $('.11').text(prob11);
	});
  
  // problem 12
  // 8 mins computation
  // brute force solution
  // var prob12 = prob12Func(501);
  // console.log(prob12);
  //
  // optimized solution
  // var prob12 = prob12FuncOpt(501);
  // console.log(prob12);

};
// end of main function

$(document).ready(main);
