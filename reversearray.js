//javascript program for revering array values using for loop
const num=[12,11,13,45,66,76,89];
console.log("Given Array:",num);
var a=new Array;          //a=[];
for(i=num.length-1;i>=0;i--){
    a.push(num[i]);
}
console.log("Reversed Array:",a);
