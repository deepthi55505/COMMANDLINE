var request = require("request");
var definitions=require('./app.js').definitions
var readline = require('readline');
var log = console.log;
let word;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var recursiveAsyncReadLine = async function () {
   rl.question('Enter the word: ', async function (word) {
  let results=definitions(word);
  console.log(results);
  rl.close();
 });
};
    recursiveAsyncReadLine();
