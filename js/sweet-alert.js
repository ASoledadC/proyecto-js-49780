//sweet alert-botonInfo-productos
const BOTON_CONSULTA = document.getElementById("buttonInfo");
const usuarioAutorizado = "admin";
const passwordAutorizado = "1234";
BOTON_CONSULTA. addEventListener("click", ()=>{

    Swal.fire({
        title:"Inicia sesion para mas informacion!<br> Gracias, Equipo RyC Cambio",
html:`<input type= "text" id= "usuario" class= "swal2-input" placeholder= "ingresa tu usuario">
<input type = "text" id= "password" class ="swal2-input" placeholder= "ingresa tu contraseña">
`,

confirmButtonText: "enviar",
showCancelButton: true,
cancelButtonText: "cancelar"
    })
    .then((result)=>{
        if(result.isConfirmed){
            const usuario = document.getElementById("usuario").value;
            const password = document.getElementById("password").value;
       
            if(usuario === usuarioAutorizado && password === passwordAutorizado){
              window.location.href="ingreso-alert.html";
            }
        }
    })
        })
    

