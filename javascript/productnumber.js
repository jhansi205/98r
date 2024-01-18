function helper(n){
    
    
    let rem;
    let product=1;
    while(n>0){
        rem=n%10;
        product=product*rem;
        n=Math.floor(n/10);
    }
        return product;
    
}
var n;

console.log(helper(153));