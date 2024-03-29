//още един ендпоинт който да ретърнва контента от логфаила 
const express = require('express')
const app = express()
const port = 3000
const { changeStatus, addNewTask, deleteTask, getList, getLogs } = require('./routs.js')
const {addAction} = require('./tools.js')
app.get('/get-list', (req, res) => {
    try {
        const sorter=req.query.sortBydeadline
        const filterValue = req.query.filterByStatus
        const getListResult = getList(filterValue,sorter)
        res.send(getListResult)
        addAction('geting a list of tasks',getListResult)
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
        addAction('New task Added',addNewTaskResult)
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
        addAction('Status changed',changeStatusResult)
    } catch (error) {
        res.send('Error: ' + error.message)
    }
})

app.post('/delete', (req, res) => {
    try {
        const idToDelete = +req.query.id
        const deleteTaskResult = deleteTask(idToDelete)
        res.send(deleteTaskResult[0])
        addAction('Item deleted',deleteTaskResult[1])
    } catch (error) {
        res.send('Error: ' + error.message)
        addAction('del ',error.message)
    }
})

app.get('/get-logs', (req, res) => {
    try {
        const getLogsResult = getLogs()
        res.send(getLogsResult)
    } catch (error) {
        res.send('Error: ' + error.message)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// const dateOne = new Date().toDateString()
// const dateTwo = new Date(dateOne)
// console.log(dateOne)
// console.log(dateTwo)
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
//     i.deadline=formatedData.toDateString()
//     return i

// })
// console.log(ReadyToCompare)
// // var res = ReadyToCompare.sort(({deadline:a}, {deadline:b}) => b-a);
// // console.log(res)

// // const time =1712185200000
// //  const res =new Date(time).toDateString()
// //  console.log(res)