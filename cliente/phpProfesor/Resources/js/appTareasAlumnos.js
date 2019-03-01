function ListarTareasAlumnos(valor)
{
$(document).ready(function(){            
    $.getJSON("http://localhost:8080/PHP/web/TareasAlumnos/Service.php")
        .done(function(datos_del_ws){        
            html="<table class='table table-bordered'><center><thead><tr>"
                +"<th>IdTarea</th><th>IdAlumno</th><th>Mensaje</th><th>URL</th>"
                +"<th>Fecha</th><th>Calificacion</th><th>Evaluado</th><th colspan='2'>Opciones</th></tr></thead></center><tbody>";		
                $.each(datos_del_ws,function(indice,valor){                                                            
                    indice+=1;
                    html+="<tr><td>"+valor.IdTarea
                    +"</td><td>"+valor.IdAlumno                        
                    +"</td><td>"+valor.Mensaje
                    +"</td><td>"+valor.ArchivoURL
                    +"</td><td>"+valor.Fecha
                    +"</td><td>"+valor.Calificacion
                    +"</td><td>"+valor.Evaluado
                    +"</td><td>"+"<a href='javascript:void(0)' onclick='ModificarT("+valor.IdTarea+")'  class='btn btn-warning'>Modificar</a>"                                          
                    +"<td>"+"<a href='javascript:void(0)' onclick='EliminarT("+valor.IdTarea+")'  class='btn btn-danger'>Eliminar</a>"
                    +"</td>"
                    +"</td></tr>";                                                        
                });        
            $("#listas").html(html);
    
        });	
});
}


function tareas()
{    
    location.href='../Views/Tareas';        
}

function alumnos()
{    
    location.href='../Views/Alumnos';        
}

function tareasalumnos()
{    
    location.href='../Views/TareasAlumnos';        
}