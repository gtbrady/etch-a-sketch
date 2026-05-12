const container = document.querySelector("#container");

function createGrid(integer) {
    for(let i = 0; i < integer; i++) {
        const div = document.createElement("div");
        div.innerText = "Div#:" + i
        container.appendChild(div);
    }
    
}

createGrid(4);
