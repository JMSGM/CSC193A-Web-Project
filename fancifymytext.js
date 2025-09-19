const button = document.getElementById("big-button");
const mooButton = document.getElementById("moo-button");
const txtArea = document.getElementById("txt-area");
const fancyRadio = document.getElementById("fancy-radio")
const boringRadio = document.getElementById("boring-radio")

fancyRadio.addEventListener("change", styleRadios)
boringRadio.addEventListener("change", styleRadios)

function styleRadios(){
    if(fancyRadio.checked){
        txtArea.style.fontFamily = '"Times New Roman", Times, serif';
        txtArea.style.fontWeight = "Bold";
        txtArea.style.fontStyle = "Italic";
    }
    if(boringRadio.checked){
        txtArea.style.fontFamily = "Arial, Helvetica, sans-serif";
        txtArea.style.fontWeight = "";
        txtArea.style.fontStyle = "";
    }
}


button.addEventListener('click', alertButton);
function alertButton(){
    txtArea.style.fontSize = "24px";
}

mooButton.addEventListener('click', mooify);
function mooify(){
    const chr = txtArea.value;
    const length = txtArea.length;

    for(let i = 0; i < length; i++){
        console.log(text[i]);
    }
}
