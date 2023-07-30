'use strict'

//  2. Задача на використання замикання.
//  Напишіть функцію яка працює таким чином: multiply(a)(b) // a * b

console.log(multiply(5)(5))		
console.log(multiply(2)(-2))	      
console.log(multiply(4)(3))		

function multiply(a) {
	return function(b){
      return a*b;
   }
}