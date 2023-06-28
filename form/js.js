$(document).ready(function() {
    // Validación de datos al hacer clic en el botón
    $('#btnCrear').click(function() {
      var nombre = $('#NOMBRES').val();
      var email = $('#EMAIL').val();
      var celular = $('#CELULAR').val();
      var mensaje = $('#MSG').val();
  
      // Validación de email
      var emailValido = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
      if (!emailValido) {
        $('#EMAIL').removeClass('valid').addClass('invalid');
      } else {
        $('#EMAIL').removeClass('invalid').addClass('valid');
      }
  
      // Validación de celular (solo números)
      var celularValido = /^\d+$/.test(celular);
      if (!celularValido) {
        $('#CELULAR').removeClass('valid').addClass('invalid');
      } else {
        $('#CELULAR').removeClass('invalid').addClass('valid');
      }
  
      // Validación de campos completos
      if (nombre && emailValido && celularValido && mensaje) {
        $('#btnCrear').addClass('filled');
      } else {
        $('#btnCrear').removeClass('filled');
      }
    });
  
    // Cambio de mensaje al escribir en los campos
    $('.input').keyup(function() {
      var input = $(this);
      var span = input.siblings('span');
      if (input.val()) {
        span.addClass('active');
      } else {
        span.removeClass('active');
      }
    });
  });