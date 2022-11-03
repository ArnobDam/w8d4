const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
    rl.question(`Is ${el1} greater than ${el2}? ["yes" => "y" or "no" => "n"]: `, function (answerString) {
        if (answerString === "y") {
            callback(true)
        } else if (answerString === "n") {
            callback(false)
        } else {
            console.log("Wrong Input")
            askIfGreaterThan(el1, el2, callback)
        }
    })    
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i === arr.length - 1) outerBubbleSortLoop(madeAnySwaps);

    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
            if (isGreaterThan) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        })
    }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
    outerBubbleSortLoop(true)

    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    }
}

arr = [1, 3, 2, 5, 4, 1]
// innerBubbleSortLoop(arr, 0, false, function () {console.log(`${arr}`)})

absurdBubbleSort(arr, function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    rl.close();
})