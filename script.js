function calculateLimit() {
    const maxFlower = 2; // maximum limit in ounces for flower
    const maxConcentrates = 8; // maximum limit in grams for concentrates
    const maxEdibles = 2000; // setting an arbitrary high limit for edibles in mg of THC

    let currentFlower = parseFloat(document.getElementById('currentFlower').value);
    let currentConcentrates = parseFloat(document.getElementById('currentConcentrates').value);
    let currentEdibles = parseFloat(document.getElementById('currentEdibles').value);

    let dailyFlower = parseFloat(document.getElementById('dailyFlower').value);
    let dailyConcentrates = parseFloat(document.getElementById('dailyConcentrates').value);
    let dailyEdibles = parseFloat(document.getElementById('dailyEdibles').value);

    // Default daily usage to 0 if not provided
    if (isNaN(dailyFlower)) dailyFlower = 0;
    if (isNaN(dailyConcentrates)) dailyConcentrates = 0;
    if (isNaN(dailyEdibles)) dailyEdibles = 0;

    // Calculate allowable purchases
    let allowableFlower = maxFlower - currentFlower;
    allowableFlower = allowableFlower >= 0 ? allowableFlower : 0;

    let allowableConcentrates = maxConcentrates - currentConcentrates;
    allowableConcentrates = allowableConcentrates >= 0 ? allowableConcentrates : 0;

    let allowableEdibles = maxEdibles - currentEdibles;
    allowableEdibles = allowableEdibles >= 0 ? allowableEdibles : 0;

    // Display results
    document.getElementById('result').innerHTML = `
        You can purchase up to:
        <ul>
            <li>${allowableFlower.toFixed(2)} ounces of flower</li>
            <li>${allowableConcentrates.toFixed(2)} grams of concentrates</li>
            <li>${allowableEdibles.toFixed(2)} mg of THC in edibles</li>
        </ul>
    `;
}
