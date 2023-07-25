'use strict'
// 1. Задача про обчислення різниці часу

function durationBetweenDates(startDate, endDate, timeFrame) {
    let diff = Math.abs(new Date(endDate) - new Date(startDate));
    let seconds = diff/1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;

if(timeFrame==='seconds'){
    return seconds+' seconds';
}
if(timeFrame==='minutes'){
  return minutes+' minutes';
}
if(timeFrame==='hours'){
  return hours+' hours';
}
else{
  return Math.round (days)+' day';
}
  }
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));