/*
module.exports.counter = function(arr){
	
	return " There are " + arr.length + " elements in this array";
}

module.exports.adder = function( a, b){
	
	return `The sum of the 2 number is ${a+b}`;
}

module.exports.pi =3.14;
or

var half= .5
module.exports= half;
*/
var arr= function(a){
	return "Array length of " + a.length + " items";
}

var mult= function(x, y){
	result=x*y;
	return "The Result is "  + result;
}

var half =.5;
module.exports ={
	array:arr,
	product: mult,
	half: half
}

/*module.exports.counter = counter;
module.exports.adder= adder;
module.exports.pi=pi;
*/

