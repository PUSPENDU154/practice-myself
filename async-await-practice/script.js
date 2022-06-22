 const example=document.getElementById("example")

 async function myFunc(){
    let myPromise=new Promise((resolve,reject)=>{
        // setTimeout(()=>resolve(`<h1 style="background-color:aqua; display:inline">Hey There</h1>`),3000)
        setTimeout(()=>reject(`<h1 style="background-color:rgba(0,255,0,1); display:inline">go There</h1>`),3000)
    })

    try {
        console.log("before")
        example.innerHTML=await myPromise
    } catch (error) {
        console.log("err")
        example.innerHTML=await error
    }
 }

 myFunc()