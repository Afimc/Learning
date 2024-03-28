const fs = require('fs');


function sort(){
    const readingFile = fs.readFileSync('DB.csv')
    const dataArray = JSON.parse(readingFile)
    console.log(dataArray)
    readyToCompare=dataArray.map(i=>{
        const partsOfDate = i.deadline.split('-')
        const formatedData = new Date(partsOfDate[0], partsOfDate[1] - 1, partsOfDate[2]);
        const formatedDataForCompare = formatedData.getTime()
        i.deadline=formatedDataForCompare
        return i
    })
 
    const sortedArray = readyToCompare.sort(({deadline:a}, {deadline:b}) => b-a);
    const readySortedArray = sortedArray.map(x=>{
         const res =x.deadline
         const ready=new Date(res).toDateString()
         x.deadline=ready
         return x
        

    })
    return readySortedArray
}

function getList(filterValue,sorter) {
    if (filterValue && filterValue !== 'done' && filterValue !== 'inprogres') {
        throw new Error('Enter a valid filter Status done/inprogres');
    }
    const readingFile = fs.readFileSync('DB.csv')
    const dataArray = JSON.parse(readingFile)
    if (!filterValue) {
        if(!sorter)
        return dataArray
    }else{return sort(dataArray)}
    if(!sorter){
        const filteredData = dataArray.filter(x => x.status === filterValue)
        return filteredData
    }else { 
        const filteredData = dataArray.filter(x => x.status === filterValue)
        return sort(filteredData) 
    }

}

function addNewTask(taskInput, statusInput, DateString) {
    if (!taskInput) {
        throw new Error('Enter a task name ');
    }
    if (!statusInput) {
        throw new Error('Enter a status done/inprogres ');
    }
    if (!DateString) {
        throw new Error('Enter a deadline to comleate the task ex(2024-04-03)');
    }
    const readingFile = fs.readFileSync('DB.csv')
    const dataArray = JSON.parse(readingFile)
    const id = dataArray.length + 1
    const partsOfDate = DateString.split('-')
    const formatedData = new Date(partsOfDate[0], partsOfDate[1] - 1, partsOfDate[2]);
    const toDo = {
        id: id,
        task: taskInput,
        status: statusInput,
        deadline:DateString,  // formatedData.toDateString(),
        lastModified: new Date().toDateString()
    }
    dataArray.push(toDo)
    const stringifyData = JSON.stringify(dataArray, null, 2)
    fs.writeFileSync('DB.csv', stringifyData);
    return toDo
}

function changeStatus(reqId, newStatus) {
    if (!reqId) {
        throw new Error('No ID ');
    }
    if (newStatus !== 'done' && newStatus !== 'inprogres') {
        throw new Error('Enter a valid Status done/inprogres');
    }
    const readingFile = fs.readFileSync('DB.csv');
    const dataArray = JSON.parse(readingFile);
    const itemToChange = dataArray.find(i => i.id === +reqId);
    if (!itemToChange) {
        throw new Error('can not find an item')
    }
    itemToChange.status = newStatus
    itemToChange.lastModified = new Date().toDateString()
    const stringifyData = JSON.stringify(dataArray, null, 2)
    fs.writeFileSync('DB.csv', stringifyData);
    return itemToChange
}

function deleteTask(idToDelete) {
    if (!idToDelete) {
        throw new Error('No ID task to delete ');
    }
    const readingFile = fs.readFileSync('DB.csv')
    const dataArray = JSON.parse(readingFile)
    const validId = dataArray.some((x) => x.id === idToDelete)
    if (!validId) {
        throw new Error('No valid task ID ');
    }
    const newDataArray = dataArray.filter(x => x.id !== idToDelete);
    for (let x = 0; x < newDataArray.length; x++) {
        newDataArray[x].id = x + 1
    }
    const stringifyData = JSON.stringify(newDataArray, null, 2)
    fs.writeFileSync('DB.csv', stringifyData);
    return newDataArray
}

module.exports = { changeStatus, addNewTask, deleteTask, getList }



// const validStatusAndId = dataArray.some((x) => x.id === reqId && newStatus === 'done' || newStatus === 'inprogres')
// const itemToChange = validStatusAndId ? dataArray.find(i => i.id === reqId) : res.send('Enter a valid status or ID')
// itemToChange.status = newStatus
// itemToChange.lastModified = datetime.toDateString()
// res.send(itemToChange)

// if(validStatusAndId){
//     const itemToChange=dataArray.find(i => i.id === reqId)
//     itemToChange.status=newStatus
//     itemToChange.lastModified = datetime.toDateString()
//     res.send(itemToChange)
// }else { res.send('Enter a valid status or ID') }


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
// const stringifyData = JSON.stringify(dataArray, null, 2)
// fs.writeFileSync('DB.csv', stringifyData);