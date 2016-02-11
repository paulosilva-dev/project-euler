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
// test(prob22Func, ["aaa"], 3);
// test(prob22Func, ["abc"], 6);
// test(prob22Func, ["b","a"], 5);
// test(prob22Func, ["COLIN"], 53);
// loadScript("assets/p22-names.js", function(){  test(prob22Func, p22names, 871198282); });
