// ===============================
// QUIZ DATA
// ===============================

const quizData = [
    {
        question: "Where did Capoeira originate?",
        options: ["Brazil", "Portugal", "Angola"],
        answer: "Brazil"
    },
    {
        question: "Which instrument is essential in Capoeira music?",
        options: ["Guitar", "Berimbau", "Piano"],
        answer: "Berimbau"
    },
    {
        question: "Capoeira combines martial arts with:",
        options: ["Swimming", "Dance and music", "Weightlifting"],
        answer: "Dance and music"
    }
];


// ===============================
// RENDER QUIZ AUTOMATICALLY
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector("#quizContainer");
    const submitButton = document.querySelector("#submitQuiz");

    if (!container) return;

    // Build quiz HTML
    let quizHTML = "";

    quizData.forEach((item, index) => {
        quizHTML += `
            <div class="quiz-question">
                <fieldset>
                    <legend>${item.question}</legend>
                    ${item.options.map(option => `
                        <label>
                            <input type="radio" name="question${index}" value="${option}">
                            ${option}
                        </label>
                    `).join("")}
                </fieldset>
            </div>
        `;
    });

    container.innerHTML = quizHTML;

    // Add event listener safely
    if (submitButton) {
        submitButton.addEventListener("click", calculateScore);
    }

});


// ===============================
// CALCULATE SCORE
// ===============================

function calculateScore() {

    let score = 0;

    quizData.forEach((item, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);

        if (selected && selected.value === item.answer) {
            score++;
        }
    });

    const result = document.querySelector("#quizResult");

    if (!result) return;

    if (score === quizData.length) {
        result.innerHTML = `<p><strong>Excellent!</strong> You scored ${score}/${quizData.length}.</p>`;
    } else {
        result.innerHTML = `<p>You scored ${score}/${quizData.length}. Keep practicing!</p>`;
    }

    localStorage.setItem("lastScore", score);
}


const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = `© ${currentYear} | Mateus de Sousa Schiavi | Brazil`;

const lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;