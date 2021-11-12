//버블정렬

//sort


//복습부분
1. 버블정렬 할때 이중for문을 사용하는 이유
처음에는 한개의 for문 돌려서 각각 바꾸려고 했는데 그러면 결과가 [ 2, 1, 3, 36 ] 나오므로 다시 처음부터 또 돌아야 하니까
이중 for문이 필요하다.

수정전)
for(let i = 0; i < answer.length; i++){ 
        let tmp = "";
            if(answer[i] > answer[i+1]){ //순서바꾸기 
                tmp = answer[i];
                answer[i] = answer[i+1];
                answer[i+1] = tmp; 
                console.log("@@@33",answer); //[ 2, 1, 3, 36 ]
            }
        
        //answer.push(tmp[i]);
 }

 //2차원 배열 : 배열 안에 또다른 배열이 들어있는 것 
 //중첩배열
 1.초기값 할당
 2. 반복문사용해서 빈 배열 생성
 3. 2차원 배열 생성 함수를 만들어서 사용
 4. array객체에 배열 생성함수 추가해서 사용


   