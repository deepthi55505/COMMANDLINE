var request=require('request');
var definitions=require('./app.js').definitions
var readline = require('readline');
var log = console.log;
let results=definitions("advance")
console.log(results)
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let i=0;
var recursiveAsyncReadLine = function () {
    i++;
     if(i==4){
        return  rl.close();
     }
    rl.question('Guess: ', function (word) {

        if (word == 'advance'){
            console.log("Correct guess")
            return rl.close(); 
        }
        log("Wrong guess,Try again");
        recursiveAsyncReadLine(); 
    });
};
recursiveAsyncReadLine();