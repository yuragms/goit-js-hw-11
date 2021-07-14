import './sass/main.scss';

import Swal from 'sweetalert2';





// <!--Задание 1 - переключатель цветов -->

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const tagBody = document.querySelector('body');
let timerId;

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
  
  const currentDay = new Date();

  let timeInterval;
  let dedline;

  inputData.addEventListener('input', inputValidator);
  btnStart1.addEventListener('click', startTimer);


  function inputValidator () {
     const currentDayInMs = Date.parse(currentDay);
     const inputDataInMs = Date.parse(inputData.value);
     dedline = inputDataInMs - currentDayInMs;
    // dedline = 10000;
  
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
   let secondsBeauty = seconds.toString().padStart(2,"0");
   let minutesBeauty = minutes.toString().padStart(2,"0");
   let hoursBeauty = hours.toString().padStart(2,"0");
   let daysBeauty = days.toString().padStart(3,"0");

   secondsOutHtml.innerHTML = `${secondsBeauty}`;
   minutesOutHtml.innerHTML = `${minutesBeauty}`;
   hoursOutHtml.innerHTML = `${hoursBeauty}`;
   daysOutHtml.innerHTML = `${daysBeauty }`;

   if (dedline === 0) {clearInterval(timeInterval);}
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
  
 // <!--Задание 3 - Подзадание 1 -->
 const delay = ms => { 
  //  return new Promise((resolve) => setTimeout(resolve(ms), ms));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  // Change this function
};

const logger = time => console.log(`Fulfilled after ${time}ms`);

// Tests
delay(2000).then(logger); // Fulfilled after 2000ms
delay(1000).then(logger); // Fulfilled after 1000ms
delay(1500).then(logger); // Fulfilled after 1500ms


// <!--Задание 3 - Подзадание 2 -->
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, username) => {


  return new Promise((resolve, reject) => {
  const updatedUsers = allUsers.map(user =>
    user.name === username ? { ...user, active: !user.active } : user
  );
    if (username) {
      resolve(updatedUsers);
    } else { 
      reject(updatedUsers);
    }
  });
};

// The function should work like this
toggleUserState(users, 'Mango').then(console.table);
toggleUserState(users, 'Ajax').then(console.table);

// <!--Задание 3 - Подзадание 3 -->

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
  
      if (canProcess) {
        resolve({ id: transaction.id, time: delay });
      } else {
        reject(transaction.id);
      }
    }, delay);
    });

};

const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};



// The function should work like this
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);