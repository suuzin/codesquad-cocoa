const data = [89.23,82.03,71.56,78.82,85.05,84.44,67.53,71.7,
             77.97,73.77,84.25,67.01,73.78,64.19,89.89,90.32,
             73.21,75.35,83.22,74.01]

//[o]1-1 합을 구하는 함수
function getSum(arr){
    let sum = 0;
    arr.forEach((arr)=>{
        sum+=arr;
    });
    return sum;
}
console.log(getSum(data));

//[o]1-2 평균을 구하는 함수
function getMean (arr){
    return getSum(arr)/arr.length;
}
console.log(getMean(data));

// //[] 2. 표준편차 구하기
/*
[o]1 단계: 평균을 구합니다. oo
======
[o]2 단계: 각 자료마다 평균으로부터 떨어진 거리를 제곱한 값을 구합니다.
[o]3 단계: 2 단계에서 나온 값을 모두 더합니다.
[o]4 단계: 위에서 얻은 값을 자료점의 개수로 나눕니다.
=====
[o]5 단계: 제곱근을 구합니다.
*/

//[]2-1. 표준편차 거리 구하기 + 더해주기
function getDistance(arr){
    let total = 0;
    for(let i =0; i < data.length; i++) {
        let tmp = data[i]-getMean(data);
        total += tmp * tmp;
    }
    return total;
}
console.log(getDistance(data));

//[]2-2. 제곱근해주기

function getSqrt(arr){
    return Math.sqrt(getDistance(data)/(data.length));
}
console.log(getSqrt(data));

//70-80점 사이의 값을 갖는 비율 - 표준정규분포표를 참고
