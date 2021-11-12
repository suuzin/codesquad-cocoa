 /*
 약수란 어떤 수를 나눴을 때 나머지가 0이 되는 수 
 */
function solution(integer){
    //let result = [];
    let answer = 0;
    for(let i = 0; i <= integer; i++){
        if(integer % i ===0){
            answer += i;
        }
    }
    console.log(answer);
    return answer;
}
console.log(solution(12));