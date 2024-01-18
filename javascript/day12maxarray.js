var array=[1,2,3,15,18,36,90,190];
var max=array[0];
for(var i=1;i<array.length;i++){
    if(array[i]>max){
        max= array[i];
    }
}
console.log(max);