function solution(arr){
    //앞이 더 작아야 된다.
    let num = 0;
    for(let i =0; i<arr.length; i++){
        if(arr[i]<arr[i+1]){
            num++;
        }
    }
    return num;
}
let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));