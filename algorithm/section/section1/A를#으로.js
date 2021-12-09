function solution(word){
    let result;
    for(let i =0; i<word.length; i++){
        if(word[i] == 'A'){
            result = word.replace(/A/g,'#');
        }
    }
    return result
}
let word = 'BANANA';
console.log(solution(word));