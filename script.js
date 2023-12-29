function startGame() {
    document.querySelector(".htp-container").style.display = "none";
    document.querySelector(".game-container").style.display = "";
}

function restartGame() {
    location.reload();
}

let targetAnswer;
let timer;
let seconds = 120;
let score = 0;
let highScore = 0;

function startGame() {
    document.querySelector(".htp-container").style.display = "none";
    document.querySelector(".game-container").style.display = "";

    targetAnswer = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    document.querySelector(".target-answer input").value = targetAnswer;

    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (seconds > 0) {
        seconds--;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        document.querySelector(".timer input").value = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    } else {
        endGame();
    }
}

function endGame() {
    clearInterval(timer);

    if (score > highScore) {
        highScore = score;
        document.querySelector(".high-score input").value = highScore;
    }

    document.querySelector(".game-footer button:last-child").style.display = "none";
    document.querySelector(".user-input input").value = "Time's Up!";

}

function checkAnswer() {
    const userInput = document.querySelector(".user-input input").value;
    const userAnswer = eval(userInput);

    if (userAnswer === targetAnswer) {
        score++;
        startGame();
    }

    document.querySelector(".your-score input").value = score;
    document.querySelector(".user-input input").value = "";
}

function appendToUserInput(value) {
    document.querySelector(".user-input input").value += value;
}

function clearUserInput() {
    document.querySelector(".user-input input").value = "";
}