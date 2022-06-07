function onlyClick(){
    document.write("Click Done")
}

function doubleClick(){
    alert("Double Click done")
}

function rightClick(){
    document.write("wait--")
    setTimeout(()=>{
        document.write(`<h1>Right Click Done</h1> <br>`)
    },8000)
    setInterval(()=>{
        document.write("just continue ")
    },3000)
}

function mouseHover(){
    alert("Mouse Hover Done")
}

function mouseCursorOut(){
    alert("in onmouseout attribute in html cursor got out from the text")
}

function onmousedownFunc(){
    alert("it reacts when the mouse does it's left click")
}

function onmouseupFunc(){
    alert("it reacts when a user releases button of mouse both button")
}

// function onkeypressFunc(){
//     alert("it happens when a user presses the key ")
// }

function onresizeFunc(){
    alert("it happens when a user wants to resize the window ")
}