const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = `© ${currentYear} | Mateus de Sousa Schiavi | Brazil`;

const lastModifiedDate = document.lastModified();

document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;