let arr = [12, 77, 38, 41, 53, 92, 85];
let answer = [];
let min = Number.MAX_SAFE_INTEGER;

function solution(arr){
    arr.forEach(element => {
        if(element%2 ===1){
            answer.push(element);
        }
    });
    return answer;
}

function foo(anwer){
   answer.forEach((el)=>{
        if(el < min){
            min=el;
        }
   });
   return min;  
}
console.log("solution",solution(arr));
console.log("##",foo(answer));


