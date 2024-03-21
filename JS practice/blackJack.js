// 1.  Генерира разбъркано тесте карти 
// 2.  Пита искаш ли да започнеш играта 
// 2.1 ако да ти дава карта,записва ти точките 
// 2.2 пита искаш ли друга карта  ако да връща на 2.1
// 3.  ако не дава карта без да добавя точките и изчислява по малко или по голям е от 21 
//     ако е по малко губиш ако е по голямо печелиш 
// 4.  записва точки ако печелиш за теб ако губиш за компютъра 


class Card {
    constructor(id, name, suit,) {
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

function getPoints(cardToGetPoints, points) {
    let getPoint = 0
    if (cardToGetPoints.name === 'A' && points > 10) {
        getPoint = 1
    } else if (cardToGetPoints.name === 'A' && points <= 10) {
        getPoint = 11
    } else if (cardToGetPoints.name === 'j'
        || cardToGetPoints.name === 'q'
        || cardToGetPoints.name === 'k'
        || cardToGetPoints.name === '10') {
        getPoint = 10
    } else
        // getPoint = +cardToGetPoints.name or
        getPoint = parseInt(cardToGetPoints.name)
    return getPoint
}


async function game() {
    let yourPoints = 0
    let computerPoints = 0
    let wantPlay = 'Y'
    while (wantPlay === 'Y' && yourPoints < 3 && computerPoints < 3) {
        wantPlay = await question('Do you Want anothr game? Y/N:')
        const deck = createDeck()
        const shuffledDeck = shuffleArray(deck)
        let points = 0
        let respond = 'Y'
        console.log('You have ' + yourPoints + ' Wins Comuter have ' + computerPoints + ' Wins')
        for (let i = 0; i < shuffledDeck.length; i++) {
            respond = await question('DO you want a card Y/N:')
            if (respond === 'Y') {
                points = points + getPoints(shuffledDeck[i], points)
                console.log('You have got ' + shuffledDeck[i].name + ' ' + shuffledDeck[i].suit)
                console.log(points)
                if (points === 21) {
                    yourPoints++
                    console.log('You Win with 21 congratulations!!!')
                    break
                } else if (points > 21) {
                    computerPoints++
                    console.log('Sorry You have got ' + points + ' and lose. Good luck next hand!')
                    break
                }
            } else if (respond === 'N') {
                points = points + getPoints(shuffledDeck[i], points)
                console.log('Computer have got ' + shuffledDeck[i].name + ' ' + shuffledDeck[i].suit)
                if (points > 21) {
                    yourPoints++
                    console.log('Computer get ' + points + 'You Win!!!')
                    break
                } else if (points < 21) {
                    computerPoints++
                    console.log('Sorry you lose. Better luck next time')
                    break
                }
            }
        }
    }
}
game()