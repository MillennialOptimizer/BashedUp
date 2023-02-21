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
        var x = StringSearch.searchForString(word, dataFromFile);
        console.log(word + " found at index " + x + " in " + fileName); 
    })

    
    return;
}


module.exports = {lsOperation: lsOperation, catOperation: catOperation, grepOperation: grepOperation}