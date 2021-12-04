/*
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 
이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 
만들 수 없으면 ”NO"를 출력한다

입력 6,7,11 
출력 yes

입력 13,33,17
출력 no

삼각형 조건 : 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야
*/

function triple(a,b,c){
    let num = [];
    num.push(a);
    num.push(b);
    num.push(c);
     num.sort(function(a,b,c){return a-b});
   
    if(num[0]+num[1] > num[2]){
        return "yes";
    }else{
        return "no";
    }
}
console.log(triple(6,7,11 ));


