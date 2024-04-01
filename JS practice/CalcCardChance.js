// da moje da se podavat karti ( kato karti za igra  edno teste ) kakyv e shansa da se padnat tochno tiq karti ot testeto . 
// moje da se vyvejda samo boq vid ili vsichko . primerno da iska[ 3 spatii 3 kupi 3 kari i aso pika].

// dva tuza da se padnat shnsa e (4 / 52) * (3/51)


// class Card{
//     constructor(id,name,suit){
//         this.id=id
//         this.name=name
//         this.suit=suit
//     }
//     Exactchance(shuffledColumn){
//         console.log((1/shuffledColumn.length))  
//         shuffledColumn.length= shuffledColumn.length-1
//     }
//     suiteChance(shuffledColumn){
//         console.log((13/shuffledColumn.length))
//         shuffledColumn.length= shuffledColumn.length-1
//     }
//     nameChance(shuffledColumn){
//         console.log((4/shuffledColumn.length))
//         shuffledColumn.length= shuffledColumn.length-1
//     }
// }



// const ranks = [ 'A','2','3','4','5','6','7','8','9','10','j','q','k']
// const suits = ['club','spade','heart','diamond']


// function createDeck(){
//     const deck=[]
//     for (let i = 0; i < ranks.length; i++) {
//         const rank = ranks[i]
//         for (let k = 0; k < suits.length; k++) {
//             const suit = suits[k];
//             const card=new Card(4*i+k,rank,suit)
//             deck.push(card)
//         }
//     }
//     return deck
// }

// function shuffleArray(columnCards) {
//     let result=[]
//     for (var i = columnCards.length - 1; i >= 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = columnCards[i];
//         columnCards[i] = columnCards[j];
//         columnCards[j] = temp;
//         result.push(temp)
//     } 
//     return result
// }    

// function calcChance(choices){
//     for (let i = 0; i < choices.length; i++) {
//         const choice = choices[i];
//         if(choice.name && choice.suit){
//             shuffledColumn[0].Exactchance(shuffledColumn)
//         }else if (choice.name){
//             shuffledColumn[0].nameChance(shuffledColumn)
//         }else if(choice.suit){
//             shuffledColumn[0].suiteChance(shuffledColumn)
//         } else console.log('make a choice')
//     }

// }

// const deck = createDeck()
// const shuffledColumn=shuffleArray(deck)
// calcChance([{name:'8',suit:'club'},{name:'10',suit:'spade'}])




class Card {
    constructor(id, name, suit, suitstNum) {
        this.id = id
        this.name = name
        this.suit = suit

    }

}

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

function calcChance(choices, deck1) {
    let finalChance = 1
    for (let i = 0; i < choices.length; i++) {
        let filteredArray = []
        if (choices[i].name && choices[i].suit) {
            filteredArray = deck1.filter((item) => {
                return (item.name === choices[i].name) && (item.suit === choices[i].suit)
            })
        } else if (choices[i].name) {
            filteredArray = deck1.filter((item) => {
                return item.name === choices[i].name
            })
        } else if (choices[i].suit) {
            filteredArray = deck1.filter((item) => {
                return item.suit === choices[i].suit
            })
        } else {
            console.log('boo')
        }
        const chance = filteredArray.length / deck1.length
        finalChance *= chance
        const idToBeRemoved = filteredArray[0].id
        deck1 = deck1.filter((i) => {
            return i.id !== idToBeRemoved
        })
    }

    return finalChance
}

const deck = createDeck()
const shuffledColumn = shuffleArray(deck)
const result = calcChance([{ name: 'A', }], shuffledColumn)
console.log(result)
