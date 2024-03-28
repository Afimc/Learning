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
const routs = require('./routs.js');
const { changeStatus, addNewTask, deleteTask, getList } = require('./routs.js')

app.get('/get-list', (req, res) => {
    try {
        const sorter=req.query.sortBydeadline
        const filterValue = req.query.filterByStatus
        const getListResult = getList(filterValue,sorter)
        res.send(getListResult)
    } catch (error) {
        res.send('Error: ' + error.message)
    }
})

app.post('/add-new-task', (req, res) => {
    try {
        const taskInput = req.query.task;
        const statusInput = req.query.status;
        const DateString = req.query.deadline
        const addNewTaskResult = addNewTask(taskInput, statusInput, DateString)
        res.send(addNewTaskResult)
    } catch (error) {
        res.send('Error: ' + error.message)
    }
})

app.post('/change-status', (req, res) => {
    try {
        const reqId = req.query.id
        const newStatus = req.query.updatingStatus
        const changeStatusResult = changeStatus(reqId, newStatus)
        res.send(changeStatusResult)
    } catch (error) {
        res.send('Error: ' + error.message)
    }
})

app.post('/delete', (req, res) => {
    try {
        const idToDelete = +req.query.id
        const deleteTaskResult = deleteTask(idToDelete)
        res.send(deleteTaskResult)
    } catch (error) {
        res.send('Error: ' + error.message)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// const dateOne = new Date().getTime()
// const dateTwo = new Date()

// dataArray=[
//     {
//       id: 1,
//       task: "coding",
//       status: "done",
//       deadline: "2024-11-03",
//       lastModified: "Thu Mar 28 2024"
//     },
//     {
//       id: 2,
//       task: "shoping",
//       status: "inprogres",
//       deadline: "2024-08-02",
//       lastModified: "Thu Mar 28 2024"
//     }
//   ]
// ReadyToCompare=dataArray.map(i=>{
//     const partsOfDate = i.deadline.split('-')
//     const formatedData = new Date(partsOfDate[0], partsOfDate[1] - 1, partsOfDate[2]);
//     // const formatedDataForCompare =formatedData.getTime()
//     i.deadline=formatedData
//     return i

// })
// console.log(ReadyToCompare)
// var res = ReadyToCompare.sort(({deadline:a}, {deadline:b}) => b-a);
// console.log(res)

// const time =1712185200000
//  const res =new Date(time).toDateString()
//  console.log(res)