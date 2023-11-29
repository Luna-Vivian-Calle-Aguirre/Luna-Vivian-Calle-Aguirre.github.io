console.log("se cargo");
window.addEventListener("DOMContentLoaded", (Event) => {
    console.log("Cargado y procesado");
    
    const menuBtn=document.getElementById("menu");
    const nav=document.querySelector("nav");
    const body=document.querySelector("body");

    menuBtn.addEventListener("click",(Event) => {
        menuBtn.classList.toggle("salir");
        nav.classList.toggle("visible");
        body.classList.toggle("no-scroll");
    })
})