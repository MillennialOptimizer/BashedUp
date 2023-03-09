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

function countWordsInALine(str){
    var len = str.length; 
    var words = 0; 
    for(var i = 0; i < len; i++){
        if(str[i] === ' '){
            while(i < len-1 && str[i] === str[i+1])
                i++; 
            if(i === len-1)
                continue;
            words++; 
        }
    }
    return words + 1;
}
// word count operation on the sentence 

function wcOperation(filename){
    fs.readFile(filename, (err, data) => {
        if(err){
            console.log(err); 
            return;
        }
        var dataFromFile = data.toString();
        var customDelimiter = /\r?\n/
        var arrayOfStrings = dataFromFile.split(customDelimiter);
        var totalWords = 0; 
        for(var i = 0; i < arrayOfStrings.length; i++){
            totalWords += (countWordsInALine(arrayOfStrings[i]));
        }
        console.log(totalWords);
    })
    return;
}

module.exports = {lsOperation: lsOperation, catOperation: catOperation, grepOperation: grepOperation, sortOperation: sortOperation, tailOperation: tailOperation, wcOperation: wcOperation}