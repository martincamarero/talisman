let btn1 = document.querySelector(".talisman");
let destinoBtn1 = document.querySelector(".apartadoTalisman");
let btn2 = document.querySelector(".actividades");
let destinoBtn2 = document.querySelector(".apartadoTalisman2");
let btn3 = document.querySelector(".contacto");
let destinoBtn3 = document.querySelector(".contenedorContacto");

btn1.addEventListener("click", function() {
    destinoBtn1.scrollIntoView({ behavior: "smooth" });
});


btn2.addEventListener("click", function() {
    destinoBtn2.scrollIntoView({ behavior: "smooth" });
});


btn3.addEventListener("click", function() {
    destinoBtn3.scrollIntoView({ behavior: "smooth" });
});
