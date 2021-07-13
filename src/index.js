import './sass/main.scss';

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
  
  inputData.addEventListener('input', inputValidator);

  const a = new Date();

  const currentDay = a.toDateString();

  function inputValidator () {
      console.log(inputData.value);
      const b = inputData.value;
      const c = b.toDateString();
      console.log(Date.parse(c));
      console.log(currentDay);
      console.log(Date.parse(currentDay));
  }

  
