//javascript program for finding array values index position
const num=[10,20,30,40,50,60];
x=prompt("Finding number:");
for (i=0;i<num.length;i++){
    if (num[i]==x){
        console.log("Value Founded at",i,"position");
    }
}