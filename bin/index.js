#!/usr/bin/env node

const yargs = require("yargs");
const utils = require("./utils");
const fileHandling = require('./FileHandling');
const translate = require("@vitalets/google-translate-api");

console.log(yargs.argv); // yargs.argv -> stores all the arguments we pass to the terminal


// command for language translation -> BashedUp <language> <sentence> -l 
if(yargs.argv.l == true || yargs.argv.languages == true){
    if(yargs.argv._[0]){
        // convert the sentence to lower case 
        var language = yargs.argv._[0].toLowerCase(); // 'language' is the language we want to translate the sentence to, its the first argument -> so thats why the _[0]
        language = utils.parseLanguage(language);
        sentence = utils.parseSentence(yargs.argv._); // the rest of the argument should consist of the sentence we are trying to translate
        if(sentence == ""){                                                                                          
            console.error("\nThe entered sentence is like John Cena, I can't see it!\n")  
            console.log("Enter tran --help to get started.\n")  
            return;
        }
        translate.translate(sentence, {to: language})
        .then(res => {console.log("\n" + "\n" + res.text + "\n" + "\n");})
        .catch(err => {                                                                                                     
            console.error(err);  
        });
    }
    else{
        utils.showAll();
    }
    return;
}

// command for 'cat' operation -> to output the contents of a file to stdout -> BashedUp <filename> --cat  (we need to put '--' as the flag is a word and not a letter)
if(yargs.argv.cat == true){
    var filename = yargs.argv._[0]; 
    fileHandling.catOperation(filename);
    return;
}

// command for 'ls' operation -> lists all the files of the current or passed in directory
if(yargs.argv.ls == true){
    var directory;
    if(yargs.argv._[0]){
        directory = yargs.argv._[0];
    }
    else{
        console.log('Error: Please enter a directory path');
        return;
    }
    fileHandling.lsOperation(directory);
    return;
}

// command for grep operation -> lists of the first index of occurrence of the word -> BashedUp arg1 arg2 --grep
if(yargs.argv.grep == true){
    var fileName = yargs.argv._[0]; 
    var pattern = yargs.argv._[1];
    if(fileName == null || pattern == null){
        console.log('Please enter the inputs right, missing filename or pattern to be searched'); 
    }

    fileHandling.grepOperation(fileName, pattern); 
    return;
}

if(yargs.argv.sort == true){
    var fileName = yargs.argv._[0];

    if(fileName == null){
        console.log("Please enter a valid file address"); 
        return;
    }

    fileHandling.sortOperation(fileName);
    return;
}

if(yargs.argv._[0] == null){
    utils.showHelp();
    return;
}
