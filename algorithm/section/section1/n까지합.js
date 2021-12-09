function solution(n){
    let answer=0;
    for(let i=1; i<=n; i++){
        answer=answer+i;
    }
    return answer;
}

console.log(solution(10));


function solution2(num){
    let answer=[];
    for(let i = 1;i <=num; i++ ){
        answer.push(i);
    }
    const result = answer.reduce((acc,el)=>{
        return acc +el;
    },0);
    return result;
}
console.log(solution2(6));