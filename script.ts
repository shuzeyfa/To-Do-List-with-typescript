let val = document.getElementById("search-place") as HTMLInputElement | null;
let place = document.getElementById("task") as HTMLElement | null;

function add_task(): void{
    if (val  === null){
        alert("adding empty task is not allowed!")
    }
    else{
        var new_ele = document.createElement("li");
        new_ele.innerText = val.value;
        place?.appendChild(new_ele);

        var additional = document.createElement("span");
        additional.innerHTML = "\u00d7";
        new_ele.appendChild(additional);
        val.value = "";
    }
}


place?.addEventListener("click", function(e){
    var target = e.target as HTMLElement | null
    if (target !== null){
        if (target.tagName === "LI"){
            target.classList.toggle("checked");
            saveChange();
        }
        else if (target.tagName === "SPAN"){
            target.parentElement?.remove();
            saveChange();
        }
    }
},false);



function saveChange(){
    if (place){
        localStorage.setItem("data", place?.innerHTML); 
    }
}

function show_task(){
    localStorage.getItem("data");
}
show_task();