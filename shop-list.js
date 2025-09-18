const list = document.getElementById("shopping-list");
const label = document.getElementById("inp-label");
const button = document.getElementById("inp-btn");
const input = document.getElementById("item")

button.addEventListener("click", appendList);

function appendList(){
    const listItem = input.value.trim();
    input.value = "";

    if(listItem == ""){return}

    const newList = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");
    newBtn.textContent = "delete";
    newSpan.textContent = listItem;
    
    newList.appendChild(newSpan);
    newList.appendChild(newBtn);
    list.appendChild(newList);

    newBtn.addEventListener("click")

    input.focus();
}


