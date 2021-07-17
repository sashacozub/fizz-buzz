// Create module for getting user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Create the function which determines what should be printed
const fizzBuzz = number => {
    let result = [];

    for (let i = 1; i <= number; i++) {
        let word = '';

        if (i % 3 === 0) { word += 'Fizz' };
        if (i % 5 === 0) { word += 'Buzz' };
        if (word === '') { word = i };

        result.push(word);
    }

    return result.join('\n');
};

// Get user's input and run the function for the game
readline.question('Enter a number for the FizzBuzz Game: ', number => {
    isNaN(number) ? console.log('You must only use numbers. Please try again.') : console.log(fizzBuzz(number));
    readline.close();
});
