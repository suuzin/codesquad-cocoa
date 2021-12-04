function compare(a,b,c){
    let tmp;
    if(a>b){
        tmp = b;
    }else{
        tmp =a;
    }
    if(c<tmp){
        tmp =c;
    }
    return tmp;
}
console.log(compare(6,5,11));