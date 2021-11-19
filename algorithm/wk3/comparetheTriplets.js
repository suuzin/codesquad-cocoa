function compareTriplets(a, b) {
    let aliceCount = 0;
    let bobCount = 0;

    for(let i = 0; i<a.length; i++){
        if(a[i] > b[i]){
            aliceCount++;
        }else if(b[i]>a[i]){
            bobCount++;
        }
    }
    return [aliceCount,bobCount];
}
