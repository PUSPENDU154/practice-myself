const test=document.getElementById("test")

// function myFunc(){
//     test.innerText="without setTimeOut"

//     setTimeout(()=>{
//         test.innerHTML=`<h1>with SetTimneOut</h1>`
//     },2000)
// }

// myFunc()

// const myFunc1=()=>{
//     document.write("testing ")
// }

// const myTimeOut=setTimeout(myFunc1,1000)

// function myStopFunc(){
//     clearTimeout(myTimeOut)
// }
// myStopFunc()

// let i=0
// const counter=()=>{
//     const myTime=setTimeout(counter,1500)
//     // i++
//     // console.log(i)
//     i++
//     // setTimeout(counter,1500)
//     if(i===6){
//         clearTimeout(myTime)
//         // it will stop after printing 6
//     }
//     console.log(i)

// }
// setTimeout(counter,2000)




// now SET AND CLEAR INTERVAL

let i=0
const setIntervalFunc=()=>{

    //setTimeout(setIntervalFunc,2000)
    // console.log(i++)//starts from 0
    console.log(++i)//starts from 1
}

// setTimeout(setIntervalFunc,2000)
setInterval(setIntervalFunc,2000)