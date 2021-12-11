function solution(arr,arr2){
    let result ="";
    for(let i =0; i<5; i++){
        if(arr[i] === arr2[i]) result += 'D';
        else if(arr[i] == 1 && arr2[i]==3) result +='A';
        else if(arr[i] == 2 && arr2[i] ==1)result +='A';
        else if(arr[i] == 3 && arr2[i] ==2)result +='A';
        else result +='B';
    }
    return result;
}
let arr = [2,3,3,1,3];
let arr2 = [1,1,2,2,3];
console.log(solution(arr,arr2));