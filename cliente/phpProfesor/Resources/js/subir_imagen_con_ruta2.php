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
$directorio=opendir("../Resources/");
while($ficheros=readdir($directorio))
{
    $url="../Resources/".$ficheros;
    echo "<img src=".$url.">";
}
?>
<html>
<head>
<title>Documento sin t&iacute;tulo</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body>

</body>
</html>