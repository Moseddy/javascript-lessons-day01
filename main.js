// let itemsList = document.querySelector(".list-items");
// console.log(itemsList.parentNode.parentNode);
// // itemsList.parentElement.style.backgroundColor = "yellowgreen";
// // itemsList.parentNode.parentNode.style.backgroundColor = "red";
// console.log("childNodes", itemsList.childNodes);
// console.log("hasChildNodes", itemsList.hasChildNodes());
// console.log("children", itemsList.children);
// console.log("childElementCount", itemsList.childElementCount);

// const submit = document.querySelector("input[type='submit']");

// submit.value = "SEND";

// const listItems = document.querySelectorAll('li');

// const oddList = document.querySelectorAll("li:nth-child(odd)");
// const evenList = document.querySelectorAll("li:nth-child(even)");

// let h2 = document.createElement("h2");
// h2.textContent = "I am a created Element";
// h2.className = "hello";
// h2.id = "hello";

// document.body.appendChild(h2);

// if(oddList.length === evenList.length) {
//     evenList.length = oddList.length;
// } else {
//     evenList.length = oddList.length - 1;
// }
// let evenLength = 0;
// let oddLength = 0;
// for(let i = 0; i < oddList.length; i++) {
//     oddList[i].style.backgroundColor = "#111";
//     oddList[i].style.color = "#fff";
//     evenList[i].style.background = "#ccc";
// }



// for(let i = 0; i < listItems.length; i++) {
//     listItems[i].style.background = "blue";
//     listItems[i].style.color = "white";
// }

let button = document.getElementById('button');

button.addEventListener('dblclick', runEvent);

function runEvent(e) {
    console.log("Event type: ", e.type);
}