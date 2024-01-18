// var num1=-8;
// if(num1>0){
//    console.log("Number is positive");
// }else if(num1<0){
//  console.log("Number is negative");
// }else{
//     console.log("Number is zero ");
// }
function numberCheck(num1){
    if(num1>0){
        return "positive";
    }else if(num1<0){
        return "negative";
    }else{
        return "Zero";
    }
}
console.log(numberCheck(-10));
console.log(numberCheck(0));
console.log(numberCheck(10));
console.log(numberCheck(-190));
