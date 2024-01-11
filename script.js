function init() {
    document.getElementById('count-Total').innerHTML = questions.length;
    document.getElementById('countTotal').innerHTML = questions.length;
    showQuestion();
}

let currentQuestion = 0;
let rightAnswers = 0;
function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('countOfRightAnswers').innerHTML = rightAnswers;
        document.getElementById('header-image').src = './img/trophy.jpg';
        rightAnswers = 0;
    }
    else {
        let percent = (currentQuestion + 1) / questions.length * 100;
        document.getElementById('progress-bar').innerHTML = `${percent.toFixed(0)}%`;
        document.getElementById('progress-bar').style.width = `${percent.toFixed(0)}%`;
        nextQuestion();
    }
}

function nextQuestion() {
    document.getElementById('countActual').innerHTML = currentQuestion + 1;
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question["question"];
    document.getElementById('answer_1').innerHTML = question["answer_1"];
    document.getElementById('answer_2').innerHTML = question["answer_2"];
    document.getElementById('answer_3').innerHTML = question["answer_3"];
    document.getElementById('answer_4').innerHTML = question["answer_4"];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedAnswer = selection.slice(-1);
    let indexOfRightAnswer = `answer_${question["rightAnswer"]}`;
    if (selectedAnswer == question["rightAnswer"]) {
        document.getElementById(selection).parentNode.classList.add("bg-success");
        rightAnswers++;
    }
    else {
        document.getElementById(selection).parentNode.classList.add("bg-danger");
        document.getElementById(indexOfRightAnswer).parentNode.classList.add("bg-success");
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restart() {
    document.getElementById('header-image').src = './img/background.jpg';
    document.getElementById('questionBody').style = '';
    document.getElementById('endScreen').style = 'display: none';
    currentQuestion = 0;
    rightAnswers = 0;
    init();
}