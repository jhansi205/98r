let start=5;
let end=15;
let count=0;
for(let i=start;i<=end;i++){
    if(helper(i)){
        count++
    }
n
console.log(count);
function helper(n){
    debugger
    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            return false
        }
    }return true
}
console.log(helper(19));