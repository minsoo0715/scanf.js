# scanf_js


# exam   
```js
let scanf = require('scanf_js')


const test = async () => {
    let [a,b,c] = await scanf(3)
    console.log(a, b, c)
}

test()
```

```powershell
    input : 5
            4 3 2 1 5

    output : [ 5 ]
             [ 4, 3, 2, 1, 5 ]
```