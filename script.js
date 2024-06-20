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
        let overLimit = Math.min(remainingFlower, remainingConcentrates * 
