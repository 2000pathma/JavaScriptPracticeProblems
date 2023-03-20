//javascript program for finding a vowel letters from a given string
str="howareyou";
for(i=0;i<str.length;i++){
    if ((str[i]=="a"|"A") || (str[i]=="e"|"E") || (str[i]=="i"|"I") || (str[i]=="o"|"O") || (str[i]=="u"|"U")){
        console.log("vowel letter is",str[i]);
    }
    else{
        console.log("Not vowel letter is",str[i]);
    }
}