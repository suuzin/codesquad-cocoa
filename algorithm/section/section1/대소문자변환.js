function solution(word){
    
    let tmp ="";
    for(let i =0; i<word.length; i++){
        if(word[i] === word[i].toUpperCase()){
            tmp += word[i].toLowerCase();
        }
        else{
            tmp += word[i].toUpperCase()
        }
    }
    return tmp;
}
let word = 'StuDY'
console.log(solution(word))