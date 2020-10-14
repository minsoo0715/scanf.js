
function scanf(input_n,func) {

    const readline = require("readline");


    let input = [];
    

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      
    rl.on("line", function(line) {
    
    
      let temp =  line.split(' ').map((el) => el)
      input = input.concat(temp);
  
      if(input_n == input.length) rl.close();
      
    
    }).on("close", function() {
        func(input);
        process.exit();
      
    });
   }

   module.exports = scanf;