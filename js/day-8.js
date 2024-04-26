const statementAnswer = document.getElementById("booleanStatement");
const statement = 10 === 5;

if (statement) {
  statementAnswer.textContent = "It's true!"
} else {
  statementAnswer.textContent = "It's false!"
}

const conditionalAnswer = document.getElementById("ifStatement");
const age = 70;

if (age < 18) {
  conditionalAnswer.textContent = "You are too young to enter."
} else if (age < age) {
  conditionalAnswer.textContent = "Welcome!"
} else {
  conditionalAnswer.textContent = "You are too old."
}

const counter = document.getElementById('counter');
const buttons = document.querySelectorAll('button');
let count = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'increase') {
      count++;
    } else if (button.id === 'decrease') {
      count--;
    } else {
      count = 0;
    }
    counter.textContent = count;
    counter.style.color = count > 0 ? 'green' : count < 0 ? 'red' : 'black';
  });
});
