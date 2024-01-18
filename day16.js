//reverse array
// let array=[1,2,3,4,5];
// let i=0;
// let n=array.length;
// let j=n-1;
// while(i<j){
//     let temp=array[i];
//     array[i]=array[j];
//     array[j]=array[i];
//     i++
//     j--
// }
// console.log(array)
//perfect number
let n=15;
let sum=0;
for(i=1;i<n;i++){
    if(n%i==0){
    
        sum=sum+i
    }


    
}
    if(sum==n){
        console.log("perfect number");
    }
    else{
        console.log("not perfect number")
    }