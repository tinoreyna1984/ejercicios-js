/**
 * Escalera hecha de caracteres '#' dado un entero como parámetro.
 * Ej. para n = 4:
 * 
 *    #
 *   ##
 *  ###
 * ####
 * 
 */
 function staircase(n) {
    // Write your code here
    if(n <= 0 && n > 100){
        console.log('Values are against the constraints');
        return -1;
    }
    
    let stair = [];
    for(let i = 0; i < n; i++){
        console.log(" ".repeat(n-i-1) + "#".repeat(i+1));
    }
}

staircase(4);
staircase(5);
staircase(6);

