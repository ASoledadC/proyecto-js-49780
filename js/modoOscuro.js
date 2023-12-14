const MODO_OSCURO = document.querySelector('#modoOscuro');

MODO_OSCURO.addEventListener('click', ()=> {
document.body.classList.toggle('dark');
MODO_OSCURO.classList.toggle('active');

if(document.body.classList.contains('dark')){
   localStorage.setItem('dark-modo', 'true'); 
}
else{
   localStorage.setItem('dark-modo', 'false');
}
});