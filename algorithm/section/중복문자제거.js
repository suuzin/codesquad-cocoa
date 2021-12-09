function solution(word){
    let str = "";
    for(let i =0; i<word.length; i++){
        if(i === word.indexOf(word[i])){
             str += word[i];
        }
    }
    return str;
}
console.log(solution('ksekkset'));