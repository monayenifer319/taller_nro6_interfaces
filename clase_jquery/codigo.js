 //codigo punto nro 1
var rojo = $('.rojo');
rojo.on('click', function(){
	$('body').css('background', 'red');
});
var verde = $('.verde');
verde.on('click', function(){
	$('body').css('background', 'green');
});

var amarillo = $('.amarillo');
amarillo.on('click', function(){
	$('body').css('background', 'yellow');
});
var azul = $('.azul');
azul.on('click', function(){
	$('body').css('background', 'blue');
});
var rosado = $('.rosado');
rosado.on('click', function(){
	$('body').css('background', 'pink');
});

  // codigo punto nro 2
var botoncito = $('.botoncito');
var cuadrito = $('.cuadrito').val();
var vacio = $('.vacio');

botoncito.on('click', function(e){
	//evitar que el formulario se enviee
	e.preventDefault();
	vacio.appe
});

	// codigo punto nro 7
var micaja = $('#micaja');
function validar(){
	var texto = micaja.val();
	if (texto.length>=6) {
		micaja.removeClass('noaprobado')
		micaja.addClass('aprobado');
	}else{
		micaja.removeClass('aprobado')
		micaja.addClass('noaprobado');
	}
}

  // codigo punto nro 5
micaja.on('blur',validar);

var selecion = $('#animal');
var imagen = $('#imagen');
selecion.on('change', cambiarImagen)
function cambiarImagen(){  
	var elemento = $(this).val();
	imagen.html('<img src="imagenes/'+elemento+'.jpeg">');
}

  //codigo punto nro 3
 
$( "#right" ).click(function() {
  $( ".block" ).animate({ "left": "+=50px" }, "slow" );
});
 
$( "#left" ).click(function(){
  $( ".block" ).animate({ "left": "-=50px" }, "slow" );
});
  
  //codigo punto nro 4
 
 $(document).ready(function(){
	$("#boton01").click(function(){
		$("#parrafo").addClass("rojo");
	});
	$("#boton02").click(function(){
		$("#parrafo").addClass("rojo grande26");
	});
	$("#boton03").click(function(){
		$("#parrafo").removeClass("rojo");
	});
	$("#boton04").click(function(){
		$("#parrafo").removeClass("rojo grande26");
	});
});