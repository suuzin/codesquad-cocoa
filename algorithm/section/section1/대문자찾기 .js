function solution(word){
    let count = 0;
    for(let i =0; i<word.length; i++){
        if(word[i] == word[i].toUpperCase()){
            count++;
        }
    }
    return count;
}
console.log(solution('KoreaTimeGood'));