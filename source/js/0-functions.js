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



//////////////
// Problem 12 
//////////////

var triangleNum = function(n){
  var r = 0;
  for(var i = 1; i<= n;i++){
    r+=i;
  }
  return r;
}

var divisorsNum = function(n){
  var r = 1;
  var half = Math.floor(n/2)
  var decrement = 2;
  if(n%2 ===0){
    decrement = 1;
  } else if (half%2===0){
    half -=1;
  }
  for(var i = half;i>0;i-=decrement){
    if(n%i===0){
      r+=1;
    }
  }  
  return r;
}


var divisors = function(n){
  var r = [n];
  var half = Math.floor(n/2)
  var decrement = 2;
  if(n%2 ===0){
    decrement = 1;
  } else if (half%2===0){
    half -=1;
  }
  for(var i = half;i>0;i-=decrement){
    if(n%i===0){
      r.push(i);
    }
  }  
  return r;
}

var isDiv = function(d, n){
  for(var i = d; i > 0; i--){
    if(n%d!==0){
      return false;
    }    
  }
  return true;
}

var prob12Func = function(minDivisors){
  var nat=0, divNum=0, i=0;
  if(minDivisors >0){
    do{
      i+=1;
      nat += i;
      divNum = divisorsNum(nat);
    }while(divNum < minDivisors);
  }
  return nat;
}

var prob12FuncOpt = function(minDinvisors){
  var n=3;    //start with a prime
  var dn=2;   //number of divisors for any prime
  var cnt=0;  //to insure the while loop is entered
  var n1, dn1, exponent;
  var p = 65500;
  
  var primeArray = primes(p);
  var lp = primeArray.length;
  while(cnt <= minDinvisors) {
    n +=1;
    n1 = n;
    if(n1%2 === 0){
      n1 = n1/2;
    }
    dn1 = 1;
    for (var i=0; i<lp; i++){
      
      if(primeArray[i]*primeArray[i] > n1){
        dn1 = 2*dn1;
        break;
      }
      exponent=1;
      while (n1%primeArray[i] === 0) {
        exponent+=1;
        n1 = n1/primeArray[i];
      }
      
      if(exponent > 1){
        dn1 = dn1*exponent;
      }
      if(n1 ===1){
        break;
      }
    }
  cnt = dn*dn1;
  dn = dn1;    
  }
  return n*(n-1)/2;
}

//////////////
// Problem 13
//////////////

//normalizes an array r so each elem is 1 digit only:
var normalizeNumArr = function(r){
  var mlt = 1;
  var remainer = 0;
  for(var i = 0, l=r.length;i<l;i++){
    mlt = 1;
    remainer = 0;
    while(r[i]>9){
      remainer += mlt*Math.floor(r[i]/10);
      r[i]=r[i]%10;
      mlt *=10;
    }
    if(remainer !== 0){
      if(i<l-1){
        r[i+1] += remainer;
      } else {
        r.push(remainer);
        l +=1;      
      }
    }
  }
  // it changes the array in place, but ill return r for a bit more flexibility
  return r;
}

var getXNums = function(a, howMany){
  var r = 0;
  var l = a.length;
  if(l<howMany){
    howMany = l;
  }
  for(var i=0;i<howMany;i++){
    r*=10;
    r+=a[l-1-i];
  }
  return r;
}

var prob13Func = function(numStr) {
  var r = [];
  var sumDigit = 0;
  // Im assuming that all numbers have the same length
  // it is true for the case in question
  var numLgt = numStr[0].length;
  
  // getting the result for each digit:
  for(var i = numLgt-1; i>=0; i--){
    sumDigit=0;
    for(var j = numStr.length-1; j>=0; j--){
      sumDigit += parseInt(numStr[j][i]);
    }
    r.push(sumDigit);
  }
  normalizeNumArr(r);  
  return getXNums(r, 10);
};

//////////////
// Problem 14
//////////////

var collatzSeq = function(n){
  var c = n;
  var r = [];
  r.push(c);
  do{
    if(c%2===0){
      c = c/2;
    } else {
      c = c*3+1;
    }
    r.push(c);
  } while(c > 1);
  return r;
};

var prob14Func = function(max){
  var n = max;
  var bigest = 0, bLength = 0;
  // since a number in a lower half will necessary have it's double on the upper one
  var limit = max/2 -1;
  for(var i = n; i>limit;i--){
    // since all even nums are halfed untill its odd 
    if(i%2 !== 0){
      var s = collatzSeq(i);
      if(s.length>bLength){
        bigest = i;
        bLength = s.length;
      }
    }
  }
  
  return bigest;
}