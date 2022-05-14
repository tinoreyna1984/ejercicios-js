// la cantidad total de velas más altas para
// una torta de cumpleaños

function birthdayCakeCandles(candles) {
    // Write your code here
    let max = Math.max(...candles), count = 0;
    for(let i = 0; i < candles.length; i++){
        if(candles[i] === max)
            count++;
    }
    return count;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));