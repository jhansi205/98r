var array=[1,2,3,-5,-20,-28,-110];
var min=array[0];
for(var i=1;i<array.length;i++){
    if(array[i]<min){
        min=array[i];
    }
}
console.log(min);