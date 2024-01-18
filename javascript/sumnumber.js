function helper(n){
    debugger
    
    let rem;
    let sum=0;
    while(n>0){
        rem=n%10;
        sum=sum+rem;
        n=Math.floor(n/10);
    }
        return sum;
    
}
var n;

console.log(helper(153));