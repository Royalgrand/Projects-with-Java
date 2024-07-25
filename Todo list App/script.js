const inputBox = document.getElementById("input-box");

const listcontainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value ===''){
        alert("You must write a message");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    savedata();
}

listcontainer.addEventListener("click", function(e) {
    if(e.target.tagNAme ==="LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagNAme === "SPAN") {
        e.target.parentElent.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.seeItem("data", listcontainer.innerHTML);
}

function showtask() {

}
savedata();