function quickSort(arr, callback) {
    if (arr.length <= 1) return arr;

    if (!callback) {
        callback = (num1, num2) => {
            if (num1 < num2) {
                return -1
            } else {
                return 1
            }
        }
    }

    let pivot = arr.shift()
    let left = quickSort(arr.filter(el => callback(el, pivot) === -1))
    let right = quickSort(arr.filter(el => callback(el, pivot) === 1))
    
    return left.concat([pivot], right)
}

let arr = [2,5,6,7,1,3,4,8]
console.log(quickSort(arr))