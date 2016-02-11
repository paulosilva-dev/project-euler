
// used to load js files
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

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
	for(i = 0, l=multiples.length;i<l;i++){
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
};

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
};


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
		}
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
var maxPaliNum=0;
	if(max>0){
		var min = Math.ceil(max/10);
		var factors=[];
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
};

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
};

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
};

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
};

// sum function
// optimized solution
var sumB = function(num){
  return (num*(num+1))/2;
};

// sum of squares function
// recusive solution
var sqrSum= function(num){
  if(num>1){
    return num*num+sqrSum(num-1);
  }
  return 1;
};

// sum of squares function
// optimized solution
var sqrSumB= function(num){
  return ((2*num+1)*(num+1)*num)/6;
};

var sumSqrDiff = function(num){
  var s = sumB(num);
  return s*s-sqrSumB(num);
};


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
};


var prob8Func = function(bigN, nDigits){
  // converting from string to number array
  var seriesArray = bigN.split('');
  for(var i = 0, l=seriesArray.length; i<l;i++){
    seriesArray[i]=parseInt(seriesArray[i]);
  }

  // finding the highest product
  var candidates = [];
  var biggerProd = 0;
  for(i= 0,l = seriesArray.length-nDigits;i<l;i++){
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
};

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
					cand=[a,b,c];
          return cand;
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
};

var prob10Func = function(max){
    //using primes function made for prob3
    var primeList = primes(max);
    return sumArray(primeList);
};

//////////////
// Problem 11
//////////////

var prob11Func = function(oGrid){
  var numGrid = [];
  for(var i = 0;i<oGrid.length;i++){
    numGrid.push(oGrid[i].split(' '));
  }
  for(i = 0;i<numGrid.length;i++){
    for(var j = 0;j<numGrid[i].length;j++){
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
  for(var y=0;y<numGrid.length;y++){
    for(var x=0 ;x<numGrid[y].length;x++){


      // check if at vertical limit:
      if( y+4<numGrid[y].length ){

        //vertical mult:
        multVer = 1;
          for(i = 0;i<4;i++){
            multVer *= numGrid[y+i][x];
          }

          if(multVer > multMult[0]){
            multMult[0]=multDiag;
            multMult[1]=[];
            for(i = 0;i<4;i++){
              multMult[1].push(numGrid[y+i][x]);
            }
          }


        // check if at horizontal limit:
        if( x+4<numGrid.length ){

          multDiag = 1;
          multHor = 1;
          for(i = 0;i<4;i++){
            multDiag *= numGrid[y+i][x+i];
            multHor *= numGrid[y][x+i];
          }

          if(multDiag > multMult[0]){
            multMult[0]=multDiag;
            multMult[1]=[];
            for(i = 0;i<4;i++){
              multMult[1].push(numGrid[y+i][x+i]);
            }
          }

          if(multHor > multMult[0]){
            multMult[0]=multHor;
            multMult[1]=[];
            for(i = 0;i<4;i++){
              multMult[1].push(numGrid[y][x+i]);
            }
          }

        }
        if( x-4>0 ){

          multDiag = 1;
          for(i = 0;i<4;i++){
            multDiag *= numGrid[y+i][x-i];
          }
          if(multDiag > multMult[0]){
            multMult[0]=multDiag;
            multMult[1]=[];
            for(i = 0;i<4;i++){
              multMult[1].push(numGrid[y+i][x-i]);
            }
          }

        }
      }
    }
  }
  console.log(multMult);

  return multMult[0];
};



//////////////
// Problem 12
//////////////

var triangleNum = function(n){
  var r = 0;
  for(var i = 1; i<= n;i++){
    r+=i;
  }
  return r;
};

var divisorsNum = function(n){
  var r = 1;
  var half = Math.floor(n/2);
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
};


var divisors = function(n){
  var r = [n];
  var half = Math.floor(n/2);
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
};

var isDiv = function(d, n){
  for(var i = d; i > 0; i--){
    if(n%d!==0){
      return false;
    }
  }
  return true;
};

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
};

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
};

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
};

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
};

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
};


var prob15Func = function(n){
	var grid = [];
	var count = 0;
	for(var y =0; y<= n; y++){
		grid.push([]);
		for (var x = 0; x <= n; x++) {
			if(x===0 || y === 0){
				grid[y].push(1);
			} else {
				count = grid[y][x-1];
				count += grid[y-1][x];
				grid[y].push(count);
			}
		}
	}
	return grid[n][n];
};

// prob 16

var twoExp = function(exp){
	var ar = [1];
	var n = 0;
	for (var i =0;i<exp;i+=1){
		for (var l = ar.length-1;l>=0;l--){
			n =ar[l];
			n*=2;
			ar[l] = n;
		}
		// normalizing to a digit per index
		for (l = ar.length-1;l>=0;l--){
			n =ar[l];
			if(n>=10){
				ar[l] = n%10;
				if(l>0){
					ar[l-1] += Math.floor(n/10);
				} else {
					ar.unshift(Math.floor(n/10));
				}
			}
		}

	}
	return ar;
};

var sumDigits = function(n){
	var sum =0;
	var r=0;
  if(n.constructor === Array){
		for (var i = 0; i < n.length; i++) {
			sum +=n[i];
		}
	} else {
		while (n>0) {
			r = n%10;
			n= Math.floor(n/10);
			sum +=r;
		}
	}
	return sum;
};

var prob16Func = function(exp){
	var n = twoExp(exp);
	var r = sumDigits(n);
	return r;
};

// prob 17
var numToString = function(n){
	var s = '';
	var r = 0;
	// only doing numbers < one million
	while (n>0) {
		if(n>=1000){
			r = Math.floor(n/1000);
			n = n%1000;
			s += (numToString(r) + ' thousand ');
			if(n>0){
				s+= 'and ';
			}
		} else if (n>=100){
			r = Math.floor(n/100);
			n = n%100;
			s += (numToString(r) + ' hundred ');
			if(n>0){
				s+= 'and ';
			}
		} else if (n>=20) {
			r = Math.floor(n/10);
			n = n%10;
			switch (r) {
				case 9:
					s+='ninety';
					break;
				case 8:
					s+='eighty';
					break;
				case 7:
					s+='seventy';
					break;
				case 6:
					s+='sixty';
					break;
				case 5:
					s+='fifty';
					break;
				case 4:
					s+='forty';
					break;
				case 3:
					s+='thirty';
					break;
				case 2:
					s+='twenty';
					break;
			}
			if (n>0){
				s+='-';
			}
		} else {
			switch (n) {
				case 19:
					s+='nineteen';
					break;
				case 18:
					s+='eighteen';
					break;
				case 17:
					s+='seventeen';
					break;
				case 16:
					s+='sixteen';
					break;
				case 15:
					s+='fifteen';
					break;
				case 14:
					s+='fourteen';
					break;
				case 13:
					s+='thirteen';
					break;
				case 12:
					s+='twelve';
					break;
				case 11:
					s+='eleven';
					break;
				case 10:
					s+='ten';
					break;
				case 9:
					s+='nine';
					break;
				case 8:
					s+='eight';
					break;
				case 7:
					s+='seven';
					break;
				case 6:
					s+='six';
					break;
				case 5:
					s+='five';
					break;
				case 4:
					s+='four';
					break;
				case 3:
					s+='three';
					break;
				case 2:
					s+='two';
					break;
				case 1:
					s+='one';
					break;
			}
			n = 0;
		}
	}
	return s;
};

var countletters = function(s){
	nv=0;
	for(var i=0; i<s.length;i++){
		if(s[i]>='a'&& s[i]<='z'){
			nv++;
		}
	}
	return nv;
};

var prob17Func = function(max){
	var count=0;
	for(var i = 1; i<=max;i++){
		count += countletters(numToString(i));
	}
	return count;
};

// prob 18
//
// Note to self, should be fast enough to solve Problem 67
// since it solves the porblem in linear time - O(N)
//
var prob18Func = function(p){
	var row = 0;
	// pyramid of pairs [value, sumPath]
	var pyr =[];
	var count = 0;

	// ill parese the array and fill in the pyramid
	// with pairs [value, sumPath] calculating the
	// highest path as I go along
	for(var i = 0; i<p.length; ){
		pyr.push([]);
		count=0;
		while (count <= row ) {
			var pair = [p[i]];

			if(row === 0){
				pair.push(p[i]);
			} else {
				// sum from the left and right side
				var sumL =0;
				var sumR =0;
				if (count > 0){
					sumL = pyr[row-1][count-1][1]+p[i];
				}
				if (count < row){
					sumR = pyr[row-1][count][1]+p[i];
				}

				// just saving the highest path value
				if(sumL > sumR){
					pair.push(sumL);
				} else {
					pair.push(sumR);
				}
			}

			pyr[row].push(pair);
			count++;
			i++;
		}
		row++;
	}
	var maxSum = 0;
	var lastIndex = pyr.length-1;
	for(i =0;i<pyr[lastIndex].length;i++){
		if(maxSum<pyr[lastIndex][i][1]){
			maxSum =pyr[lastIndex][i][1];
		}
	}
	return maxSum;
};


// prob 19
var prob19Func = function(years){
	var startOfTime = 1900;
	var startDay = 1; // 1- monday, 7 - sunday
	var startYear = years[0];
	var endYear = years[1];
	var currentYear = startOfTime;
	var dayPassed = 0;
	var sundaysPassed = 0;
	while (currentYear <= endYear) {
		var months = [31,28,31,30,31,30,31,31,30,31,30,31];
		if( (currentYear%100===0 && currentYear%400===0) || ( (currentYear%100!==0) && currentYear%4 === 0) ){
			months[1] = 29;
		}
		for(var i =0; i<12; i++){
			if(currentYear>=startYear && (dayPassed+1)%7 === 0){
				sundaysPassed +=1;
			}
			dayPassed+=months[i];
		}
		currentYear +=1;
	}
	return sundaysPassed;
};

// prob 20
var prob20Func = function(num){

	var ar = [1];
	var n = 1;
	for (var i =1;i<=num;i+=1){
		for (var l = ar.length-1;l>=0;l--){
			n =ar[l];
			n*=i;
			ar[l] = n;
		}
		// normalizing to a digit per index
		for (l = ar.length-1;l>=0;l--){
			n =ar[l];
			if(n>=10){
				ar[l] = n%10;
				if(l>0){
					ar[l-1] += Math.floor(n/10);
				} else {
					ar.unshift(Math.floor(n/10));
				}
			}
		}
		while (ar[0]>=10) {
			n =ar[0];
			ar[0] = n%10;
			if(l>0){
				ar[0] += Math.floor(n/10);
			} else {
				ar.unshift(Math.floor(n/10));
			}
		}
	}
	var sumDigit = 0;
	for( i=0; i<ar.length; i++){
		sumDigit+=ar[i];
	}
	return sumDigit;
};


// prob 21
var properDivSum = function(n){

	// sanity checks
	if(n<0){
		return -1;
	}
	if(n===0){
		return 0;
	}

	var divisors = [];
	var currentDivisor = 1;
	var maxDivisor = Math.floor(n/2);
	while (currentDivisor<=maxDivisor) {
		if(n%currentDivisor === 0){
			divisors.push(currentDivisor);
		}
		currentDivisor++;
	}

	var r = 0;
	for(var i=0;i<divisors.length;i++){
		r+=divisors[i];
	}

	return r;
};

var prob21Func = function(max){
	//ill store the result of the divisors sum in an 0-max array
	var divSum = [];
	for(var i =0; i<max; i++){
		divSum.push(properDivSum(i));
	}
	var r = 0;
	for(i =0; i<divSum.length; i++){
		var currentSum = divSum[i];
		if(currentSum<max && currentSum !== i){
			if(divSum[currentSum] === i){
				r+=i;
			}
		}
	}
	return r;
};

// prob 22
var prob22Func = function(names){
	names = names.sort();
	aOffset = "a".charCodeAt(0);
	var totalSum = 0;
	for(var i = 0;i<names.length;i++){
		var nameSum = 0;
		names[i] = names[i].toLowerCase();
		for(var c=0; c<names[i].length; c++){
			nameSum += (names[i].charCodeAt(c) - aOffset)+1;
		}
		totalSum += nameSum * (i+1);
	}
	return totalSum;
};

//simple test function :
// used to test result and check algorithm performance
var test = function(fun,arg,expec){
  var passed = false;
  var result;
	var s = new Date();
  result = fun(arg);
  if(result.constructor === Array){
    passed = true;
    for(var i=0, l = result.length;i<l;i++){
      if(result[i]!==expec[i]){
        passed = false;
      }
    }
  } else{
    passed = result===expec;
  }
	var e = new Date();
  if(passed){
    console.log('########## Passed! ##########');
  }
  else{
    console.log('########## FAILED! ##########');
  }
  console.log('# for input: '+arg);
  console.log('# expected: '+expec+'   got: '+ result);
	console.log('# computed in: '+(e-s)+'ms');
};

//
//  TESTS:
//

// problem 10
// test(prob10Func, 10, 17);

// problem 11
// test(triangleNum, 1, 1);
// test(triangleNum, 2, 3);
// test(triangleNum, 5, 15);

// test(divisorsNum, 1, 1);
// test(divisorsNum, 3, 2);
// test(divisorsNum, 10, 4);
// test(divisorsNum, 15, 4);
// test(divisorsNum, 28, 6);

// test(prob12Func, 4, 6);
// test(prob12Func, 6, 28);

// test(prob12Func, 26, 2016);
// test(prob12FuncOpt, 26, 2016);
// test(prob12Func, 106, 73920);
// test(prob12FuncOpt, 106, 73920);

// problem 13
// var p13t1 = [];
// p13t1.push("000");
// p13t1.push("000");
// p13t1.push("000");
// test(prob13Func, p13t1, 0);

// var p13t2 = [];
// p13t2.push("000");
// p13t2.push("001");
// p13t2.push("002");
// test(prob13Func, p13t2, 3);

// var p13t3 = [];
// p13t3.push("201");
// p13t3.push("342");
// p13t3.push("798");
// test(prob13Func, p13t3, 1341);

// var p13t4 = [];
// p13t4.push("2501");
// p13t4.push("3442");
// p13t4.push("7958");
// test(prob13Func, p13t4, 13901);


// problem 14
// var p14t1 = [];
// p14t1.push(13);
// p14t1.push(40);
// p14t1.push(20);
// p14t1.push(10);
// p14t1.push(5);
// p14t1.push(16);
// p14t1.push(8);
// p14t1.push(4);
// p14t1.push(2);
// p14t1.push(1);

// test(collatzSeq, 13, p14t1);
// test(prob14Func, 1000000, 837799);

// problem 15
// test(prob15Func, 2, 6);
// test(prob15Func, 20, 137846528820);


// problem 16
// test(twoExp, 15, [3,2,7,6,8]);
// test(sumDigits, 32768, 26);
// test(prob16Func, 15, 26);
// test(prob16Func, 1000, 1366);

// problem 17
// test(numToString, 1, 'one');
// test(numToString, 15, 'fifteen');
// test(numToString, 78, 'seventy-eight');
// test(numToString, 342, 'three hundred and forty-two');
// test(numToString, 1051, 'one thousand and fifty-one');
// test(numToString, 3251, 'three thousand and two hundred and fifty-one');
//
// test(countletters, 'one', 3);
// test(countletters, 'seventy-eight', 12);
// test(countletters, numToString(342), 23);
// test(countletters, numToString(115), 20);
//
// test(prob17Func, 5, 19);
// test(prob17Func, 1000, 21124);

// problem 18

// var pa = [3,
//           7, 4,
//           2, 4, 6,
//           8, 5, 9, 3];
//
//  var pb = [ 75,
//             95, 64,
//             17, 47, 82,
//             18, 35, 87, 10,
//             20, 04, 82, 47, 65,
//             19, 01, 23, 75, 03, 34,
//             88, 02, 77, 73, 07, 63, 67,
//             99, 65, 04, 28, 06, 16, 70, 92,
//             41, 41, 26, 56, 83, 40, 80, 70, 33,
//             41, 48, 72, 33, 47, 32, 37, 16, 94, 29,
//             53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14,
//             70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57,
//             91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48,
//             63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31,
//             04, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60, 04, 23];
//
// test(prob18Func, pa, 23);
// test(prob18Func, pb, 1074);

// problem 19
// test(prob19Func, [1900,1900], 2);
// test(prob19Func, [1906,1909], 7);
// test(prob19Func, [1901,2000], 171);

// problem 20
// test(prob20Func, 10, 27);
// test(prob20Func, 100, 648);

// problem 21
// test(properDivSum, 220, 284);
// test(properDivSum, 284, 220);
// test(prob21Func, 10000, 31626);

// problem 22
test(prob22Func, ["aaa"], 3);
test(prob22Func, ["abc"], 6);
test(prob22Func, ["b","a"], 5);
test(prob22Func, ["COLIN"], 53);

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
	$('.btn-12').click(function(){
  // around 8 mins computation @3ghz cpu
  // brute force solution
  // var prob12 = prob12Func(501);
  // console.log(prob12);
  //
  // optimized solution
  var prob12 = prob12FuncOpt(501);
  console.log(prob12);
    $('.12').text(prob12);
	});

  // problem 13 - Large Sum
	$('.btn-13').click(function(){
    var numP13 = [];
    numP13.push('37107287533902102798797998220837590246510135740250');
    numP13.push('46376937677490009712648124896970078050417018260538');
    numP13.push('74324986199524741059474233309513058123726617309629');
    numP13.push('91942213363574161572522430563301811072406154908250');
    numP13.push('23067588207539346171171980310421047513778063246676');
    numP13.push('89261670696623633820136378418383684178734361726757');
    numP13.push('28112879812849979408065481931592621691275889832738');
    numP13.push('44274228917432520321923589422876796487670272189318');
    numP13.push('47451445736001306439091167216856844588711603153276');
    numP13.push('70386486105843025439939619828917593665686757934951');
    numP13.push('62176457141856560629502157223196586755079324193331');
    numP13.push('64906352462741904929101432445813822663347944758178');
    numP13.push('92575867718337217661963751590579239728245598838407');
    numP13.push('58203565325359399008402633568948830189458628227828');
    numP13.push('80181199384826282014278194139940567587151170094390');
    numP13.push('35398664372827112653829987240784473053190104293586');
    numP13.push('86515506006295864861532075273371959191420517255829');
    numP13.push('71693888707715466499115593487603532921714970056938');
    numP13.push('54370070576826684624621495650076471787294438377604');
    numP13.push('53282654108756828443191190634694037855217779295145');
    numP13.push('36123272525000296071075082563815656710885258350721');
    numP13.push('45876576172410976447339110607218265236877223636045');
    numP13.push('17423706905851860660448207621209813287860733969412');
    numP13.push('81142660418086830619328460811191061556940512689692');
    numP13.push('51934325451728388641918047049293215058642563049483');
    numP13.push('62467221648435076201727918039944693004732956340691');
    numP13.push('15732444386908125794514089057706229429197107928209');
    numP13.push('55037687525678773091862540744969844508330393682126');
    numP13.push('18336384825330154686196124348767681297534375946515');
    numP13.push('80386287592878490201521685554828717201219257766954');
    numP13.push('78182833757993103614740356856449095527097864797581');
    numP13.push('16726320100436897842553539920931837441497806860984');
    numP13.push('48403098129077791799088218795327364475675590848030');
    numP13.push('87086987551392711854517078544161852424320693150332');
    numP13.push('59959406895756536782107074926966537676326235447210');
    numP13.push('69793950679652694742597709739166693763042633987085');
    numP13.push('41052684708299085211399427365734116182760315001271');
    numP13.push('65378607361501080857009149939512557028198746004375');
    numP13.push('35829035317434717326932123578154982629742552737307');
    numP13.push('94953759765105305946966067683156574377167401875275');
    numP13.push('88902802571733229619176668713819931811048770190271');
    numP13.push('25267680276078003013678680992525463401061632866526');
    numP13.push('36270218540497705585629946580636237993140746255962');
    numP13.push('24074486908231174977792365466257246923322810917141');
    numP13.push('91430288197103288597806669760892938638285025333403');
    numP13.push('34413065578016127815921815005561868836468420090470');
    numP13.push('23053081172816430487623791969842487255036638784583');
    numP13.push('11487696932154902810424020138335124462181441773470');
    numP13.push('63783299490636259666498587618221225225512486764533');
    numP13.push('67720186971698544312419572409913959008952310058822');
    numP13.push('95548255300263520781532296796249481641953868218774');
    numP13.push('76085327132285723110424803456124867697064507995236');
    numP13.push('37774242535411291684276865538926205024910326572967');
    numP13.push('23701913275725675285653248258265463092207058596522');
    numP13.push('29798860272258331913126375147341994889534765745501');
    numP13.push('18495701454879288984856827726077713721403798879715');
    numP13.push('38298203783031473527721580348144513491373226651381');
    numP13.push('34829543829199918180278916522431027392251122869539');
    numP13.push('40957953066405232632538044100059654939159879593635');
    numP13.push('29746152185502371307642255121183693803580388584903');
    numP13.push('41698116222072977186158236678424689157993532961922');
    numP13.push('62467957194401269043877107275048102390895523597457');
    numP13.push('23189706772547915061505504953922979530901129967519');
    numP13.push('86188088225875314529584099251203829009407770775672');
    numP13.push('11306739708304724483816533873502340845647058077308');
    numP13.push('82959174767140363198008187129011875491310547126581');
    numP13.push('97623331044818386269515456334926366572897563400500');
    numP13.push('42846280183517070527831839425882145521227251250327');
    numP13.push('55121603546981200581762165212827652751691296897789');
    numP13.push('32238195734329339946437501907836945765883352399886');
    numP13.push('75506164965184775180738168837861091527357929701337');
    numP13.push('62177842752192623401942399639168044983993173312731');
    numP13.push('32924185707147349566916674687634660915035914677504');
    numP13.push('99518671430235219628894890102423325116913619626622');
    numP13.push('73267460800591547471830798392868535206946944540724');
    numP13.push('76841822524674417161514036427982273348055556214818');
    numP13.push('97142617910342598647204516893989422179826088076852');
    numP13.push('87783646182799346313767754307809363333018982642090');
    numP13.push('10848802521674670883215120185883543223812876952786');
    numP13.push('71329612474782464538636993009049310363619763878039');
    numP13.push('62184073572399794223406235393808339651327408011116');
    numP13.push('66627891981488087797941876876144230030984490851411');
    numP13.push('60661826293682836764744779239180335110989069790714');
    numP13.push('85786944089552990653640447425576083659976645795096');
    numP13.push('66024396409905389607120198219976047599490197230297');
    numP13.push('64913982680032973156037120041377903785566085089252');
    numP13.push('16730939319872750275468906903707539413042652315011');
    numP13.push('94809377245048795150954100921645863754710598436791');
    numP13.push('78639167021187492431995700641917969777599028300699');
    numP13.push('15368713711936614952811305876380278410754449733078');
    numP13.push('40789923115535562561142322423255033685442488917353');
    numP13.push('44889911501440648020369068063960672322193204149535');
    numP13.push('41503128880339536053299340368006977710650566631954');
    numP13.push('81234880673210146739058568557934581403627822703280');
    numP13.push('82616570773948327592232845941706525094512325230608');
    numP13.push('22918802058777319719839450180888072429661980811197');
    numP13.push('77158542502016545090413245809786882778948721859617');
    numP13.push('72107838435069186155435662884062257473692284509516');
    numP13.push('20849603980134001723930671666823555245252804609722');
    numP13.push('53503534226472524250874054075591789781264330331690');
    var prob13 = prob13Func(numP13);
    console.log(prob13);
    $('.13').text(prob13);
	});

    // problem 14 - Longest Collatz sequence
    $('.btn-14').click(function(){
      var prob14 = prob14Func(1000000);
      console.log(prob14);
      $('.14').text(prob14);
    });

    // problem 15 - Lattice paths
    $('.btn-15').click(function(){
	    var prob15 = prob15Func(20);
	    console.log(prob15);
      $('.15').text(prob15);
    });

    // problem 16 - Power digit sum
    $('.btn-16').click(function(){
	    var prob16 = prob16Func(1000);
	    console.log(prob16);
      $('.16').text(prob16);
    });

    // problem 17 - Number letter counts
    $('.btn-17').click(function(){
	    var prob17 = prob17Func(1000);
	    console.log(prob17);
      $('.17').text(prob17);
    });
    // problem 18 - Maximum path sum I
    $('.btn-18').click(function(){
		var pb = [ 75,
	             95, 64,
	             17, 47, 82,
	             18, 35, 87, 10,
	             20, 04, 82, 47, 65,
	             19, 01, 23, 75, 03, 34,
	             88, 02, 77, 73, 07, 63, 67,
	             99, 65, 04, 28, 06, 16, 70, 92,
	             41, 41, 26, 56, 83, 40, 80, 70, 33,
	             41, 48, 72, 33, 47, 32, 37, 16, 94, 29,
	             53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14,
	             70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57,
	             91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48,
	             63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31,
	             04, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60, 04, 23];

		 	var prob18 = prob18Func(pb);
	    console.log(prob18);
      $('.18').text(prob18);
    });



    // problem 19 - 	Counting Sundays
    $('.btn-19').click(function(){
	    var prob19 = prob19Func([1901,2000]);
	    console.log(prob19);
      $('.19').text(prob19);
    });

    // problem 20 - 		Factorial digit sum
    $('.btn-20').click(function(){
	    var prob20 = prob20Func(100);
	    console.log(prob20);
      $('.20').text(prob20);
    });

    // problem 21 - 		Amicable numbers
    $('.btn-21').click(function(){
	    var prob21 = prob21Func(10000);
	    console.log(prob21);
      $('.21').text(prob21);
    });
};
// end of main function

$(document).ready(main);
