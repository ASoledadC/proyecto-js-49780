
const TIEMPO = document. querySelector(".tiempo");
const FECHA = document.querySelector(".fecha");

function Relojdigital(){
    let local = new Date();
    let dia = local.getDate();
   let mes = local.getMonth() +1;
   let anio = local.getFullYear();
   let diaSemana = local.getDay();

     dia =("0" +dia).slice(-2); 
     mes =("0"+mes).slice (-2);
    let timeString = local.toLocaleTimeString();
    TIEMPO.innerHTML = timeString;
    let semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  let laSemana = (semana[diaSemana])
  FECHA.innerHTML = `${laSemana} ${dia}-${mes}-${anio}`
}
setInterval(() => {
    Relojdigital()
}, 1000);
