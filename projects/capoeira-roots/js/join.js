// ===============================
// JOIN FORM SCRIPT
// ===============================

const form = document.querySelector("#signupForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.querySelector("#fullname").value;
        const email = document.querySelector("#email").value;
        const level = document.querySelector("#level").value;

        const user = {
            name: name,
            email: email,
            level: level
        };

        localStorage.setItem("capoeiraUser", JSON.stringify(user));

        document.querySelector("#welcomeMessage").innerHTML = `
            <p>Welcome ${name}! You registered as a ${level} capoeirista.</p>
        `;

        form.reset();
    });
}

const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = `© ${currentYear} | Mateus de Sousa Schiavi | Brazil`;

const lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;