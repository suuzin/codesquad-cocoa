function solution(arr){
let arr2 =[1,1,1,1,1];
    for(let i =0;i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j]>arr[i]) arr2[i]++;
        }
    }
    return arr2;
    }
let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
