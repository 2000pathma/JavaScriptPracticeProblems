
var x=10;
x=12;  //var x=12 same result
console.log(x);
//Access from anywhere
for(var i=0;i<5;i++){
    console.log(i)
}
console.log("current i:",i);

function myFun(){
    console.log(i);
}
myFun();

