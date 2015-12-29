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


// problem 1
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

// problem 2

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