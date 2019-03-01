<?php
session_start();  
if (isset($_SESSION['ingreso']) && $_SESSION['ingreso']=='YESADMIN') 
{   
}
else
{
  header("location: ../Views/");
}
?>
