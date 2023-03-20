//Javascript program for getting two values from the user 
var num1;
var num2;

if ((num1==null) && (num2==null)){
    a=window.prompt("Enter a:");
    b=window.prompt("Enter b:");
}
else if ((num1!=null) && (num2==null)){
    b=window.prompt("Enter b:");
}
else if ((num1==null) && (num2!=null)){
    a=window.prompt("Enter a:")
}
