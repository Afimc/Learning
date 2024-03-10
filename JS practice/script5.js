// funkciq koqto priema chislo 
// syzdava tolkova na broj chisla mejdu nula i edno 
// i vryshta obekt s stoinosti 
// pod (pod=0.5)i nad .



// const randomNumber = Math.random();
// console.log(randomNumber);



function podNad(chislo) {
    let overNumbers = 0;
    let underNumbers = [];
    for (let i = 0; i <chislo; i++) {
       const randomNumber = Math.random();
        if(randomNumber > 0.5){
            overNumbers = overNumbers+1;
        }else {
            underNumbers.push(randomNumber);
        }

    }

     return {
        Under: underNumbers,
        Over: overNumbers,
     }
}

const final = podNad(10);
console.log(final);