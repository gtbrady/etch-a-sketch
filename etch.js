const container = document.querySelector("#container");
const gridSize = container.clientWidth;

function createGrid(integer) {
    container.replaceChildren();
    for(let i = 0; i < integer; i++) {
        for(let j = 0; j < integer; j++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.height = `${gridSize/integer}px`;
        div.style.width = `${gridSize/integer}px`;
        container.appendChild(div);
        }
    }   
}



createGrid(16);
