let alian={
    name:'priya', //Property(key,value)
    tech:'AI',
    laptop:{    //Nested Objects
        RAM:'2GB',//properties of nested objects 
        ROM:'16GB',
        brand:'Lenova'
    }
}
//console.log(alian.laptop1?.brand?.length);-->Nullish coalescing operator
//Fetch value from objects
console.log(alian.name);           //console.log(alian['name']);
console.log(alian.laptop);         //console.log(alian['laptop']);
console.log(alian.laptop.brand);    //console.log(alian['laptop']['brand']);
//Find the length
console.log(alian['laptop']['brand'].length);  
console.log(alian.laptop.RAM.length);   //Other way to find length

//delete value from objects
delete alian.laptop.brand;
delete alian['laptop']['RAM'];  //other way to delete 
delete alian.laptop;
delete alian['name'];
