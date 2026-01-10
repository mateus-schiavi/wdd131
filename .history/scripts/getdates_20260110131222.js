const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = `© ${currentYear} | Mateus de Sousa Schiavi | Brazil`;

const lastModified = document.lastModified();

document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;