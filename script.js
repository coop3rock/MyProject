// 'use strict';
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
toggleThemeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            toggleThemeBtn.innerText = document.body.classList.contains('dark')?"TURN ON":"TURN OFF";
            localStorage.theme = document.body.className ||"light";
        });


function lastTimeClick() {
    if ("lastData" in localStorage) document.getElementById("dateHistory").innerHTML = 'Last turn off: '+ localStorage.lastData;
    dateHistory.innerText = document.body.classList.contains('dark')?"Last turn on: " + localStorage.lastData : "Last turn off: "+ localStorage.lastData;
   };

function formatTime(){
    let today = new Date;
    let date = addZero(today.getDate());
    let month = addZero(today.getMonth());
    let year = addZero(today.getFullYear());
    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());
    let currentTime = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return currentTime;

    function addZero(num){
        return num < 10? `0${num}` : num;
}
};
localStorage.setItem('lastData', formatTime());
function init() {
    toggleThemeBtn.addEventListener('click', () => {document.getElementById("dateHistory").innerHTML = formatTime();
    lastTimeClick();
    localStorage.lastData = formatTime()
})
    lastTimeClick()
};
   
init();
localStorage.setItem('theme', "light");
if(!localStorage.theme) localStorage.theme = "light"
document.body.className = localStorage.theme
toggleThemeBtn.innerText = document.body.classList.contains('dark')?"TURN ON":"TURN OFF"
dateHistory.innerText = document.body.classList.contains('dark')?"Last turn on: " + localStorage.lastData : "Last turn off: "+ localStorage.lastData;


 
