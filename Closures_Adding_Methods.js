
function makeAccount(initial) {
    var balance = initial;
    return {
         withdraw: function(amount) {
         if (balance - amount >= 0) {
         balance = balance - amount;
         return 'Here’s your money: $' + amount;
    }
    return 'Insufficient funds.';
},
        deposit: function(amount) {
         balance = balance + amount;
         return 'Your balance is: $' + balance;}
        
    };
}



function makeAccount(initial) {
    var balance = initial;
    return {
         withdraw: function(amount) {
         if (balance - amount >= 0) {
         balance = balance - amount;
         return 'Here’s your money: $' + amount;
    }
    return 'Insufficient funds.';
},
        deposit: function(amount) {
         balance = balance + amount;
         return 'Your balance is: $' + balance;},
         checkBalance:function (){
            return "'Your balance is: $"+balance;}
         }
}



function count(initial){
    var count=initial
    return {
        up:function (){
            count=count+1
            return "this is the new value : "+count
        },
        down:function(){
            count=count-1
            return "this is the new value : "+count
        }
    }
}



function count(initial){
    var count=initial
    return {
        up:function (){
            count=count+1
            return "this is the new value : "+count
        },
        down:function(){
            count--
            return "this is the new value : "+count
        },
        rest:function(){
            count=initial
            return "this is the initial value : "+count
        }
    }
}




function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
    }
var upperBound = 5;
function guessMyNumber(n) {
    if (n > upperBound) {
         return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
    } else if (n === randInt(upperBound)) {
         return 'You guessed my number!';
         }
    return "Nope! That wasn t it "
}
function rand(upperbound) {
    var random=Math.floor(Math.random() * (upperbound + 1))
    function guessing(n){
        if (n > upperbound) {
            return 'Out of bounds! Please try a number between 0 and ' + upperbound + '.';
         } 
       else if (n ===random) {
            return 'You guessed my number! exactly '+random
         }
        return "Nope! That wasn t it but it was : "+random  
    }
    return guessing
}
var select=rand(10)
console.log(select(10))



function makeGame(upperbound) {
    var random=Math.floor(Math.random() * (upperbound + 1))
    console.log("the upper bound is "+upperbound)
    var highscore=5
    var chance=0
    return {
        play:function (n){
        if (chance===5) {
            return "you reach the maximum of chances please reset the game"
        }
        if (n > upperbound) {
            return 'Out of bounds! Please try a number between 0 and ' + upperbound + '.'
            
         } 
       else if (n ===random) {
            chance++
            if (chance<highscore){
                highscore=chance
                return "you guessed my number and you set new highscore :"+highscore
            }
            return 'You guessed my number! exactly '+random
            
         }
        chance++
        if (chance===5) {
            console.log("Nope! That wasn t it")
            return "you reach the maximum of chances please reset the game"
        }
        return "Nope! That wasn t it"

        },
        over:function(){
            return "you give up and the random number was :"+random
        },
        numGuesses:function(){
            return"you have now done "+chance+" guesses"
        },
        reset:function(){
            random=Math.floor(Math.random() * (upperbound + 1))
            chance=0
            return "the game is reset and now you have new random number"
        },
        score:function(){
            return "the best score for now is "+highscore
        }

    }
}   


function someEven(array){
    for (var i=0;i<array.length;i=i+1){
        if (array[i]%2===0){
            return true
        }
    }
    return false
}








