//Javascript program for words concatenations
function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
	var result="";
	result+="The " + myAdjective + " "+myNoun+" " +" " +myAdverb;
	return result;
}

console.log("dog","big","run","quickly");
console.log("bike","slow","move","slowly");