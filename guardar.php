<?php
include("conexion.php");

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$tipo = $_POST['tipo'];
$mensaje = $_POST['mensaje'];

$sql = "INSERT INTO mensajes (nombre, apellido, correo, tipo, mensaje)
VALUES ('$nombre','$apellido','$correo','$tipo','$mensaje')";

if(mysqli_query($conexion, $sql)){
    echo "Datos guardados correctamente";
}else{
    echo "Error al guardar";
}
?>
