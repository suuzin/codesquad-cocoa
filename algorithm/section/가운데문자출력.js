function solution(word){
    let tmp;
    let middle = "";
    let wordLength = word;

    if(word.length % 2 === 0){
        tmp = Math.floor(word.length / 2);
        middle += wordLength[tmp-1]; 
        return middle += wordLength[tmp];
    }else {
        tmp = Math.floor(word.length / 2);
        return middle += wordLength[tmp];
    }
}
let word = 'abcedf';
console.log(solution(word));