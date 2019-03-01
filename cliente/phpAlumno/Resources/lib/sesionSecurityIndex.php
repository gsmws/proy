<?php
session_start();  
if (isset($_SESSION['ingreso']) && $_SESSION['ingreso']=='YES') 
{ 
  header("location: ../Views/principal"); 
}
?>
