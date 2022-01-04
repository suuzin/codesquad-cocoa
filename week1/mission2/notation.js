
//================================1번문제 s

function solution(binary,num,people) {
  let answer = "";
  for(let i = 0; i < num * people; i++){
    answer += i.toString(binary);  
  }
  return answer;
}
console.log(solution(2,4,2));

//================================2번문제 
function gildongSaid(binary,num,people,squence) {
  let answer = "";
  let gildongNum = [];

  for(let i = 0; i < num * people; i++){
    answer += i.toString(binary);  
  }
  
  for(let j = 0; j<num * people; j++){
    gildongNum.push(answer[squence-1])
    squence += people;
    console.log(squence);
  }
  return gildongNum;
}
console.log(gildongSaid(2,4,2,1));
