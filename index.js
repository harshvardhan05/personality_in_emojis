const container = document.querySelector("#container")
const pushBtn = document.querySelector("#push-btn")
const unshiftBtn = document.querySelector("#unshift-btn")
const shiftBtn = document.querySelector("#shift-btn")
const popBtn = document.querySelector("#pop-btn")
const emojiInput = document.querySelector("#emoji-input")

const myEmojis = ["👨‍💻", "⛷", "🍲"]


shiftBtn.addEventListener("click", function(){
    if(emojiInput.value){
        container.textContent = "Please click on first and second button"
    }
    else{
        myEmojis.shift(myEmojis)
        logEmojis(myEmojis)
    }
})
popBtn.addEventListener("click", function(){
    if(emojiInput.value){
        container.textContent = "Please click on first and second button"
    }
    else{
        myEmojis.pop(myEmojis)
        logEmojis(myEmojis)
    }
})

unshiftBtn.addEventListener("click", function(){
    if(emojiInput.value){
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = null
        logEmojis(myEmojis)
    }
    else{
        container.textContent = "Please provide input"
    }
})


pushBtn.addEventListener("click", function(){
    //  console.log(emojiInput.value)
    if(emojiInput.value === ""){
      console.log("Please provide input")
      console.log(myEmojis)
    }else{
        myEmojis.push(emojiInput.value)
        emojiInput.value = null
        console.log(myEmojis)
        logEmojis(myEmojis)
    }
})

function logEmojis(arr){
    let emojisDOM = ""
    for(let i=0; i<arr.length; i++){
       emojisDOM += `<span> ${myEmojis[i]} </span> `      
    }
    container.innerHTML = emojisDOM
}
// let displayEmojis = logEmojis(myEmojis)
//  console.log(displayEmojis)
 