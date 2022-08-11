const grid = document.querySelector("grid");
console.log(grid);

for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    grid.appendChild(div);
}

addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "black";
});