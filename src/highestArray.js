
let max = 0;
let secondMax = 0;


function secondNumber(arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i]
        } else if (arr[i] > max && arr[i] < max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
    console.log(secondNumber([21,28,10,4,40,40]))