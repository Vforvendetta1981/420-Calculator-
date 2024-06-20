document.getElementById('calculate').addEventListener('click', () => {
    let limit = parseFloat(document.getElementById('limit').value);
    let total = calculateTotal(); // Function to calculate the total

    if (total > limit) {
        let excess = total - limit;
        showPopup(`You are over the limit by ${excess}`);
    }
});

function showPopup(message) {
    let popup = document.getElementById('popup');
    let popupContent = document.getElementById('popup-content');
    popupContent.textContent = message;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

// Function to calculate the total
function calculateTotal() {
    // Your existing logic to calculate the total
}

// Standard calculator logic
const standardInput = document.getElementById('standard-input');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Calculator logic
        standardInput.value += button.textContent;
    });
});
