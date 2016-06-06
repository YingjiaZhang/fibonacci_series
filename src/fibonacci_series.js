'use strict';

function fibonacci(n){
	
	if(n==0)
		return 0;
	if(n==1)
		return 1;
	if(n>1)
		return fibonacci(n-1)+fibonacci(n-2);

}

function fibonacci_series(n) {

	var fibonacci_arr = [];

	for (var i=0; i<=n; i++){
		fibonacci_arr.push(fibonacci(i));
	}

	return fibonacci_arr;
}

module.exports = fibonacci_series;
