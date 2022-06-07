const panels=document.querySelectorAll(".panel")

panels.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        removeallActive()
        panel.classList.add("active")
    })
})

function removeallActive(){
    panels.forEach((panel)=>{
        panel.classList.remove("active")
    })
}