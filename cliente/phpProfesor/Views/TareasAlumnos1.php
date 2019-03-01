<?php include "../Resources/lib/sesionSecurity.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TAREAS</title>
    <link rel="stylesheet" href="../Resources/css/bootstrap.min.css">
    <link rel="stylesheet" href="build/css/bootstrap-datetimepicker.min.css">        
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
 
<body onload="tareasAlTASumnos();">
    <!--Barra de Navegacion-->
    <?php include "../Resources/lib/nav.php"; ?>    
<div class="jquery-script-clear"></div>
    <div class="container">                    
         <div class="row form-horizontal">
            <ul class="nav nav-tabs">
                <li ><a  href="#" data-toggle="tab">#</a></li>                
                <li class="active"><a href="#tab_registrar" data-toggle="tab">Entregadas</a></li>             
                <li ><a href="#" data-toggle="tab">#</a></li>                              
            </ul>
        </div>      

        </br>

        <div class="tab-content">            
                             
      
            <div class="tab-pane active" id="tab_registrar">
                <div class="row form-horizontal">
                    <div class="panel panel-default">
                        <div class="panel-heading">Tareas Entregadas</div>
                        
                        <input id="checkboxsi"  checked="checked"  onclick="checksi(this)" type="checkbox"> Todas
                        <input id="checkbox"  onclick="check(this)" type="checkbox">  Evaluadas
                        <input id="checkboxs"  onclick="checks(this)" type="checkbox">  No Evaluadas
                                                                                                 
                        <div class="panel-body">                            
                            <div class="form-group">
                                <div id="listasEntregadas"></div> 
                            </div>                            
                        </div>
                        
                    </div>
                </div>
            </div>    

            <div class="modal fade" id="tarea" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        
                        <h2 class="modal-title">Datos de la Tarea</h2>
                    </div>                                                                    
                        <form class="form-horizontal" method="POST" enctype="multipart/form-data" id="imgTareaAlumno">                                        
                        </form>                        
                        <form class="form-horizontal"  id="formTareamodificar"  method="POST" enctype="multipart/form-data">                                                                
                
                        </form> 
                        <form class="form-horizontal"  id="formTareaAlumno"  method="POST" enctype="multipart/form-data">                                                                
                
                </form>                
                <form class="form-horizontal"  id="formTareaAlumnoModificar"  method="POST" enctype="multipart/form-data">                                                                
        
                </form>                
                    </div>              
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
        </div><!-- tab content -->
    </div>
    <script src="../Resources/js/jquery-1.11.2.js"></script>
    <script src="../Resources/js/bootstrap.min.js"></script>            
    <script src="../Resources/js/appTareasAlumnos1.js"></script>                             
    <script type="text/javascript" src="../js/jquery.form.min.js"/></script>        
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.21.0/moment.min.js" type="text/javascript"></script>
    <script src="build/js/bootstrap-datetimepicker.min.js"></script>        
</body>
</html>
