function solution(sentence,word){
    let count = 0;
    for(let i = 0; i<sentence.length; i++){
        if(sentence[i] === 'R') 
        count++;
    }
    return count;
}
solution('COMPUTERPROGRAMMING','R');
