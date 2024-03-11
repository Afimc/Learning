

function test(broi){
    const chislo = Math.random();
   

    if (chislo>0.5) {
        return test(broi+1)
    }else{
        return {chislo:chislo,
                broi:broi,
        }
    }
    
}
   const final= test(1);
   console.log(final)
   const final2 = test(1) ;
   console.log(final2)