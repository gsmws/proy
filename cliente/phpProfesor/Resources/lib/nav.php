  <!--Barra de Navegacion-->
  <nav class="navbar navbar-default">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">                            
            </button>
            <a href="#" class="navbar-brand">Aplicacion Web</a>
        </div>

        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="javascript: void(0)" id="no" class="dropdown-toggle" data-toggle="dropdown"><?php echo $_SESSION['nombre'];?>                    
                    </a>
                     <ul class="dropdown-menu">                     
                        <li><a href="javascript:void(0)" 
                        onclick="modificarA('<?php echo $_SESSION['id'];?>');"                        
                        data-toggle="modal" data-target="#responsive">
                                        <center> <img src='<?php echo $_SESSION['foto'];?>' width="50" height="50"></center><center>Perfil</center></a></li>      
                        <li><a href="javascript: void(0)" onclick='tareasalumnos();'><center>Tareas Alumnos<center></a></li>                        
                        <li><a href="javascript: void(0)" onclick='alumnos();'><center>Alumnos<center></a></li>                        
                        <li><a href="javascript: void(0)" onclick='tareas();'><center>Tareas<center></a></li>                                                
                        <li><a href="javascript: void(0)" onclick='cerrar();'>¿Cerrar Session?</a></li>                        
                    </ul>
                </li>
                
            </ul>
        </div>
    </nav>

    