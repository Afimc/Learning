// ако няма база данни фаил да създава такъв с празен ареи
//
const fs = require('fs');
const DBfile = 'DB.csv';

function readingFileAsArray(){
    const readingFile = fs.readFileSync(DBfile)
    const dataArray = JSON.parse(readingFile)
    return dataArray
}

function writeStringifiedDataToFile(dataArray){
    const stringifyData = JSON.stringify(dataArray, null, 2)
    fs.writeFileSync(DBfile, stringifyData);
}

function sort(dataArray){
    const sortedArray = dataArray.sort((a,b)=>{
        const newDateFormatA = new Date(a.deadline).getTime()
        const newDateFormatB = new Date(b.deadline).getTime()
        return newDateFormatB - newDateFormatA
    })
    return sortedArray
}

module.exports ={sort,writeStringifiedDataToFile,readingFileAsArray}