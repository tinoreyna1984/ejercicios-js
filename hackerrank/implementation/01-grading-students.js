//
function gradingStudents(grades) {
    // Write your code here
    for(let i = 0; i < grades.length; i++){
        let nm5 = Math.ceil(grades[i]/5)*5;
        if(nm5 >= 40){
            if(Math.abs(nm5 - grades[i]) < 3) grades[i] = nm5;
        }
    }
    return grades;
}

console.log(gradingStudents([73,67,38,33]));
