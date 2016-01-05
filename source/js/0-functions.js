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