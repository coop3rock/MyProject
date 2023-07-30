'use strict'

//  4. Напишіть функцію яка відфільтрує масив унікальних значень

 
const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
 const uniqueNames = Array.from(new Set(userNames));
 return uniqueNames;
}

console.log(filterUnique(userNames)); 
