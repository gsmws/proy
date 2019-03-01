//LISTAR TAREA ALUMNO
function getTareaAlumno()
{
}
//AGREGAR TAREA ALUMNO
function addTareaAlumno()
{
}
//ACTUALIZAR TAREA ALUMNO
function updateTareaAlumno()
{
}
//ELIMINAR TAREA ALUMNO
function deleteTarealumno()
{
}
//LSTA TODAS LAS TAREAS
function lista_tareasalumnos(valor)
{
	$(document).ready(function(){            
        $.getJSON("http://localhost:8080/PHP/web/Tareas/Service.php")
            .done(function(datos_del_ws){        
                html="<table class='table table-bordered'><center><thead><tr>"
                    +"<th>Id</th><th>Titulo</th><th>Archivo URL</th>"
                    +"<th>FechaPublicacion</th><th>FechaLimite</th><th >Subir Tarea</th></tr></thead></center><tbody>";		
                    $.each(datos_del_ws,function(indice,valor){                                                            
                        indice+=1;
                        html+="<tr><td>"+valor.Id
                        +"</td><td>"+valor.Titulo                        
                        +"</td><td>"+"<a href='modificar.php?id="+valor.ArchivoURL+"'>"+"<center>"+valor.ArchivoURL+"</center>"+"</a>"                                                
                        +"</td><td>"+valor.FechaPublicacion
                        +"</td><td>"+valor.FechaLimite        
                        +"</td><td>"+"<a href='modificar.php?id="+valor.Id+"'>"+"<center>"+'|----->'+"</center>"+"</a>"                        
                        +"</td></tr>";                                                        
                    });        
                $("#lista").html(html);
        
            });	
    });
    tareasAlumnos(valor);    
} 
//TAREAS EVALUADAS
function check(box,valor) {
    
    if (box.checked) 
    {
      document.getElementById("checkboxs").checked=false
      document.getElementById("checkboxsi").checked=false
      var b=1;
      tareasEvaluadas(b,valor);
    }
    
  }
//TAREAS NO EVALUADAS
function checks(box,valor) {
    if (box.checked) 
    {
      document.getElementById("checkbox").checked=false
      document.getElementById("checkboxsi").checked=false 
      var b=0;
      tareasEvaluadas(b,valor);
    }
}
//TODAS LAS TAREAS
function checksi(box,valor) {
    if (box.checked) {
    document.getElementById("checkbox").checked=false
    document.getElementById("checkboxs").checked=false
    tareasAlumnos(valor);
    }
}  
//TAREASALUMNOS   
function tareasAlumnos(valor)
  {
      $(document).ready(function(){            
          $.getJSON("http://localhost:8080/PHP/web/TareasAlumnos/Service.php?IdAlumno="+valor)
              .done(function(datos_del_ws){        
                  html="<table class='table table-bordered'>"
                      +"<center><thead><tr><th>#</th>"
                      +"<th>Titulo</th><th>Mensaje</th>"
                      +"<th>Fecha</th><th>Tarea</th><th>Calificacion</th>"
                      +"<th >Modificar Tarea</th></tr></thead></center><tbody>";     
                      $.each(datos_del_ws,function(indice,valor){                                                            
                          indice+=1;
                          html+="<tr><td>"+indice
                          +"</td><td>"+valor.Titulo
                          +"</td><td>"+valor.Mensaje
                          +"</td><td>"+valor.Fecha                        
                          +"</td><td>"+"<a href='modificar.php?id="+valor.ArchivoURL+"'>"+"<center>"+valor.ArchivoURL+"</center>"+"</a>"                                                
                          +"</td><td>"+valor.Calificacion
                          +"</td><td>"+"<a href='modificar.php?id="+valor.Id+"'>"+"<center>"+'|----->'+"</center>"+"</a>"                        
                          +"</td></tr>";                                                        
                      });        
                  $("#listas").html(html);
          
              }); 
      });
}
//TAREAS EVALUADAS TRUE/FALSE
function tareasEvaluadas(box,valor)
  {
      $.getJSON("http://localhost:8080/PHP/web/TareasAlumnos/Service.php")
      .done(function(datos_del_ws){        
          html="<table class='table table-bordered'>"
              +"<center><thead><tr><th>#</th>"
              +"<th>Titulo</th><th>Mensaje</th>"
              +"<th>Fecha</th><th>Tarea</th><th>Calificacion</th>"
              +"<th >Modificar Tarea</th></tr></thead></center><tbody>";     
              $.each(datos_del_ws,function(indice,valor){                                                            
                  indice+=1;
                  html+="<tr><td>"+indice
                  +"</td><td>"+valor.Titulo
                  +"</td><td>"+valor.Mensaje
                  +"</td><td>"+valor.Fecha                        
                  +"</td><td>"+"<a href='modificar.php?id="+valor.ArchivoURL+"'>"+"<center>"+valor.ArchivoURL+"</center>"+"</a>"                                                
                  +"</td><td>"+valor.Calificacion
                  +"</td><td>"+"<a href='modificar.php?id="+valor.Id+"'>"+"<center>"+'|----->'+"</center>"+"</a>"                        
                  +"</td></tr>";                                                        
              });        
          $("#listas").html(html);
  
      });           
}
//REGSTRAR
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

function registrar()
{
    var idu=$('#idu').val();    
    var usuario=$('#usuario').val();
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
            editar(idu,usuario,password);                                                            
        }
    }
    else
    {
        alert('Debe introducir la misma contraseña');
    }               
}   

function editar(idu,usuario,password)
{           
    $.ajax(
    {
        url:'../Controllers/alumno.php',
        type:'POST',
        data:"Usuario="+usuario+"&password="+password+"&boton=modificar"        
    }).done(function(resp){        
        $.ajax
        ({
                url:"http://localhost:8080/PHP/web/Alumnos/Service.php?Id="+idu+"&Usuario="+usuario+"&Password="+resp,
                type:'PUT',
                data:""
        }).done(function(resp){
                alert("Modificado con exito.");      
                document.getElementById("password").value = "";
                document.getElementById("password2").value = "";                                
                document.getElementById("usuario").value = usuario;                
        });        
    });

        
}
//CERRAR SESION
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
    location.href='../Views/lista_tareas';        
}
function perfil(valor,valor1,valor2,valor3){    
    img="<div class='form-group'>"
    +"<label class='control-label col-xs-5' >Cambiar:</LABEL>"
    +"<div class='col-xs-5'>"   
    +"<input style='display:none'  id='idu' name='idu' type='text' value='"+valor+"' >"     
    +"<input  type='file' name='file[]' multiple class='btn btn-danger' class='form-control' required><input type='submit' value='Actualizar imagen' class='btn btn-success' id='sub-but'>"
    +"<progress id='prog' max='100' value='0' style='display: none'></progress>"
    +"<div id='amount_reached'></div>"
    +"</div >"
    +"</div>	";

    html="<div class='form-group'>"
    +"<div class='form-group'><label for='apellidos' class='control-label col-xs-5'>Imagen :</label>"
        +"<div  class='col-xs-5'><img id='fle'  class=control-img col-xs-5' width='50' height='50' src='"+valor2+"'>"                
        +"</div></div>"                                        
        +"<label for='nombre' class='control-label col-xs-5'>Usuario :</label>"+
        "<div class='col-xs-5'>"
        +"<input id='usuario' name='usuario' type='text' class='form-control' value='"+valor3+"' placeholder='Ingrese sus Nombres'>"        
        +"</div></div>"        
        +"<div class='form-group'>"
                +"<label for='password' class='control-label col-xs-5'>Contraseña:</label><div class='col-xs-5'>"
        +"<input id='password' name='password' type='password' class='form-control' placeholder='Ingrese su contraseña'>"
        +"</div></div><div class='form-group'><label for='pass2' class='control-label col-xs-5'>Repetir Contraseña:</label>"
        +"<div class='col-xs-5'>"
        +"<input style='display:none' id='idu' name='idu' type='text' value='"+valor+"' >"
        +"<input id='password2' name='password2' type='password' class='form-control' placeholder='Ingrese su contraseña'></div></div>"
        +"<div class='modal-footer'>  "
        +"<button type='button' class='btn btn-danger' data-dismiss='modal'>Cerrar</button>"        
        +"<input type='submit' value='Editar perfil' id='sub-but'  class='btn btn-success'>"
    +"</div>" 
    ;
    /**
     * 
     */
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
                        document.getElementById('fle').src = ''+vaa;                
                        
                        var idu=$('#idu').val();
                        //alert(idu);
                        A(idu,vaa);
                        setTimeout(function(){
                            $('#sub-but').val('Actualizar imagen');
                            
                        },1000);
                    },
                });
                           
    });
    
    $("#formCliente").on('submit',function(e){
        e.preventDefault();                          
        registrar();
       
    });
});
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
//INICIAR SESION
function confirmar()
{
    var email = $('#email').val();
    var password = $('#password').val();            
    $.getJSON("http://localhost:8080/PHP/web/Alumnos/Service.php?Usuario="+email+"&Password="+password)
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
