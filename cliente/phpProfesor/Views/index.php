<?php include "../Resources/lib/sesionSecurityIndex.php"; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LOGIN</title>   
    <link rel="stylesheet" href="../Resources/css/bootstrap.min.css">
</head>
 
<body>    
    <nav class="navbar navbar-default">
        <div class="navbar-header">            
            <a href="#" class="navbar-brand">Aplicacion web</a>
        </div>       
    </nav>    
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">Por favor ingresar usuario y contraseña.</div>
                    <div class="panel-body"> 
                        <div class="alert alert-danger text-center" style="display:none;" id="error">
                            <p>Usuario o Password no identificados</p>
                        </div>                     
                        <form role="form">                            
                           <div class="form-group">
                                <label for="email">Usuario:</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                                    <input type="email" class="form-control" id="email" placeholder="Usuario">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-star"></span></span>
                                    <input type="password" class="form-control" id="password" placeholder="Password">
                                </div>
                            </div>       
                            <button type="button" class="btn btn-primary" onclick='confirmar();'><span class="glyphicon glyphicon-lock"></span> 
                            Entrar</button>   

                        </form>
                    </div>
                </div>
            </div>
        </div>       
    </div>
    <script src="../Resources/js/jquery-1.11.2.js"></script>
    <script src="../Resources/js/bootstrap.min.js"></script>    
    <script src="../Resources/js/appAlumnos.js"></script>                     
                        
</body>

</html>    