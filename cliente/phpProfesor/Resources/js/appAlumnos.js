
function ListarAlumnos(valor)
{
    $(document).ready(function(){            
        $.getJSON("http://localhost:8080/PHP/web/Alumnos/Service.php?Buscar="+valor)
            .done(function(datos_del_ws){        
                html="<table class='table table-bordered'><center><thead><tr>"
                    +"<th>Id</th><th>Nombre</th><th>Foto</th>"
                    +"<th>Usuario</th><th>Password</th><th colspan='2'>Opciones</th></tr></thead></center><tbody>";		
                    $.each(datos_del_ws,function(indice,valor){                                                            
                        indice+=1;
                        html+="<tr><td>"+valor.Id
                        +"</td><td>"+valor.Nombre                        
                        +"</td><td>"+"<img id='fle'  class=control-img col-xs-5' width='70' height='50' src='"+valor.FotoURL+"'>"
                        +"</td><td>"+valor.Usuario
                        +"</td><td>"+valor.Password        
                        +"</td><td>"+"<a href='javascript:void(0)' onclick='modificarA("+valor.Id+")' data-toggle='modal' data-target='#responsive' class='btn btn-warning'>Modificar</a>"                                          
                        +"<td>"+"<a href='javascript:void(0)' onclick='EliminarA("+valor.Id+")'  class='btn btn-danger'>Eliminar</a>"
                        +"</td>"
                        +"</td></tr>";                                                        
                    });        
                $("#lista").html(html);
        
            });	
    });  
}

function modificarA(valor)
{  
    
    $.getJSON("http://localhost:8080/PHP/web/Alumnos/Service.php?Id="+valor)
    .done(function(datos_del_ws){                                                            
    if (datos_del_ws) 
    {               
        var d=datos_del_ws;                                                                    
    img="<div class='form-group'>"
    +"<label class='control-label col-xs-5' >Cambiar:</LABEL>"
    +"<div class='col-xs-5'>"   
    +"<input style='display:none' value='"+d.Id+"' id='idu' name='idu' type='text'  >"     
    +"<input id='im' src='"+d.FotoURL+"' type='file' name='file[]' multiple class='btn btn-danger' class='form-control' required><input type='submit' value='Actualizar imagen' class='btn btn-success' id='sub-but'>"
    +"<progress id='prog' max='100' value='0' style='display: none'></progress>"
    +"<div id='amount_reached'></div>"
    +"</div >"
    +"</div>	";

    html="<div class='form-group'>"
    +"<div class='form-group'><label for='apellidos' class='control-label col-xs-5'>Imagen :</label>"
        +"<div  class='col-xs-5'><img id='flef'  src='"+d.FotoURL+"' class=control-img col-xs-5' width='50' height='50' >"                        
        +"</div></div>"                                        
        +"<label for='nombre' class='control-label col-xs-5'>Nombre :</label>"
        +"<div class='col-xs-5'>"
        +"<input id='nombre' name='nombre' type='text' class='form-control' value='"+d.Nombre+"' placeholder='Ingrese usuario'>"        
        +"</div></div>"  
        +"<div class='form-group'>"
        +"<label for='usuario' class='control-label col-xs-5'>Usuario :</label>"
        +"<div class='col-xs-5'>"
        +"<input id='usuario' name='usuario' type='text' class='form-control' value='"+d.Usuario+"' placeholder='Ingrese usuario'>"        
        +"</div></div>"                
        +"<div class='form-group'>"
        +"<label for='password' class='control-label col-xs-5'>Contraseña:</label><div class='col-xs-5'>"
        +"<input id='password' value='"+d.Password+"' name='password' type='password' class='form-control' placeholder='Ingrese su contraseña'>"
        +"</div></div><div class='form-group'><label for='pass2' class='control-label col-xs-5'>Repetir Contraseña:</label>"
        +"<div class='col-xs-5'>"
        +"<input style='display:none'   id='idus' name='idu' type='text' value='"+d.Id+"'>"
        +"<input id='password2' name='password2' type='password' value='' class='form-control' placeholder='Confirme su contraseña'></div></div>"
        +"<div class='modal-footer'>  "
        +"<button type='button' class='btn btn-danger' data-dismiss='modal'>Cerrar</button>"        
        +"<button  id='sub-but'  class='btn btn-success'>Modificar</button>"
    +"</div>" 
    ;
    htmls="";
    $("#formCliente").html(htmls);
    $("#fm").html(html);
    $("#img").html(img);
    }
    else
    {                         
    }
    });                            
}

function ModificarT(valor)
{           
    var get="localhost:8080/php/web/Tareas/Service.php?Id="+valor;
    //alert(get);       
    $.getJSON("localhost:8080/php/web/Tareas/Service.php?Id="+valor)
    .done(function(datos_del_ws){                                                                
        if (datos_del_ws) 
        {               
            alert(datos_del_ws);
            var d=datos_del_ws;                                                                    
            img="<div class='form-group'>"
            +"<label class='control-label col-xs-5' >Cambiar:</LABEL>"
            +"<div class='col-xs-5'>"   
            +"<input style='display:none' value='"+d.Id+"' id='idu' name='idu' type='text'  >"     
            +"<input id='im' src='' type='file' name='file[]' multiple class='btn btn-danger' class='form-control' required><input type='submit' value='Actualizar imagen' class='btn btn-success' id='sub-but'>"
            +"<progress id='prog' max='100' value='0' style='display: none'></progress>"
            +"<div id='amount_reached'></div>"
            +"</div >"
            +"</div>	";

            html="<div class='form-group'>"
            +"<div class='form-group'><label for='apellidos' class='control-label col-xs-5'>Imagen :</label>"
            +"<div  class='col-xs-5'><img id='flef'  src='' class=control-img col-xs-5' width='50' height='50' >"                        
            +"</div></div>"                                        
            +"<label for='nombre' class='control-label col-xs-5'>Titulo :</label>"
            +"<div class='col-xs-5'>"
            +"<input id='nombre' name='nombre' type='text' class='form-control' value='"+d.Titulo+"' placeholder='Ingrese usuario'>"        
            +"</div></div>"  
            +"<div class='form-group'>"
            +"<label for='usuario' class='control-label col-xs-5'>Fecha Publicacion :</label>"
            +"<div class='col-xs-5'>"
            +"<input id='usuario' name='usuario' type='text' class='form-control' value='"+d.FechaPublicacion+"' placeholder='Ingrese usuario'>"        
            +"</div></div>"                
            +"<div class='form-group'>"
            +"<label for='password' class='control-label col-xs-5'>FechaEntrega:</label><div class='col-xs-5'>"
            +"<input id='password' value='"+d.FechaLimite+"' name='password' type='password' class='form-control' placeholder='Ingrese su contraseña'>"
            +"</div></div><div class='form-group'><label for='pass2' class='control-label col-xs-5'>Repetir Contraseña:</label>"        
            +"<div class='col-xs-5'>"
            +"<input style='display:none'   id='idus' name='idu' type='text' value='"+d.Id+"'>"
            +"<input id='password2' name='password2' type='password' value='' class='form-control' placeholder='Confirme su contraseña'></div></div>"
            +"<div class='modal-footer'>  "
            +"<button type='button' class='btn btn-danger' data-dismiss='modal'>Cerrar</button>"        
            +"<input  onclick='modificarAlumno()' value='Editar perfil' id='sub-but'  class='btn btn-success'>"
            +"</div>" 
            ;
        
            $("#formTarea").html(html);
            $("#imgTarea").html(img);
    }
    else
    {    
        alert("error");                     
    }
    });                            
}

function EliminarA(valor)
{      
   alert("¿Eliminar: "+valor+"?...."); 
   $.ajax
        ({
            url:"http://localhost:8080/PHP/web/Alumnos/Service.php?Id="+valor,
            type:'DELETE',
            data:""
        }).done(function(resp){                                                        
            ListarAlumnos('');            
            alert("Alumno eliminado Id: "+resp);
        });        
}

function EliminarT(valor)
{      
   alert("¿Eliminar: "+valor+"?...."); 
   $.ajax
        ({
            url:"http://localhost:8080/PHP/web/Tareas/Service.php?Id="+valor,
            type:'DELETE',
            data:""
        }).done(function(resp){                                                        
            ListarAlumnos('');            
            alert("Tarea eliminada Id: "+resp);
        });        
}

function modificarAlumno()
{
    var idu=$('#idus').val();    
    var usuario=$('#usuario').val();
    var nombre=$('#nombre').val();
    var password=$('#password').val();
    var password2=$('#password2').val();
    
    if (password===password2) 
    {        
        if (password==='' && password2==='') 
        {
            alert("Introdusca contraseña");
        }    
        else
        {                  
           editarAlumnos(idu,nombre,usuario,password);                                                                                        
        }
    }   
    else
    {
        alert('Debe introducir la misma contraseña');
    }               
}   

function editarAlumnos(idu,nombre,usuario,password)
{          
    $.ajax(
    {
        url:'../Controllers/alumno.php',
        type:'POST',
        data:"Usuario="+usuario+"&password="+password+"&boton=modificar"        
    }).done(function(resp){        
        $.ajax
        ({
            url:"http://localhost:8080/PHP/web/Alumnos/Service.php?Id="+idu+"&Nombre="+nombre+"&Usuario="+usuario+"&Password="+resp,
            type:'PUT',
            data:""
        }).done(function(resp){                                            
            document.getElementById("password2").value = "";                                
            document.getElementById("usuario").value = usuario;                
            ListarAlumnos('');            
            alert("Alumno modificado Id: "+resp);
        });        
    });

        
}

function nuevo(){    
    img="";

 
    html="<div class='form-group'>"    
        +"<div class='form-group'>"
        +"<label for='nombre' class='control-label col-xs-5'>Nombre:</label><div class='col-xs-5'>"
        +"<input id='nombre' name='nombre' type='text' class='form-control' placeholder='Ingrese su nombre'>"
        +"</div></div>"
        +"<label for='nombre' class='control-label col-xs-5'>Usuario :</label>"+
        "<div class='col-xs-5'>"
        +"<input id='usuario' name='usuario' type='text' class='form-control' placeholder='Ingrese sus Nombres'>"        
        +"</div></div>"        
        +"<div class='form-group'>"
        +"<label for='password' class='control-label col-xs-5'>Contraseña:</label><div class='col-xs-5'>"
        +"<input id='password' name='password' type='password' class='form-control' placeholder='Ingrese su contraseña'>"
        +"</div></div><div class='form-group'><label for='pass2' class='control-label col-xs-5'>Repetir Contraseña:</label>"
        +"<div class='col-xs-5'>"
        +"<input style='display:none' id='idu' name='idu' type='text' >"
        +"<input id='password2' name='password2' type='password' class='form-control' placeholder='Ingrese su contraseña'></div></div>"
        +"<div class='modal-footer'>  "
        +"<button type='button' class='btn btn-danger' data-dismiss='modal'>Cerrar</button>"        
        +"<input type='submit' value='Registrar Alumno' id='sub-but'  class='btn btn-success'>"
    +"</div>" 
    ;
    /**
     * 
     */
    htmls="";
    $("#fm").html(htmls);
    $("#formCliente").html(html); 
    $("#img").html(img);   
}

$(document).ready(function(){    
    $("#img").on('submit',function(e){
        e.preventDefault();      
                $(this).ajaxSubmit({
                    url:'upload.php',
                    beforeSend:function(){
                        $("#prog").show();
                        $("#prog").attr('value','0');
                    },
                    uploadProgress:function(event,position,total,percentComplete){
                        $("#prog").attr('value',percentComplete);
                        $('#sub-but').val(percentComplete+'%');
                    },
                    success:function(val){                        
                        $('#sub-but').val('Actualizando imagen!!');
                        var va="http://localhost:8080/PHP/cliente/phpAlumno/Views/";
                        var vaa=va+val;                                                                                                                             
                        document.getElementById('flef').src = ''+vaa;                                                                
                        var idu=$('#idu').val();                            
                        A(idu,vaa);
                        ListarAlumnos('');
                        setTimeout(function(){                                                                                          
                            $('#sub-but').val('Actualizar imagen');                            
                            ListarAlumnos('');
                        },1000);
                    },
                });
                           
    });
    $("#fm").on('submit',function(e){
        e.preventDefault();                          
        modificarAlumno();
    });
    $("#formCliente").on('submit',function(e){
        e.preventDefault();                          
        registrar();
       
    });
});

function registrar()
{         
    var usuario=$('#usuario').val();    
    var nombre=$('#nombre').val();
    var password=$('#password').val();
    var password2=$('#password2').val();
    
    if (password===password2) 
    {        
        if (password==='' && password2==='') 
        {
            alert("Introdusca contraseña");
        }    
        else
        {                            
            NuevoUsuario(nombre,usuario,password);                                                            

        }
    }   
    else
    {
        alert('Debe introducir la misma contraseña');
    }               
}   

function mover()
{    		
	$("#form").on('submit',function(e){
		e.preventDefault();
		$(this).ajaxSubmit({            
            url:'../Controllers/upload.php',
            type:'POST',
            data:"imagen="+imagen+"&boton=sbimagen",
			beforeSend:function(){
				$("#prog").show();
				$("#prog").attr('value','0');
			},
		    uploadProgress:function(event,position,total,percentComplete){
			$("#prog").attr('value',percentComplete);
			$('#sub-but').val(percentComplete+'%');
		},
		success:function(){
			$('#sub-but').val('Files Uploaded!!');
			setTimeout(function(){
				$('#sub-but').val('Upload');
			},1000);
		},
		});
	});			
}

function NuevoUsuario(nombre,usuario,password)
{               
    $.ajax
    ({
        url:"http://localhost:8080/PHP/web/Alumnos/Service.php?Nombre="+nombre+"&FotoURL="+''+"&Usuario="+usuario+"&Password="+password,
        type:'POST',
        data:""
    }).done(function(resp){                                    
        if(!resp)
        {
            alert("Elija otro usuario");                    
        }                
        else
        {
        document.getElementById("password2").value = "";                                
        document.getElementById("password").value = "";      
        document.getElementById("usuario").value = "";      
        document.getElementById("nombre").value = "";              
        ListarAlumnos('');       
        alert(resp);                    
        }
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

function A(idu,valor)
{      
    
    var id=idu;
    var img=''+valor+'';
    var url="http://localhost:8080/PHP/web/Alumnos/Service.php?Id="+id;
    var usls=url+"&FotoURL="+img;    
    $.ajax
    ({
        url:usls,
        type:'PUT',
        data:""
    }).done(function(resp){            
    });               

}

function confirmar()
{
    var email = $('#email').val();
    var password = $('#password').val();            
    $.getJSON("http://localhost:8080/PHP/web/Alumnos/Service.php?Nombre="+email+"&Password="+password)
    .done(function(datos_del_ws){                                                            
    if (datos_del_ws) 
    {               
        var d=datos_del_ws;                                            
        $.ajax({
            url:'../Controllers/alumno.php',
            type:'POST',
            data:"FotoURL="+d.FotoURL+"&Id="+d.Id+"&Nombre="+d.Nombre+"&Usuario="+d.Usuario+"&boton=ingresar"
        }).done(function(resp){
                location.href='../Views/principal';
        });
    }
    else
    {                 
        $('#error').show();
    }
    });                        
}
