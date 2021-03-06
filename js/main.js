$(document).ready(function(){
		//spans escondidos con el mensaje de error
		$('#mensajeNombre').hide();
		$('#mensajeApellido').hide();
		$('#mensajeMail').hide();
		$('#mensajePass').hide();

	$('.submit-btn').click(function(){
		validateForm();
	});

	//funcion que se dispara al presionar el boton registrar
	function validateForm(){
	//expresiones regulares para establecer la comparacion con el formulario
		var nombreReg = /^[A-Za-z]+$/;
		var correoReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

	//Rescatando los valores de los inputs
		var nombre = $('#name').val();
        var apellido = $('#lastname').val();
        var correo = $('#input-email').val();
        var contrasena = $('#input-password').val();

        if(nombre == "" || !nombreReg.test(nombre)){
        	$('#mensajeNombre').fadeIn();
        	}else{
        		if(apellido == "" || !nombreReg.test(apellido)){
        			$('#mensajeApellido').fadeIn();
        			}else{
        				if(correo == "" || !correoReg.test(correo)){
        					$('#mensajeMail').fadeIn();
        					}else{
        						if(contrasena == "" || contrasena.length < 6 || contrasena == 'password' || contrasena == "123456" || contrasena == "098765"){
        						$('#mensajePass').fadeIn();
        				}
        			}
        		}
        	}
        }
})