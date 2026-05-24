// State Evaluation Matrix Configuration for PhishShield Academy Quiz Engine
const quizDatabase = [
    {
        text: "URL Input Vector: https://www.g00gle.com/accounts/login",
        expected: "Phishing"
    },
    {
        text: "Inbound Email Payload Link Destination: http://secure-bank-update.verify-routing-node.net/login.php",
        expected: "Phishing"
    },
    {
        text: "System Routing Domain: https://login.microsoftonline.com/oauth2/v2.0",
        expected: "Safe"
    },
    {
        text: "SMS Alert Payload Anchor link: http://paypal.com.verification-security.net/activity",
        expected: "Phishing"
    },
    {
        text: "Administrative Target Node Gateway: https://github.com/ranetejal214-tech",
        expected: "Safe"
    }
];

let currentQuestionIndex = 0;
let userScoreCount = 0;

// View Navigation State Routing Controller Engine
function switchView(targetViewKey) {
    document.getElementById('dashboard-view').classList.add('d-none');
    document.getElementById('simulator-view').classList.add('d-none');
    document.getElementById('quiz-view').classList.add('d-none');

    if (targetViewKey === 'dashboard') {
        document.getElementById('dashboard-view').classList.remove('d-none');
    } else if (targetViewKey === 'simulator') {
        document.getElementById('simulator-view').classList.remove('d-none');
    } else if (targetViewKey === 'quiz') {
        document.getElementById('quiz-view').classList.remove('d-none');
        loadQuizQuestionFrame();
    }
}

// Render Next Component Package Into Active DOM
function loadQuizQuestionFrame() {
    if (currentQuestionIndex < quizDatabase.length) {
        document.getElementById('quiz-body').classList.remove('d-none');
        document.getElementById('quiz-results').classList.add('d-none');
        document.getElementById('quiz-question-box').innerText = quizDatabase[currentQuestionIndex].text;
    } else {
        triggerScoreMetricsSummary();
    }
}

// Logic Validation Layer
function evaluateAnswer(userSelectionChoice) {
    const activeAnswerProfile = quizDatabase[currentQuestionIndex];
    if (userSelectionChoice === activeAnswerProfile.expected) {
        userScoreCount++;
    }
    currentQuestionIndex++;
    loadQuizQuestionFrame();
}

// Presentation Summary Logic For Assessment Execution
function triggerScoreMetricsSummary() {
    document.getElementById('quiz-body').classList.add('d-none');
    document.getElementById('quiz-results').classList.remove('d-none');
}

// Reset State Machine Array Configuration
function resetQuiz() {
    currentQuestionIndex = 0;
    userScoreCount = 0;
    loadQuizQuestionFrame();
}

