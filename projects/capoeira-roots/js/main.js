// ===============================
// GLOBAL SCRIPT (ALL PAGES)
// ===============================

// Footer year
const yearElement = document.querySelector("#year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Show returning user (if saved)
const savedUser = localStorage.getItem("capoeiraUser");
if (savedUser) {
    console.log(`Welcome back ${savedUser}`);
}

const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = `© ${currentYear} | Mateus de Sousa Schiavi | Brazil`;

const lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;