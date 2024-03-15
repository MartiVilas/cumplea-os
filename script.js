function abrirVentana() {
    // Abre una nueva ventana con las opciones especificadas
    let opciones = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=1500,height=1200,left=500,top=300`;
    window.open('https://www.youtube.com/watch?v=7V-qmzu6KVU&ab_channel=Pascal', '', opciones); 
}
const boton = document.getElementById("btn");
boton.addEventListener("click", ()=>abrirVentana());
