// 3 JavaScript Coding Challenges for Junior Interviews:
// 1 Vowel Counter:Challenge: Write a function countVowels(string) 
// that takes a string as input and returns the number of vowels (a, e, i, o, u) 
// present in the string (case-insensitive).
// Example: console.log(countVowels("Hello World!")); // Output: 3 


// function countVowels(text) {
//  const letters = text.split('');

//     const filteredLetters = letters.filter(b=> b==="a" || b==='o' || b==='i' || b==='e' || b==='u');
//     const numberOfVowels = filteredLetters.length

//   return numberOfVowels
// }


// const finalCountVowels = countVowels('Miroslav')
// console.log(finalCountVowels)


// Write a function sumEvenNumbers(array) that takes an array of numbers as input
//  and returns the sum of all even numbers in the array.
// Example: 
// console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // Output: 6 


// function sumEvenNumbers(numbers) {
//     let num=0;
// for (let i = 1; i <= numbers.length; i++) {
//       if (i % 2 === 0){
//         num = num + i
//       }
      
// }

// return num;
// }


// const finalSumEvenNumbers = sumEvenNumbers([1,2,3,4,5,6,7,8])
// console.log(finalSumEvenNumbers);




// 3. Reverse String:

// Challenge: Write a function reverseString(string) that takes a string as input 
// and returns a new string with the characters reversed.
// Example: console.log(reverseString("Hello")); // Output: "olleH" 
// return text.split("").reverse().join("");
function reverseString(text){
    const array = text.split('');
    const result = []
    for (let i = array.length; i > 0; i--) {
       const letter = array[i-1];
        result.push(letter);
    }
    const result1 = result.join('');
    console.log(result)
return result1

      
}

const finalReverseString = reverseString("Miro");
console.log(finalReverseString)