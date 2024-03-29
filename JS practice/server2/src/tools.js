// ако няма база данни фаил да създава такъв с празен ареи
//фаил exaple.log и при всяко изпълнение на ендпоинтите да записва какво е правено и 
//той да не се качва в гитхуб да записва датата в която е направен лога какво е направено и какъв е резултата
const fs = require('fs');
const DBfile = 'DB.csv';
const logs = 'actions.log';

function readingFileAsArray(file){
    const isExist = fs.existsSync(file)
    if (!isExist) fs.writeFileSync(file, '[]'); 
    const readingFile = fs.readFileSync(file)
    const dataArray = JSON.parse(readingFile)
    return dataArray
}

function writeStringifiedDataToFile(dataArray,file){
    const stringifyData = JSON.stringify(dataArray, null, 2)
    fs.writeFileSync(file, stringifyData);
}

function sort(dataArray){
    const sortedArray = dataArray.sort((a,b)=>{
        const newDateFormatA = new Date(a.deadline).getTime()
        const newDateFormatB = new Date(b.deadline).getTime()
        return newDateFormatB - newDateFormatA
    })
    return sortedArray
}

function addAction(actionDOne,endResult){
    const dataArray = readingFileAsArray(logs)
    const log = {
        lastModified: new Date(),
        action: actionDOne,
        result: endResult,  
    }
    dataArray.push(log)
    writeStringifiedDataToFile(dataArray,logs)

}
module.exports ={sort,writeStringifiedDataToFile,readingFileAsArray,addAction,DBfile,logs}