/*
배열 arr 들어가고 
나눠주는 값(예:5)가 들어간다.

오름차순으로 정렬한다.
나누어 떨어지는게 없으면 -1으로 리턴한다.
*/
const arr = [5,9,7,10];
const arr2 = [2,36,1,3];
const arr3 = [3,2,6];

function solution(arr, divisor) {
    //console.log(arr,divisor);
    var answer = [];
    
    //[o] 나눠떨어지는 값 찾기
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i]);
        }else {
            let num = -1;
            answer.push(num);
        }
    }
    
    //정렬하는 구문 만들기
    //answer 배열을 순환하면서 [i][i+1]비교하기
    
    for(let i = 0; i < answer.length; i++){ //순차적으로 반복하기위해서 
        let tmp = "";
        // let minusResult = answer.length
        // minusResult = 0;
        
        if(answer[0] === -1 ){
            answer.length = 1;
        }
        for(let j = 0; j < answer.length-i; j++){ //끝까지 돌았을 때 다시 처음부터 돌 수 있게
            if(answer[j] > answer[j+1]){ //순서바꾸기 
                tmp = answer[j];
                answer[j] = answer[j+1];
                answer[j+1] = tmp; 
                console.log("@@@33",answer);
            }
        }
        //answer.push(tmp[i]);
    }

 
    return answer;
}
console.log(solution(arr3,10));

//정렬??
//->answer에 push하기 전에 정렬해준다??
//아니면 푸쉬하고 나서 정렬한다? 

// -1도 하나만 나오게해줘여
//같은값이 여러개면 첫번째 같만 나오게 해준다.
//(첫번째 -1을 기준으로 비교한다.)


/*
if에 -1이 안에 들어있으면 빈값넣기
 */