'use strict'
// // 1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval  

// // Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'

detonatorTimer(3);

function detonatorTimer(delay) {
	const timeoutID = setInterval(countdown,1000)
  function countdown(){
    if(delay>0){
    console.log(delay)
    delay--};
    if (delay===0){
      clearInterval(timeoutID);
      console.log('BOOM!')
    }
  }
}
