function nextLine(arr,item) {
    arr.push(item);
    return arr.shift();
}
var testArr=[1,2,3,4,5];
console.log("Before:"+JSON.stringify(testArr));
//console.log("Before:"+testArr);
console.log(nextLine(testArr,6));
console.log("After:"+JSON.stringify(testArr));
//console.log("After:"+testArr);