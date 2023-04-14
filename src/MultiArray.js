let sum = 0;
let array = [
    [
        null,
        {name: "kinzy", population: 176000, Temperature: 2.5, currency: "us"},
        {name: "kinzy", population: 176000, Temperature: 2.5, currency: "us"},
        {name: "kinzy", population: 176000, Temperature: 2.5, currency: "us"},
    ],

    [
        {name: "kinzy", population: 176000, Temperature: 2.5, currency: "us"},
        {name: "kinzy", population: 176000, Temperature: 2.5, currency: "us"},
        {name: "kinzy", population: 176000, Temperature: 2.5, currency: "us"},
        null,
    ],
    [
        {name: "kinzy", population: 176000, Temperature: 2.5, currency: "us"},
        null,
        {name: "kinzy", population: 176000, Temperature: 2.5, currency: "us"},
        {name: "kinzy", population: 176000, Temperature: 2.5, currency: "us"},
    ],
];
for (let row = 0; row < array.length; row++) {
    let individual = array[row];
    for (let column = 0; column < individual.length; column++) {
        if (individual[column] != null) {
            if (individual[column].Temperature <= 10) {
                sum += individual[column].population
            }
        }
    }
}
console.log(sum)

