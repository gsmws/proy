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

    if ($_SERVER['REQUEST_METHOD'] == 'GET')
    {    
      try 
      {  
        // Buscar por ID          
        if (isset($_GET['Id']))
        {               
          $id=$_REQUEST['Id']; 
          $sql = $dbConn->prepare("SELECT * FROM alumno WHERE Id=$id ");      
          $sql->execute();
          header("HTTP/1.1 200 OK");            
          return $sql->fetch(PDO::FETCH_ASSOC);            
          exit();                                                
        } 
        elseif (isset($_GET['Buscar']))
        {               
          $nombre=$_REQUEST['Buscar']; 
          $sql = $dbConn->prepare("SELECT * FROM alumno WHERE Nombre like'%$nombre%' OR Usuario like'%$nombre%'");      
          $sql->execute();      
          header("HTTP/1.1 200 OK");      
          return $sql->fetchAll(PDO::FETCH_ASSOC);      
          exit();                                           
        } 
        // Validar
        elseif ((isset($_GET['Usuario'])) & (isset($_GET['Password'])))
        {         
          $us=$_REQUEST['Usuario']; 
          $ps=$_REQUEST['Password'];
          $password= sha1($ps);
          $sql = $dbConn->prepare("SELECT * FROM alumno WHERE Usuario='$us' AND Password='$password'");
          $sql->execute();
          header("HTTP/1.1 200 OK");            
          return $sql->fetch(PDO::FETCH_ASSOC);            
          exit();                                                
        }      
        else 
        {    
          $sql = $dbConn->prepare("SELECT * FROM alumno ");      
          $sql->execute();      
          header("HTTP/1.1 200 OK");      
          return $sql->fetchAll(PDO::FETCH_ASSOC);      
          exit();
        }      
      } 
      catch (Exception $e) 
      {
        return $e;    
        exit();
      }
    }
    // Crear
    if ($_SERVER['REQUEST_METHOD'] == 'POST')
    { 
      try 
      {        
        if (isset($_REQUEST['Nombre']) 
        AND isset($_REQUEST['FotoURL']) 
        AND isset($_REQUEST['Password']) 
        AND isset($_REQUEST['Usuario'])) 
         {
          $nombre=$_REQUEST['Nombre'];
          $fotourl=$_REQUEST['FotoURL'];      
          $usuario=$_REQUEST['Usuario'];    
          $ps=$_REQUEST['Password'];                           
          $password= sha1($ps);
          $input = $_POST;                
          $sqlv = $dbConn->prepare("SELECT * FROM alumno WHERE Usuario='$usuario' AND Password='$password'");          
          $sqlv->execute();
          if ($sqlv->fetch(PDO::FETCH_ASSOC)) 
          {              
            return "Por favor ingrese otro usuario, disponible: ".$usuario."95";
            exit();  
          } 
          else
          {
            $sql = "INSERT INTO alumno (Nombre, FotoURL, Usuario, Password)
                VALUES ('$nombre','$fotourl','$usuario','$password')";
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
      try 
      {   
        if (isset($_REQUEST['Id']))  
        {
          $id = $_GET['Id'];        
          $sql = $dbConn->prepare("DELETE FROM alumno WHERE Id=:Id");
          $sql->bindValue(':Id', $id);
          $sql->execute();
          header("HTTP/1.1 200 OK");    
          return $id;
          exit();              
        }
        else
        {
          exit();              
          return "ingresa id";
        }        
      } 
      catch (Exception $e) 
      {
        return $e;
        exit();    
      } 
    }
    // Modificar
    if ($_SERVER['REQUEST_METHOD'] == 'PUT')
    {    
      try
      {
        if (isset($_REQUEST['Id']))  
        {
          $input = $_GET;          
          $postId = $input['Id'];
          $fields = getParams($input);
          $sql="UPDATE alumno SET $fields
                WHERE Id = '$postId'";        
          $statement = $dbConn->prepare($sql);                        
          bindAllValues($statement, $input);
          $statement->execute();
          header("HTTP/1.1 200 OK");    
          return $postId;
          exit();
        }
        else
        {
          return "Ingresa ID";
          exit();
        }        
      } 
      catch (Exception $e) 
      {
        return $e;
        exit();
      }
    }  
    
    header("HTTP/1.1 400 Bad Request");
    
  }

?>