// var array=[1,2,3,4,21,8];
// var key=25;
// for(var i=0;i<array.length;i++){
//     if(array[i]===key){
//         console.log(i);
//     }
   
// }console.log("-1");
function helper(array,key){
    for(var i=0;i<array.length;i++){
    if(array[i]===key){
        return i;
    }
}
return -1
}
var array=[1,2,3,4,21,8];
 var key=29;

console.log(helper(array,key));
