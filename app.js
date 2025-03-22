let button = document.getElementById("button");
var numberInShape = 1; 
var oldvalue = 0; 
button.onclick = () => {
    let n = document.getElementById("number").value;
    const circle = document.getElementById("circle");
    const square = document.getElementById("square");
    const rectangle = document.getElementById("rect");
    const box = document.getElementById("box");
    const clr = document.getElementById("colour").value;

    n = Number(n);

    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid number!");
        return;
    }

    numberInShape = oldvalue + 1;

    for (let j = 1; j <= n; j++) {
        let shape = document.createElement("div");
        shape.innerHTML = numberInShape; 
        if (circle.checked) {
            shape.classList.add("circle");
        } else if (square.checked) {
            shape.classList.add("square");
        } else if (rectangle.checked) {
            shape.classList.add("rectangle");
        } else {
            alert("Please select a shape!");
            return;
        }
        shape.style.backgroundColor = clr;
        box.appendChild(shape);
        numberInShape++;
    }


    oldvalue = numberInShape - 1;
};