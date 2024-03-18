// imame clas geroi s tri podklasa 1 2 i 3 vsichki podklasove shte imat ednakva sila i kryv
// vsichki v glavniq klas imat metod Udar kojto namalq kryvta na opponenta sys silata na geroq * random mejdu 0 i 1 
// imME I EDNA FUNCIQ koqto e turniir tq trqbva da priema argument = Array s geroite ( obshto 8 )
// i te trqbva na random da se razdelqt na chetiri dvoiki s po dva geroq 
// i sled tova sqka dvoika se bie po mejdu si . posle vsichki pobediteli se biqt v dve dvojki i 
// nakraq poslednite dvama se biqt 
// samiq boi trqbva da e funkciq a ne metod na klasa dokato ne ostane edin
// sled kraq na bitkite kryvta na pobeditelq se restartira 
// range geroite vinagi pochvat pyrvi 
// mage shte ima skil koito da dobavq kym kravta mu 10 % ot damage kojto e napravil pri vseki hit 
// knight ima skil kojto pri hit ima 10 procenta shans da pusne shtit kojto blokira cqlata ataka 
// Assassin skil koito ima 10 procenta shans da udari vtori pyt 

class Hero {
    constructor(name, health, power, range,) {
        this.name = name
        this.health = health
        this._defhealth = health
        this.power = power
        this.range = range
    }
    damage(randomizer) {
        this.health = this.health - randomizer
    }
 
    hit(opponent) {
        const randomizer = Math.round(this.power * Math.random())
        opponent.customDamage ? opponent.customDamage(randomizer) : opponent.damage(randomizer)
        return randomizer
    }
    
    attack(opponent){
       const randomizer = this.critHit ? this.critHit(opponent) : this.hit(opponent)
        if (this.spell) this.spell(opponent, randomizer)
    }
    resethealth() {
        this.health = this._defhealth
    }
}
class Knigt extends Hero {
    constructor(name) {
        super(name, 1098, 80, 1)
    }
    customDamage(randomizer) {
        if (Math.random() < 0.91) {
       this.damage(randomizer)
         }
    }
    spell() {
    }
}
class Assassin extends Hero {
    constructor(name) {
        super(name, 800, 100, 2)
    }
    spell(opponent) {
        if (Math.random() < 0.18) {
            this.hit(opponent)
        }
        // opponent.health = opponent.health - Math.round(this.power * Math.random())
    }
}
class Mage extends Hero {
    constructor(name) {
        super(name, 500, 160, 3)
    }
    spell(opponent, randomizer) {
        this.health = this.health + Math.ceil(randomizer * 0.085)

    }
}
class Archer extends Hero {
    constructor(name) {
        super(name, 600, 130, 4)
    }
    critHit(opponent){

        if (Math.random() < 0.13){
            opponent.health=opponent.health-this.power
        }else{this.hit(opponent)}
        return this.power

    }
    spell() {
    }
}

//     const tazar = new Knigt('Tazar')
//     const drakon = new Knigt('Drakon')
//     const bron = new Knigt('Bron')
//     const korbac = new Knigt('Korbac')
//     const sorsha = new Assassin('Sorsha')
//     const kilgor = new Assassin('Kilgor')
//     const shiva = new Assassin('Shiva')
//     const yog = new Assassin('Yog')
//     const jeddite = new Mage('Jeddite')
//     const vey = new Mage('Vey')
//     const ash = new Mage('Ash')
//     const cuthbert = new Mage('Cuthbert')
//     const orrin = new Archer('Orrin')
//     const ivor = new Archer('Ivor')
//     const jenova = new Archer('Jenova')
//     const kyrre = new Archer('Kyrre')

//     ash.attack(tazar)
// console.log(ash)
// console.log(tazar)




function draw(players) {
    let readyDraw
    for (var i = players.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = players[i];
        players[i] = players[j];
        players[j] = temp;
        let numbers = players;
        let chunkSize = 2;
        readyDraw = Array.from({ length: Math.ceil(numbers.length / chunkSize) }, (_, i) =>
            numbers.slice(i * chunkSize, i * chunkSize + chunkSize)
        );
    }
    
    return readyDraw
}
console.log(players)
function tournament(maches) {
    const readyDrawResult = draw(maches)
    const winnerList = []
    readyDrawResult.forEach((value) => {
        let f = value[0].range >= value[1].range ? value[0] : value[1]
        let s = value[0].range >= value[1].range ? value[1] : value[0]
        while (f.health > 0 && s.health > 0) {
            f.attack(s)
            const temp = s
            s = f
            f = temp
        }
        const winner = f.health > s.health ? f : s
        winner.resethealth()
        winnerList.push(winner)
    })
    if (winnerList.length > 1) {
        const newWinner = tournament(winnerList)
        return newWinner
    }
    return winnerList[0]
}

// console.log(tournamentWinner.constructor.name,tournamentWinner instanceof Mage)


// const tournamentWinner = tournament(contestants)
// console.log(tournamentWinner)

const result = {}
for (let i = 0; i < 10000; i++) {
    const tazar = new Knigt('Tazar')
    const drakon = new Knigt('Drakon')
    const bron = new Knigt('Bron')
    const korbac = new Knigt('Korbac')
    const sorsha = new Assassin('Sorsha')
    const kilgor = new Assassin('Kilgor')
    const shiva = new Assassin('Shiva')
    const yog = new Assassin('Yog')
    const jeddite = new Mage('Jeddite')
    const vey = new Mage('Vey')
    const ash = new Mage('Ash')
    const cuthbert = new Mage('Cuthbert')
    const orrin = new Archer('Orrin')
    const ivor = new Archer('Ivor')
    const jenova = new Archer('Jenova')
    const kyrre = new Archer('Kyrre')

    const contestants = [tazar,bron,korbac,kilgor,shiva,yog,jeddite,ash,cuthbert,ivor,jenova,kyrre,drakon,sorsha,vey,orrin]

    const tournamentWinner = tournament(contestants)
    const heroType = tournamentWinner.constructor.name
    if (result[heroType]) {
        result[heroType]++
    } else {
        result[heroType] = 1
    }
}
console.log(result)

