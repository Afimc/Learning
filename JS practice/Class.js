class Chovek {
    constructor(sex,name){
     this.pol=sex
     this.name= name
    }
    sayHello(){
        console.log('hello my name is ', this.name)
    }
    say(messasge){
        console.log(this.name + ' : '+messasge)
    }
    changeName(novoIme){
        this.name=novoIme
    }
}

class Jena extends Chovek{
    constructor( name){
        super('F',name)

    }
    zapoznanstvo(name){
        console.log('zdr '+ name+' moeto ime e '+ this.name)
    }
}
class Muj extends Chovek{
    constructor( name){
        super('M',name)  
    }
    shofirane(){
        console.log('caram si kolata ')
    }

}

const miro = new Muj('Miro')
const tedi = new Jena('Tedi')
const valio = new Chovek('M','Valio')

console.log(tedi)
miro.shofirane()
tedi.zapoznanstvo(miro.name)


// const opponents = [ this,opponent]
// const starter = opponents[Math.floor(Math.random()*opponents.length)]