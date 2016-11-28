$(document).ready(function(){
	var formulario = $('form');
	var metodo = formulario.attr('method');	
	var url_formulario = formulario.attr('action');
	var boton = $('#boton');
	var usuario = $('#usuario');
	var contrasena = $('#contrasena');
	var user, pass;
	boton.on('click', function(e){
		e.preventDefault();
		user = usuario.val();
		pass = contrasena.val();
		$.ajax({
			beforeSend: function(){				
				formulario.hide();	
				$('.imagen').html('<img src="cargando.gif" width="70%">').delay(10000);
			},			
			url: url_formulario,
			type: metodo,
			data: formulario.serialize(),			
			success: function(resp){
				if(resp == 'Correcto'){
					$('.imagen').html('<p class="success">Bienvenido al Sistema</p>');
				}else{
					$('.imagen').html('<p class="error">Valores Ingresados Erroneos</p>');
				}
			}			
		});
	});
	
});