const person={
    firstName:"Puspendu",
    lastName:"saha",
    age:23,
    alive:true,
    fullname:function(city,state,country){
        return `hi, myself ${this.firstName} ${this.lastName} my age is ${this.age} and i live in ${city} which is inside the state ${state} under the country "${country}" and it is ${this.alive} that i am alive`
    }
}

console.log(person.fullname("chandannagar","West Bengal","India"))

document.querySelector(".container").innerText=person.fullname("chandannagar","West Bengal","India")+`<h1> and he is a <span>good</span>   boy      and         handsome</h1>`

document.querySelector(".container1").innerHTML=person.fullname("chandannagar","West Bengal","India")+`<h1> and he is a <span>good</span>boy</h1>    and             handsome`

document.querySelector(".container2").textContent=person.fullname("chandannagar","West Bengal","India")+`<h1> and he is a <span>good</span>   boy     and     handsome</h1>`


// call()

const personCall={
    firstName:"P",
    lastName:"S",
    age:30,
    alive:false
}

const callAns=person.fullname.call(personCall,"Alipore","West Bengal","India")

console.log(callAns)

const personApply={
    firstName:"Babu",
    lastName:"Saha",
    age:25,
    alive:true,
}

console.log(person.fullname.apply(personApply,["Darjeeling","West Bengal","India"]))


const number=[12,15,45,2,12]
console.log(func(number)) 
console.log(func1(number)) 
function func(arr){//max by apply
    return Math.max.apply(null,arr)
}
function func1(arr){//min by apply
    return Math.min.apply(null,arr)
}

const personBind={
    firstName:"flower",
    lastName:"Saha",
    age:30,
    alive:false,
}

let fullname=person.fullname.bind(personBind)
console.log(fullname("Lucknow","Uttar Pradesh","India"))