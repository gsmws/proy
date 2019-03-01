<?php
if($_SERVER['REQUEST_METHOD'] == 'POST' )
{
    $folder = 'uploats/';
    $threshold = count($_FILES['file']['name']);
    for($i = 0; $i<$threshold; $i++){
        $filename = $_FILES['file']['name'][$i];
        $path = $folder.$filename;
        if(strpos($filename,'.php') == true){
            echo "Choose another FIle!";
        }
        elseif (strpos($filename,'.exe') == true){
            echo "Choose another FIle!";
        }
        else {
            if(move_uploaded_file($_FILES['file']['tmp_name'][$i],$path)){
                echo $path;
            }
            else {
                echo "File $i Upload Failed! :/";
            }
        }
    }
}
else
{
    echo "error";
}

?>