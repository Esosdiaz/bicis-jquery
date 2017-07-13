$(document).ready(function(){
		//spans escondidos con el mensaje de error
		$('#mensajeNombre').hide();
		$('#mensajeApellido').hide();
		$('#mensajeMail').hide();
		$('#mensajePass').hide();

	$('.submit-btn').click(function(){
		validateForm();
	});
