let counterEl= document.getElementById("counter")
let saveEl = document.getElementById("save-el")

// declearation of counter
let count = 0

// counter for increse button

//fuction decleration
function increament(){
    count = count +1
   counterEl.innerText = count
}
// counter for decrese button

//function decleration 
function decreament(){
    if (count > 0) {
        count = count -1
    }
    counterEl.innerText = count  
}
// counter for reset button

//function decleration
function reset(){
    count= 0
    counterEl.innerText = count
}
// counter for save button

//function decleration
function save(){
    let saveCount = count + "- " + " "
    saveEl.textContent += saveCount
    counterEl.innerText=0
    count = 0
}
// counter for clear button

//function decleration
function remove(){
    let removeBtn = "Previous count:"
    saveEl.textContent= removeBtn
    count= 0
    counterEl.innerText = count
}