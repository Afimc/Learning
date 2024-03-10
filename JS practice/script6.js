// funkciq koqto priema array ot strings i vryshta obekt kato klucha e vsqka ot dumite a valio e kolko bukvi ima dumata





function calcDumi(dumi) {
     const obj={};
    for (let i = 0; i < dumi.length; i++) {
        const duma = dumi[i]
        const bukvi = duma.split('');

        const obj2 = {};
        for (let index = 0; index < bukvi.length; index++) {
          const bukva = bukvi[index];
          const filtriraniBukvi = bukvi.filter(b=> b===bukva);
          obj2[bukva] = filtriraniBukvi.length
          console.log(bukva)
            
        }
        obj[duma] = obj2
    }
    return obj
    
}


 const final = calcDumi(["Miro","Valio",'kokoshka']);
