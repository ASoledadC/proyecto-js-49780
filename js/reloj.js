// reloj
const TIEMPO = document. querySelector(".tiempo");
const FECHA = document.querySelector(".fecha");

function Relojdigital(){
    let local = new Date();
     dia = local.getDate();
    mes = local.getMonth() +1;
    anio = local.getFullYear();
    diaSemana = local.getDay();

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

/*const time = getElementById("time");
const date = getElementById("date");

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"]

const interval = setInterval(() => {
  const local = new Date();
  let day = local.getDate();
  month = local.getMonth();
  year = local.getFullYear();

  time.innerHTML = local.toLocaleTimeString();
  date.innerHTML = `${day} ${MONTHNAMES[month]} ${year}`;
}, 1000);*/