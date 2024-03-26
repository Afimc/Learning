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
    const idToDelete = +req.query.id//ако няма такова id да дава грешка
    const dataArray = JSON.parse(readingFile)
    const newDataArray = dataArray.filter(x => x.id !== idToDelete);//да пробвам да направя само един луп на датаарей
        for (let x = 0; x < newDataArray.length; x++) {
            newDataArray[x].id = x + 1
        }
    const stringifyData = JSON.stringify(newDataArray, null, 2)
    fs.writeFileSync('DB.csv', stringifyData);
    res.send(newDataArray)
})

app.post('/change-status', (req, res) => {
    const readingFile = fs.readFileSync('DB.csv')
    var datetime = new Date();
    const dataArray = JSON.parse(readingFile)
    const reqId = +req.query.id
    const newStatus = req.query.updatingStatus
    const ChangedDataArray = dataArray.map(i => {
        if (i.id === reqId) {
            if (newStatus === 'done' || newStatus === 'inprogres') {
                i.status = newStatus
                i.lastModified = datetime
                res.send(i)
            } else { res.send('Enter a valid status') }

        }
        return i
    })
    const stringifyData = JSON.stringify(ChangedDataArray, null, 2)
    fs.writeFileSync('DB.csv', stringifyData);
})

//да мога да подам отделно рекуест статус и зависи на какво е равно да ми показва само тезе 
// таскове а ако няма рекъестнато да връща всички и сортер да ги сортира по крайна дата 
app.get('/get-list', (req, res) => {
    fs.readFile('DB.csv', 'utf8', function (err, data) {
        res.send(JSON.parse(data))
    });
})

app.post('/add-new-task', (req, res) => {
    const readingFile = fs.readFileSync('DB.csv')
    const dataArray = JSON.parse(readingFile)
    var datetime = new Date();
    const id = dataArray.length + 1
    const toDo = {
        id: id,
        task: req.query.task,
        status: req.query.status,
        deadline: req.query.deadline,// да го форматира на  дата и да са еднакви с lastModified
        lastModified: datetime
    }
    dataArray.push(toDo)
    const stringifyData = JSON.stringify(dataArray, null, 2)
    fs.writeFileSync('DB.csv', stringifyData);
    res.send(toDo)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


