//String Methods in Javascript
let name="how are you"
console.log(length)
//Output 11
let name1="how \'are\' you"
console.log(name1)
//o/p "how 'are' you"
let name2=new String("priya")
typeof(name2)//o/p object
let name3="how are you"
name3.slice(0,3)
//o/p 'how'
let name4="how are you"
name4.slice(-3)
//o/p 'you'
name5.substring(0)
//o/p 'how are you'
name6.substr(0,3)
//o/p 'how'
let name6="how are you"
let name7=name6.replace("you","priya")
name7
//o/p 'how are priya'
let name8="how are you and you"
let name9=name8.replace("you","priya")
name9
//o/p 'how are priya and you'
let name10="how are you and you"
let name11=name10.replace(/you/g,"priya")
name11
//o/p 'how are priya and priya'
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
newText
//o/p 'Please visit W3Schools!'
let namef="priya"
namef.toUpperCase()
//o/p 'PRIYA'
let names="PRIYA"
names.toLowerCase()
//o/p 'priya'
let name12="priya"
let name13="ramya"
let name14=name12.concat(name13)
name14
//o/p 'priyaramya'
name15="         hello        "
name15.trim()
//o/p 'hello'
name16="5"
name16.padStart(4,0)
//o/p '0005'
name17="5"
name17.padEnd(4,0)
//o/p '5000'
let name18="HELLO"
name18.charAt(0)
//o/p 'H'
let name19="HELLO"
name19.charCodeAt(0)
//o/p 72
let name20="HELLO"
name20[0]
//o/p 'H'
let name21="HELLO"
name21[0]="A"
//o/p 'A'
let name22="HELLO"
name22.split()
//o/p ['HELLO']
let name23="hii hello how are you hii"
name23.indexOf()
//o/p -1
let name24="hii hello how are you hii"
name24.indexOf("hii")
//o/p 0
let name25="hii hello how are you hii"
name25.lastIndexOf("hii")
//o/p 22
let name26="hii hello how are you hii"
name26.search("hii")
//o/p 0
let name27="hii hello how are you hii"
name27.match("hii")
//o/p ['hii', index: 0, input: 'hii hello how are you hii', groups: undefined]
let name28="hii HII hello how are you hii"
name28.match(/hii/g)
//o/p (2) ['hii', 'hii']
let name29="hii HII hello how are you hii"
name29.match(/hii/ig)
//o/p (3) ['hii', 'HII', 'hii']
let name30="hii hello how are you hii"
name30.includes("hii")
//o/p true
let name31="hii hello how are you hii"
name31.startsWith("hii")
//o/p true
let name32="hii hello how are you hii"
name32.endsWith("hii")
//o/p true
