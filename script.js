const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const lengthValEl = document.getElementById('length-val');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
const toastEl = document.getElementById('toast');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;
    if (!password || password === 'Select criteria and generate!' || password === 'Please select at least one option!') {
        return;
    }

    navigator.clipboard.writeText(password).then(() => {
        toastEl.classList.add('show');
        setTimeout(() => {
            toastEl.classList.remove('show');
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});

lengthEl.addEventListener('input', (e) => {
    lengthValEl.innerText = e.target.value;
});

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    
    if (typesCount === 0) {
        return 'Please select at least one option!';
    }

    // Ensure we get at least one of each selected type
    for (let i = 0; i < typesArr.length; i++) {
        const type = Object.keys(typesArr[i])[0];
        generatedPassword += randomFunc[type]();
    }

    // Fill the rest randomly
    for (let i = typesArr.length; i < length; i++) {
        const randomTypeIndex = Math.floor(Math.random() * typesArr.length);
        const type = Object.keys(typesArr[randomTypeIndex])[0];
        generatedPassword += randomFunc[type]();
    }

    // Shuffle the generated password characters to remove the predictable sequence at the beginning
    return shuffleString(generatedPassword);
}

function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generate an initial password on load
generateEl.click();
