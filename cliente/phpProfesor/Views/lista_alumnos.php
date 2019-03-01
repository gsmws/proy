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
 
<body onload="ListarAlumnos('');">
    <!--Barra de Navegacion-->
    <?php include "../Resources/lib/nav.php"; ?>
   
    <div class="container">
         <div class="row form-horizontal">
            <ul class="nav nav-tabs">
              <li class="active"><a href="#tab_consultar" data-toggle="tab">Lista de Alumnos</a></li>
              <li><a href="#tab_tareas" data-toggle="tab">Lista de Tareas</a></li>                
              <li><a href="#tab_registrar" data-toggle="tab">Lista de Tareas Alumnos</a></li>                
            </ul>
        </div>      
        </br>

        <div class="tab-content">
            
            <div class="tab-pane active" id="tab_consultar">
                <div class="row form-horizontal">
                    <div class="panel panel-default">                                                
                        <div class="panel-body">
                        
                <form class="form-horizontal"  id="for"  method="post" enctype="multipart/form-data">                                                                
                </form>

                        <a href="javascript:void(0)" onclick="nuevo()" data-toggle="modal" data-target="#responsive" class='btn btn-success'>Nuevo</a>                        
                                                                                                                                             
                        <div class="form-group">                                
                                <div class="col-xs-4  text-right">
                                    <label for="buscar" class="control-label">Buscar:</label>
                                </div>                                
                                <div class="col-xs-4">
                                    <input  type="text" name="buscar" id="buscar" class="form-control" onkeyup="ListarAlumnos(this.value);" placeholder="Ingrese nombre o usuario"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div id="lista"></div> 
                            </div>                            
                        </div>
                        
                    </div>
                </div>
            </div>            

            <div class="tab-pane" id="tab_tareas">
                <div class="row form-horizontal">
                    <div class="panel panel-default">                        
                          
                        <div class="panel-body">    
                        <a href="javascript:void(0)" onclick="nuevaTarea()" data-toggle="modal" data-target="#tarea" class='btn btn-success'>Nueva</a>                        
                        <div class="form-group">                                
                                <div class="col-xs-4  text-right">
                                    <label for="buscar" class="control-label">Buscar:</label>
                                </div>                                
                                <div class="col-xs-4">
                                    <input  type="text" name="buscar" id="buscar" class="form-control" onkeyup="ListarAlumnos(this.value);" placeholder="Ingrese titulo o fecha"/>
                                </div>
                            </div>                        
                            <div class="form-group">
                                <div id="listas"></div> 
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
                            
                
                <form class="form-horizontal" method="POST" enctype="multipart/form-data" id="img">
                    
                    
				</form>

                <form class="form-horizontal"  id="formCliente"  method="post" enctype="multipart/form-data">                                                                
                </form>

                


              </div>              
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

<div class="modal fade" id="tarea" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                
                <h2 class="modal-title">Datos de la Tarea</h2>
              </div>
                            
                
                <form class="form-horizontal" method="POST" enctype="multipart/form-data" id="imgTarea">
                    
                    
				</form>

                <form class="form-horizontal"  id="formTarea"  method="post" enctype="multipart/form-data">                                                                
                </form>

                


              </div>              
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

        </div><!-- tab content -->
    </div>
    <script src="../Resources/js/jquery-1.11.2.js"></script>
    <script src="../Resources/js/bootstrap.min.js"></script>        
    <script src="../Resources/js/appAlumnos.js"></script>                         
    <script src="../Resources/js/appTareas.js"></script>                         
    <script src="../Resources/css/n.css"></script>    
    <script type="text/javascript" src="../js/jquery.form.min.js"/></script>
 
</body>
</html>
