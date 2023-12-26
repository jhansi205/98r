var num1=2;
var i=1;
var count=0;
while(i<=num1){

    if(num1%i==0){
        count++
    }
    i++;
}
if(count==2){
    console.log("prime number");
}
else{
    console.log("not a prime number");
}