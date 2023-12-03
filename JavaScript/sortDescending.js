const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortArrayDescending(arr) {
    // Custom sorting function for descending order
    arr.sort(function(a, b) {
        return b - a;
    });
}

// Take input from the user
rl.question('Enter numbers separated by space: ', (input) => {
    // Convert the input string into an array of numbers
    let numbers = input.split(' ').map(Number);

    // Check if the user provided valid input
    if (!isNaN(numbers[0])) {
        // Sort the array in descending order
        sortArrayDescending(numbers);

        console.log("Sorted Array (Descending): " + numbers);
    } else {
        console.log("Invalid input. Please enter numbers separated by space.");
    }

    // Close the readline interface
    rl.close();
});
