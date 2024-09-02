
<?php
// (c)2022 cndrbrbr 

$request_body = file_get_contents('php://input');
//echo $request_body;


$path = "/var/www/openb3/data";
 //echo $path;

$files = scandir($path);
// print_r ($files);

$xmlfiles = glob($path."/*.xml");
// print_r($jsfiles);

foreach ($xmlfiles as &$value) {
	$sp = explode("/",$value);
        $value = $sp[count($sp)-1];
}
echo  implode("$",$xmlfiles);

?>
