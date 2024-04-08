// // две функции купуване и продаване който да се изпълняват при някаква кондиция 



// interface ICandle {
//     time: number,
//     price: number,
 
// }

// const initPrice:number = 1000;

// const createCandle = (oldPrice:number):ICandle=>{
    
//     const diff = Math.random()*20-10
//     const newPrice = oldPrice + Math.round(diff)
//     const candle:ICandle = {
//         time: Date.now(),
//         price: newPrice,
//     }
//     return candle
// }



// const candles:ICandle[]=[]

// let waiting:boolean = false
// let coins:number = 0
// let money:number = 10000
// let traidingPrice:number =1000
// let profit:number = 10
// console.log({money:money,coins:coins })



// const trade = (candle:ICandle)=>{
//     if (candle.price < traidingPrice-20 && money > 1000 && !waiting){
//         console.log('bye on price : ' + candle.price)
//         while (money>candle.price) {
//             money = money - candle.price
//             coins = coins+1
//         }
//         traidingPrice = candle.price
//         console.log({b:traidingPrice})
//         waiting = true
//         console.log({money:money,coins:coins })
//     }

//     if ((candle.price - traidingPrice)>profit && coins > 0 && waiting){
//         console.log('sell on price : ' + candle.price)
//         while (coins > 0) {
//             money = money + candle.price
//             coins = coins-1
//         }
//         traidingPrice = candle.price
//         console.log({s:traidingPrice})
//         waiting = false
//         console.log({money:money,coins:coins })
//     }
// }

// setInterval(() => {
//     const oldPrice:number = candles.length
//         ? candles[candles.length-1].price
//         : initPrice
//     const candle = createCandle(oldPrice)
//     candles.push(candle)
//     trade(candle)

// }, 1);





// interface ICandle {
//     time: number,
//     price: number,
// }

// class Bot {
   
//     candle:ICandle;
//     initPrice:number;
//     candles:ICandle[];
//     waiting:boolean;
//     coins:number;
//     money:number;
//     traidingPrice:number;
//     profit:number;
//     constructor(candle:ICandle,initPrice:number,candles:ICandle[],waiting:boolean,coins:number,money:number,traidingPrice:number,profit:number){
//         this.candle = candle
//         this.initPrice = initPrice;
//         this.candles = candles;
//         this.waiting = waiting;
//         this.coins = coins;
//         this.money = money;
//         this.traidingPrice = traidingPrice;
//         this.profit = profit;
//     }
//     buy(){
//         console.log('bye on price : ' + this.candle.price)
//             while (this.money>this.candle.price) {
//                 this.money = this.money - this.candle.price
//                 this.coins = this.coins+1
//             }
//             this.traidingPrice = this.candle.price
//             console.log({b:this.traidingPrice})
//             this.waiting = true
//             console.log({money:this.money,coins:this.coins })
//     }

//     sell(){
//         console.log('sell on price : ' + this.candle.price)
//         while (this.coins > 0) {
//             this.money = this.money + this.candle.price
//             this.coins = this.coins-1
//         }
//         this.traidingPrice = this.candle.price
//         console.log({s:this.traidingPrice})
//         this.waiting = false
//         console.log({money:this.money,coins:this.coins })
//     }
//     createCandle(oldPrice:number){
//         const diff = Math.random()*20-10
//         const newPrice = oldPrice + Math.round(diff)
//         const candle:ICandle = {
//             time: Date.now(),
//             price: newPrice,
//         }
//         console.log(this.candle.price)
//     return candle
//    } 
// }
    
    
// const tradingBot = new Bot({time:Date.now(),price:980},1000,[],false,0,10000,1000,10)


// setInterval(() => {
//     const oldPrice:number = tradingBot.candles.length
//         ? tradingBot.candles[tradingBot.candles.length-1].price
//         : tradingBot.initPrice
//     const candle = tradingBot.createCandle(oldPrice)
//     tradingBot.candles.push(candle)
//     if(tradingBot.candle.price < tradingBot.traidingPrice-20 && tradingBot.money > 1000 && !tradingBot.waiting){
//         tradingBot.buy()
//     }

//     if((tradingBot.candle.price - tradingBot.traidingPrice)>tradingBot.profit && tradingBot.coins > 0 && tradingBot.waiting){
//         tradingBot.sell()
//     }
// }, 10);




class Bot {
    private money:number;
    private coins:number;
    private sellCounter:number = 0

    constructor(money:number,coins:number){
        this.money = money
        this.coins = coins
    }
    
    
    public get info()   {
        return {
            money: this.money,
            coins: this.coins,
            counter: this.sellCounter
        }
    }
     
    public set refound(amount : number) {
        this.money = amount;
    }
    
    private buy(price:number){
        this.money = this.money - price
        this.coins = this.coins + 1
    }

    private sell(price:number){
        this.money = this.money + price
        this.coins = this.coins - 1
        this.sellCounter = this.sellCounter + 1
    }

    public sellAll(candle:ICandle){
        while (this.coins > 0) {
            this.sell(candle.price)
        }
    }

    public trade(candles:ICandle[]){
        const averrageLength:number =10
        if (candles.length < averrageLength) return;
        const lastTenCandles = candles.slice(Math.max(candles.length-averrageLength,0))
        const lastTenCandlesPriceSum:number = lastTenCandles.reduce((acc,val)=>acc + val.price,0)
        const averragePrice:number = Math.round(lastTenCandlesPriceSum/averrageLength)
        const lastPrice:number = candles[candles.length-1].price
        if (lastPrice < averragePrice && this.money > lastPrice){
            this.buy(lastPrice)
        }
        if (lastPrice > averragePrice && this.coins>0){
            this.sell(lastPrice)
        }

    }


}
const candles:ICandle[]=[]
const initPrice:number = 1000
const myBot = new Bot(10000,0)

setInterval(()=>{
    const oldPrice:number = candles.length
        ? candles[candles.length-1].price
        : initPrice
    const candle = createCandle(oldPrice)
    candles.push(candle)
    myBot.trade(candles)
    if ( myBot.info.coins > 100){
        myBot.sellAll(candle)
    }
    // if (myBot.totalMoney < candle.price){
    //     myBot.refound = candle.price
    // }
},1)

setInterval(()=>{
    console.log(`total money : ${myBot.info.money}, Coins ${myBot.info.coins},Trades : ${myBot.info.counter}`)
},3000)

interface ICandle {
    time: number,
    price: number,
}




const createCandle = (oldPrice:number):ICandle=>{
    
    const diff = Math.random()*20-10
    const newPrice = oldPrice + Math.round(diff)
    const candle:ICandle = {
        time: Date.now(),
        price: newPrice,
    }
    return candle
}