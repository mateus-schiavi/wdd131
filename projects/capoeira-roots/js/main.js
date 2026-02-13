// Footer year
document.querySelector("#year").textContent = new Date().getFullYear();

// Quiz object and array
const quizData = [
    {
        question: "Where did Capoeira originate?",
        options: ["Brazil", "Portugal", "Angola"],
        answer: "Brazil"
    },
    {
        question: "Which instrument is used in Capoeira?",
        options: ["Guitar", "Berimbau", "Drum Set"],
        answer: "Berimbau"
    }
];

// Start Quiz
document.querySelector("#startQuiz").addEventListener("click", startQuiz);

function startQuiz() {
    const container = document.querySelector("#quizContainer");
    container.innerHTML = "";

    quizData.forEach((item, index) => {
        container.innerHTML += `
            <div>
                <p>${item.question}</p>
                ${item.options.map(option => `
                    <label>
                        <input type="radio" name="question${index}" value="${option}">
                        ${option}
                    </label>
                `).join("")}
            </div>
        `;
    });

    container.innerHTML += `<button onclick="calculateScore()">Submit Quiz</button>`;
}

function calculateScore() {
    let score = 0;

    quizData.forEach((item, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === item.answer) {
            score++;
        }
    });

    const result = document.querySelector("#quizResult");

    if (score === quizData.length) {
        result.textContent = `Excellent! You scored ${score}/${quizData.length}.`;
    } else {
        result.textContent = `You scored ${score}/${quizData.length}. Keep practicing!`;
    }

    localStorage.setItem("lastScore", score);
}

// Form handling
document.querySelector("#signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#fullname").value;

    localStorage.setItem("capoeiraUser", name);

    document.querySelector("#welcomeMessage").textContent = `Welcome to Capoeira Roots, ${name}!`;
});
