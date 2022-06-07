const display=document.getElementById("display")
const x=document.getElementById("x")
const btn=document.getElementById("btn")

btn.addEventListener("mousemove",()=>{
    document.getElementById("display").style.background="black"
    document.getElementById("btn").style.color="rgba(0,0,0,.8)"
})

btn.addEventListener("mouseout",()=>{
    document.getElementById("display").style.background="red"
    document.getElementById("btn").style.color="rgba(255,0,0,.8)"
})

const create=document.createElement("div")

create.classList.add("add")
 x.append(create)
 create.append("i am a boy of chandannagar")

 create.addEventListener("click",()=>{
     document.querySelector("div.add").style.background="yellow"
     document.querySelector("div.add").style.color="red"
     document.getElementById("x").style.background=`whitesmoke`
     document.getElementById("x").style.boxShadow ="0 0 2px 2px gray"
 })


 
