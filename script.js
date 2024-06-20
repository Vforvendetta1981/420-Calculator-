let flowerLimit = 56;
let concentratesLimit = 8;
let ediblesLimit = 20000;

function updateLimits() {
    flowerLimit = parseFloat(document.getElementById('flowerLimit').value) || 56;
    concentratesLimit = parseFloat(document.getElementById('concentratesLimit').value) || 8;
    ediblesLimit = parseFloat(document.getElementById('ediblesLimit').value) || 20000;
}

function calculateLimit() {
    let currentFlower = parseFloat(document.getElementById('currentFlower').value) || 0;
    let currentConcentrates = parseFloat(document.getElementById('currentConcentrates').value) || 0;
    let currentEdibles = parseFloat(document.getElementById('currentEdibles').value) || 0;

    let flowerEquivalent = currentFlower;
    flowerEquivalent += currentConcentrates * 7;
    flowerEquivalent += (currentEdibles / 10000) * 28;

    let remainingFlower = flowerLimit - flowerEquivalent;
    let remainingConcentrates = concentratesLimit - (flowerEquivalent / 7);
    let remainingEdibles = ediblesLimit - (flowerEquivalent / 28) * 10000;

    if (remainingFlower < 0 || remainingConcentrates < 0 || remainingEdibles < 0) {
        let overLimit = Math.min(remainingFlower, remainingConcentrates * 7, remainingEdibles / 28 * 10000);
        document.getElementById('popup-text').innerText = `You are over the limit by ${Math.abs(overLimit).toFixed(2)} grams of flower equivalent.`;
        document.getElementById('popup').style.display = 'block';
        setTimeout(() => {
            document.getElementById('popup').style.display = 'none';
        }, 3000);
    } else {
        document.getElementById('result').innerHTML = `
            You can purchase up to:
            <ul>
                <li>${remainingFlower.toFixed(2)} grams of flower</li>
                <li>${remainingConcentrates.toFixed(2)} grams of concentrates</li>
                <li>${remainingEdibles.toFixed(2)} mg of THC in edibles</li>
            </ul>
        `;
    }
}

function pressKey(key) {
    const display = document.getElementById('calc-display');
    if (key === '=') {
        display.value = eval(display.value);
    } else {
        display.value += key;
    }
}

function clearCalc() {
    document.getElementById('calc-display').value = '';
}
