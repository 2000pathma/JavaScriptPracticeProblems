//Javascript Program for purchasing mobile with tax and accessories in mobile shop
var phoneAmount=200;
var taxpercentage;
var accessories=50;
var totaltax;
var total;

 
function taxCalculator(taxpercentage) {
    totaltax=(taxpercentage/100)*(phoneAmount+accessories);
    return totaltax;
}

if ((phoneAmount!=0) && (accessories!=0)){
    totaltax=taxCalculator(18);
    total=phoneAmount+totaltax+accessories;
    console.log("Payable Amount:",total);
}
else if ((phoneAmount!=0) && (accessories==0)){
    totaltax=taxCalculator(15);
    total=phoneAmount+totaltax;
    console.log("Payable Amount:",total);
}
else if ((phoneAmount==0) && (accessories!=0)){
    totaltax=taxCalculator(3);
    total=accessories+totaltax;
    console.log("Payable Amount:",total);
} 
else if ((phoneAmount==0) && (accessories==0)){
    console.log("Thanks For visiting my Mobile shop");
}