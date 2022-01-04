function getArea(state, num1, num2, num3){
    if(state === 'circle') {
        let sec = num2;
        if(sec) {
            return getIncreaseCircle(num1,num2);
        }else {
            return getCircleArea(num1);
        }
    }
    if (state === 'rect') {
        return getRectArea(num1,num2);
    }
    if (state === 'trapezoid') {
        return getTrapezoidArea(num1,num2,num3);
    }   
}

function getCircleArea(radius) {
    sequence.push('circle')
    return radius * radius * Math.PI;
}

function getIncreaseCircle(firstNum,secondNum) {
    let sum = 0;
        for(let i = firstNum; i < secondNum; i++) {
            let result = i * i * Math.PI;
            sum += result;
        }
    sequence.push('increaceCircle');
    return sum;
}

function getRectArea(width, height){
    sequence.push('rect')
    return width * height;    
}

function getTrapezoidArea(top, down, height) {
    sequence.push('trapezoid')
    return (top + down) * height/2;
}

const sequence = [];
function printExecutionSequence(){
    console.log(sequence);
};

console.log(getArea('circle', 10));
console.log(getArea('rect', 10,15));
console.log(getArea('trapezoid', 10,15,12));
console.log(getArea('circle', 1, 8));

getCircleArea();
getCircleArea();
getArea('circle',2);
getArea('rect',2,3); 
printExecutionSequence();