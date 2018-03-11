
$( document ).ready(function() {
alert('cargado');
  $("#submit").click(function(){
      $.ajax({
          url: "http://192.168.1.39/dashboard/php/usuarios.php",
          type: "POST",
          data: "username=" + $("#username").val() + "&password=" + $("#password").val(),
        success: function(respuesta){
          alert("respuesta");
            var objetojs = jQuery.parseJSON(JSON.stringify(respuesta));
            if (objetojs.estado != 0) {
              window.sessionStorage.setItem('id_usuario', objetojs[0].id);
              window.sessionStorage.setItem('password', objetojs[0].password);
              window.sessionStorage.setItem('usuario', objetojs[0].usuario);
              window.sessionStorage.setItem('nombre', objetojs[0].nombre);
              window.sessionStorage.setItem('apellidos', objetojs[0].apellidos);
              window.sessionStorage.setItem('descripcion', objetojs[0].descripcion);
              window.sessionStorage.setItem('fecha', objetojs[0].fecha);
              window.sessionStorage.setItem('email', objetojs[0].email);
              window.document.location.href = "index.html";
            }
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown); 
          }

          })
    });
  });
