// (c)2022 cndrbrbr 
<?php
session_start();

$x3dnodesoftwaredir = "/var/www/x3do/";
$outputpath = "/var/www/openb3/x3ddata/";

$request_body = file_get_contents('php://input');

$name = date("YmdHmi");
$filename = $x3dnodesoftwaredir.$name.".js";

$file = fopen($filename,"w");
fwrite($file, $request_body);
fclose($file);

$output=null;
$retval=null;

$call = "nodejs ".$x3dnodesoftwaredir."x3dsw/ex2.js ".$filename." ".$outputpath;
//echo $call;
exec($call, $output, $retval);

$call = "nodejs ".$filename;
//echo $call;
exec($call, $output, $retval);

unlink($filename);

//echo "\n".$output[0];
//echo "\n".$output[1];
//echo "\n".$output[3];
echo "\n".$output[0];
//echo "\n".$retval;
?>
