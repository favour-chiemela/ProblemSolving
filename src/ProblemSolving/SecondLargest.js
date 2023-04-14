function secondHighest(numbers) {
    let highest = 0;
    let secondHighest = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            secondHighest = highest;
            highest = numbers[i];
        } else if (numbers[i] < highest && numbers[i] > secondHighest) {
            secondHighest = numbers[i];
        }
    }

    return secondHighest;
}

console.log(secondHighest([21,50,10,4,40,40]));