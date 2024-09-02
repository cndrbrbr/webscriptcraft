<?php
// (c)2022 cndrbrbr 

$request_body = file_get_contents('php://input');

//echo $request_body;

function findexportname($thetext)
{
	// <field name="exportname">BaueHaus</field>
    $restoftext = strstr($thetext, 'exportname'); 
	if ($restoftext){
		$result_string = substr("$restoftext",12,strpos($restoftext,"field")-14);
	}
	else {
		//<block type="procedures_defnoreturn" id=".E.(7PeQi/p$[W;qRsE_" x="234" y="27">
		//<field name="NAME">SUS</field>
		$restoftext = strstr($thetext, 'procedures_');
		if ($restoftext){
			
			$restrest = strstr($restoftext,"NAME");
			$result_string = substr("$restrest",6,strpos($restrest,"field")-8);
		}
		else {
			$result_string = "Invalid";
		}
	}
	echo $result_string;
    return $result_string;
}

    $name = findexportname($request_body);
	$file = fopen("/var/www/openb3/data/".$name.".xml","w");
	fwrite($file, $request_body);

	fclose($file);
?>
