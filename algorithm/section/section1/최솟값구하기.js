function solution(arr){
    let answer;
    let min = Number.MAX_SAFE_INTEGER;

    arr.forEach(element => {
        if(element < min){
            min=element;
        }
    }); 
    return min;
}
let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));