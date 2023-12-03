const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseWords(sentence) {
    let words = sentence.split(' ');
    let reversedWords = words.map(word => reverseString(word));
    return reversedWords.join(' ');
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Take input from the user
rl.question('Enter a sentence: ', (inputSentence) => {
    // Reverse the words and display the result
    let reversedResult = reverseWords(inputSentence);
    console.log("Reversed Sentence: " + reversedResult);

    // Close the readline interface
    rl.close();
});
