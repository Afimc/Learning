// файл за база данни (comma separated value) to do list  който да има задачата и краиния 
// срок и статуси и самата задача кога е последно променена  .comma
// да има функция за четене на листа за добавяне и промяна и да променяш статуса . 
// базата данни ще съдържа статуса крайна дата и кога последно е променен 
// ++++ нов фаил servise.js които да има няколко функции за фсички енд поинти със логиките и тук да извиквам само функцията 
// Date.now()
// console.log(Date.now())

const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

app.post('/delete', (req, res) => {
    const readingFile = fs.readFileSync('DB.csv')
    const idToDelete = +req.query.id
    const dataArray = JSON.parse(readingFile)
    const validId = dataArray.some((x) => x.id === idToDelete)
    if (validId) {
        const newDataArray = dataArray.filter(x => x.id !== idToDelete);
        for (let x = 0; x < newDataArray.length; x++) {
            newDataArray[x].id = x + 1
        }
        const stringifyData = JSON.stringify(newDataArray, null, 2)
        fs.writeFileSync('DB.csv', stringifyData);
        res.send(newDataArray)
    } else { res.send('No valid task ID ') }
})

app.post('/change-status', (req, res) => {
    const readingFile = fs.readFileSync('DB.csv')
    var datetime = new Date();
    const dataArray = JSON.parse(readingFile)
    const reqId = +req.query.id
    const newStatus = req.query.updatingStatus
    const validStatusAndId=dataArray.some((x) => x.id === reqId && newStatus==='done'||newStatus==='inprogres')
    // const itemToChange = validStatusAndId ? dataArray.find(i => i.id === reqId) :res.send('Enter a valid status or ID')
    // itemToChange.status=newStatus
    // itemToChange.lastModified = datetime.toDateString()
    //     res.send(itemToChange)

    if(validStatusAndId){
        const itemToChange=dataArray.find(i => i.id === reqId)
        itemToChange.status=newStatus
        itemToChange.lastModified = datetime.toDateString()
        res.send(itemToChange)
    }else { res.send('Enter a valid status or ID') }


    // const ChangedDataArray = dataArray.map(i => {//фаинд вместо мап и и валидноста да се проверява в началото
    //     if (i.id === reqId) {
    //         if (newStatus === 'done' || newStatus === 'inprogres') {
    //             i.status = newStatus
    //             i.lastModified = datetime
    //             res.send(i)
    //         } else { res.send('Enter a valid status or ID') }
    //     }
    //     return i
    // })
    const stringifyData = JSON.stringify(dataArray, null, 2)
    fs.writeFileSync('DB.csv', stringifyData);
})

//да мога да подам отделно рекуест статус и зависи на какво е равно да ми показва само тезе 
// таскове а ако няма рекъестнато да връща всички и сортер да ги сортира по крайна дата 
app.get('/get-list', (req, res) => {
    const filterValue = req.query.sortByStatus
    const readingFile = fs.readFileSync('DB.csv')
    const dataArray = JSON.parse(readingFile)
    if (filterValue) {
        const FilteredData = dataArray.filter(x => x.status === filterValue)
        res.send(FilteredData)
    } else {
        res.send(dataArray)
    }
})

app.post('/add-new-task', (req, res) => {
    const readingFile = fs.readFileSync('DB.csv')
    const dataArray = JSON.parse(readingFile)
    var datetime = new Date();
    const id = dataArray.length + 1
    const DateString = req.query.deadline
    const partsOfDate = DateString.split('-')
    const formatedData = new Date(partsOfDate[0], partsOfDate[1] - 1, partsOfDate[2]);
    const toDo = {
        id: id,
        task: req.query.task,
        status: req.query.status,
        deadline: formatedData.toDateString(),
        lastModified: datetime.toDateString()
    }
    dataArray.push(toDo)
    const stringifyData = JSON.stringify(dataArray, null, 2)
    fs.writeFileSync('DB.csv', stringifyData);
    res.send(toDo)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// const dataArray=[
//     {
//    id:1,
//    status:'done'
//     },
//     {
//         id:2,
//         status:'inprogres'
//     },
//   ]
// const reqId=1
// const newStatus = 'd'
// const validStatusAndId=dataArray.find(item => item.id === 2)
// validStatusAndId.status='done'
// console.log(validStatusAndId)
// console.log(dataArray)