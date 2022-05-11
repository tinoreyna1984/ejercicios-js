// palindromo

const esPalindromo = (str) => {
    let newStr = str.split('').reverse().join(''); // separo en caracteres, invierto orden y junto caracteres en una nueva cadena
    return (str === newStr ? true : false); // evalúo y retorno verificación
}

console.log(esPalindromo('reconocer'));
console.log(esPalindromo('ala'));
console.log(esPalindromo('pepe'));

// palindromo 2 - forma "para todos los lenguajes de programación"

const esPalindromo2 = (str) => {
    let strSplit = str.split(''), flag = true;
    for(let i = 0; i < Math.floor(strSplit.length/2) - 1; i++){
        if(strSplit[i] !== strSplit[strSplit.length - i -1]){
            flag = false;
            break;
        }
    }
    return flag;
}

console.log(esPalindromo2('reconocer')); // true
console.log(esPalindromo2('ala')); // true
console.log(esPalindromo2('pepe')); // false

