const fs = require('fs');

function catOperation(filename){
    fs.readFile(filename, (err, data) => {
        if(err){
            console.log(err);
            return;
        }
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

module.exports = {lsOperation: lsOperation, catOperation: catOperation}