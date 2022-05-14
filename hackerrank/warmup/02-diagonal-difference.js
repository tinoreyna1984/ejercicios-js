/**
 * Diferencia de las sumas de los números en las diagonales de una matriz 
 */
function diagonalDifference(arr) {
    // Write your code here
    let diag1 = [], diag2 = [];    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(i === j) {
                diag1.push(arr[i][j]);
            }
        }
    }
    for(let i = 0; i < arr.length; i++){
        arr[i].reverse()
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(i === j) {
                diag2.push(arr[i][j]);
            }
        }
    }
    return Math.abs(diag1.reduce((a,b) => a + b) - diag2.reduce((a,b) => a + b))
}

let matrix = [[1,2,3], [4,5,6], [9,8,9]];
console.log(diagonalDifference(matrix))
