// de un array, obtener la menor y mayor sumas de sus elementos
function miniMaxSum(arr) {
    // Write your code here
    let sums = [];
    for(let i = 0; i < arr.length; i++){
        let tmp = [...arr]; // almaceno el array original
        tmp.splice(i,1); // splice modifica el array quitando el elemento actual observado
        sums.push(tmp.reduce((a,b) => a + b)); // agrego a sums la suma de los elementos de tmp
    }
    console.log(Math.min(...sums), Math.max(...sums));
}

console.log(miniMaxSum([5,5,5,5,5]));
