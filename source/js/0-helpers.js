// converts a number to an array (1 digit per slot)
function ArrayNum(num) {
	this.array = [];
  if(num.constructor == Array){
    this.array = num.slice();
  }
  if(num.constructor == Number){
  	do{
  		this.array.push(num%10);
  		num=Math.floor(num/10);
  	}while(num > 0);
    this.array = this.array.reverse();
  }

  this.toNum = function(){
    var num = 0;
    for(var i= 0; i<this.array.length; i++){
      num += Math.pow(10,this.array.length-i-1) *this.array[i];
    }
    return num;
  };

	this.contains = function(nums){
		// not checking if reapeated numbers exist
		if(nums.constructor == Number){
			for(var i = 0; i<this.array.length;i++){
				if(this.array[i] === nums){
					return true;
				}
			}
			return false;
		} else {
			var foundNum = false;
			for(var i = 0; i<nums.length;i++){
				foundNum = false;
				for(var j = 0; j<this.array.length && !foundNum;j++){
					if(nums[i] === this.array[j]){
						foundNum = true;
					}
				}
				if(!foundNum){
					return false;
				}
			}
			return true;
		}
	};
	this.allDifferent = function(){
		for(var i =0; i<this.array.length;i++){
			for(var k =i+1; k<this.array.length;k++){
				if(this.array[i]===this.array[k]){
					return false;
				}
			}
		}
		return true;
	};
}
