// файл за база данни (comma separated value) to do list  който да има задачата и краиния 
// срок и статуси и самата задача кога е последно променена  .comma
// да има функция за четене на листа за добавяне и промяна и да променяш статуса . 
// базата данни ще съдържа статуса крайна дата и кога последно е променен 
// Date.now()
// console.log(Date.now())

const axios = require('axios')
const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000
const toDoList = []


app.get('/getList', (req, res) => {
    fs.readFile('DB.csv', 'utf8', function (err, data) {
        res.send(data)
    });

})

app.post('/AddNewTask', (req, res) => {
    var datetime = new Date();
    const toDo = {
        task: req.query.task,
        status: req.query.status,
        deadline: req.query.deadline,
        lastModified: datetime
    }
    const textToAdd = JSON.stringify(toDo)
    fs.appendFileSync('DB.csv', textToAdd + '\n')
    res.send(textToAdd)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})