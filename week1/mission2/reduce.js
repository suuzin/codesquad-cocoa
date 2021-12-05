const myReduce = (arr, callback, initialValue) => {
    arr.forEach(el => {
       initialValue = callback(initialValue,el) 
    });
    return initialValue;
}
const arr = [1,2,3,4,5];
function sum(prev,next){
    return prev+next;
}
console.log(myReduce(arr,sum,0));
