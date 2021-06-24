let scanf = require('./scanf')
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var robot = require("robotjs");


var roboInputArr = (inputs) => {
    let l = inputs.length;
    for(let i = 0; i<l; i++) {
        robot.typeString(inputs[i]);

        if(i == l-1) {
            robot.keyTap("enter")
        }else {
            robot.keyTap("space")
        }
    }
};


  describe("Input data", function() {
      
    sinon.spy(console, 'log')


      let input = [];
      let input2 = [];

      before(function() {
        input = [3]
        input2 = [3, 7, 9]
    })

    beforeEach(() => console.log('-- stdin --'))

    it("get 3 data by one var", async function() {
        
        roboInputArr(input)
        let [a] = await scanf(1)
        roboInputArr(input2)
        let [b,c,d] = await scanf(a)
        expect([a, b, c, d]).to.eql(input.concat(input2))

    })

    it("get 3 data by array", async function() {
        let arr = [];
        roboInputArr(input)
        let [a] = await scanf(1)
        roboInputArr(input2)
        arr = await scanf(a)
        expect([a].concat(arr)).to.eql(input.concat(input2))
    })

    it("input is : ", async function () {
        roboInputArr(input2)
        let [a,b,c] = await scanf(3)
        expect([a,b,c]).to.eql(input2) 
        //eql은 값이 같을때, equal은 오브젝트가 같을 때
    })

    after(function() {
        input = null
    })

  })

