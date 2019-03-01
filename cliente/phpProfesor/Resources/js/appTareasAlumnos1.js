function tareasAlumnos()
{    
      $(document).ready(function(){            
          $.getJSON("http://localhost:8080/PHP/web/TareasAlumnos/Service.php")
              .done(function(datos_del_ws){                
                html="<table class='table table-bordered'>"
                +"<center><thead><tr><th><center>#</center></th>"
                +"<th><center>Titulo</center></th><th><center>Alumno</center></th><th><center>Mensaje</center></th>"
                +"<th><center>Fecha<center></th><th><center>Tarea<center></th><th><center>Calificacion<center></th><th colspan='2'><center>Opciones<center></center></th>"
                +"</tr></thead></center><tbody>";     
                      $.each(datos_del_ws,function(indice,valor){                                                            
                          indice+=1;
                          html+="<tr><td><center>"+indice
                          +"</center></td><td><center>"+valor.Titulo
                          +"</center></td><td><center>"+valor.Nombre
                          +"</center></td><td><center>"+valor.Mensaje
                          +"</center></td><td><center>"+valor.Fecha                        
                          +"</center></td><td>"+"<a href='"+valor.ArchivoURL+"' ><center>Descargar "
                          +"</center></td><td>"+valor.Calificacion
                          +"</center></td><td><center>"+"<a href='javascript:void(0)' onclick='ModificarTareaAlumno("+valor.IdTarea+","+valor.IdAlumno+")' data-toggle='modal' data-target='#responsive' class='btn btn-warning'><center>Modificar</center></a></center>"                                          
                          +"<td><center>"+"<a href='javascript:void(0)' onclick='EliminarTareaAlumno("+valor.IdTarea+","+valor.IdAlumno+")'  class='btn btn-danger'><center>Eliminar</center></a></center>"                          
                          +"</td></tr>";                                                        
                      });        
                  $("#listasEntregadas").html(html);
          
              }); 
      });
}

function tareasEvaluadas(box)
  {
      //alert(box);
      //alert(valor);
      $.getJSON("http://localhost:8080/PHP/web/TareasAlumnos/Service.php?Evaluado="+box)
      .done(function(datos_del_ws){        
        html="<table class='table table-bordered'>"
        +"<center><thead><tr><th><center>#</center></th>"
        +"<th><center>Titulo</center></th><th><center>Alumno</center></th><th><center>Mensaje</center></th>"
        +"<th><center>Fecha<center></th><th><center>Tarea<center></th><th><center>Calificacion<center></th><th colspan='2'><center>Opciones</center></th>"
        +"</tr></thead></center><tbody>";     
              $.each(datos_del_ws,function(indice,valor){                                                            
                  indice+=1;
                  html+="<tr><td>"+indice
                  +"</td><td><center>"+valor.Titulo
                  +"</td><td><center>"+valor.Nombre
                  +"</center></td><td><center>"+valor.Mensaje
                  +"</center></td><td><center>"+valor.Fecha                        
                  +"</center></td><td>"+"<a href='"+valor.ArchivoURL+"' ><center><center>Descargar</center> "
                  +"</center><center></td><td><center>"+valor.Calificacion
                  +"</center></td><td><center>"+"<a href='javascript:void(0)' onclick='ModificarTareaAlumno("+valor.IdTarea+","+valor.IdAlumno+")' data-toggle='modal' data-target='#responsive' class='btn btn-warning'><center>Modificar</center></a></center>"                                          
                  +"<td><center>"+"<a href='javascript:void(0)' onclick='EliminarTareaAlumno("+valor.IdTarea+","+valor.IdAlumno+")'  class='btn btn-danger'>Eliminar</a></center>"
                  +"</td></tr>";                                                        
              });        
          $("#listasEntregadas").html(html);
  
      });           
}


function check(box) 
{    
    if (box.checked) 
    {
      document.getElementById("checkboxs").checked=false
      document.getElementById("checkboxsi").checked=false
      var b=1;
      tareasEvaluadas(b);
    }
}

function checks(box) {
    if (box.checked) 
    {
      document.getElementById("checkbox").checked=false
      document.getElementById("checkboxsi").checked=false 
      var b=0;
      tareasEvaluadas(b);
    }
}

function checksi(box) {
    if (box.checked) {
    document.getElementById("checkbox").checked=false
    document.getElementById("checkboxs").checked=false
    tareasAlumnos();
    }
}  

function ModificarTareaAlumno(tarea,alumno)
{    
    $.ajax
    ({
        url:"http://localhost:8080/PHP/web/TareasAlumnos/Service.php?IdTareaa="+tarea+"&IdAlumnoo="+alumno,
        type:'GET',
        data:""
    }).done(function(resp){                                                 
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
            +"<input id='idta' style='display:none' name='idta' type='text' value='"+tarea+"' >"     
            +"<input id='idal' style='display:none' name='idal' type='text' value='"+alumno+"' >"                 
            +"<div class='form-group'><label for='apellidos' class='control-label col-xs-5'>Archivo :</label>"
            +"<div  class='col-xs-5'><a id='archivos' href='"+resp.ArchivoURL+"'  name='archivos' >Descargar</a>"                
            +"</div></div>"                                        
            +"<label for='nombre' class='control-label col-xs-5'>Titulo :</label>"
            +"<div class='col-xs-5'>"
            +"<input id='mensaje' name='mensaje' value='"+resp.Mensaje+"' type='text' class='form-control' placeholder='Ingrese Mensjae'>"        
            +"</div></div>"        
            +"<div class='form-group'>"
            +"<label for='limite' class='control-label col-xs-5'>Fecha :</label><div class='col-xs-5'>"            
            +"<input id='fecha' name='fecha' value='"+resp.Fecha+"' type='text' class='form-control' placeholder='Ingrese calificacion'>"                    
            +"</div></div>" 
            +"<div class='form-group'>"
            +"<label for='limite' class='control-label col-xs-5'>Calficacion :</label><div class='col-xs-5'>"            
            +"<input id='calificacion' name='calificacion' value='"+resp.Calificacion+"' type='text' class='form-control' placeholder='Ingrese calificacion'>"                    
            +"</div></div>"            
            +"<div class='modal-footer'>  "
            +"<button type='button' class='btn btn-danger' data-dismiss='modal'>Cerrar</button>"        
            +"<input type='submit'   id='sub-but'  value='Guardar' class='btn btn-success'>"
            +"</div>";   
            htmls="";     
    
        $("#formTareaAlumno").html(htmls);                
        $("#formTareaAlumnoModificar").html(html);                
        $("#imgTareaAlumno").html(img);        
        $('#sub-but').val('Actualizar Archivo');    
    });                     
}

function EliminarTareaAlumno(tarea,alumno)
{
    alert(tarea);
    alert(alumno);
}

function tareasAlTASumnos()
{    
    $(document).ready(function(){            
        $.getJSON("http://localhost:8080/PHP/web/TareasAlumnos/Service.php")
            .done(function(datos_del_ws){                
                html="<table class='table table-bordered'>"
                    +"<center><thead><tr><th><center>#</center></th>"
                    +"<th><center>Titulo</center></th><th><center>Alumno</center></th><th><center>Mensaje</center></th>"
                    +"<th><center>Fecha<center></th><th><center>Tarea<center></th><th><center>Calificacion<center></th><th colspan='2'><center>Opciones<center></center></th>"
                    +"</tr></thead></center><tbody>";     
                    $.each(datos_del_ws,function(indice,valor){                                                            
                        indice+=1;
                        html+="<tr><td><center>"+indice
                        +"</center></td><td><center>"+valor.Titulo
                        +"</center></td><td><center>"+valor.Nombre
                        +"</center></td><td><center>"+valor.Mensaje
                        +"</center></td><td><center>"+valor.Fecha                        
                        +"</center></td><td>"+"<a href='"+valor.ArchivoURL+"' ><center><center>Descargar</center> </center>"
                        +"</td><td><center>"+valor.Calificacion                          
                        +"</center></td><td><center>"+"<a href='javascript:void(0)' onclick='ModificarTareaAlumno("+valor.IdTarea+","+valor.IdAlumno+")' data-toggle='modal' data-target='#tarea' class='btn btn-warning'><center>Modificar</center></a></center>"                                          
                        +"<td><center>"+"<a href='javascript:void(0)' onclick='EliminarTareaAlumno("+valor.IdTarea+","+valor.IdAlumno+")'  class='btn btn-danger'><center>Eliminar</center></a></center>"
                        +"</td></tr>";                                                        
                    });        
                $("#listasEntregadas").html(html);
        
            }); 
    });
}
function NuevaTarea()
{             
    var fecha = new Date();
    //alert(fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate()+' '+fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds());    
    fi="<input style='display:none' type='text' data-format='YYYY-MM-DD hh:mm:ss' class='form-control' id='hi'  value='"
    +fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate()+' '+fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds()
    +"' />";
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
        +"<div  class='col-xs-5'><input id='archivo' style='display:none'  type='text' name='archivo' >"                
        +"</div></div>"                                        
        +"<label for='nombre' class='control-label col-xs-5'>Titulo :</label>"+
        "<div class='col-xs-5'>"
        +"<input id='titulo' name='titulo' type='text' class='form-control' placeholder='Ingrese titulo'>"        
        +"</div></div>"        
        +"<div class='form-group'>"
        +"<label for='publicacion' class='control-label col-xs-5'>Fecha Limite:</label>"        
        +"<div class='col-xs-5'>"                                                          
        +fi
        +"<input type='text' class='form-control' data-format='YYYY-MM-DD hh:mm:ss' id='datetimepicker' placeholder='ingrese fecha'/>"                
        +"</div></div>"
        +"<div class='form-group'>"        
        +"<div class='col-xs-5'>"        
        +"</div></div>"
        +"<div class='modal-footer'>  "
        +"<button type='button' class='btn btn-danger' data-dismiss='modal'>Cerrar</button>"        
        +"<input type='submit'  id='sub-but'  class='btn btn-success' value='Registrar  '>"
    +"</div>" 
    ;
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
                        //(ListarTareas('');
                        document.getElementById("archivos").href = ""+vaa;                                
                        var idtarea=$('#idta').val();                              
                        //alert(vaa);
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

    $("#imgTareaAlumno").on('submit',function(e){
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
                        //(ListarTareas('');
                        document.getElementById("archivos").href = ""+vaa;                                
                        var idtarea=$('#idta').val();                              
                        //alert(vaa);
                        T(idtarea,vaa);
                        setTimeout(function(){                                                                                          
                            $('#sub-but').val('Actualizar archivo');                                                                   
                            ListarTareas('');                            
                        },1000);
                    },
                });
                           
    });   

    $("#formTareaAlumnoModificar").on('submit',function(e){        
        e.preventDefault();          
            MTA();
       
    });

    $("#formTareaModificar").on('submit',function(e){
        e.preventDefault();                          
        //RegistrarT();
       
    });
});

function MTA()
{
    var mensaje=$('#mensaje').val();    
    var idtas=$('#idta').val();   
    var idals=$('#idal').val();    
    var calificacion=$('#calificacion').val();    
    var archivourl=$('#archivos').attr('href');
    var fecha=$('#fecha').val();    
            
    if (fecha==='' && mensaje==='' && calificacion==='' && idtas==='' && archivourl==='' && idals==='' && limite==='') 
    {
        alert("debe llenar todos los campo");
    }    
    else
    {                          
  
        EditarTabAlumno(idtas,idals,mensaje,archivourl,fecha,calificacion);                                                                                        
    }    
}

function RegistrarT()
{           
    var titulo=$('#titulo').val();    
    var inicial=$('#hi').val();      
    var archivo=$('#archivo').val();    
    var limite=$('#datetimepicker').val();                        
    //alert("Fecha Publicacion "+inicial);  
    //alert("Fecha Limite "+limite);  
    if (titulo==='' || archivo==='') 
    {
        alert("Introdusca contraseña");        }    
    else
    {                            
        NuevoAlumno(titulo,archivo,inicial,limite);                                                            
    }    
}  

function NuevoAlumno(titulo,archivo,publicacion,limite)
{                   
    $.ajax
    ({
        url:"http://localhost:8080/PHP/web/Tareas/Service.php?Titulo="+titulo+"&ArchivoURL="+archivo+"&FechaPublicacion="+publicacion+"&FechaLimite="+limite,
        type:'POST',
        data:""
    }).done(function(resp){
        ListarTareas('');  
        alert("Tarea registrada");
        document.getElementById("titulo").value = "";      
        $('#datetimepicker').val("").datepicker("update");        
    });            
        
}

function ModificarAlumno(valor)
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
        alert("Modificado");
        //alert("Archivo");
        //alert(limite);
        //alert(idus);   
        //alert(arc);        
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
            //document.getElementById("password2").value = "";                                
            //document.getElementById("usuario").value = usuario;                            
            //alert("Tarea modificada Id: "+resp);
            ListarTareas('');            
        });        

}


function EditarTabAlumno(id01,id02,mensaje03,archivo04,fecha05,calificacion06)
{          

        
        $.ajax
        ({
            url:"http://localhost:8080/PHP/web/TareasAlumnos/Service.php?IdTarea="+id01+"&IdAlumno="+id02+"&Mensaje="+mensaje03+"&ArchivoURL="+archivo04+"&Fecha="+fecha05+"&Calificacion="+calificacion06+"&Evaluado=1",
            type:'PUT',
            data:""
        }).done(function(resp){                                            
       
            alert(resp);
            tareasAlTASumnos();            
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

