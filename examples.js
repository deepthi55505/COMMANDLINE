var examples=require('./app.js').examples
var readline = require('readline');
var log = console.log;
let word;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var recursiveAsyncReadLine = function () {

   rl.question('Enter the word: ', async function (word) {
  let results=examples(word);
  console.log(results);
  rl.close();
 });
};
    recursiveAsyncReadLine();
