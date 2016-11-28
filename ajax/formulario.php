<?php

$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];
sleep(1);
if($usuario == 'carlos' && $contrasena == '123456'){
	echo "Correcto";
}else{
	echo "Incorrecto";
}
?>