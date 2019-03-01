function ListaTareas(valo)
{
	$(document).ready(function(){            
        $.getJSON("http://localhost:8080/PHP/web/Tareas/Service.php?IdAlumno="+valo)
            .done(function(datos_del_ws){        
                html="<table class='table table-bordered'><center><thead><tr>"
                    +"<th><center>Id</center></th><th><center>Titulo</center></th><th><center>Archivo URL</center></th>"
                    +"<th><center>FechaPublicacion</center></th><th><center>FechaLimite</center></th><th ><center>Subir Tarea</center></th></tr></thead></center><tbody>";		
                    $.each(datos_del_ws,function(indice,valor){                                                            
                        indice+=1;
                        html+="<tr><td><center>"+valor.Id
                        +"</center></td><td><center>"+valor.Titulo                        
                        +"</center></td><td>"+"<center><a href='"+valor.ArchivoURL+"' ><center>Descargar </center>"
                        +"</td><td><center>"+valor.FechaPublicacion
                        +"</center></td><td><center>"+valor.FechaLimite        
                        +"</center></td><td>"+"<center><a href='javascript:void(0)' data-toggle='modal' data-target='#responsive' onclick='SubirTarea("+valor.Id+","+valo+")'>"+"</center><center>Subir Tarea</center>"                                                
                        +"</td></tr>";                                                        
                    });        
                $("#lista").html(html);
        
            });	
    });
    //checksi(valo);
    //valor(valo);
    tareasAlumnos(valo);    
}

function SubirTarea(tarea,alumno)
{
//    alert("Recuerda elegir el archivo correcto, una vez que envies la tarea no se podra modificar.");
    ///phpmyadmin mysql  calificacion =null, evaluado=null, mensaje=null
    //alert("Id Tarea: "+valor+" y Id Usuario: "+valo);
    img="<div class='form-group'>"
    +"<label class='control-label col-xs-5' >Cambiar:</LABEL>"
    +"<div class='col-xs-5'>"       
    +"<input style='display:none' value='"+tarea+"'  id='idta' name='idta' type='text'  >"     
    +"<input style='display:none' value='"+alumno+"'  id='idus' name='idus' type='text'  >"     
    +"<input  type='file' name='file[]' id='file' multiple class='btn btn-danger' class='form-control' required>"
    +"<div class='modal-footer'>  "
    +"<input type='submit' value='Subir Tarea' class='btn btn-success' id='sub-but'>"    
    +"<button type='button' class='btn btn-danger' data-dismiss='modal'>Cerrar</button>"
    +"<progress id='prog' max='100' value='0' style='display: none'></progress>"
    +"<div id='amount_reached'></div>"
    +"</div >"    
    +"</div>	";
    $("#formCliente").html(img);     

}

function check(box,valor) 
{
    if (box.checked) 
    {
      document.getElementById("checkboxs").checked=false
      document.getElementById("checkboxsi").checked=false
      var b=1;
      tareasEvaluadas(b,valor);
    }
}

function checks(box,valor) {
    if (box.checked) 
    {
      document.getElementById("checkbox").checked=false
      document.getElementById("checkboxsi").checked=false 
      var b=0;
      tareasEvaluadas(b,valor);
    }
}

function checksi(box,valor) {
    if (box.checked) {
    document.getElementById("checkbox").checked=false
    document.getElementById("checkboxs").checked=false
    tareasAlumnos(valor);
    }
}  

function tareasAlumnos(valor)
{    
      $(document).ready(function(){            
          $.getJSON("http://localhost:8080/PHP/web/TareasAlumnos/Service.php?IdAlumno="+valor)
              .done(function(datos_del_ws){                
                  html="<table class='table table-bordered'>"
                      +"<center><thead><tr><th>#</th>"
                      +"<th>Titulo</th><th>Mensaje</th>"
                      +"<th>Fecha</th><th>Tarea</th><th>Calificacion</th>"
                      +"</tr></thead></center><tbody>";     
                      $.each(datos_del_ws,function(indice,valor){                                                            
                          indice+=1;
                          html+="<tr><td>"+indice
                          +"</td><td>"+valor.Titulo
                          +"</td><td>"+valor.Mensaje
                          +"</td><td>"+valor.Fecha                        
                          +"</td><td>"+"<a href='"+valor.ArchivoURL+"' >Descargar "
                          +"</td><td>"+valor.Calificacion                          
                          +"</td></tr>";                                                        
                      });        
                  $("#listas").html(html);
          
              }); 
      });
}

function tareasEvaluadas(box,valor)
  {
      //alert(box);
      //alert(valor);
      $.getJSON("http://localhost:8080/PHP/web/TareasAlumnos/Service.php?Evaluado="+box+"&IdAlumno="+valor)
      .done(function(datos_del_ws){        
          html="<table class='table table-bordered'>"
              +"<center><thead><tr><th>#</th>"
              +"<th>Titulo</th><th>Mensaje</th>"
              +"<th>Fecha</th><th>Tarea</th><th>Calificacion</th>"
              +"</tr></thead></center><tbody>";     
              $.each(datos_del_ws,function(indice,valor){                                                            
                  indice+=1;
                  html+="<tr><td>"+indice
                  +"</td><td>"+valor.Titulo
                  +"</td><td>"+valor.Mensaje
                  +"</td><td>"+valor.Fecha                        
                  +"</td><td>"+"<a href='"+valor.ArchivoURL+"' >Descargar "
                  +"</td><td>"+valor.Calificacion
                  
                  +"</td></tr>";                                                        
              });        
          $("#listas").html(html);
  
      });           
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
    $("#formCliente").on('submit',function(e){
      //  alert("subir tarea");
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
                        $('#sub-but').val('Actualizando Tarea!!');
                        var va="http://localhost:8080/PHP/cliente/phpAlumno/Views/";
                        var vaa=va+val;                
//                        document.getElementById('fle').src = ''+vaa;                
                        var idus=$('#idus').val();    
                        var idta=$('#idta').val();    
                        //alert(vaa);
                        //alert(idta);
                        //alert(idus);                        
                        AgregarTA(vaa,idta,idus);                        
                        setTimeout(function(){
                            $('#sub-but').val('Actualizar Tarea');                            
                            
                        },1000);
                    },
                });
                           
    });    
    $("#formClientes").on('submit',function(e){
        e.preventDefault();                          
        registrar();
       
    });
});

function AgregarTA(archivo,tarea,usuario)
{        
    $.ajax
    ({
        url:"http://localhost:8080/PHP/web/TareasAlumnos/Service.php?IdTarea="+tarea+"&IdAlumno="+usuario+"&ArchivoURL="+archivo,
        type:'POST',
        data:""
    }).done(function(resp){            
            ListaTareas(usuario);            

    });        
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
