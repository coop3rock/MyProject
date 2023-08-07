"use strict";
// 5. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.

function someFunction(str1,str2){
  str1 = 'Hi!';
  str2 = 'Thank you for waiting.'
  console.log(str1 + ' ' + str2 + ' ' + 'You are patient! Wait one more hour, please 🤣');
}
function slower(func, seconds) {
  seconds *= 1000;
    return function() {
      setTimeout(() => func.call(this), seconds);
      console.log("Chill out, you will get you result in 5 seconds")
    };
  
}

let slowedSomeFunction = slower(someFunction, 5); 
slowedSomeFunction("Hello!") 

