const request=require('request-promise')
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const examples = function(word){
     var options = { method : 'GET',
     url: `https://fourtytwowords.herokuapp.com/word/${word}/examples?api_key=b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164`
   }
   let result = request(options, function (error, response, body) {
       if (error) {
      throw new Error(error);
            }
    console.log(response.body)
 });
}
const definitions=function(word){
    var options = { method : 'GET',
     url: `https://fourtytwowords.herokuapp.com/word/${word}/definitions?api_key=b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164`
    }
    let result = request(options, function (error, response, body) {
        if (error) {
        throw new Error(error);
        }
        console.log(response.body)
     });
}
const antonyms=async function(word){
    var options = { method : 'GET',
     url: `https://fourtytwowords.herokuapp.com/word/${word}/relatedWords?api_key=b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164`
    }
    let result = request(options, function (error, response, body) {
      if (error) {
      throw new Error(error);
      }
      
    }).then((res)=>{
        let result=JSON.parse(res)
        if(result[0].relationshipType==='antonym'){
            console.log(result[0].words)
        } else {
            console.log("This word doesnt contain antonym")
        }
      
      return res;
  
    }).catch((err)=>{
        console.log("Error,Try again!!!")
    })
    if(result){
        return rl.close()
    }
      
}
const synonyms=async function(word){
  var options = { method : 'GET',
   url: `https://fourtytwowords.herokuapp.com/word/${word}/relatedWords?api_key=b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164`
  }
  let result = request(options, function (error, response, body) {
    if (error) {
    throw new Error(error);
    }
    
  }).then((res)=>{
      let result=JSON.parse(res)
      if(result[0].relationshipType==='synonym'){
          console.log(result[0].words)
      } else {
          console.log(result[1].words)
      }
    
    return res;

  }).catch((err)=>{
      console.log("Error,Try again!!!")
  })
  if(result){
      return rl.close()
  }
    
}
const randomwords = function(word){
  var options = { method : 'GET',
  url: `https://fourtytwowords.herokuapp.com/words/randomWord?api_key=b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164`
}
let result = request(options, function (error, response, body) {
    if (error) {
   throw new Error(error);
         }
 console.log(response.body)
});
}
module.exports.examples=examples;
module.exports.definitions=definitions;
module.exports.antonyms=antonyms;
module.exports.synonyms=synonyms
module.exports.randomwords=randomwords;


