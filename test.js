let scanf = require('./scanf')

scanf(1).then(
    function(input) {
      scanf(input[0]).then(
        function(input_2) {
          console.log(input);
          console.log(input_2);
        }
      )
    }
  )