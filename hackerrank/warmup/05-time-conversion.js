// conversión de formato de hora: de formato-12 a formato-24
function timeConversion(s) {
    // Write your code here
    let timeVal = s.substr(0,8);
    let amOrPm = s.substr(8,2);
    let hour = timeVal.substr(0,2), newHour = '';
    let restOfTime = timeVal.substr(2);
    if(amOrPm === 'PM'){
        let tmpNewHour = (hour !== '12') ? Number(hour) + 12 : 12;
        newHour = (tmpNewHour < 10) ? '0' + tmpNewHour.toString() : tmpNewHour.toString();
    }
    else if(amOrPm === 'AM' && hour === '12') newHour = '00';
    else newHour = hour;
    return newHour + restOfTime;
}

console.log(timeConversion('07:05:45AM')); // 07:05:45
console.log(timeConversion('07:05:45PM')); // 19:05:45
console.log(timeConversion('12:40:22AM')); // 00:40:22
console.log(timeConversion('12:45:54PM')); // 12:45:54

