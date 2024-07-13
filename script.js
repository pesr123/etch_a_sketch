let squarePerRow = 16;

createGrid();

function createGrid(){
    for(let i=0; i<(squarePerRow*squarePerRow); i++){
        createDiv();
    }
}

function deleteGrid(){
    const elements = document.getElementsByClassName("square");
    while(elements.length > 0){
        elements[0].remove();
    }
}

function createDiv(){
    const newDiv = document.createElement("div");

    board.appendChild(newDiv);
    const squareSize = (700-(2*squarePerRow))/squarePerRow; //size of grid subtracting the pixels of border
    newDiv.style.width = `${squareSize}px`;
    newDiv.style.height = `${squareSize}px`;
    newDiv.style.backgroundColor = "white";
    newDiv.style.border = "solid";
    newDiv.style.borderColor = "black";
    newDiv.style.borderWidth = "1px";
    newDiv.className = "square";
}

//turns square to black when mouse hovers above
board.addEventListener("mouseover", function(){
    event.target.style.backgroundColor = "black";
});

resetBtn.addEventListener("click", function(){
    deleteGrid();
    createGrid();
})

customGridSizeBtn.addEventListener("click", function(){
    const userRowSize = prompt("Enter a length/width for the board");
    if (userRowSize > 100){
        squarePerRow = 100;
    } else if(userRowSize < 5){
        squarePerRow = 5;
    } else{
        squarePerRow = userRowSize;
    }
    deleteGrid();
    createGrid();
})