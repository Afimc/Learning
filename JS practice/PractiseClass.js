// pravq glaven kals chudovishta te imat ime sila 
// syshto taka mogat da govorqt i da se biqt s drugo shudovishte 
// kato za da se biqt trqbva da se sravnqvat silite i da consologva pobeditelq .
// da ima dva podklasa koito da se predstavqt s ime sila i tipa na chudovishteto.


// chudovishtata da imat kryv . undeata ima 80 kryv pyrvonachalno a ricarq 120 
// vsichki  ricari shte imat po defout 50 power a undetite 80 
// i kogato se biqt izbirame random koi da bie pyrvi i gi reduva kato silqta se izvajda ot kryvta na drugiq 
// dokato ediniq ostane s nula kryv i konsologva che e omrql 


class Monster {
    constructor(name, power, helth) {
        this.name = name
        this.power = power
        this.helth = helth
    }
    speak(message) {
        console.log('i am ' + this.name + message)
    }
    fight(opponent) {
        // let counter = 0
        // const round = (f, s) => {
        //     counter++
        //     if (f.helth > 0 && s.helth > 0) {
        //         s.helth = s.helth - f.power
        //         round(s, f)
        //     }
        // }
        const opponents = [this, opponent]
        let first = opponents[Math.floor(Math.random() * opponents.length)]
        let second = opponents.find((item) => item !== first)

        // round(first, second)

        let bul = true
        let round = 0
        while (first.helth > 0 && second.helth > 0) {
            round = round + 1
            second.helth = second.helth - first.power
            const temp = second
            second=first
            first=temp

        if (bul) {
            second.helth = second.helth - first.power
        } else {
            first.helth = first.helth - second.power
        }
        bul = !bul
        }
        const winner = first.helth > second.helth ? first : second

        console.log(winner.name + ' is a winer in ' + round + ' rounds')
    }
}

class Undead extends Monster {
    constructor(name) {
        super(name, 80, 560)
    }
}
class Knight extends Monster {
    constructor(name) {
        super(name, 80, 560)
    }
}
const monster1 = new Knight('Orrin')
const monster2 = new Undead('Sandro')

monster2.fight(monster1)

