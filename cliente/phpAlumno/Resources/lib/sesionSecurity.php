<?php
session_start();  
if (isset($_SESSION['ingreso']) && $_SESSION['ingreso']=='YES') 
{   
}
else
{
  header("location: ../Views/");
}
?>
