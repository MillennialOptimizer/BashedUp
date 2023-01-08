#!/usr/bin/env node

const yargs = require("yargs");
const utils = require("./utils");
const translate = require("@vitalets/google-translate-api");

console.log(yargs.argv._); // yargs.argv -> stores all the arguments we pass to the terminal

if(yargs.argv.l == true || yargs.argv.languages == true){
    utils.showAll();
    return;
}

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
    return;
}


if(yargs.argv._[0] == null){
    utils.showHelp();
    return;
}



