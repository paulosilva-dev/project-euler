//returns a version of the given list without duplicates
var uniqueList = function(list){
	var h = {};
	var r = [];
	for(var i=0, l=list.length;i<l;i++){
		if(!h[list[i]]){
			r.push(list[i]);
			h[list[i]]=true;
		}
	}	
	return r;
};


//////////////
// problem 1
//////////////

var multiplesOf = function(nums, max){
	var sum = 0;
	var multiples = [];
	for(var i =0, l=nums.length;i<l;i++){
		var current = nums[i];
		for(var j = 2;current < max;j++){
			multiples.push(current);
			current = nums[i]*j;
		}
	}
	// removing duplicates: 
	multiples=uniqueList(multiples);
	// calculating final sum
	for(var i = 0, l=multiples.length;i<l;i++){
		sum += multiples[i]; 
	}
	
	return sum;
};

//////////////
// problem 2
//////////////

//Fibonacci number
var fib=function(max){
	var p1=0, p2, f=1;
	while(f<max){
		console.log(f);
		p2=p1;
		p1=f;
		f=p1+p2;
	}
};

var evenFib=function(max){
	var p1=0, p2, f=1, sum = 0;
	while(f<max){
		if(f%2===0){
			sum+=f;
		}
		p2=p1;
		p1=f;
		f=p1+p2;
	}
	return sum;
};

//////////////
// problem 3 
//////////////

//checks if a number is a prime number
var isItPrime = function(n){
	if(n <= 1){
		return false;
	} else if(n <=3){
		return true;
	} else if(n%2 === 0 || n % 3 ===0){
		return false;
	}
	var i = 5;
	while (i*i <=n){
		if(n%i===0 || n %(i+2)===0){
			return false;
		}
		i += 6; 
	}
	return true;
}

//generates prime numbers till max value
var primes = function(max){
	var primesList = [2];
	//no point in doing even numbers
	//so I'm increasing by 2
	for(var i =3; i<max;i+=2){		
		if(isItPrime(i)){
			primesList.push(i);
		}
	}
	return primesList;
}


// generates prime factors
var primeFactors= function(num){
	var factorsList= [];
	if(isItPrime(num)){
		factorsList.push(num);
		return factorsList;		
	}else {
		// max prime to be calculated as a factor
		var maxPrime = 10000;
		var primesList= primes(maxPrime);
		var remainer = num;
		var oORange=false;
		var i=0, l=primesList.length;
		do{
				if(remainer%primesList[i]===0){
					do{
						factorsList.push(primesList[i]);
						remainer=remainer/primesList[i];
					}while(remainer%primesList[i]===0);
				}
				if(i>=l){
					oORange = true;
					console.log('Out of range');		
				}
				i++;
		}while(remainer!=1 && !oORange);
		return factorsList;
	}	
};


//////////////
// problem 4 
//////////////

var isItPalindrome = function(num){
	var arr = [];
	if(num<0){
		return false;
	}
	//getting each digit into an array
	//comes out reversed, doesn't really matter
	//for calculation  
	do{
		arr.push(num%10);
		num=Math.floor(num/10);
	}while(num > 0);
	isIt = true;
	for(var i=0, halfL=arr.length/2, lasti = arr.length-1;i<halfL;i++){
		if(arr[i] !== arr[lasti-i]){
			isIt = false;
		};
	}
	return isIt;
};

// my original solution
var maxPali = function(num){
	if(num>0){
		var a = num, b = num*num;
		var bottomRange = Math.ceil(num/10);
		//starting from max number (num*num), counting down
		for(;b>num*bottomRange;b--){
			if(isItPalindrome(b)){
				for(var i = a, min=Math.floor(Math.sqrt(b));i>min;i--){
					//checking if factors are in range
					if(b%i===0 && b/i<num+1){
						console.log('Found: '+b+' = ' + i +'*'+ b/i);
						return b;						
					}
				}
			}
		}
	}
	return 0;
};

// alternative version to solve the problem 4
var maxPalib = function(max){
	if(max>0){
		var min = Math.ceil(max/10);
		var factors=[];
		var maxPaliNum=0;
		var it = 0;
		for(var a = max; a*max > maxPaliNum;a--){
			for(var b = a, mult = 0; b*a > maxPaliNum;b--){
				mult = a*b;
				it++;
				if(isItPalindrome(mult)&&mult>maxPaliNum){
					maxPaliNum = mult;
					factors=[a,b];
				}				
			}
		}
		console.log('Found: '+maxPaliNum+' = ' + factors[0] +'*'+ factors[1]+' iterations '+it);
	}
	return maxPaliNum;
};

//////////////
// problem 5
//////////////

var factorial = function(num){
	if(num <2){
		return 1;
	}
	var result =num;
	for(var i = num-1;i>1;i--){
		result = result * i;
	}
	return result;
}

var isItEvenDiv = function(num, maxDiv){
	var isIt = true;
	var min = 1;
	if(maxDiv > 6){
		min = 5;
	}
	for(var i = maxDiv; i > min && isIt;i--){
		if(num%i!==0){
			isIt = false;
		}
	}
	return isIt;
}

var evenMultiple = function(num){
	var max = factorial(num);
	// since it needs to be a multiple of num
	// lets start at num and increment by num
	for(var i = num;i<max;i+=num){
		if(isItEvenDiv(i, num)){
			return i;
		}
	}
	return 0;
}

//////////////
// Problem 6
//////////////

// sum function
// recusive solution
var sum = function(num){
  if(num>0){
    return num+sum(num-1);
  }
  return 0;
}

// sum function
// optimized solution
var sumB = function(num){
  return (num*(num+1))/2;
}

// sum of squares function
// recusive solution
var sqrSum= function(num){
  if(num>1){
    return num*num+sqrSum(num-1);
  }
  return 1;
}

// sum of squares function
// optimized solution
var sqrSumB= function(num){
  return ((2*num+1)*(num+1)*num)/6;
}

var sumSqrDiff = function(num){
  var s = sumB(num); 
  return s*s-sqrSumB(num);
}


//////////////
// Problem 7
//////////////

var nPrime = function(num){
  if(num === 1){
    return 2;
  }
  var ord = 1;
  var prime = 0;
  // all primes after 2 will be odd
  for(var i = 3; ord !==num;i+=2){
    if(isItPrime(i)){
      ord++;
      prime = i;
    }    
  }
  return prime;
};


//////////////
// Problem 8
//////////////

// returns the product of the numbers of the giving array
var prod = function(arrayN){
  var r = 1;
  for(var i=0, l = arrayN.length; i<l; i++){
    if(arrayN[i]===0){
      return 0;      
    }
    r *= arrayN[i];
  }
  return r;
}


var prob8Func = function(bigN, nDigits){
  // converting from string to number array
  var seriesArray = bigN.split('');
  for(var i = 0, l=seriesArray.length; i<l;i++){
    seriesArray[i]=parseInt(seriesArray[i]);
  }
  
  // finding the highest product
  var candidates = [];
  var biggerProd = 0;
  for(var i= 0,l = seriesArray.length-nDigits;i<l;i++){
    var digits = [];
    
    for(var j=0;j<nDigits;j++){
      digits.push(seriesArray[i+j]);
    }
    
    var prodDigits = prod(digits);
    
    if(biggerProd<prodDigits){
      biggerProd = prodDigits;
      candidates = digits;
    }
    
  }
  console.log('product: '+ biggerProd + ' digits: ' + candidates);
  return biggerProd;
}

//////////////
// Problem 9
//////////////

var getP9Candidates = function(){
  var cand = [];
  for(var c=1000; c>1; c--){
    for(var b=1000-c; b>0; b--){
      var a = 1000-c-b;
      if(c>b && b>a && a>0){
        if(a*a+b*b===c*c){
          // because we know there is only 1
          // it will return the first one found if
          // limit was diferent
          return cand.push=[a,b,c];
        }
      }
    }    
  }
  return cand;
};

var prob9Func = function(){
  var candidates = getP9Candidates();
  console.log(candidates);
  return candidates[0]*candidates[1]*candidates[2];  
};

//////////////
// Problem 10
//////////////

var sumArray = function(a){
  r = 0;
  for(var i=0, l=a.length;i<l;i++){
    r+=a[i];
  }
  return r;
}

var prob10Func = function(max){
    //using primes function made for prob3
    var primeList = primes(max);
    return sumArray(primeList);
}

//////////////
// Problem 11
//////////////

var prob11Func = function(oGrid){
  var numGrid = [];
  for(var i = 0, l=oGrid.length;i<l;i++){
    numGrid.push(oGrid[i].split(' '));
  }
  for(var i = 0, h=numGrid.length;i<h;i++){
    for(var j = 0, l=numGrid[i].length;j<l;j++){
      numGrid[i][j] = parseInt( numGrid[i][j] );
    }
  }
  
  // max Multiplication array
  // result on index 0, factors array in index 1
  var multMult = [];
  multMult.push(0);
  multMult.push([0]);
  var multDiag = 1;
  var multHor = 1;
  var multVer = 1;
  for(var y=0, h=numGrid.length;y<h;y++){
    for(var x=0, l=numGrid[y].length;x<l;x++){
      
      
      // check if at vertical limit:
      if( y+4<h ){
        
        //vertical mult:
        multVer = 1;
          for(var i = 0;i<4;i++){
            multVer *= numGrid[y+i][x];
          }
          
          if(multVer > multMult[0]){
            multMult[0]=multDiag;
            multMult[1]=[];
            for(var i = 0;i<4;i++){
              multMult[1].push(numGrid[y+i][x]);
            }
          }
        
        
        // check if at horizontal limit:
        if( x+4<l ){
          
          multDiag = 1;
          multHor = 1;
          for(var i = 0;i<4;i++){
            multDiag *= numGrid[y+i][x+i];
            multHor *= numGrid[y][x+i];
          }
          
          if(multDiag > multMult[0]){
            multMult[0]=multDiag;
            multMult[1]=[];
            for(var i = 0;i<4;i++){
              multMult[1].push(numGrid[y+i][x+i]);
            }
          }
          
          if(multHor > multMult[0]){
            multMult[0]=multHor;
            multMult[1]=[];
            for(var i = 0;i<4;i++){
              multMult[1].push(numGrid[y][x+i]);
            }
          }          
          
        }
        if( x-4>0 ){
          
          multDiag = 1;
          for(var i = 0;i<4;i++){
            multDiag *= numGrid[y+i][x-i];
          }
          if(multDiag > multMult[0]){
            multMult[0]=multDiag;
            multMult[1]=[];
            for(var i = 0;i<4;i++){
              multMult[1].push(numGrid[y+i][x-i]);
            }
          }
            
        }
      }
    }
  }
  console.log(multMult);
  
  return multMult[0];
}
//simple test function :
// used to test result and check algorithm performance
var test = function(fun,arg,expec){
  var passed = false;
  var result;
	var s = new Date();
  result = fun(arg);
  passed = result===expec;
	var e = new Date();
  if(passed){
    console.log('########## Passed! ##########');
  }
  else{
    console.log('########## FAILED! ##########');
  }
  console.log('# expected: '+expec+'   got: '+ result);
	console.log('# computed in: '+(e-s)+'ms');
}

//
//  TESTS:
//

// problem 10
// test(prob10Func, 10, 17);
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
  

};
// end of main function

$(document).ready(main);