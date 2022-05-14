function plusMinus(arr) {
    // Write your code here
    let n = arr.length;
    let flag = false;
    for(let i = 0; i < n; i++)
    {
        if(arr[i] < -100 || arr[i] > 100){
            flag = true;
            break;
        }
    }
    if((n <= 0 && n > 100) || flag){
        console.log('Values are against the constraints');
        return -1;
    }
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    
    for(let i=0; i < n; i++){
        if(arr[i] < 0){
            negative++;
        }
        else if(arr[i] > 0){
            positive++;
        }
        else{
            zeros++;
        }
    }
    
    console.log(`${(positive/n).toFixed(6)} 
                 ${(negative/n).toFixed(6)}
                 ${(zeros/n).toFixed(6)}`);

}

plusMinus([-4, 3, -9, 0, 4, 1]);

