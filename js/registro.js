let reGistro = document.getElementById("reGistro");
let inIcio = document.getElementById("inIcio");
let nombreInput = document.getElementById("nombreInput");
let titulo = document.getElementById("titulo");

inIcio.onclick = function(){
    nombreInput.style.maxHeight = "0";
    titulo.innerHTML = "Ingreso";
    reGistro.classList.add("desactivar");
    inIcio.classList.remove("desactivar");
}
reGistro.onclick = function(){
    nombreInput.style.maxHeight = "65px";
    titulo.innerHTML = "Registro";
    reGistro.classList.remove("desactivar");
    inIcio.classList.add("desactivar");
}
