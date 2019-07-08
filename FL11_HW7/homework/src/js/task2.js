let isGame = confirm('Do you want to play a game?');
let range = 8;
let rangeReset = 8;
let increaseRange = 4;
let attempts = 3;
let attemptsReset = 4;
let prize = 0;
let randNum = Math.floor(Math.random() * (range + 1));
let isContinue = null;
let prizeArr = {
    3: 100,
    2: 50,
    1: 25
};

if (!isGame) {
    alert('You did not become a billionaire, but can.');
} else if (isGame) {
    while (attempts > 0) {
        let usersPick = +prompt(`Choose a roulette pocket number from 0 to ${range}
Attempts left: ${attempts}
Total prize: ${prize}$
Possible prize on current attempt: ${prizeArr[attempts]}$`);
        if (randNum === usersPick) {
            prize += prizeArr[attempts];
            isContinue = confirm(`Congratulation, you won! Your prize is: ${prize} $ Do you want to continue?`);
            if (isContinue) {
                for (let prize in prizeArr) {
                    if (prizeArr.hasOwnProperty(prize)) {
                        prizeArr[prize] *= 2;
                    }
                }
                attempts = attemptsReset;
                range += increaseRange;
                randNum = Math.floor(Math.random() * (range + 1));
            }
        }

        if (attempts === 1 || isContinue === false) {
            if (isContinue !== false) {
                prize = 0;
            }
            alert(`Thank you for your participation. Your prize is: ${prize} $`);
            isGame = confirm('Do you want to play again?');
            randNum = Math.floor(Math.random() * (range + 1));
            prize = 0;
            isGame ? attempts = attemptsReset : attempts = 0;
            isContinue = null;
            range = rangeReset;
            prizeArr = {
                3: 100,
                2: 50,
                1: 25
            };
        }
        attempts--;
    }
}

