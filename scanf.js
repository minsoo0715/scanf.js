
  const readline = require("readline");

   var scanf = function (input_n) {
     return new Promise(function (resolve, reject) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      let input = [];

      

      rl.on("line", function(line) {
    
    
        let temp =  line.split(' ').map((el) => parseInt(el))
        input = input.concat(temp);
    
        if(input_n == input.length) rl.close();
        
      
      }).on("close", function() {
        resolve(input);
        
      })
     })
   }



module.exports = scanf;
