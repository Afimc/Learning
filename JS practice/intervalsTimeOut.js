
// const miro = new Promise((resolve,reject)=>{
//     console.log('promise started')
//     reject(true)
// })

// async function  start(){
//     try{
//         const promiseResult = await miro
//         console.log({promiseResult})
//     }catch(error){
//         console.log({error})
//     }
// }
// start()

// miro
// .then((result)=>{
//     console.log({result})
// })
// .catch((error)=>{
//     console.log({error})
// })
// .finally(()=>{
//     console.log('final')
// })


// const myInterval = setInterval(()=>{
// console.log('test')
// },1000)
// console.log('1')
// const myTimeOut = setTimeout(()=>{
//     // clearInterval(myInterval)
//     console.log('2')

// },1000)

// console.log('3')
// bufer kojto prez 3 sekundi shte generiram mejdu 10 i 100 random chisla consollogva se kolko chisla sa generirani 
//  i ot tam se izprashtat kym bufera bufera ima maksimum saiz koeto e opashkata i puska edno po edno prez 10 mili 
//  sek i ako opashkata e po golqma ot maks size dawa eror. i rezoltatite koito izlizat prez 10 mili sek da gi konsollogva .ako
//  i da konsologva prez 5 sek kolko itema ima v opashkata 


class Buffer {
    constructor(interval, opashkaSize) {
        this.locked = false
        this.interval = interval
        this.opashkaSize = opashkaSize
        this.opashka = []
        this.propuskvachMethod()
        this.opashkaDyljinaMethod()
    }
    opashkaDyljinaMethod() {
        setInterval(() => {
            console.log(this.opashka.length)
        }, 3000)
    }
    numGeneratorMethod(num) {
        if (this.opashka.length >= this.opashkaSize) {
            this.locked = true
        } else if (this.opashka.length === 0) {
            this.locked = false
        }
        this.locked ? null : this.opashka.push(num)
    }
    propuskvachMethod() {
        setInterval(() => {
            this.opashka.splice(0, 1)
        }, this.interval)
    }
}
const miroBufer = new Buffer(120, 500)

setInterval(() => {
    for (let i = 0; i < 100; i++) {
        let num = Math.random()
        miroBufer.numGeneratorMethod(num)
    }
}, 3000)