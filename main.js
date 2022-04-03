const checkbox = document.getElementById("checkbox");

const submitBox = document.querySelector("button[type=submit]");




// ! disable checkbox
checkbox.disabled = true;
submitBox.disabled = true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");
// selectColor = document.querySelector("#SelectColor");

// console.log(selectColor);

// !Asign color to Elements
elements.forEach(function(element){
    const color = getRandomColor();
    element.style.backgroundColor = color; 
    element.innerHTML = color;
    selectColor.innerHTML = color;
})

// !generate random color Func
function getRandomColor(){
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}
//? console.log(getRandomColor());

// !check if right color
elements.forEach(function(element){
    element.addEventListener('click', function(){
        if(element.innerHTML === selectColor.innerHTML){
            checkbox.checked = true;
            alert("You are human!");
            submitBox.disabled = false;
            submitBox.classList.remove("btn-light");
            submitBox.classList.add("btn-success");
            // console.log(submitBox);
        }
        else{
            alert("Please varify that you are human!");
            // checkbox.checked = false;
            // submitBox.disabled = true;
            location.reload(true);
        }
    })
})