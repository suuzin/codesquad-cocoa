function solution(day,arr){
    let count = 0;
    arr.forEach(element => {
       if(element%10 ===day) count++; 
    });
    return count;
}
let arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3,arr));