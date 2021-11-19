function gradingStudents(grades){
    let finalGrades =[];
    for(let i = 0; i<grades.length; i++){
        if(grades[i] >= 38){
            let rest = grades[i] % 5;
            if (rest === 3){
                finalGrades.push(grades[i]+2);
            }else if (rest === 4){
                finalGrades.push(grades[i]+1);
            }else{
                finalGrades.push(grades[i]);
            }
        }else{
            finalGrades.push(grades[i]);
        }
    }
    return finalGrades;
}
