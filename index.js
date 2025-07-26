const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value) {
            currentInput += value;
            display.value = currentInput;
        } else if (button.id === 'clear') {
            currentInput = '';
            display.value = '';
        } else if (button.id === 'equal') {
            try {
                const result = eval(currentInput);
                display.value = result;
                currentInput = result.toString();
            } catch (err) {
                display.value = 'Error';
                currentInput = '';
            }
        }
    });
});

// Keyboard input support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if ('0123456789+-*/.'.includes(key)) {
        currentInput += key;
        display.value = currentInput;
    } else if (key === 'Enter') {
        try {
            const result = eval(currentInput);
            display.value = result;
            currentInput = result.toString();
        } catch (err) {
            display.value = 'Error';
            currentInput = '';
        }
    } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    } else if (key.toLowerCase() === 'c') {
        currentInput = '';
        display.value = '';
    }
});
