const a=new Date()
console.log(a)
document.getElementById("time").innerHTML=a

const b=new Date(0)
console.log(b)

console.log(new Date(1)-new Date(0))

console.log(a.getFullYear())
console.log(a.getMonth())
console.log(a.getDate())
console.log(Date.now())
console.log(a.getTime())
console.log(a.getSeconds())
console.log(a.getMilliseconds())
console.log(a.getDay())
a.setDate(2)
console.log(a)

a.setFullYear(2030)
console.log(a)
a.setTime(12546542245454)
console.log(a)
a.setSeconds(5)
console.log(a)
// console.log(a.getFullYear())