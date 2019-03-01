<?php
session_start();  
if (isset($_SESSION['ingreso']) && $_SESSION['ingreso']=='YESADMIN') 
{ 
  header("location: ../Views/principal"); 
}
?>
