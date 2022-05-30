var todoEl =  document.getElementById("todoInput");

document.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        console.log("click",todoEl.value);
        // var list = document.getElementById("todoList");
       
        // var listEl = document.createElement('p'); 
        // var deletetaskEl = document.createElement('span'); 
        //     deletetaskEl.innerHTML = "X";
        //     deletetaskEl.setAttribute("class", "deleteTask");
        //     deletetaskEl.setAttribute("onClick", "deleteT(event)");
        //     deletetaskEl.style.float = "right";
        //     listEl.classList.add("task");
        //     listEl.setAttribute("onClick", "complete(event)");
        //     listEl.innerHTML = todoEl.value;
        //     list.append(listEl);
        //     listEl.append(deletetaskEl);
        //     todoEl.value = ""; 
        add();
}
});
function deleteT(e){
    e.target.parentElement.classList.add("delete");
}
function complete(e){
    if(e.target.classList.contains("complete") ){
        e.target.classList.remove("complete");
        e.target.classList.add("pending");

    }
    else {
        e.target.classList.add("complete");
        e.target.classList.remove("pending");

    }

}
function add(){
    var list = document.getElementById("todoList"); 
        var listEl = document.createElement('p'); 
        var deletetaskEl = document.createElement('span'); 
            deletetaskEl.innerHTML = 'x';
            deletetaskEl.setAttribute("class", "deleteTask");
            deletetaskEl.setAttribute("onClick", "deleteT(event)");
            deletetaskEl.style.float = "right";
            listEl.classList.add("task");
            listEl.setAttribute("onClick", "complete(event)");
            listEl.innerHTML = todoEl.value;
            list.append(listEl);
            listEl.append(deletetaskEl);
            todoEl.value = "";
}