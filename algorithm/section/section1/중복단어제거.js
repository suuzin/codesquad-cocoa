function solution(num,arr){
    let str =[];
    if(num < 3 || num > 31) return;
    for(let i = 0; i<arr.length; i++){
        if(i == arr.indexOf(arr[i])){
            str.push(arr[i]);
        }
    }
    return str;
}
let arr = ['good','time','good','time','student'];
console.log(solution(3,arr));

