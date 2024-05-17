function calculateLimit() {
    const maxFlowerGrams = 56; // maximum limit in grams for flower
    const maxConcentratesGrams = 8; // maximum limit in grams for concentrates
    const maxEdiblesMg = 20000; // maximum limit in mg for edibles

    let currentFlower = parseFloat(document.getElementById('currentFlower').value) || 0;
    let currentConcentrates = parseFloat(document.getElementById('currentConcentrates').value) || 0;
    let currentEdibles = parseFloat(document.getElementById('currentEdibles').value) || 0;

    // Convert current inventory to flower equivalents
    let flowerEquivalent = currentFlower;
    flowerEquivalent += currentConcentrates * 7; // convert concentrate grams to flower equivalent
    flowerEquivalent += (currentEdibles / 10000) * 28; // convert edible mg to flower equivalent

    // Calculate remaining limits in each category
    let remainingFlower = maxFlowerGrams - flowerEquivalent;
    let remainingConcentrates = maxConcentratesGrams - (flowerEquivalent / 7);
    let remainingEdibles = maxEdiblesMg - (flowerEquivalent / 28) * 10000;

    // Ensure no negative values
    remainingFlower = remainingFlower >= 0 ? remainingFlower : 0;
    remainingConcentrates = remainingConcentrates >= 0 ? remainingConcentrates : 0;
    remainingEdibles = remainingEdibles >= 0 ? remainingEdibles : 0;

    // Display results
    document.getElementById('result').innerHTML = `
        You can purchase up to:
        <ul>
            <li>${remainingFlower.toFixed(2)} grams of flower</li>
            <li>${remainingConcentrates.toFixed(2)} grams of concentrates</li>
            <li>${remainingEdibles.toFixed(2)} mg of THC in edibles</li>
        </ul>
    `;
}
