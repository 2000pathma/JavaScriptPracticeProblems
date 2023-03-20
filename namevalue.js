var contacts=[
    {
        "Name":"priya",
        "Course":"B.Tech",
        "hobbies":['dance','study']
    },
    {
        "Name":"ramesh",
        "Course":"B.Tech",
        "hobbies":['drive','work']
    },
    {
        "Name":"subash",
        "Course":"B.Tech",
        "hobbies":['hacking','study']
    },
    {
        "Name":"suba",
        "Course":"B.E"
    }
    
]
function lookProfile(name,prop){
    for(var i=0;i<contacts.length;i++){
        if(contacts[i].Name===name){
            return contacts[i][prop] || "No Property";
        }
    }
    return "No Such Contact";
}
var data=lookProfile("priya","hobbies");
console.log(data);