<?php

// file_get_contents() ---- Nos devuelve el contenido de un archivo y lo pasa como argumento

// echo file_get_contents('datos.txt');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: appiclation/json; charset=utf-8");

$metodo = $_SERVER['REQUEST_METHOD'];

    include "./conexion.php";
    $mysqli = conectarDB();
    $JSONData = file_get_contents('php://input');
    $dataObject = json_decode($JSONData);
        session_start();
        $mysqli->set_charset('utf-8');

    $usuario = $dataObject-> usuario;
    $entidad = $dataObject-> entidad;
    $contrasena = $dataObject-> contrasena;



    if($nuevaConsulta = $mysqli->prepare("SELECT usuario,entidad,contrasena FROM usuarios WHERE usuario = ?")){
        $nuevaConsulta->bind_param('s',$usuario);
        $nuevaConsulta->execute();
        $resultado = $nuevaConsulta->get_result();
        if ($resultado->num_rows == 1) {
            $datos = $resultado->fetch_assoc();
            if (($entidad == $datos['entidad']) && ($contrasena == $datos['contrasena']) ) {
                $_SESSION['usuario'] = $datos['usuario'];
                echo json_encode(array('conectado'=>true,'usuario'=>$datos['usuario'],'contrasena'=>$datos['contrasena'],'entidad'=>$datos['entidad']));
            }else {
                echo json_encode(array('conectado'=>false,'error'=>'Entidad/Contraseña incorrectas'));
            }
        }else{
            echo json_encode(array('conectado'=>false, 'error'=>'el usuario no existe'));
        }
        $nuevaConsulta->close();        
    }else {
        echo json_encode(array('conectado'=>false, 'error'=>'no se pudo conectar a la BD'));
    }

$mysqli->close();

?>