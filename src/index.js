import './sass/main.scss';

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

