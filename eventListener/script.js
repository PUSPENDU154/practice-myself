
// function toggleHide(){
//     const btn=document.getElementById("btn")
//     const para=document.getElementById("para")
//     if(para.style.display!=="none"){
//         para.style.display='none'
//     }else{
//         para.style.display='inline-block'
//     }
// }

const para=document.getElementById("para")
const btn=document.getElementById("btn")
btn.addEventListener("click",(event)=>{
    if(para.style.display !== 'none'){
        para.style.display = 'none'
        btn.style.outline=" 5px violet dashed";
        // para.style.outline-offset = 2px;
    }else if(para.style.display === 'none'){
        para.style.display = 'block'
        btn.style.outline ='none'
    }
})

// para.addEventListener("mouseover",()=>alert('get out'))
// para.addEventListener("mouseout",()=>alert('good boy'))
para.addEventListener("mousedown",()=>console.log('not here'))
para.addEventListener("mouseup",()=>console.log('go here'))
