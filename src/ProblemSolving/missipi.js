const word = "Mississippi";
let countI = 0;
let countS = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === "i") {
        countI++;
    } else if (word[i] === "s") {
        countS++;
    }
}

console.log(countI);
console.log(countS);