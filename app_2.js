'use strict'

// 2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout  

// Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'

detonatorTimer(3);

function detonatorTimer(delay) {
	if (delay > 0) {
    console.log(delay);
    delay --;
    setTimeout(detonatorTimer, 1000, delay);
  } else if(delay === 0) {
    console.log('BOOM!');
  }
}