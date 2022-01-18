const gameForm = document.querySelector("#game-form");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const span = document.querySelector("span");
const h4 = document.querySelector("h4");

function onGameSubmit(e) {
  e.preventDefault();
  const input1Value = parseInt(input1.value);
  const input2Value = parseInt(input2.value);
  const randomNum = Math.ceil(Math.random() * input1Value);

  if (input1Value < input2Value) {
    alert(`0과 ${input1Value} 사이의 숫자를 입력해주세요.`);
  } else {
    span.innerHTML = `You chose: ${input2Value}, the machine chose: ${randomNum}.`;
    if (input2Value === randomNum) {
      h4.innerHTML = "you won!";
    } else {
      h4.innerHTML = "you lost!";
    }
  }
}

gameForm.addEventListener("submit", onGameSubmit);
