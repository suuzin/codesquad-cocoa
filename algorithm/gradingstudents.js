/*
모든학생이 받는 grade 0<grande<100

grade가 40미만이면 불합격

다음 배수인 5의 차이가 3보다 작으면 다음 배수인 5까지 반올림합니다.
//5의 배수로 따지는데 내 점수가 5의 배수의 차가 3까지만 반올림한다.

38보다 작으면 반올림 안한다.

*/

//1. 학생의 점수를 입력받는다.
//2. 그 학생의 점수의  5의 배수를 찾는다. -> 변수에 담는다.
//3. 학생 점수랑, 2번 변수랑 비교한 값이 4보다 작아야 한다. 
//4. 4보다 작으면 반올림한다.
//5. 4보다 크면 그대로의 점수를 유지한다.

//6. 40미만이면fail

//결과를 찾는 함수
const grades = 84; //1.

function gradingStudents(grades){
    //console.log(grades);
    //84의 5의 배수를 어떻게 찾을까??
    console.log(grades % 5)
}
gradingStudents(grades);