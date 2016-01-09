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
  console.log('# for input: '+arg);
  console.log('# expected: '+expec+'   got: '+ result);
	console.log('# computed in: '+(e-s)+'ms');
}

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