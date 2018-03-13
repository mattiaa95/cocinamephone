$( document ).ready(function() {
  if (window.sessionStorage.getItem('usuario')) {
    $.ajax({
     url: "http://10.10.100.13/php/recetas.php",
      type: "POST"
          }).done(function(respuesta){
            var obj = jQuery.parseJSON(JSON.stringify(respuesta));
            obj.forEach(function(element) {
              $("#cuerpo").append(
                  $('<div>', {
                      'class': ' col-md-12 thumbnail',
                      'style': 'background-color:#ccc'
                  }).append(
                    $('<h2>').append($('<a>',{'href':'#','text':element.nombre})),
                    $('<h3>',{'text':'Precio: '+element.precio+'€'}),
                    $('<p>',{'text':element.receta_descripcion}),
                    $('<img />', { src: 'http://10.10.100.13/img/'+element.src ,alt: element.nombre,height: '300px',width:'300px'})
                  )
                )
            });
  }else {
  window.document.location.href = "index.html";
  }





				});
		});
