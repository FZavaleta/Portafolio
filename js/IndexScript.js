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
    document.getElementById("contacto-form").addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío estándar del formulario
    
        // Recoge los datos del formulario
        var form = event.target;
        var data = new FormData(form);
    
        // Envía el formulario usando Fetch API
        fetch(form.action, {
          method: 'POST',
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        }).then(function(response) {
          if (response.ok) {
            // Limpiar el formulario
            form.reset();
            
            // Redirigir a la página original o mostrar un mensaje de éxito
            alert('¡Formulario enviado con éxito!');
            window.location.href = window.location.href; // Recarga la página
          } else {
            alert('Error al enviar el formulario.');
          }
        }).catch(function(error) {
          alert('Hubo un problema con la solicitud.');
        });
      });
}

copiaCorreo()
clearForm()

