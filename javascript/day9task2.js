var a=4;
var b=4;
var c=4;
if(a==b&&a==c&&b==c){
    console.log("equilateral triangle");
}else if(a==b||b==c||a==c){
    console.log("isosceles triangle");
}else{
    console.log("scalene triangle");
}