<?php
//$ruta="../Resources/imagenes/";//ruta carpeta donde queremos copiar las imágenes
$ruta="C:/wamp64/www/php/web/imagenes/";//ruta carpeta donde queremos copiar las imágenes
$uploadfile_temporal=$_FILES['fichero']['tmp_name'];
$uploadfile_nombre=$ruta.$_FILES['fichero']['name'];

if (is_uploaded_file($uploadfile_temporal))
{
    move_uploaded_file($uploadfile_temporal,$uploadfile_nombre);
}
else
{
echo "error";
}


session_start();  
if (isset($_SESSION['ingreso']) && $_SESSION['ingreso']=='YES') 
{ 
    //header("location: ../Views/");  
}
else
{
  
}
?>

