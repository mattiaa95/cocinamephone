$( document ).ready(function() {
  $("#pr-nombre").text(window.sessionStorage.getItem('nombre'));
  $("#pr-nomap").text(window.sessionStorage.getItem('nombre')+" "+sessionStorage.getItem('apellidos'));
  $("#pr-fecha").text(window.sessionStorage.getItem('fecha'));
  $("#pr-descripcion").text(window.sessionStorage.getItem('descripcion'));
  $("#pr-email").text(window.sessionStorage.getItem('email'));
});
