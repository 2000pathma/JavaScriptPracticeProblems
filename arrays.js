//Arrays method in javascript
const name=["priya","ramya","suba"]
name.length
//o/p 3
typeof(name)
//o/p 'object'
Array.isArray(name)
//o/p true
name instanceof Array
//o/p true
name.toString()
//o/p 'priya,ramya,suba'
name.join("*")
//o/p 'priya*ramya*suba'
name.push("subasshri","eee")
//o/p 7
name
//o/p (7) ['priya', 'ramya', 'suba', 'subasshri', 'eee']
name.pop()
//o/p 'eee'
name.pop()
//o/p 'subasshri'
name
//o/p (3) ['priya', 'ramya', 'suba']
name.shift("ramesh")
//o/p'priya'
name
//o/p(2) ['ramya', 'suba']
name.unshift("priya")
//o/p 3
name
//o/p (3) ['priya', 'ramya', 'suba']
name.splice(0,0,"ramesh")
name
//o/p (4) ['ramesh', 'priya', 'ramya', 'suba']
const name1=["subashri"]
const name2=name.concat(name1)
name2
//o/p (5) ['ramesh', 'priya', 'ramya', 'suba', 'subashri']
name.slice(0,3)
//o/p (3) ['ramesh', 'priya', 'ramya']
name
//o/p (4) ['ramesh', 'priya', 'ramya', 'suba']
name2
//o/p (5) ['ramesh', 'priya', 'ramya', 'suba', 'subashri']
name2.sort()
//o/p (5) ['priya', 'ramesh', 'ramya', 'suba', 'subashri']