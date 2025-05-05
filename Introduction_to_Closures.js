

function makeAccount(initial) {
    var balance = initial;
   return function(amount) {
        if (balance - amount >= 0) {
        balance = balance - amount;
        return 'Here is your money: $' + amount;
        }
   return 'Insufficient funds.';
   };
}
var azizAccount=makeAccount(100)
console.log(azizAccount(20))
console.log(azizAccount(90))


function makeCounter() {
    var count =0
 return function counter() {
    count=count+1
    return count }
}
var counter1 = makeCounter()
var counter2 = makeCounter()
console.log(counter1())
console.log(counter1())
console.log(counter2())
console.log(counter2())
console.log(counter1())


function makeCounter(init) {
    var count =init
 return function counter() {
    count=count+1
    return count }
}
var counter1 = makeCounter(100)
var counter2 = makeCounter(200)
console.log(counter1())
console.log(counter1())
console.log(counter2())
console.log(counter2())
console.log(counter1())



function pow(exponent) {
    return function(base) {
         return base**exponent
         }
    }
var square = pow(2)
var cube = pow(3)
var power4 = pow(4)
var power5=pow(5)
console.log(square(5))
console.log(cube(3))
console.log(power5(2))


function add(num) {
    var sum = num

    function inner(next) {
      if (typeof next === 'undefined') {
        return sum;
      }
      sum = sum+next;
      return inner;
    }

    return inner;
  }
