const length = 10;
const array = [];

// const speed = document.querySelector("input").value;
// console.log(speed);

let findElement = Math.floor(Math.random()*10);
init();

function init() {    

    findElement = Math.floor(Math.random()*10);
    const h = document.querySelector("h3");
        h.innerText="Value initialize Ready to find, Press play button";

    for (let i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random()*90)+10;
    }

    findNow.innerHTML="";
    const bar = document.createElement("div");    
    bar.textContent=array[findElement];
    bar.classList.add("find-ele");
    findNow.appendChild(bar);

    showBars();
}
function play(){
    animate(0);
}

function animate(i) {
    
    showBars(i);

    if(array[findElement]==array[i]){
        const h = document.querySelector("h3");
        h.innerText="value "+array[findElement]+" found, at index "+i;
        return;
    }
    
    const h = document.querySelector("h3");
    h.innerText="";
    h.innerText=array[i]+" != "+array[findElement];
    
    const speed = document.querySelector("input").value;
    // console.log(speed);

    setTimeout(function(){
        console.log(speed);
        animate(i+1);
    },speed);
}

function showBars(valueColor) {
    
    container.innerHTML="";

    for(let i=0; i<array.length; i++) {
        const bar = document.createElement("div");
        bar.style.height=array[i]+"%";
        bar.textContent=array[i];
        bar.classList.add("bar");
        
        if(valueColor==i) {
            bar.style.backgroundColor = "red";
        }

        container.appendChild(bar);
    }
}
