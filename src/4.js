// Get a random number between 1 and 10
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Check if the user's guess is correct
function checkGuess(guess, answer) {
    return guess === answer;
}

// Generate a random math problem
function generateProblem() {
    const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    let answer;

    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
    }

    return {
        problem: `${num1} ${operator} ${num2}`,
        answer,
    };
}
