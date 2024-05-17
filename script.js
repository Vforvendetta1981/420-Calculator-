function calculateLimit() {
    const maxLimit = 2; // maximum limit in ounces
    let currentInventory = parseFloat(document.getElementById('currentInventory').value);
    let dailyUsage = parseFloat(document.getElementById('dailyUsage').value);

    let result = maxLimit - currentInventory;
    result = result >= 0 ? result : 0;

    document.getElementById('result').innerHTML = `You can purchase up to ${result.toFixed(2)} ounces of medical marijuana.`;
}
