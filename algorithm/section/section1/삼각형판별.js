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


