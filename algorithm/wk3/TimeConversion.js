function timeConversion(s){
    let time = s.slice(0,2);
    let tmp =0;
    let changeTime ="";
    if(s.includes("PM")){
        if(time < 12){
            tmp = +time + 12;
         changeTime = s.replace(time,tmp);
         changeTime = changeTime.replace("PM","");
        }else if(time = 12){
         changeTime=s.replace("PM","");
        }
    }
    else if(s.includes("AM")){
        if(time > 12){
            tmp = +time - 12;
         changeTime = s.replace(time,tmp);
         changeTime = changeTime.replace("AM","");
        }else if(time < 12) {
         changeTime = s.replace("AM","");
        }else {
         changeTime = s.replace(time,"00");
         changeTime = changeTime.replace("AM","");
        }
    }
    return changeTime;
}
console.log(timeConversion(s));
