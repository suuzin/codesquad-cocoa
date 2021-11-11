const data = "[1,2,[3,4,[5,[6]]]]"
const data2 = '[1, 2, [3, 4, [5, 6, [7, [8]]]]'; //틀림
const data3 = '][[1, 2, [3, 4, [5, 6, [7, [8]]]]]'

//[o] 2. 제거한 내용 다시 답는다.
const newData = data.split("");
//newData 내용
/*
[
  '[', '1', '3', '2', ',',
  '[', '3', ',', '4', ',',
  '[', '5', ',', '[', '6',
  ']', ']', ']', ']'
]
3. newData안에는 string이다.
*/

//[]3. ']' 갯수새면 깊이겠지?
function dataCount (arr){
    let depth = 0; //깊이
    let right = 0; // ']'
    let left = 0; // '['
    let count = 0; // 원소갯수
    for(const arr of newData) {
        //console.log(arr.length);
        //console.log(typeof arr); string
        if(arr === "["){
            left++;
        }else if (arr === "]"){
            right++;
            depth++;
        }else if(arr !== ","){
            count++;
        }
    }
    // console.log(left); 4개
    // console.log(right);4개
    // console.log(depth);
    // console.log(count);
    //배열의 중첩된 깊이 수준은 4이며, 총 6개의 원소가 포함되어 있습니다
    return `배열의 중첩된 깊이 수준은 ${depth}, 총 ${count}개의 원소가 포함되어 있습니다.`
}
dataCount(newData);

//===================2번문제
//[]1.data2도 ''제거해야 한다.
const newData2 = data2.split("");
function bracketError(arr) {
    let right = 0; // ']'
    let left = 0; // '['
    let pass = "정상입니다.";
    let missLeft = "'['이 부족합니다.";
    let missRight = " ']'이 부족합니다.";
    
    for(arr of newData2){
         if(arr === "["){
             left++;
         }else if(arr === "]"){
             right++;
         }
    }

    if(left < right) {
        console.log(missLeft);
    }else if (right < left) {
        console.log(missRight);
    }else {
        console.log(pass);
    }
    return false;
}
bracketError(data2);
    

