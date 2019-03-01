<?php
// gersonsama95@gmail.com
header('Content-Type: application/json');
include "../Opciones/Post.php";
include "../Opciones/Utils.php";     
$dbConn =  connect($db);

$resultado=Api($dbConn);

echo json_encode($resultado);

//API
function Api($dbConn)
{
  // Listar
  if ($_SERVER['REQUEST_METHOD'] == 'GET')
  {
    if ((isset($_GET['IdTareaa'])) & (isset($_GET['IdAlumnoo'])))
    {            
      $idta = $_REQUEST['IdTareaa'];
      $idal = $_REQUEST['IdAlumnoo'];
      $sql = $dbConn->prepare("SELECT * FROM tareaalumno WHERE IdTarea = '$idta' AND IdAlumno='$idal' ");      
      $sql->execute();
      header("HTTP/1.1 200 OK");            
      return $sql->fetch(PDO::FETCH_ASSOC);            
      exit();
    }
    elseif ((isset($_GET['Evaluado'])) & (isset($_GET['IdAlumno'])))
    {            
      $ev = $_REQUEST['Evaluado'];
      $idal = $_REQUEST['IdAlumno'];
      $sql = $dbConn->prepare("SELECT t.Titulo,ta.Mensaje,t.ArchivoURL,ta.Fecha,ta.Calificacion 
                               FROM tareaalumno ta 
                               INNER JOIN tarea t ON t.Id=ta.IdTarea 
                               WHERE Evaluado = '$ev' AND IdAlumno='$idal' ");      
      $sql->execute();
      header("HTTP/1.1 200 OK");            
      return $sql->fetchAll(PDO::FETCH_ASSOC);            
      //return "ev";  
      exit();
    }
    elseif (isset($_GET['IdAlumno']) )
    {                  
      $idal = $_REQUEST['IdAlumno'];
      $sql = $dbConn->prepare("SELECT t.Titulo,ta.Mensaje,ta.ArchivoURL,ta.Fecha,ta.Calificacion FROM tareaalumno ta INNER JOIN tarea t ON t.Id=ta.IdTarea WHERE IdAlumno=$idal ORDER BY ta.Fecha DESC");      
      $sql->execute();
      header("HTTP/1.1 200 OK");            
      return $sql->fetchAll(PDO::FETCH_ASSOC);            
      exit();
    }
    elseif (isset($_GET['Buscar']))
        {               
          $nombre=$_REQUEST['Buscar']; 
          $sql = $dbConn->prepare("SELECT a.Nombre,t.Titulo,ta.ArchivoURL,ta.Fecha,ta.Calificacion 
            FROM tareaalumno ta 
            INNER JOIN tarea t ON t.Id=ta.IdTarea
            INNER JOIN alumno a ON a.Id=ta.IdAlumno 
            WHERE a.Nombre LIKE '%$nombre%' 
            OR t.Titulo LIKE '%$nombre%' 
            OR ta.evaluado LIKE '%$nombre%' 
            ORDER BY ta.Fecha");
          $sql->execute();      
          header("HTTP/1.1 200 OK");      
          return $sql->fetchAll(PDO::FETCH_ASSOC);      
          exit();                                           
        } 
    elseif (isset($_GET['Evaluado']))
    {                
      $ev = $_REQUEST['Evaluado'];
      $sql = $dbConn->prepare("SELECT ta.IdTarea,t.Titulo,ta.IdAlumno,a.Nombre,ta.ArchivoURL,ta.Mensaje,ta.Fecha, ta.Calificacion
                               FROM tareaalumno ta
                               INNER JOIN tarea t ON t.Id=ta.IdTarea
                               INNER JOIN alumno a ON a.Id=ta.IdAlumno
                               WHERE Evaluado = $ev ORDER BY ta.Fecha DESC");      
      $sql->execute();
      header("HTTP/1.1 200 OK");            
      return $sql->fetchAll(PDO::FETCH_ASSOC);            
      exit();
    }
    else 
    {    
      $sql = $dbConn->prepare("SELECT ta.IdTarea,t.Titulo,ta.IdAlumno,a.Nombre,ta.ArchivoURL,ta.Mensaje,ta.Fecha, ta.Calificacion FROM tareaalumno ta 
                               INNER JOIN tarea t ON t.Id=ta.IdTarea
                               INNER JOIN alumno a ON a.Id=ta.IdAlumno ORDER BY ta.Fecha DESC");      
      $sql->execute();      
      header("HTTP/1.1 200 OK");      
      return $sql->fetchAll(PDO::FETCH_ASSOC);      
      exit();
    }
  }
  // Crear
  if ($_SERVER['REQUEST_METHOD'] == 'POST')
  {   
    if ((isset($_GET['IdTarea'])) & (isset($_GET['IdAlumno'])) )
    {
      $tarea=$_REQUEST['IdTarea'];
      $alumno=$_REQUEST['IdAlumno'];            
      $url=$_REQUEST['ArchivoURL'];
      $now = new DateTime();      
      $fecha=$now->format('Y-m-d H:i:s');                       
      $input = $_POST;

      $sqll = $dbConn->prepare("SELECT * FROM tareaalumno WHERE IdTarea = $tarea AND IdAlumno=$alumno ");      
      $sqll->execute();  
          if($sqll->fetch(PDO::FETCH_ASSOC))
          {
            return false;
            exit(); 
          }  
          else
          {
            $sql = "INSERT INTO tareaalumno (IdTarea, IdAlumno,Mensaje,ArchivoURL, Fecha,Calificacion,Evaluado)  
            VALUES ('$tarea','$alumno','Pendiente','$url','$fecha','0','0')";
            $statement = $dbConn->prepare($sql);                        

            if ($statement->execute())
            {
              return "Registrado con exito";   
              header("HTTP/1.1 200 OK");    
              exit();
            }  
          }    
      }

    /*    elseif((isset($_GET['IdTarea'])) & (isset($_GET['IdAlumno'])) & (isset($_GET['ArchivoURL'])) & (isset($_GET['Fecha'])) & (isset($_GET['Mensaje'])) & (isset($_GET['Evaluado'])) & (isset($_GET['Calificacion'])))
    {
      $tarea=$_REQUEST['IdTarea'];
      $alumno=$_REQUEST['IdAlumno'];      
      $mensaje=$_REQUEST['Mensaje'];
      $url=$_REQUEST['ArchivoURL'];
      $fecha=$_REQUEST['Fecha'];      
      $calificaion=$_REQUEST['Calificacion'];
      $evaluado=$_REQUEST['Evaluado'];          
      $input = $_POST;

      $sqll = $dbConn->prepare("SELECT * FROM tareaalumno WHERE IdTarea = $tarea AND IdAlumno=$alumno ");      
      $sqll->execute();  
        if($sqll->fetch(PDO::FETCH_ASSOC))
        {
          return "Existe un registro";
          exit(); 
        }  
        else
        {
          $sql = "INSERT INTO tareaalumno (IdTarea, IdAlumno, Mensaje,ArchivoURL, Fecha,Calificacion,Evaluado)  
          VALUES ('$tarea','$alumno','$mensaje','$url','$fecha','$calificaion','$evaluado')";
          $statement = $dbConn->prepare($sql);                        

          if ($statement->execute()) {
          return "Registrado con exito";   
          header("HTTP/1.1 200 OK");    
          exit();
          }  
        }
    }*/    
  } 
  // Eliminar
  if ($_SERVER['REQUEST_METHOD'] == 'DELETE')
  {
    $idta = $_GET['IdTarea'];
    $idal = $_GET['IdAlumno'];
    $sql = $dbConn->prepare("DELETE FROM tareaalumno WHERE IdTarea=$idta AND IdAlumno=$idal");  
    if($sql->execute())
    {
      header("HTTP/1.1 200 OK");    
      return "Eliminado con exito";
      exit();    
    }
  }
  // Modificar
  if ($_SERVER['REQUEST_METHOD'] == 'PUT')
  {    
    $input = $_GET;
    $postIdTa = $input['IdTarea'];
    $postIdAl = $input['IdAlumno'];
    $fields = getParams($input);
    $sql="UPDATE tareaalumno SET $fields
            WHERE IdTarea = '$postIdTa' AND IdAlumno = '$postIdAl'";        
    $statement = $dbConn->prepare($sql);                        
    bindAllValues($statement, $input);  
    if ($statement->execute())
    {
      header("HTTP/1.1 200 OK");    
      return "Modificado con exito";
      exit();
    }  
  }
  header("HTTP/1.1 400 Bad Request");
}

?>