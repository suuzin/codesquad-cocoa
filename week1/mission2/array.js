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
/*
평균 구하기
아래 예시는 네 명의 학생에 대한 과목 점수이다.
각 학생은 3가지 과목에 대한 점수를 가지고 있다.
각 학생의 평균점수(1)와 모든 학생의 최고점수의 평균점수(2)를 출력하라.
*/

//1. 평균
//2. 모든 학생의 최고점수
//3. 최고점수의 평균점수

/*
grade[i]에 각각을 더해준다.
*/

const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];
let sum = 0;
let max = 0;
for(let i = 0; i<grades.length; i++){
    
    //console.log(grades[i]);
    for(let j = 0; j<grades[i].length; j++){
        sum += grades[i][j];

        if(grades[i][j+1] > grades[i][j]){
            max=grades[i][j+1];
        }
    }
    console.log("@@@@max",max);
    console.log("###",sum);
}

