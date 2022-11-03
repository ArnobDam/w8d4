
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        rl.question("Please input a number:", function (number) {
            sum += parseInt(number)
            console.log(sum)
            addNumbers(sum, --numsLeft, completionCallback)
        })
    } else {
        rl.close()
        completionCallback(sum)
    }
}

addNumbers(0, 5, sum => console.log(`Total Sum: ${sum}`));