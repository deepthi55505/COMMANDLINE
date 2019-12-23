var request = require("request");
var antonyms=require('./app.js').antonyms
var definitions=require('./app.js').definitions
var examples=require('./app.js').examples
var synonyms=require('./app.js').synonyms
var readline = require('readline');
var log = console.log;
let word;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var recursiveAsyncReadLine = async function () {
   rl.question('Enter the word: ', async function (word) {
  let ant=antonyms(word);
  console.log(ant);
  let syn=synonyms(word);
  console.log(syn);
  let exa=examples(word)
  console.log(exa)
  let def=definitions(word)
  console.log(def)
  rl.close();
 });
};
    recursiveAsyncReadLine();
