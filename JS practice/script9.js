// funkcit koqto da filtrira string i da maha dublirashtite se bukvi 



// function filter(text) {
//     const textArray = text.split('');
//     const newTextArray= [];
//     for (let i = 0; i < textArray.length; i++) {
//         const letter = textArray[i];
//         const check = newTextArray.includes(letter);
//         if (check === false){
//          newTextArray.push(letter);
//         }

//     }
//     const newTextArrayResult = newTextArray.join('')
//     return newTextArrayResult
// }
// const final = filter('aaa bbb')
// console.log(final);

// function miroFilter(filterFunction){

//     const resultArray = []
//     for (let i = 0; i< this.length; i++) {
//         const miroLoopItem = this[i]
//         const miroLoopIndex = i
//         const miroLoopArray = this
//         const check = filterFunction(miroLoopItem,miroLoopIndex,miroLoopArray)
//         if(check){
//             resultArray.push(miroLoopItem)
//         }
//     }
//     return resultArray
// }

// Array.prototype.miroFilter=miroFilter
// const a = ['miro',20,[]]
// const filteredArray = a.miroFilter((miroItem,miroIndex,miroArray)=> {
//     return miroIndex === 0
// }) 
// console.log(filteredArray)




// const b =[1,2,3]
// b.filter((item,index,array)=>{
// return item >1;
// })


// const array = [ 'miro', 'valio', 'peralnq']

// const newArray = array.map((item)=>{
//     return item + ' !'
// })
// console.log(newArray)

// function map (array){
//     const newArray= []
//     for (let i = 0; i < array.length; i++) {
//         arrayItem = array[i]
//          newArray.push(arrayItem + '!')

//     }
//   return newArray

// }
// const final = map([ 'miro', 'valio', 'peralnq'])
// console.log(final)

// function miroMap(mapFunction) {
//     const newArray=[]
//     for (let i = 0; i < this.length; i++) {
//         const item = this[i]
//         const loopedArray = this
//         const loopedIndex = i 
//        const loopedItem = mapFunction(item,loopedIndex,loopedArray)
//        newArray.push(loopedItem)
//     }
//     return  newArray
// }

// Array.prototype.miroMap=miroMap
// const array = [ 'miro', 'valio', 'peralnq']
// const final = array.miroMap((item,index,array)=>{
//     return item + index
// })
//  console.log(final)




// const array = [
//     {
//         name: 'Miroslav Peshev',
//         age: 34
//     },
//     {
//         name: 'Valentin Peshev',
//         age: 31
//     },
//     {
//         name: 'Miley Peshev',
//         age: 3
//     },
// ]
// const array = [3,6,2,9,1]
// const sum = array.reduce((p,c,i,a)=>{
//  return c + p
// },1)
// console.log(sum)



// function miroReduce(reduceFunction, secondArgument) {
//     for (let i = 0; i < this.length; i++) {
//         const courentitem = this[i]
//         const argArray = this
//         const argIndex = i
//         secondArgument = reduceFunction(secondArgument, courentitem, argIndex, argArray)
//     }
//     return secondArgument
// }

// Array.prototype.miroReduce = miroReduce
// // const array = [ 'miro','valio','kon']
// const array = [3, 6, 2, 9, 1]
// const final = array.miroReduce((p, c, i, a) => {
//     if (c > 5) {
//         p[c] = 'GOlqmo'
//     }
//     else { p[c] = 'malko' }
//     return p
// }, {})

// console.log({ final })



// const myArray=[1,2,3,4,5,6,7,8,9,10]
// const final = myArray.every((value,index,array)=>{
//     console.log(value)
//     return value > 5
// })
// console.log(final)
// function miroEvery(everyFuntion) {
//     // let bul = true 
//     for (let i = 0; i < this.length; i++) {
//         const value = this[i]
//         const index = i
//         const array = this
//         const result = everyFuntion(value, index, array)
//         if (!result){
//             return false
//         }
        // if(result){
        //   bul = true
        // }else {
        //     bul=false
        //     break
        // }
//     }
//     return true
// }
// Array.prototype.miroEvery = miroEvery
// const myArray = [ 2, 3, 4, 5, 6, 7, 8, 9, 10,]
// const final = myArray.miroEvery((v, i, a) => {
//     return v > 1


// })
// console.log(final)



// function miroSome(SomeFuntion) {
//     let bul  
//     for (let i = 0; i < this.length; i++) {
//         const value = this[i]
//         const index = i
//         const array = this
//         const result = SomeFuntion(value, index, array)
//         if(result){
//           bul = true
//           break
//         }else {
//             bul=false

//         }

//     }
//     return bul
// }

// Array.prototype.miroSome = miroSome
// const myArray = [ 1,2, 3, 4, 5, 6, 7, 8, 9, 10]
// const final = myArray.miroSome((v, i, a) => {
//     return v > 10


// })
// console.log(final)




// const array = [ 'HelloWorld','HTML','CSS','JS','React','']
// const newArray=array.slice(2,3)
// console.log(newArray)




// function miroSlice(start, end) {
//   let result = ( Array.isArray(this)) ? [] : ''
//     for (let index = start; index < end && index<this.length; index++) {
//         if ( Array.isArray(this)){
//             result.push(this[index])
//         }else {
//             result = result + this[index]
//         }
      
//     }
//     return result
// }


// String.prototype.miroSlice = miroSlice
// Array.prototype.miroSlice = miroSlice
// // const test = ['HelloWorld', 'HTML', 'CSS', 'JS', 'React',]
// const test = 'HelloWorld'
// const final = test.miroSlice(0, 20)
// console.log(final)


