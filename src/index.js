import './sass/main.scss';

import Swal from 'sweetalert2';





// <!--Задание 1 - переключатель цветов -->

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const tagBody = document.querySelector('body');
let timerId;

console.log(btnStop);

btnStart.addEventListener('click', addBgcolor);
btnStop.addEventListener('click', removeBgcolor);

function addBgcolor (e) {
    // console.log(timerId);
    timerId = setInterval(randomColor, 1000); 
    btnStart.setAttribute("disabled", "true");
    console.log(timerId);
    

};


function removeBgcolor (e) {
    console.log(timerId);
    clearInterval(timerId);

    tagBody.removeAttribute("style", "background-color: teal;");
    btnStart.removeAttribute("disabled", "true");
    console.log(timerId);
};

 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function randomColor() {
    let randomColor = getRandomHexColor();
    tagBody.setAttribute("style", `background-color: ${randomColor};`);
  }

  // <!--Задание 2 - таймер обратного отсчета -->

  const inputData = document.querySelector('#date-selector');
  const btnStart1 = document.querySelector('[data-start1]');
  const secondsOutHtml = document.querySelector('[data-seconds]');
  const minutesOutHtml = document.querySelector('[data-minutes]');
  const hoursOutHtml = document.querySelector('[data-hours]');
  const daysOutHtml = document.querySelector('[data-days]');
  
  
  
  let timeInterval;
  let dedline;





  
  inputData.addEventListener('input', inputValidator);
  btnStart1.addEventListener('click', startTimer);



  const currentDay = new Date();

  function inputValidator () {
const currentDayInMs = Date.parse(currentDay);
const inputDataInMs = Date.parse(inputData.value);
  //  dedline = inputDataInMs - currentDayInMs;
  dedline = 15000;


      console.log('currentDayInMs '+ currentDayInMs);
      console.log('inputDataInMs '+ inputDataInMs);
  
      console.log(dedline);

      if(currentDayInMs > inputDataInMs) {
         func1();
         btnStart1.setAttribute("disabled", "true");
        } else {
          btnStart1.removeAttribute("disabled", "true");
        }
  }


  function  func1() {
  Swal.fire({
    title: 'Error!',
    text: 'Please choose a date in the future',
    icon: 'error',
    confirmButtonText: 'Cool'
  })}


 function startTimer () {
   timeInterval = setInterval(tick, 1000);
 }

 function tick () {
  dedline -= 1000;
   let getTime = convertMs(dedline);
   let seconds = getTime.seconds;
   let minutes = getTime.minutes;
   let hours = getTime.hours;
   let days = getTime.days; 

   secondsOutHtml.innerHTML = `${seconds}`;
   minutesOutHtml.innerHTML = `${minutes}`;
   hoursOutHtml.innerHTML = `${hours}`;
   daysOutHtml.innerHTML = `${days}`;

   if (dedline = 0) {clearInterval(timeInterval);}
 }

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); //{days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}
  
