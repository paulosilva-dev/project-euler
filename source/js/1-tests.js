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