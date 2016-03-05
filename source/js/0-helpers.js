// converts a number to an array (1 digit per slot)
function ArrayNum(num) {
	this.arrayNum = [];
  if(num.constructor == Array){
    this.arrayNum = num.slice();
  }
  if(num.constructor == Number){
  	do{
  		this.arrayNum.push(num%10);
  		num=Math.floor(num/10);
  	}while(num > 0);
    this.arrayNum = this.arrayNum.reverse();
  }

  this.toNum = function(){
    var num = 0;
    for(var i= 0; i<this.arrayNum.length; i++){
      num += Math.pow(10,this.arrayNum.length-i-1) *this.arrayNum[i];
    }
    return num;
  };
}
