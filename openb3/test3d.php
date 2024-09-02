
<?php
// (c)2022 cndrbrbr 
//session_start();

$x3dnodesoftwaredir = "/var/www/x3do/";
$outputpath = "/var/www/openb3/x3ddata/";

//$request_body = file_get_contents('php://input');

$request_body ="var drone; \n function draw1() {\n drone.box(blocks.diamond,2,2,2);\n";
$request_body = $request_body. "};";
$request_body = $request_body. "function drawM() {\n";
$request_body = $request_body. "drone = box(blocks.dirt,2,2,2);\n";
$request_body = $request_body. "drone.up(1);\n";
$request_body = $request_body. "drone.box(blocks.quartz,2,2,2);\n";
$request_body = $request_body. "draw1();\n";
$request_body = $request_body. "};\n";
$request_body = $request_body. " exports.drawM = drawM;\n";

echo $request_body;

$name = date("YmdHmi");
$filename = $x3dnodesoftwaredir.$name.".js";
echo $filename;
$file = fopen($filename,"w");
fwrite($file, $request_body);
fclose($file);

$output=null;
$retval=null;

$call = "nodejs ".$x3dnodesoftwaredir."x3dsw/ex2.js ".$filename." ".$outputpath;
echo $call;
exec($call, $output, $retval);

$call = "nodejs ".$filename;
echo $call;
exec($call, $output, $retval);

////unlink($filename);

echo $output[0];
//echo "\n".$retval;
?>
