/**
 문제
 array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
 divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요. 
 
 제한사항
 -arr은 자연수를 담은 배열입니다.
정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
divisor는 자연수입니다.
array는 길이 1 이상인 배열입니다.

입출력 예 설명
입출력 예#1
arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

입출력 예#2
arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

입출력 예#3
3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.
 */

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
    for(let i = 0; i < answer.length; i++){
        let tmp = "";
        console.log("###",answer);
        console.log("####",tmp);
        if(answer[i] > answer[i+1]){
            tmp = answer[i];
            answer[i] = answer[i+1];
            answer[i+1] = tmp; 
        }
        console.log("@@@",tmp);
    }
    
    return answer;
}

//console.log(solution(arr2,1));

//정렬??어또케?
//->answer에 push하기 전에 정렬해준다??
//아니면 푸쉬하고 나서 정렬한다? 

// -1도 하나만 나오게해줘여
//같은값이 여러개면 첫번째 같만 나오게 해준다.
//(첫번째 -1을 기준으로 비교한다.)


/*
if에 -1이 안에 들어있으면 빈값넣기
 */