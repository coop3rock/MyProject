'use strict'

// //   2. Задача про перетворення об'єкту

const priceData = {
   Apples: '23.4',
   BANANAS: '48',
   oRAngGEs: '48.7584',
   };
   
   function optimizer(data) {
      const newObj = Object.fromEntries(
         Object.entries(data).map(([key, value]) => [key.toLowerCase(), Number(value).toFixed(2)])
       )
       return newObj;
   };
   
   let updatedPriceData = optimizer(priceData);
   
   console.log(updatedPriceData);
