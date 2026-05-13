const container = document.querySelector("#container");

function createGrid(integer) {
    for(let i = 0; i < integer; i++) {
        for(let j = 0; j < integer; j++) {
        const div = document.createElement("div");
        div.innerText = i + "|" + j;
        div.classList.add("grid-item");
        container.appendChild(div);
        }

    }
    
}

createGrid(4);
