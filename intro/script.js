const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});

clear.addEventListener('click', () => {
  display.value = '';
});

equal.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch {
    alert("Invalid Expression");
  }
});
