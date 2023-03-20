//javascript program for replacing array values based on even/odd conditions
const num=[12,11,13,45,66,76,89];
console.log("Given Array:",num);
for(i=0;i<num.length;i++){
    if (num[i]%2==0){
        num[i]=99;
    }
    else{
        num[i]=100;
    }
}
console.log("Updated Array:",num);
