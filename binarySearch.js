const length = 10;
const array = [];
// const speed = document.querySelector("input").value;
// console.log(speed);

let findElement = Math.floor(Math.random()*10);

let last = length-1;
let start = 0;
let mid = Math.floor(last/2);
let key = array[findElement]; 

init();
function init() {    
    
    findElement = Math.floor(Math.random()*10);
    // start = 0;
    // last = length-1;
    // mid = Math.floor(last/2);
    
    const h = document.querySelector("h3");
    h.innerText="Value initialize Ready to find, Press play button";

    for (let i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random()*90)+10;
    }
    array.sort();
    
    key = array[findElement];
    findNow.innerHTML="";
    const bar = document.createElement("div");
    key = array[findElement]; 
    bar.textContent=array[findElement];
    bar.classList.add("find-ele");
    findNow.appendChild(bar);
    
    showBars();
}

function play(){
    start =0;
    last =length-1;
    mid = Math.floor(last/2);
    animate(mid);
}

// console.log(array[mid]);

function animate(mid) {

    if(start > last){
        return;
    }
    showBars(mid,start,last);

    if(key==array[mid]){
        const h = document.querySelector("h3");
        h.innerText="value "+array[findElement]+" found, at index "+mid;
        showCompleteBars(mid,last);
        return;
    }
    else if(array[mid] > key){

    const h = document.querySelector("h3");
    h.innerText="";
    h.innerText=array[mid]+" != "+key;

        last = mid-1;
        mid = Math.floor((last+start)/2);
    }
    else {

    const h = document.querySelector("h3");
    h.innerText="";
    h.innerText=array[mid]+" != "+key;

        start = mid+1;
        mid = Math.floor((last+start)/2);
    }
    
    // const h = document.querySelector("h3");
    // h.innerText="";
    // h.innerText=array[mid]+" != "+key;
    
    const speed = document.querySelector("input").value;
    // console.log(speed);

    setTimeout(function(){
        console.log(speed);
        // console.log(start);
        // console.log(last);
        
        animate(mid);
    },speed);
}

function showBars(mid,start,last) {
    
    container.innerHTML="";

    for(let i=0; i<array.length; i++) {
        const bar = document.createElement("div");
        bar.style.height=array[i]+"%";
        bar.textContent=array[i];
        bar.classList.add("bar");
        
        if(mid==i) {
            bar.style.backgroundColor = "red";
            console.log(`mid ${mid}`);
        }
        else if(start > i) {
            bar.style.backgroundColor = "white";
            console.log(`start ${start}`);
        }
        else if(last < i) {
            bar.style.backgroundColor = "white";
            console.log(`last ${last}`);
        }

        container.appendChild(bar);
    }
}


function showCompleteBars(mid,last) {
    
    container.innerHTML="";

    for(let i=0; i<array.length; i++) {
        const bar = document.createElement("div");
        bar.style.height=array[i]+"%";
        bar.textContent=array[i];
        bar.classList.add("bar");
        
        if(mid==i) {
            bar.style.backgroundColor = "red";
            console.log(`mid ${mid}`);
        }
        else {
            bar.style.backgroundColor = "green";
        }

        container.appendChild(bar);
    }
}
