// let counter = 10;
// let result = 0;

// for (let i = counter; i > 0; i--) {
//    result = result +i ;

//     console.log(result + 'iner');
// }

// console.log(result);


function counterFunction(counter) {
    let result = 0;

    for (let i = counter; i > 0; i--) {
        if ( i % 2 === 0 ){
        result = result + i;
        }
    }

    return result;
}


const final = counterFunction(7);
console.log(final);


