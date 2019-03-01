<?php
	
	$boton=$_POST['boton'];
		
	switch ($boton) 
	{
		case 'cerrar':
				session_start();
				session_destroy();
				$_SESSION['ingreso']=0;			
			break;
		case 'ingresar':												
				session_start();
				$_SESSION['ingreso']='YESADMIN';								
				$_SESSION['nombre']= $_POST['Nombre'];
				$_SESSION['usuario']=$_POST['Usuario'];
				$_SESSION['foto']=$_POST['FotoURL'];				
				$_SESSION['id']=$_POST['Id'];
				echo"exito";					
			break;
		case 'modificar':		
				session_start();																
				$password = $_POST['password'];											
				$pas= sha1($password);
				echo $pas;
			break;				
		case 'guardarimagen':														
				$ruta="C:/wamp64/www/php/web/imagenes/";//ruta carpeta donde queremos copiar las imágenes						
			break;								
		default:				
			break;
	}		
?>