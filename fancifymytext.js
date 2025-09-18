const button = document.getElementById("big-button");
const txtArea = document.getElementById("txt-area")
button.addEventListener('click', alertButton);
function alertButton(){
    txtArea.style.fontSize = "24px";
}