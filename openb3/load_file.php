
<?php
// (c)2022 cndrbrbr 


//$name = "cndrbrbr3";
//echo 'start';
//echo $codedir;

//$request_body = file_get_contents('php://input');
//echo "FILENAME".$_GET["file"];
 
//$dlm = '!^!';

//$theUserdata = explode("!^!",$request_body);
//$num = count($theUserdata);
//if ($num == 1)
//{

	//$filename = $theUserdata[0];

	$file = file_get_contents("/var/www/openb3/data"."/".$_GET["file"], true);
	print_r($file);

//}
?>
