function convertir(){
   const PESOS = parseInt(document.getElementById("valor").value);
   const RESULTADO = 0; 
   const DOLAR = 980;
   const EURO = 1320;
   if (document.getElementById("divisa-1").checked){
    RESULTADO = PESOS/DOLAR;
    alert ("El cambio de pesos a dolares es: USD" + RESULTADO)
   }
   else if (document.getElementById("divisa-2").checked){
    RESULTADO = PESOS/EURO;
    alert("El cambio de pesos a euros es:EU" + RESULTADO);
   }
   
    else{
    alert ("Completa los campos solicitados");
   }
}
