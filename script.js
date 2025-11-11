const promptBtn = document.querySelector("#promptBtn");
promptBtn.addEventListener("click",()=>{
    let userChoice = prompt("Enter the number of boxes you want per side: ", 16);
    if(userChoice > 100){
        userChoice = 16;
    }  

    createGrid(parseInt(userChoice));
    

});

function createGrid(size){

    const cont = document.querySelector("#container");
    cont.innerHTML="";

    const cellSize = cont.clientWidth/size;
    const fragment = document.createDocumentFragment();

    for (let i=0;i<size * size;i++){
        const cell = document.createElement("div");
        cell.classList.add("squarediv");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        fragment.appendChild(cell);
    }
cont.appendChild(fragment);
}


