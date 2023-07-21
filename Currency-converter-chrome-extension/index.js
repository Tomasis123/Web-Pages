const inputEl = document.querySelector(".input-el");
const btnEl = document.querySelector(".btn-el");
const lengthDivP = document.querySelector(".length-div p");
const volDivP = document.querySelector(".volume-div p");
const massDivP = document.querySelector(".mass-div p");
let number;

function renderFromLocalStorage() {
    if(localStorage) {
        lengthDivP.textContent = localStorage.getItem("message1");
        volDivP.textContent = localStorage.getItem("message2");
        massDivP.textContent = localStorage.getItem("message3");
    }
}

renderFromLocalStorage();


btnEl.addEventListener("click", function() {
    number = inputEl.value;
    localStorage.setItem("number", number);


    const message1 = `${number} meter/s = ${(parseFloat(number)*3.281).toFixed(3)} feet | ${number} feet = ${(parseFloat(number/3.281)).toFixed(3)} meter/s`;
    lengthDivP.textContent = message1;
    localStorage.setItem("message1", message1);
    
    const message2 = `${number} liter/s = ${(parseFloat(number)*0.264).toFixed(3)} gallon/s | ${number} gallon/s = ${(parseFloat(number/0.264)).toFixed(3)} liter/s`;
    volDivP.textContent = message2;
    localStorage.setItem("message2", message2);

    const message3 = `${number} kg/s = ${(parseFloat(number)*2.204).toFixed(3)} lb/s | ${number} lb/s = ${(parseFloat(number/2.204)).toFixed(3)} kg/s`;
    massDivP.textContent = message3;
    localStorage.setItem("message3", message3);

})
