'use strict'

// // 3. Задача про рекурсію 

function recursiveOddSumTo(number) {
   if(number==1) return number;
   if(number%2!==0) return number + recursiveOddSumTo(number-1);
      else
      return recursiveOddSumTo(number-1);
   
}
    console.log(recursiveOddSumTo(1)) // 1
    console.log(recursiveOddSumTo(10)) // 25


