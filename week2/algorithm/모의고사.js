const answers = [1,2,3,4,5];

function solution(answers) {
    let answer = [];
    let answerList = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    let point = [0,0,0]
    
    for(let i=0; i < answers.length; i++){
        if(answers[i] === answerList[0][i%5])
            point[0]++;
        if(answers[i] === answerList[1][i%8])
            point[1]++;
        if(answers[i] === answerList[2][i%10])
            point[2]++;
    }

    let max =0;
    for(let j=0; j<point.length; j++){
        if(point[j] > max)
            max = point[j];
    }
    for(let k=0; k<point.length; k++){
        if(max===point[k])
            answer.push(k+1);
    }
    return answer;
}
console.log(solution(answers));