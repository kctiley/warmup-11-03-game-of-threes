var number = 31337357

var startGame = function(input){
    var result = input;
    if(result === 1){
        console.log(1)
    }
    else{
        if(input % 3 === 0){
            console.log(result + " 0");
            result = input/3;
            return startGame(result)
        }
        else{
            var subtractOrAdd1 = Math.random();
            if(subtractOrAdd1 > 0.5){
                console.log(result + " 1");
                result += 1;
                return startGame(result)
            }
            else{
                console.log(result + " -1");
                result -= 1;
                return startGame(result);
            }
        }
    }
}

startGame(31337357)


