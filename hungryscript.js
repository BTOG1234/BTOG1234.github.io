// Variables to track Amog's hunger
let hunger = 0;
const maxHunger = 15;
const hungerDecreaseOnFeed = 10;
const hungerIncreaseInterval = 20000; // Increase hunger every 20 seconds

// Function to increase Amog's hunger
function increaseHunger() {
    hunger++;
    if (hunger >= maxHunger) {
        showHungrySprite();
    }
}

// Function to decrease Amog's hunger when fed
function feedAmog() {
    if (hunger > 0) {
        hunger = Math.max(0, hunger - hungerDecreaseOnFeed);
        updateAmogAppearance();
    }
}

// Function to update Amog's appearance based on hunger
function updateAmogAppearance() {
    if (hunger < maxHunger) {
        document.getElementById('amog').style.backgroundImage = "url('idle.gif')";
    } else {
        showHungrySprite();
    }
}

// Function to show the hungry sprite
function showHungrySprite() {
    document.getElementById('amog').style.backgroundImage = "url('hungry.gif')";
}

// Function to navigate to main menu
function goToMainMenu() {
    window.location.href = "index.html"; // Navigate to index.html
}

// Function to toggle dark mode
function toggleDarkMode() {
    var toggle = document.getElementById("toggle");
    if (toggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled"); // Store dark mode preference
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled"); // Store dark mode preference
    }
}

// Check dark mode preference on page load
window.onload = function() {
    var darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("toggle").checked = true;
    } else {
        document.body.classList.remove("dark-mode");
        document.getElementById("toggle").checked = false;
    }

    // Start interval to increase hunger
    setInterval(increaseHunger, hungerIncreaseInterval);

    // Initial appearance update
    updateAmogAppearance();
}
