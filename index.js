const closebtn = document.querySelector(".close");
const openbtn = document.querySelector(".menu");
const tir = document.querySelector(".tir").addEventListener("click",excute)

openbtn.addEventListener("click", show);
closebtn.addEventListener("click", excute);

function excute() {
    closebtn.parentElement.style.right = "-50%"
    document.querySelector(".tir").style.backgroundColor = "transparent";
    closebtn.style.color = "transparent";

    openbtn.style.zIndex = "16";
   
}

function show() {
    document.querySelector(".nav").style.right = "0"

    document.querySelector(".tir").style.backgroundColor = "rgba(0,0,0,0.4)";

    openbtn.style.zIndex = "-1";

    closebtn.style.color = "white";

   
}

