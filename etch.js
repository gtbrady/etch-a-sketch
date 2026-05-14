const container = document.querySelector("#container");
const gridSize = container.clientWidth;
const gridDetailButton = document.querySelector("#grid-detail-button");
const resetButton = document.querySelector("#reset-button");

gridDetailButton.addEventListener("click", () => {
    const pixelDetail = Number(prompt("Enter a number 1 to 100 to change the pixel count of the grid:"));
    if(Number.isInteger(pixelDetail) &&
        (pixelDetail >= 0 && pixelDetail <= 100)) {
            createGrid(pixelDetail);
        }
    else {
        alert("Please enter a number from 1 to 100.");
    }
});

resetButton.addEventListener("click", () => {
    for(const div of container.children) {
        div.style.backgroundColor = "";
    }
});

function createGrid(integer) {
    container.replaceChildren();
    for(let i = 0; i < integer; i++) {
        for(let j = 0; j < integer; j++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.height = `${gridSize/integer}px`;
        div.style.width = `${gridSize/integer}px`;
        div.addEventListener("mouseenter", ()=> {
            div.style.backgroundColor = "black";
        });
        container.appendChild(div);
        }
    }   
}

createGrid(16);