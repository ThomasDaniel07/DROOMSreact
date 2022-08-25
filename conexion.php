<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");

$method = $_SERVER['REQUEST_METHOD'];

function conectarDB(){

  $servidor = "localhost";
  $usuario = "root";
  $password = "";
  $bd = "drooms";
  //$bd = "cajaherr_datos";
  

    $conexion = mysqli_connect($servidor, $usuario, $password,$bd);

        if($conexion){
            // echo json_encode(array ('ConectToDB'=>true));
        }else{
            echo json_encode(array('ERROtoConectDB'=>'revisaHueva'));
        }

    return $conexion;
}

?>


