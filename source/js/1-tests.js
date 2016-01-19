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