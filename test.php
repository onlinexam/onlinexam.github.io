<?php

header('Access-Control-Allow-Origin: *');

if(isset($_POST['abc'])){
    echo "This is abbc";
}else{
    echo "This is normal";
}


?>