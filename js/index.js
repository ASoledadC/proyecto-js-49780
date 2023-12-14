

//titulo desde js
let container = document.getElementById("contenedor");
container.innerHTML= "<h1>RyC Cambio</h1><h3> Servicios financieros</h3>"

//imagenes- ver modificar, lo hice para aplicar card desde js
class Publicidad{
  constructor(nombre, img){
    this.marca = nombre;
    this.img = img;
  }
}
const AGENCIA = new Publicidad("Divisas", "./assets/reales.jpg");
const ARBOL = new Publicidad("RyC Cambio", "./assets/tu-agencia.jpg")
const DIVISAS = new Publicidad("Tu Agencia", "./assets/divisas.jpg")

const ArrayPublicidades = [AGENCIA, ARBOL, DIVISAS];

ArrayPublicidades.forEach(Publicidad =>{
  let div= document.createElement("div");
  div.className = "card";
  div.innerHTML= `
  <p> nombre: ${Publicidad.marca}</p>
  <img src= "${Publicidad.img}"/>  
  <button>Mas informacion</button>
  <h2> Registrate y conoce todos nuestros servicios!<h2>
  
                        `
  contenedorPublicidades. appendChild(div); 
})
//Cotizador

function convertir(){
   let valor = parseFloat(document.getElementById("valor").value);
   let resultado = 0; 
   let dolar = 980;
   let euro= 1100;
   let pesoUruguayo = 25;
   let real= 240;
   
   if (document.getElementById("divisaUno").checked){
    resultado = valor / dolar;
    alert("El cambio de Pesos a Dolares es:"+ "" + resultado.toFixed(2));
   }
   
   else if (document.getElementById("divisaDos").checked){
    resultado = valor / euro;
    alert("El cambio de Pesos a Euros es:" + "" + resultado.toFixed(2));
   }
   else if (document.getElementById("divisaTres").checked){
    resultado = valor / pesoUruguayo;
    alert("El cambio de Pesos a Euros es:" + "" + resultado.toFixed(2));
   }
    else if (document.getElementById("divisaCuatro").checked){
     resultado = valor / real;
     alert("El cambio de Pesos a Euros es:" + "" + resultado.toFixed(2));
    }
    else{
    alert ("Completa los campos solicitados");
   
}
}
 convertir ()



//Ingreso

/* const NOMBRE = "nombre";
const PASSWORD = "password";

let nombreUsuario = prompt("Ingresa tu nombre de usuario:");
let passwordIngresada = prompt("Ingresa tu contraseña:");

while (nombreUsuario !== NOMBRE || passwordIngresada !== PASSWORD) {
  if (nombreUsuario === null || passwordIngresada === null) {
    alert("No puedes iniciar sesion.");
    break;
  } 
  else if (nombreUsuario === "" || passwordIngresada === "") {
    alert("Por favor, completa todos los campos.");
  } 
  else {
    alert("Nombre de usuario o contraseña incorrectos.");
  }

  nombreUsuario = prompt("Ingresa tu nombre de usuario:");
  passwordIngresada = prompt("Ingresa tu contraseña:");
}

if (nombreUsuario === NOMBRE && passwordIngresada === PASSWORD) {
  alert("Has iniciado sesion! Bienvenido!!");*/




