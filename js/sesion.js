
$( document ).ready(function() {
console.log("sesion ready");
  $("#submit").click(function(){
    var formData = new FormData();
    formData.append('username', $("#username").val());
    formData.append('password', $("#password").val());
      $.ajax({
          url: "http://10.10.100.13/php/usuarios.php",
          type: "POST",
          data: formData,
          contentType: false,
          processData: false,
        }).done(function(respuesta){
            alert(respuesta);
              var objetojs = jQuery.parseJSON(JSON.stringify(respuesta));
              alert(objetojs);
              if (objetojs.estado == 1) {
                window.sessionStorage.setItem('id_usuario', objetojs.id);
                window.sessionStorage.setItem('password', objetojs.password);
                window.sessionStorage.setItem('usuario', objetojs.usuario);
                window.sessionStorage.setItem('nombre', objetojs.nombre);
                window.sessionStorage.setItem('apellidos', objetojs.apellidos);
                window.sessionStorage.setItem('descripcion', objetojs.descripcion);
                window.sessionStorage.setItem('fecha', objetojs.fecha);
                window.sessionStorage.setItem('email', objetojs.email);
                window.document.location.href = "index.html";
              }

  				});
    });
