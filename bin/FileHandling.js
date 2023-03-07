const fs = require('fs');
const StringSearch = require('../Algorithms/StringSearchAlgo');

function catOperation(filename){
    var dataFromFile = "";
    fs.readFile(filename, (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        dataFromFile = data.toString();
        console.log(data.toString());
    });
    return;
}

function lsOperation(directory){
    fs.readdir(directory, (err, files) => {
        if(err){
            console.log(err);
            return;
        }
        files.forEach((file) => {
            console.log(file);
        });
    })
    return;
}

// searches for the occurrences of 'word' in file

function grepOperation(fileName, word){
    var dataFromFile = ""; 

    fs.readFile(fileName, (err, data) => {
        if(err){
            console.log(err); 
            return;
        }
        var dataFromFile = data.toString();
        var x = StringSearch.findPattern(word, dataFromFile);
        console.log(word + " found at index " + x + " in " + fileName); 
    })

    return;
}

// sort operation on the sentences 

function sortOperation(fileName){
    fs.readFile(fileName, (err, data) => {
        if(err){
            console.log(err);
            return;
        }

        var dataFromFile = data.toString(); 
        var customDelimiter = /\r?\n/
        var arrayOfStrings = dataFromFile.split(customDelimiter);
        arrayOfStrings.sort();
        console.log(arrayOfStrings);
    })

    return;
}

// tail operation on the sentence 

function tailOperation(filename, n){
    fs.readFile(filename, (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        
        var dataFromFile = data.toString();
        var customDelimiter = /\r?\n/
        var arrayOfStrings = dataFromFile.split(customDelimiter);
        var res = arrayOfStrings.slice(-n); 
        console.log(res);
        return;
    })
}

module.exports = {lsOperation: lsOperation, catOperation: catOperation, grepOperation: grepOperation, sortOperation: sortOperation, tailOperation: tailOperation}