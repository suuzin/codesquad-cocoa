function solution(arr){
    let answer;
    let min =  100;

    for(let i =0; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));