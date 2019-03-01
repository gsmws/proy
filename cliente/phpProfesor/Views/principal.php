<?php include "../Resources/lib/sesionSecurity.php"; ?>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>HOME</title>

    <link rel="stylesheet" href="../Resources/css/bootstrap.min.css">    
</head>
 
<body>
<?php include "../Resources/lib/nav.php"; ?>
    <div class="container" >
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">Bienvenido <?php echo $_SESSION['nombre']; ?></div>
                    <div class="panel-body">                     
                      <p>Estas a dentro!</p>                      
                      <li><a href="javascript: void(0)" onclick='alumnos();' >Lista de Alumnos</a></li>
                      <li><a href="javascript: void(0)" onclick='tareas();' >Lista de Tareas</a></li>
                      <li><a href="javascript: void(0)" onclick='tareasalumnos();' >Lista de Tareas Alumnos</a></li>
                    </div>
                </div>
            </div>
        </div>
        <div id="lista"></div>                               
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
                
                <form class="form-horizontal" method="POST" enctype="multipart/form-data" id="img">
                    
                    
				</form>

                <form class="form-horizontal"  id="formCliente"  method="post" enctype="multipart/form-data">                                                                
                </form>

                


              </div>              
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    
    
    <script src="../Resources/js/jquery-1.11.2.js"></script>
    <script src="../Resources/js/bootstrap.min.js"></script>
    <script src="../Resources/js/appAlumnos.js"></script>                                              
    <script type="text/javascript" src="../js/jquery.form.min.js"/></script>
    
</body>

</html>
