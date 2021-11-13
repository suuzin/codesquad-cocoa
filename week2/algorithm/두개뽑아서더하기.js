/*
1. numbers배열을 만든다.
2. 배열안에 인덱스 두개를 뽑는다. 
3. 두 개의 수를 뽑아 더해 만든다.
4. 더해 만든 모든 수를 배열에 담는다.
5. 오름차순으로 정렬한다.(중복제거는?)
*/

const numbers = [5,0,2,7]; //2,5,7,9,12
let answer =[];
/*
5+0 = 5 number[0]                  ----------- number[0] 공통값
5+2 = 7 number[0]+numbers[1]
5+7 = 12numbers[0] + numbers[2]

0+2 =2 numbers[1] + numbers[2]
0+7 =7 //같은값 한번만 들어간다. numbers[1]+numbers[3]

2+7 number[2]+number[3]
 */

function solution(){
for(let i = 0; i<numbers.length-1; i++){ 
    for(let j = i+1; j<numbers.length; j++){
        if(!answer.includes(numbers[i]+numbers[j])){ // 중복제거
            answer.push(numbers[i]+numbers[j]);
        }
    }
}
answer.sort((a,b) =>a-b);
return answer;
}
console.log(solution(numbers));