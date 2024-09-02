// (c)2022 cndrbrbr 
'use strict';
var fs = require('fs');

class Filex3 {
  constructor(name,path) {
        this.justfilename = name+".html";
	this.filename = "";
	this.toggler = true;
	//console.log("filename "+name+".html");
	this.data = "<html>\n<head>\n<script type='text/javascript' src='http://www.x3dom.org/download/x3dom.js'></script>\n"; 
	this.data += "<link rel='stylesheet' type='text/css' href='http://www.x3dom.org/download/x3dom.css'></link>"; 
	this.data += "</head>\n<body>\n";
	this.data += "<x3d width='800px' height='800px'>\n<scene><transform translation='0 -3 0'>\n";

  }
  setPath (path){
	this.filename = path+this.justfilename;
  }
  getFilename ()
  { return this.filename;}

  writeTheFile (){
   	this.data +=  "\n</transform>\n</scene>\n</x3d>\n</body>\n</html>";
	fs.writeFile(this.filename, this.data, function (err) {
	  if (err) return console.log(err);
	  //console.log('Hello World > helloworld.txt');
	});
      	return this.justfilename;
   }
   addBoxAt (material,x,z,y) {
	this.data += "\n<transform translation='"+x+" "+z+" "+y+"'>";
	this.data += "\n<shape>\n<appearance>";
/*	if (this.toggler){ 
		this.toggler = false;
		this.data += "\n<material diffuseColor='0.8 0.5 0.5'></material>"; 
	}
	else {
		this.data += "\n<material diffuseColor='0.2 0.2 0.2'></material>"; 
	}
*/
	this.data += "\n<ImageTexture  url=\"./blocks/"+material+"\"><ImageTexture/>	";
	this.data += "\n</appearance>\n<box size='1,1,1' useGeoCache='false'></box>\n</shape>\n</transform>";
	
   }

    addBoxAtOnce (material,x,z,y,w,h,d){
	this.data += "\n<transform translation='"+x+" "+z+" "+y+"'>";
	this.data += "\n<shape>\n<appearance>";
	this.data += "\n<ImageTexture scale='false' url=\"./blocks/"+material+"\"><ImageTexture/>	";
	this.data += "\n</appearance>\n<box  size='"+w+","+h+","+d+"' ></box>\n</shape>\n</transform>";

    }

   
 }
 module.exports = Filex3;
