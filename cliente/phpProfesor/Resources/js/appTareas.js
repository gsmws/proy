function ListarTareas(valor)
{
    $(document).ready(function(){            
        $.getJSON("http://localhost:8080/PHP/web/Tareas/Service.php?Buscar="+valor)
            .done(function(datos_del_ws){        
                html="<table class='table table-bordered'><center><thead><tr>"
                    +"<th><center>Id</center></th><th><center>Titulo</center></th><th><center>URL</center></th>"
                    +"<th><center>Fecha Publicacion</center></th><th><center>Fecha Limite</center></th><th colspan='2'><center>Opciones</center></th></tr></thead></center><tbody>";		
                    $.each(datos_del_ws,function(indice,valor){                                                            
                        indice+=1;
                        html+="<tr><td><center>"+valor.Id
                        +"</center></td><td><center>"+valor.Titulo                        
                        +"</center></td><td><center>"+"<a href='"+valor.ArchivoURL+"' ><center>Descargar</center>"
                        +"</center></td><td><center>"+valor.FechaPublicacion
                        +"</center></td><td><center>"+valor.FechaLimite
                        +"</center></td><td>"+"<center><a href='javascript:void(0)' onclick='ModificarT("+valor.Id+")' data-toggle='modal' data-target='#tarea' class='btn btn-warning'><center>Modificar</center></a></center>"                                          
                        +"<td>"+"<center><a href='javascript:void(0)' onclick='EliminarT("+valor.Id+")'  class='btn btn-danger'><center>Eliminar</center></a></center>"
                        +"</td>"
                        +"</td></tr>";                                                        
                    });        
                $("#listas").html(html);
                
            });	
    });
}

function NuevaTarea()
{                 
    img="<div class='form-group'>"
    +"<label class='control-label col-xs-5' >Archivo:</LABEL>"
    +"<div class='col-xs-5'>"   
    +"<input style='display:none'  id='idu' name='idu' type='text'  >"     
    +"<input  type='file' name='file[]' id='file' multiple class='btn btn-danger' class='form-control' required><input type='submit' value='Subir Archivo' class='btn btn-success' id='sub-but'>"
    +"<progress id='prog' max='100' value='0' style='display: none'></progress>"
    +"<div id='amount_reached'></div>"
    +"</div >"
    +"</div>";
    html="<div class='form-group'>"
    +"<input id='idta' style='display:none' name='idta' type='text' value='' >"                     
    +"<div class='form-group'><label for='apellidos' class='control-label col-xs-5'>Tarea :</label>"
    +"<div  class='col-xs-5'><a id='archivos' name='archivos' >Descargar</a>"                
    +"</div></div>"                                        
    +"<label for='nombre' class='control-label col-xs-5'>Titulo :</label>"
    +"<div class='col-xs-5'>"
    +"<input id='titulo' name='titulo' value='' type='text' class='form-control' placeholder='Ingrese titulo'>"        
    +"</div></div>"        
    +"<div class='form-group'>"
    +"<label for='limite' class='control-label col-xs-5'>Fecha Limite:</label><div class='col-xs-5'>"            
    +"<input type='text' class='form-control' data-format='YYYY-MM-DD hh:mm:ss' id='datetimepicker' placeholder='ingrese fecha'/>"                
    +"</div></div>"            
    +"<div class='modal-footer'>  "
    +"<button type='button' class='btn btn-danger' data-dismiss='modal'>Cerrar</button>"        
    +"<input type='submit'   id='sub-but'  value='Guardar' class='btn btn-success'>"
    +"</div>";  
    htmls="";     
    $("#formTareamodificar").html(htmls);        
    $("#imgTarea").html(img);
    $("#formTarea").html(html);    
    date();    
}

function date()
{
    $('#datetimepicker').datetimepicker({
        format: 'YYYY-MM-DD hh:mm:ss'
    });      
}

function EliminarT(valor)
{    
    var confi =confirm("¿Decea Eliminar esta tarea?");
    if(confi ==true)
    {
        $.ajax
        ({
            url:"http://localhost:8080/PHP/web/Tareas/Service.php?Id="+valor,
            type:'DELETE',
            data:""
        }).done(function(resp){                                                        
            ListarTareas('');            
            alert("Tarea eliminada");
        });  
    }    
}

function Descargar()
{
    var idu=$('#archivo').val();     
    alert(idu);
    document.getElementById('archivo').src = 'aaa';                                                                                                                
}

function T(idu,valor)
{      
    
    var id=idu;
    var img=''+valor+'';
    var url="http://localhost:8080/PHP/web/Tareas/Service.php?Id="+id;
    var usls=url+"&ArchivoURL="+img;    
    $.ajax
    ({
        url:usls,
        type:'PUT',
        data:""
    }).done(function(resp){  
        alert("Archivo modificado");        
    });               

}

$(document).ready(function(){      
    
    $("#imgTarea").on('submit',function(e){
        e.preventDefault();      
                $(this).ajaxSubmit({
                    url:'uploat.php',
                    beforeSend:function(){
                        $("#prog").show();
                        $("#prog").attr('value','0');
                    },
                    uploadProgress:function(event,position,total,percentComplete){
                        $("#prog").attr('value',percentComplete);
                        $('#sub-but').val(percentComplete+'%');
                    },
                    success:function(val){                        
                        $('#sub-but').val('Actualizando archivo!!');
                        var va="http://localhost:8080/PHP/cliente/phpProfesor/Views/";
                        var vaa=va+val;                                                                                                                                                                             
                        document.getElementById("archivos").href = ""+vaa;                                
                        alert(vaa);
                        var idtarea=$('#idta').val();                                                      
                        T(idtarea,vaa);
                        setTimeout(function(){                                                                                          
                            $('#sub-but').val('Actualizar archivo');                                                                   
                            ListarTareas('');                            
                        },1000);
                    },
                });
                           
    });       
    $("#formTareamodificar").on('submit',function(e){        
        e.preventDefault();          
//        alert("MT");
        ModificarTarea();
       
    });

    $("#formTarea").on('submit',function(e){
        e.preventDefault();                          
        RegistrarT();
       
    });
});

function RegistrarT()
{           
    var titulo=$('#titulo').val();        
    var archivo=$('#archivos').attr('href');
    var limite=$('#datetimepicker').val();                                    
    if (titulo==='' || archivo==='' || limite==='') 
    {
        alert("Introdusca contraseña");        }    
    else
    {                            
        RegistrarTarea(titulo,archivo,limite);                                                            
    }    
}  

function RegistrarTarea(titulo,archivo,limite)
{                   
    $.ajax
    ({
        url:"http://localhost:8080/PHP/web/Tareas/Service.php?Titulo="+titulo+"&ArchivoURL="+archivo+"&FechaLimite="+limite,
        type:'POST',
        data:""
    }).done(function(resp){
        ListarTareas('');  
        alert("Tarea registrada");
        document.getElementById("titulo").value = "";      
        $('#datetimepicker').val("").datepicker("update");        
    });            
        
}

function ModificarT(valor)
{                   
    $.ajax
    ({
        url:"http://localhost:8080/PHP/web/Tareas/Service.php?Id="+valor,
        type:'GET',
        data:""
    }).done(function(resp){                                  
        //alert(resp['Titulo']);      
        dat="<input type='text' class='form-control' value='"+resp.FechaLimite+"' id='datetimepick'/>";
        img="<div class='form-group'>"
            +"<label class='control-label col-xs-5' >Cambiar:</LABEL>"
            +"<div class='col-xs-5'>"   
            +"<input style='display:none'  id='idu' name='idu' type='text'  >"     
            +"<input  type='file' name='file[]' id='file' multiple class='btn btn-danger' class='form-control' required><input type='submit' value='Subir Archivo' class='btn btn-success' id='sub-but'>"
            +"<progress id='prog' max='100' value='0' style='display: none'></progress>"
            +"<div id='amount_reached'></div>"
            +"</div >"
            +"</div>	";
    
        html="<div class='form-group'>"
            +"<input id='idta' style='display:none' name='idta' type='text' value='"+valor+"' >"                 
            +"<div class='form-group'><label for='apellidos' class='control-label col-xs-5'>Archivo :</label>"
            +"<div  class='col-xs-5'><a id='archivos' href='"+resp.ArchivoURL+"'  name='archivos' >Descargar</a>"                
            +"</div></div>"                                        
            +"<label for='nombre' class='control-label col-xs-5'>Titulo :</label>"
            +"<div class='col-xs-5'>"
            +"<input id='titulo' name='titulo' value='"+resp.Titulo+"' type='text' class='form-control' placeholder='Ingrese titulo'>"        
            +"</div></div>"        
            +"<div class='form-group'>"
            +"<label for='limite' class='control-label col-xs-5'>Fecha Limite:</label><div class='col-xs-5'>"            
            +dat
            +"</div></div>"            
            +"<div class='modal-footer'>  "
            +"<button type='button' class='btn btn-danger' data-dismiss='modal'>Cerrar</button>"        
            +"<input type='submit'   id='sub-but'  value='Guardar' class='btn btn-success'>"
            +"</div>";   
            htmls="";     
        $("#formTarea").html(htmls);        
        $("#formTareamodificar").html(html);        
        $("#imgTarea").html(img);        
        $('#sub-but').val('Actualizar Archivo');    
    });                
        
}

function ModificarTarea()
{    
    var titulo=$('#titulo').val();    
    var idta=$('#idta').val();    
    var archivo=$('#archivos').attr('href');
    var limite=$('#datetimepick').val();    
            
    if (titulo==='' && limite==='' && idus==='' && archivo==='') 
    {
        alert("debe llenar todos los campo");
    }    
    else
    {                          
        EditarTab(idta,titulo,archivo,limite);                                                                                        
    }    
    
}

function EditarTab(idtab,titulotab,archivotab,limitetab)
{          
        
        $.ajax
        ({
            url:"http://localhost:8080/PHP/web/Tareas/Service.php?Id="+idtab+"&Titulo="+titulotab+"&ArchivoURL="+archivotab+"&FechaLimite="+limitetab,
            type:'PUT',
            data:""
        }).done(function(resp){                                                       
            ListarTareas('');            
            alert("Tarea Modificada che");
        });        

}

function cerrar()
{
    $.ajax({
        url:'../Controllers/alumno.php',
        type:'POST',
        data:"mensaje=mensaje&boton=cerrar"
    })
        .done(function(resp){            
            location.href='../Views/';
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
    location.href='../Views/TareasAlumnos1';        
}

