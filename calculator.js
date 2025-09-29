const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

function updateDisplay() {
  display.value = currentInput;
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = 'Error';
  }
  updateDisplay();
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-key');

    if (key === 'C') {
      currentInput = '';
    } else if (key === 'Backspace') {
      currentInput = currentInput.slice(0, -1);
    } else if (key === 'Enter') {
      calculateResult();
      return;
    } else {
      currentInput += key;
    }

    updateDisplay();
  });
});

// Bonus: Keyboard support
document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789/*-+.';

  if (allowedKeys.includes(e.key)) {
    currentInput += e.key;
  } else if (e.key === 'Enter') {
    calculateResult();
    return;
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else if (e.key === 'Escape') {
    currentInput = '';
  }

  updateDisplay();
});
