var val = document.getElementById("search-place");
var place = document.getElementById("task");
function add_task() {
    if (val === null) {
        alert("adding empty task is not allowed!");
    }
    else {
        var new_ele = document.createElement("li");
        new_ele.innerText = val.value;
        place === null || place === void 0 ? void 0 : place.appendChild(new_ele);
        var additional = document.createElement("span");
        additional.innerHTML = "\u00d7";
        new_ele.appendChild(additional);
        val.value = "";
    }
}
place === null || place === void 0 ? void 0 : place.addEventListener("click", function (e) {
    var _a;
    var target = e.target;
    if (target !== null) {
        if (target.tagName === "LI") {
            target.classList.toggle("checked");
            saveChange();
        }
        else if (target.tagName === "SPAN") {
            (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            saveChange();
        }
    }
}, false);

function saveChange() {
    if (place) {
        localStorage.setItem("data", place === null || place === void 0 ? void 0 : place.innerHTML);
    }
}
function show_task() {
    localStorage.getItem("data");
}

show_task();