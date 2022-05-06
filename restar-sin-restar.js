const subtract = (a, b) => {
  let i = 0;
  while(a > b){
    a--;
    i++;
  }
  return i;
};

console.log(subtract(1234,654)); // 580
