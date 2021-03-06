<?php include "../Resources/lib/sesionSecurity.php"; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TAREAS</title>
    <link rel="stylesheet" href="../Resources/css/bootstrap.min.css">
</head>
 
<body onload="lista_tareasalumnos('<?php echo $_SESSION['id'];?>');">
    <!--Barra de Navegacion-->
    <?php include "../Resources/lib/nav.php"; ?>
   
    <div class="container">
         <div class="row form-horizontal">
            <ul class="nav nav-tabs">
              <li class="active"><a href="#tab_consultar" data-toggle="tab">Pendientes</a></li>
              <li><a href="#tab_registrar" data-toggle="tab">Entregadas</a></li>                
                <li><a href="javascript:void(0)" data-toggle="modal" data-target="#responsive">Perfil</a></li>
            </ul>
        </div>      
        </br>

        <div class="tab-content">
            
            <div class="tab-pane active" id="tab_consultar">
                <div class="row form-horizontal">
                    <div class="panel panel-default">
                        <div class="panel-heading">Tareas Pendientes</div>                                                
                        <div class="panel-body">                                                  
                            <div class="form-group">
                                <div id="lista"></div> 
                            </div>                            
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="tab-pane" id="tab_registrar">
                <div class="row form-horizontal">
                    <div class="panel panel-default">
                        <div class="panel-heading">Tareas Entregadas</div>
                        <input id="checkboxsi"  checked="checked"  onclick="checksi(this,'<?php echo $_SESSION['id'];?>')"
                           type="checkbox"> Todas
                          <input id="checkbox"  onclick="check(this,'<?php echo $_SESSION['id'];?>')" type="checkbox">  Evaluadas
                          <input id="checkboxs"  onclick="checks(this,'<?php echo $_SESSION['id'];?>')"
                           type="checkbox">  No Evaluadas
                          
                        <div class="panel-body">                            
                            <div class="form-group">
                                <div id="listas"></div> 
                            </div>                            
                        </div>
                        
                    </div>
                </div>

            </div>

        <div class="modal fade" id="responsive" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    
                    <h2 class="modal-title">Datos de Usuario</h2>
                </div>
                <div class="modal-body">
                    <div class="alert alert-success text-center" id="exito" style="display:none;">
                    <span class="glyphicon glyphicon-ok"> </span><span> Su cuenta ha sido registrada</span>
                    </div>
                    <form class="form-horizontal" id="formCliente">                   
                    </form>
                </div>                
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->

        </div><!-- /.modal -->     

        </div><!-- tab content -->
    </div>
    <script src="../Resources/js/jquery-1.11.2.js"></script>
    <script src="../Resources/js/bootstrap.min.js"></script>
    <script src="../Resources/js/appalumno.js"></script>                 
    <script src="../Resources/css/n.css"></script>    
 
</body>
</html>
