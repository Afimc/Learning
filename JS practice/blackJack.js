// 1.  Генерира разбъркано тесте карти 
// 2.  Пита искаш ли да започнеш играта 
// 2.1 ако да ти дава карта,записва ти точките 
// 2.2 пита искаш ли друга карта  ако да връща на 2.1
// 3.  ако не дава карта без да добавя точките и изчислява по малко или по голям е от 21 
//     ако е по малко губиш ако е по голямо печелиш 
// 4.  записва точки ако печелиш за теб ако губиш за компютъра 


class Card {
    constructor(id, name, suit, points) {
        this.id = id
        this.name = name
        this.suit = suit

    }

}

const question = (text) => {
    return new Promise((resolve, reject) => {
        const opt = { input: process.stdin, output: process.stdout };
        const readline = require('node:readline').createInterface(opt);

        readline.question(text + ' \n', (num) => {
            readline.close();
            resolve(num);
        });
    });
};

const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k']
const suits = ['club', 'spade', 'heart', 'diamond']

function createDeck() {
    const deck = []
    for (let i = 0; i < ranks.length; i++) {
        const rank = ranks[i]
        for (let k = 0; k < suits.length; k++) {
            const suit = suits[k];
            const card = new Card(4 * i + k, rank, suit)
            deck.push(card)
        }
    }
    return deck
}

function shuffleArray(columnCards) {
    let i = columnCards.length;
    while (i--) {
        const ri = Math.floor(Math.random() * i);
        [columnCards[i], columnCards[ri]] = [columnCards[ri], columnCards[i]];
    }
    return columnCards
}


async function game() {
    const deck = createDeck()
    const shuffledDeck = shuffleArray(deck)
    console.log(shuffledDeck)
    let respond = 'Y'
    let points = 0
    for (let i = 0; i < shuffledDeck.length; i++) {
        // let respond=await question('DO you want a card Y/N:')
        if(respond==='Y'){
            points = points+1
            
         
        }
        
        console.log(points)
        

    }
   
}
game()