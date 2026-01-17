let form = document.getElementById("input-form");
let inputEl = form.querySelector("input[type='text']");
let listItems = document.querySelector(".list-items");
let filterInput = document.getElementById("filter");


form.addEventListener("submit", addItems);
listItems.addEventListener("click", removeItem);
filterInput.addEventListener("keyup", filterItem);



function addItems() {
    let inputValue = inputEl.value;

    let li = document.createElement("li");
    li.className = "list-item";
    li.appendChild(document.createTextNode(inputValue));

    let btn = document.createElement("button");
    btn.className = "close";
    btn.id = "close";
    btn.appendChild(document.createTextNode("X"));

    li.appendChild(btn);

    listItems.appendChild(li);
    localStorage.setItem("items", JSON.stringify(inputValue));
    clearInput();
}

function removeItem(e) {
    if(e.target.classList.contains("close")) {
        if(confirm("Do you want to remove " + e.target.parentElement.firstChild.textContent.trim() + "?")){
            let li = e.target.parentElement;
            listItems.removeChild(li);
        }
    }
}

function clearInput() {
    document.getElementById("list-input").value = "";
}

function filterItem(e) {
    let text = filterInput.value.toLowerCase();
    
    let items = listItems.querySelectorAll(".list-item");
    items.forEach(function(item){
        if(item.firstChild.textContent.toLowerCase().indexOf(text) != -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    }) 
}