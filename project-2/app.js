let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");


btn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    input.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})