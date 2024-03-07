




function creditCalc(amount, months, interest) {
    let finalSum = amount
    for (let i = 0; i < months; i++) {
        finalSum = finalSum + (interest * finalSum);

    }
    return finalSum;


}

const total = creditCalc(100, 50, 0.02);
console.log(total);