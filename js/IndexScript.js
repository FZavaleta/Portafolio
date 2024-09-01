let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function copiaCorreo(){
    document.getElementById("btnCopyEmail").addEventListener("click", function() {
        const textoACopiar = "fabriziozch@gmail.com";
        const elementoTemporal = document.createElement("textarea");
        elementoTemporal.value = textoACopiar;
        elementoTemporal.style.position = "absolute";
        elementoTemporal.style.left = "-9999px";
        document.body.appendChild(elementoTemporal);
        elementoTemporal.select();
        document.execCommand("copy");
        document.body.removeChild(elementoTemporal);
        alert("Correo electronico copiado exitosamente!");
    });
}
function clearForm(){
    document.getElementById("contacto-form").reset();
}

copiaCorreo()

