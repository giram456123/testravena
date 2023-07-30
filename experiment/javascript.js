var score = localStorage.getItem('score') || 0;
var currentPageNumber = parseInt(window.location.pathname.match(/(\d+)\.html/)[1], 10);
var nextPageNumber = currentPageNumber + 1;
var isCorrectAnswerSelected = false;

function playCorrectSound() {
    var correctAudio = document.getElementById('correctAudio');
    correctAudio.play();
}

function playWrongSound() {
    var wrongAudio = document.getElementById('wrongAudio');
    wrongAudio.play();
}

function updateScore(event) {
    var selectedImage = event.target;
    var isCorrect = selectedImage.id === 'correct';

    if (isCorrect) {
        if (isCorrect && !isCorrectAnswerSelected) {score++; isCorrectAnswerSelected = true; }
        playCorrectSound();
        setTimeout(function() {
            window.location.href = nextPageNumber + '.html';
        }, 1000);
    } else {
        playWrongSound();
        isCorrectAnswerSelected = true;
        selectedImage.classList.add('shake-animation');  
        selectedImage.addEventListener('animationend', function () {
            selectedImage.classList.remove('shake-animation');
        }); 
    }

    

    console.log("Score: " + score);
    localStorage.setItem('score', score);
    //enableButton();
}

function updateScoreDisplay() {
    var scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = "Score: " + score;
}

function showScore() {
    var scoreContainer = document.getElementById('scoreContainer');
    var scoreValue = parseInt(score, 10); // Преобразуем значение score в число
    var scoreText = "Итого: " + score + " из 3";

    if (scoreValue === 3) {
        scoreText += " - Молодец!";
    } else if (scoreValue === 2) {
        scoreText += " - Ещё немного!";
    } else if (scoreValue === 1) {
        scoreText += " - Старайся!";
    } else if (scoreValue === 0) {
        scoreText += " - Попробуй ещё раз!";
    }

    scoreContainer.textContent = scoreText;
}


function nullscore() {
    score = 0;
    localStorage.setItem('score', score);
    window.location.href = "1.html";
}

// function enableButton() {
//     var disabledButton = document.getElementById("nonActiveButton");
//     disabledButton.style.pointerEvents = 'auto';
//     disabledButton.style.opacity = '1';
// }

