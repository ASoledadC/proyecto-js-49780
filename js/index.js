

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

const valor= parseFloat(document.getElementById("cantidad").value);
document.getElementById("valor").innerHTML="<b>"+valor+"</b>";
const de=document.getElementById("de").value;
const a=document.getElementById("a").value;
resultado = 0; 
   const dolar = 980;
   const euro= 1100;

   if(de==1&&a==2){
    resultado=valor/dolar;
   }
   else if(de==1&&a==3){
    resultado=valor/euro;
   }
   else if(de==2&&a==1){
    resultado=valor*dolar;
   }
   else if(de==2&&a==3){
    resultado=valor*(dolar/euro);
   }
   else if(de==3&&a==1){
    resultado=valor*euro;
   }
   else if(de==3&&a==2){
resultado=valor*(euro/dolar);
   }
   document.getElementById("resultado").innerHTML="Resultado:$"+resultado.toFixed(2);
}

const criptoYa = "https://criptoya.com/api/dolar";
const divDolar = document.getElementById("divDolar")

setInterval(()=>{
fetch(criptoYa)
.then(response => response.json())
.then(({blue,ccl,mep, oficial, solidario,qatar})=>{
divDolar.innerHTML=`<h2>Cotizacion del Dolar Hoy:<h2>
<p>Dolar Oficial:${oficial}</p>
<p>Dolar Solidario:${solidario}</p>
<p>Dolar MEP:${mep}</p>
<p>Dolar CCL:${ccl}</p>
<p>Dolar Blue:${blue}</p>
<p>Dolar Qatar:${qatar}</p>
`
})
.catch(error=> console.log(error))
},1000);