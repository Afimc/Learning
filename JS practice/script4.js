
// функция която приема като аргумент бъдеща година като число
// например - 2089 и връща обект който е 
// {
//     broiVisikosniGodini: number,
//   visikosniGodini: Array sus godinite
// }
// Kato tva sa visokosnite godini ot sega do godinata koqta si vuvel



// function leapYearsChecker(year) {
//  yearResult= [];
//     for (let i = 2024; i <= year; i++) {
//         if (i % 100 === 0 ? i % 400 === 0 : i % 4 === 0) {
//             yearResult1 = i;
//             yearResult.push(yearResult1);


//             console.log(yearResult);

//         }
//     }
//     return yearResult={
//         broiVisikosniGodini:yearResult,
//         visikosniGodini : yearResult,
//     }


// }


// const leapYear = leapYearsChecker(2034);
// console.log(leapYear);

function leapYearsChecker(year) {
    const yearResult1 = [];
    for (let i = 2024; i <= year; i++) {
        if (
            i % 100 === 0 
                ? i % 400 === 0 
                : i % 4 === 0
            ) {
            const yearResult = i;
            yearResult1.push(yearResult);
        }
    }
    
    return test = {
        broiVisikosniGodini: yearResult1.length,
        visikosniGodini: yearResult1,
    }
}

const leapYear = leapYearsChecker(2034);
console.log(leapYear);
