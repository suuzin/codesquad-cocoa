function solution(a, b) {
    let answer = "";
    let date = [31,29,31,30,31,30,31,30,31,30,31];
    let day = ["Thu","Fri","Sat","Sun","Mon","Tue","Wed"];
    let tmp =0;

    for(let i = 0; i < a-1; i++){
        tmp += date[i];
    }
    tmp += b;
    answer = day[tmp%7];
    return answer;
}

//date 내장객체
// function solution(a,b){
//     let date = new Date(2016, (a-1),b);
//     return date.toString().slice(0,3);
// }
console.log(solution(5,24));

