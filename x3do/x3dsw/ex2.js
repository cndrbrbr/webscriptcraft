// (c)2022 cndrbrbr 
'use strict';
// ../20210209090217.js
const readline = require('readline');
const fs = require('fs');

//for (let j = 0; j < process.argv.length; j++) {
//    console.log(j + ' -> ' + (process.argv[j]));
//}

var res = "const blocks = require('./x3dsw/blocks');\n";
res += "const Drones = require('./x3dsw/Drones');\n";
res += "const drone = new Drones(\""+process.argv[3]+"\");\n";

//console.log("=======================================");

try {
    // read contents of the file
    const data = fs.readFileSync(process.argv[2], 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // print all lines
    lines.forEach((line) => {
	if (!line.startsWith("var drone")){
		var pos = line.search("exports.");
		if (pos>0)
		{
			var pos2 = line.search("=");
			var name = line.substr(pos+8, pos2-1-pos-7); 
			res += name +"();";
		}
		else {
			var pos = line.startsWith("drone =");
			if (pos>0)
			{
			   res += line.replace(" = ", ".");
			}
			else {res += line;}
		}
		res += "\n";
	}
        //console.log(line);
    });

    res += "var erg=  drone.writethefile();\n";
    res += "process.stdout.write (erg);\n";

} catch (err) {
    console.error(err);
}
//console.log(res);
var data = fs.writeFileSync(process.argv[2],res, {  encoding: "utf8", 
						      flag: "w", 
						      mode: 0o666 
						    });

//process.stdout.write (erg);
