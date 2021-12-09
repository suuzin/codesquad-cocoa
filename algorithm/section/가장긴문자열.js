function solution(arr){
    let longWord;
   for(let i = 0; i < arr.length; i++){
       for(let j = 0; j < arr[i].length; j++){
          longWord = arr[0];
          if(longWord.length < arr[i].length){
              return longWord = arr[i];
          }
       }
   }
}
const arr = ['teacher','time','student','beautiful','good'];
console.log(solution(arr));