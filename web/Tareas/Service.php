<?php
// gersonsama95@gmail.com
header('Content-Type: application/json');
include "../Opciones/Post.php";
include "../Opciones/Utils.php";     
$dbConn =  connect($db);

$resultado=Api($dbConn);

echo json_encode($resultado);

function Api($dbConn)
{  
  // Listar
  if ($_SERVER['REQUEST_METHOD'] == 'GET')
  {
    if (isset($_GET['Id']))
    {            
      $idfk = $_REQUEST['Id'];
      $sql = $dbConn->prepare("SELECT * FROM tarea WHERE Id like '%$idfk%'");           
      $sql->execute();
      header("HTTP/1.1 200 OK");            
      return $sql->fetch(PDO::FETCH_ASSOC);            
      exit();
    }
    elseif (isset($_GET['Buscar']))
    {            
      $buscar = $_REQUEST['Buscar'];
      $sql = $dbConn->prepare("SELECT * FROM tarea 
                              WHERE Id LIKE '%$buscar%' 
                              OR Titulo LIKE '%$buscar%' 
                              OR FechaPublicacion LIKE '%$buscar%' 
                              OR FechaLimite LIKE '%$buscar%' ORDER BY FechaPublicacion DESC ");           
      $sql->execute();
      header("HTTP/1.1 200 OK");            
      return $sql->fetchAll(PDO::FETCH_ASSOC);            
      exit();
    }    
    elseif (isset($_GET['IdAlumno']))
    {            
      $idfk = $_REQUEST['IdAlumno'];
      $sql = $dbConn->prepare("SELECT *
            FROM tarea t                                
            WHERE  NOT EXISTS (SELECT NUll FROM tareaalumno ta WHERE t.Id=ta.IdTarea AND  ta.IdAlumno = $idfk) ORDER BY FechaPublicacion DESC ");           
      $sql->execute();
      header("HTTP/1.1 200 OK");            
      return $sql->fetchAll(PDO::FETCH_ASSOC);            
      exit();
    }    
    else 
    {    
      $sql = $dbConn->prepare("SELECT * FROM tarea");      
      $sql->execute();      
      header("HTTP/1.1 200 OK");      
      return $sql->fetchAll(PDO::FETCH_ASSOC);      
      exit();
    }
  }
  // Crear
  if ($_SERVER['REQUEST_METHOD'] == 'POST')
  {        
    try 
      {        
        if (isset($_REQUEST['Titulo']) 
        AND isset($_REQUEST['ArchivoURL'])         
        AND isset($_REQUEST['FechaLimite'])) 
         {
          $titulo=$_REQUEST['Titulo'];
          $archivourl=$_REQUEST['ArchivoURL'];     
          $now = new DateTime();                
          $publicacion=$now->format('Y-m-d H:i:s');    
          $limite=$_REQUEST['FechaLimite'];                                     
          $input = $_POST;                
          $sqlv = $dbConn->prepare("SELECT * FROM tarea WHERE Titulo ='$titulo' ");          
          $sqlv->execute();
          if ($sqlv->fetch(PDO::FETCH_ASSOC)) 
          {              
            return false;
            exit();  
          } 
          else
          {
            $sql = "INSERT INTO tarea (Titulo, ArchivoURL, FechaPublicacion, FechaLimite)
                VALUES ('$titulo','$archivourl','$publicacion','$limite')";
            $statement = $dbConn->prepare($sql);                        
            $statement->execute();    
            $postId = $dbConn->lastInsertId();
            $input['Id'] = $postId;
            header("HTTP/1.1 200 OK");
            return $postId;
            exit();              
          }    
         }
         else
         {
          return "Ingrese parametros correctos";
          exit();
         }        
      } 
      catch (Exception $e) 
      {
        return $e;  
        exit();
      }      
  } 
  // Eliminar   
  if ($_SERVER['REQUEST_METHOD'] == 'DELETE')
  {
    $id = $_GET['Id'];
    $sql = $dbConn->prepare("DELETE FROM tarea WHERE Id=:Id");
    $sql->bindValue(':Id', $id);
    $sql->execute();
    header("HTTP/1.1 200 OK");    
    return $id;
    exit();    
  }
  // Modificar
  if ($_SERVER['REQUEST_METHOD'] == 'PUT')
  {    
    $input = $_GET;
    $postId = $input['Id'];
    $fields = getParams($input);
    $sql="UPDATE tarea SET $fields
            WHERE Id = '$postId'";        
    $statement = $dbConn->prepare($sql);                        
    bindAllValues($statement, $input);
    $statement->execute();
    header("HTTP/1.1 200 OK");    
    return $postId;
    exit();
  }

  header("HTTP/1.1 400 Bad Request");
}

?>