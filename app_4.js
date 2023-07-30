'use strict'

//  4. Напишіть функцію яка відфільтрує масив унікальних значень

 
const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
 return Array.from(new Set(array));
}

console.log(filterUnique(userNames)); 
