// numero guay
const guay = (n) => {
  if(n <= 1) return true; // 1 seria el unico sumando (aparentemente)
  let i = 1, arr = [], suma = 0;
  while(i < n){
    arr.push(i); // agrega el indice actual al arreglo
    suma = arr.reduce((p,c) => p+c); // reduce el arreglo a una suma
    if(suma >= n) break;
    i++;
  }
  return (n === suma ? true: false); // guay si la suma es igual al parametro
}
guay(1); // true
guay(2); // false
guay(3); // true
guay(4); // false
guay(5); // false
guay(6); // true
guay(7); // false
guay(8); // false
guay(9); // false
guay(10); // true
guay(15); // true
guay(21); // true
guay(28); // true
guay(36); // true

