//Javascript program for find a datatypes 
var input;

function typeDef(input){
    console.log("DataType is: ",typeof(input));
}

age=typeDef(10); //Returns Number
Name=typeDef("name"); //Returns String
bool=typeDef(true);//Returns Boolean
obj=typeDef({first:12}); //Returns Object
und=typeDef(input); //Returns undefined
