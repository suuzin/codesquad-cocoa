//=================================1번문제
function calculate(num){
    let answer = [];
    let start = 1;
    for(let i =1; i<=num; i++){
        start *= i;
        answer.push(start);
    }
    return answer;
}
console.log(calculate(4));

//=================================2번문제
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];

function filterId(id){
    let result = [];
    for(let i = 0; i < peoples.length; i++){
        if(!checkSpecial(peoples[i])) {
            result.push(peoples[i]);
        }
    }
    for(let i = 0; i<result.length; i++){
        result[i] = result[i].replace(/[0-9]/g, "");
    }
    return result;
}
//특수문자체크 
function checkSpecial(str) {
    const regExp = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    if(regExp.test(str)) return true;
    else return false;
}
console.log(filterId(peoples));
//=================================3번문제
const grades = [
    [88,76,77], 
    [33,44,44], 
    [90,100,94], 
    [30,44,98]
];
const averageGrades = [];
const bestGrades = [];
for(let i = 0; i < grades.length; i++){
    let sum = 0;
    let max = "";
   
    for(let j = 0; j<grades[j].length; j++){
        sum += grades[i][j];

        if(grades[i][j+1] > grades[i][j]){
            max=grades[i][j+1];
        }
    }
    averageGrades.push(sum/3);
    bestGrades.push(max);
    
    let average = 0;
    for(let i = 0; i < averageGrades.length; i++){
        average += averageGrades[i]/averageGrades.length;
    }
}
console.log(averageGrades);
console.log(bestGrades);
