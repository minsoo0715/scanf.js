# scanf_js


# exam   
```js
let scanf = require('scanf_js')

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
```

```bat
    input : 5
            4 3 2 1 5

    output : [ 5 ]
             [ 4, 3, 2, 1, 5 ]
```