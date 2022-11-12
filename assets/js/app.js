const buttonExercise1 = document.querySelector("#button-exercise1");
const imgExercise1 = document.querySelector("#img-exercise1");

buttonExercise1.addEventListener("click", () => {
  if (imgExercise1.style.border !== "2px solid red") {
    imgExercise1.style.border = "2px solid red";
  } else {
    imgExercise1.style.border = "";
  }
});

const inputExercise2_1 = document.querySelector("#input-exercise2-1");
const inputExercise2_2 = document.querySelector("#input-exercise2-2");
const inputExercise2_3 = document.querySelector("#input-exercise2-3");
const buttonExercise2 = document.querySelector("#button-exercise2");
const pExercise2 = document.querySelector("#p-exercise2");

buttonExercise2.addEventListener("click", () => {
  let number1 = +inputExercise2_1.value;
  let number2 = +inputExercise2_2.value;
  let number3 = +inputExercise2_3.value;

  if (number1 < 0) {
    number1 = 0;
    inputExercise2_1.value = 0;
  }

  if (number2 < 0) {
    number2 = 0;
    inputExercise2_2.value = 0;
  }

  if (number3 < 0) {
    number3 = 0;
    inputExercise2_3.value = 0;
  }

  const totalnumber = number1 + number2 + number3;

  if (totalnumber >= 11) {
    pExercise2.textContent = "Llevas demasiados stickers";
  } else {
    pExercise2.textContent = `Llevas ${totalnumber} stickers`;
  }
});

const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");
const buttonExercise3 = document.querySelector("#button-exercise3");
const spanExercise3 = document.querySelector("#span-exercise3");

buttonExercise3.addEventListener("click", () => {
  const number1 = +select1.value;
  const number2 = +select2.value;
  const number3 = +select3.value;

  if (number1 === 9 && number2 === 1 && number3 === 1) {
    spanExercise3.textContent = "Password 1 correcto";
  } else if (number1 === 7 && number2 === 1 && number3 === 4) {
    spanExercise3.textContent = "Password 2 correcto";
  } else {
    spanExercise3.textContent = "Password incorrecto";
  }
});
