const inputField = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

let memoryValue = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === '=') {
            try {
                inputField.value = eval(inputField.value);
            } catch (error) {
                inputField.value = 'Error';
            }
        } else if (value === 'C') {
            inputField.value = '';
        } else if (value === '%') {
            try {
                inputField.value = eval(inputField.value) / 100;
            } catch (error) {
                inputField.value = 'Error';
            }
        } else if (value === 'M+') {
            try {
                memoryValue += eval(inputField.value);
                inputField.value = '';
            } catch (error) {
                inputField.value = 'Error';
            }
        } else if (value === 'M-') {
            try {
                memoryValue -= eval(inputField.value);
                inputField.value = '';
            } catch (error) {
                inputField.value = 'Error';
            }
        } else {
            inputField.value += value;
        }
    });
});