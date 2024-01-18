//reverse number
// function helper(n){
//     debugger
    
//     let rem;
//     let rev=0;
//     while(n!=0){
//         rem=n%10;
//         rev=rev*10+rem;
//         n=Math.floor(n/10);
//     }
//         return rev;
    
// }
// var n;

// console.log(helper(123));
//palindrome method 1
// let rem;
// var n=222;
// let temp=n;
//     let rev=0;
//     while(n!=0){
//         rem=n%10;
//         rev=rev*10+rem;
//         n=Math.floor(n/10);
//     }if(temp===rev){
//         console.log("palindrome");
//     }else{
//         console.log("not palindrome");
//     }
//palindrome method-2
//    function helper(n){
    
//     let temp=n;
//     let rem;
//     let rev=0;
//     while(n!=0){
//         rem=n%10;
//         rev=rev*10+rem;
//         n=Math.floor(n/10);
//     }
//     if(temp===rev){
//         return "palindrome";
//     }else{
//         return "Notpalindrome";
//     }
    
// }
// var n;

// console.log(helper(333));