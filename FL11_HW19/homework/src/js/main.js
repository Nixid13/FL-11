let wins = 0;
let round = 0;
let loses = 0;
const game = item => {
    const finalCount = document.querySelector('.finalCount');
    const result = document.querySelector('.result');
    const userAnswerImg = document.querySelector('.userAnswerImg');
    const computerAnswerImg = document.querySelector('.computerAnswerImg');
    const message = document.querySelector('.message');
    round++;
    if (round <= 3) {
        const userAnswer = item.value;
        const answers = ['rock', 'scissors', 'paper'];
        const m = 0;
        const n = 2;
        const randIndex = Math.floor(Math.random() * (n - m + 1)) + m;
        const computerAnswer = answers[randIndex];
        const table = {
                rock: {
                    rock: 0,
                    scissors: 1,
                    paper: -1
                },
                scissors: {
                    rock: -1,
                    scissors: 0,
                    paper: 1
                },
                paper: {
                    rock: 1,
                    scissors: -1,
                    paper: 0
                }
            },
            labels = {
                '-1': 'You\'ve LOST!',
                '0': 'Draw',
                '1': 'You\'ve WON!!'
            };

        userAnswerImg.src = './img/' + userAnswer + '.png';
        computerAnswerImg.src = './img/' + computerAnswer + '.png';
        message.innerText += `Round ${round} ${userAnswer} vs ${computerAnswer} ${
            labels[table[userAnswer][computerAnswer]]
            }`;
        message.innerHTML += '<br>';
        result.style.display = 'flex';
        if (table[userAnswer][computerAnswer] === 1) {
            wins++;
        } else if (table[userAnswer][computerAnswer] === -1) {
            loses++;
        }
    }

    if(round === 3 && wins > loses) {
        finalCount.innerText = 'You won!Congratulations!';
    } else if (round === 3 && wins < loses) {
        finalCount.innerText = 'You lost!';
    } else if (round === 3){
        finalCount.innerText = 'It is a draw';
    }
    const resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener('click', () => {
        round = 0;
        wins = 0;
        loses = 0;
    });
};
let btn = document.querySelectorAll('.btn');
btn.forEach(item => {
    item.onclick = function () {
        game(this);
    };
});

