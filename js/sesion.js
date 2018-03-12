
$( document ).ready(function() {
alert('cargado sesion');
console.log("sesion ready");
  $("#submit").click(function(){
    console.log("username=" + $("#username").val() + "&password=" + $("#password").val());
      $.ajax({
          url: server + "php/usuarios.php",
          type: "POST",
          data: "username=" + $("#username").val() + "&password=" + $("#password").val(),
        success: function(respuesta){
          alert("respuesta sesion iniciada");
          console.log(respuesta);
          console.log(objetojs);
            var objetojs = jQuery.parseJSON(JSON.stringify(respuesta));

            if (objetojs.estado == 1) {
              console.log("entro en sesion");
              window.sessionStorage.setItem('id_usuario', objetojs.id);
              window.sessionStorage.setItem('password', objetojs.password);
              window.sessionStorage.setItem('usuario', objetojs.usuario);
              window.sessionStorage.setItem('nombre', objetojs.nombre);
              window.sessionStorage.setItem('apellidos', objetojs.apellidos);
              window.sessionStorage.setItem('descripcion', objetojs.descripcion);
              window.sessionStorage.setItem('fecha', objetojs.fecha);
              window.sessionStorage.setItem('email', objetojs.email);
              //window.document.location.href = "index.html";
            }
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
          }

          })
    });
  });
