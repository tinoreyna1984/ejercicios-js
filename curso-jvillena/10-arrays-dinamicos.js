// declaro array
let arrComun = [10,20,30,40,60];
console.log(arrComun);

// agrego elemento
arrComun = [...arrComun,70]; // agrego con spread operator
arrComun.push(80); // agrego con push
console.log(arrComun);

// recorro array forma 1
for(let i = 0; i < arrComun.length; i++){
    console.log(`Item ${i+1}: ${arrComun[i]}`);
}

// recorro array forma 2
arrComun.forEach((e => console.log(e)));


