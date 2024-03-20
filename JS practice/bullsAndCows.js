
// 1 се генерира рандом число 
// 2  стартира основния луп за проверките
// 2.1 въвежда се число 
// 2.2 проверява въведеното число дали е валидно 
// 2.2.1 ако не е валидно изписва че е грешно и връща на 2.1
// 2.3 стартира функция която сръвнява двете числа 
// 2.3.1 добавя бик когато позициите и числото от двата арея съвпадат 
// 2.3.2 ако някое от числата съвпада с някое от другия арей добавя крава 
// 2.4 ако числата са еднакви играта свършва и изписва нещо 
// 2.5 ако не са еднакви съобщава колко бика и колко крави имаш и те връща на 2.1



const question = (text) => {
  return new Promise((resolve, reject) => {
    const opt = { input: process.stdin, output: process.stdout };
    const readline = require('node:readline').createInterface(opt);

    readline.question( text+' \n', (num) => {
      readline.close();
      resolve(num);
    });
  });
};

function getRandomNumberNoRepeat() {
  let numberPick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return numberPick
    .sort(() => Math.random() - 0.5)
    .join("")
    .slice(0, 4)
}

function hasNoDuplicates(arr) {
  var counts = [];

  for (var i = 0; i <= arr.length; i++) {
    if (counts[arr[i]] === undefined) {
      counts[arr[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
}
async function game() {

  const randomNumber = getRandomNumberNoRepeat().split('')
  let bulls = 0
  let cows = 0
  let counter = 0
  while (bulls < 4) {
    bulls = 0
    cows = 0
    const userNumber = await question('Please enter number:')
    const gues = userNumber.split('')
    if (gues.length === 4 && !gues.some(isNaN) && hasNoDuplicates(gues)) {
      counter++
      for (let i = 0; i < randomNumber.length; i++) {
        for (let j = 0; j < userNumber.length; j++) {
          if (randomNumber[i] === userNumber[j]) {
            if (i === j) {
              bulls++
            } else {
              cows++
            }
          }
        }
      } console.log('in ' + counter + ' gues' + ' you have got ' + bulls + ' Bull(s) and ' + cows + ' Cow(s)')
    } else {
      console.log('Pleace enter a valit four digits number ')
    }
  } console.log('Congratulations you have WIN in ' + counter + ' attempts')
}
game()

