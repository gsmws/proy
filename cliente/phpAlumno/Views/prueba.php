<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<div>
<form id="jsonForm" action="/echo/json/" method="post">Message:
    <input type="text" name="message" value="Hello JSON" />
    <input id="HHHHHHHHH" type="button" onclick="formSubmit(this)" value="onclick working well">
    <input type="submit" value="submit is working" />
    <input type="time" name="" value="" placeholder="">
    <data value="" type="data">
</form>
    
</div>
<script type="text/javascript" src="http://malsup.github.com/jquery.form.js"></script>
<script src="../Resources/js/jquery-1.11.2.js"></script>
<script src="http://malsup.github.com/jquery.form.js"></script> 

<script>

function formSubmit(inputB) {
    alert('click does not work');
    var formulario = inputB.form;
    var idForm = inputB.form.id;
    var test = $('#jsonForm');

    //debugger;
    $('#' + idForm).ajaxSubmit({
        dataType: 'json',
        beforeSubmit: showRequest,
        success: processJson
    });
    return false;
}

function processJson(data) {
    //debugger;
    alert("it worked" + data);
    console.log("respose: " + data);
}

function showRequest(formData, jqForm, options) {
    //debugger;
    var queryString = $.param(formData);
    console.log('About to submit: \n' + queryString + '\n');
    return true;
}

$('#jsonForm').ajaxForm({
    dataType: 'json',
    beforeSubmit: showRequest,
    success: processJson
});
</script>

</body>
</html>