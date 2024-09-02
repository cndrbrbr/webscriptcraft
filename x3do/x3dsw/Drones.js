// (c)2022 cndrbrbr 
'use strict';
const Filex3 = require('./Filex3');
const fs = new Filex3("name"+Date.now());
// ----------------------------------------------------------------
//  Drone klasse fuer scriptcraft
// ----------------------------------------------------------------
class Drones {
  constructor(path) { 
     this.curw = 0;
     this.curh = 0;
     this.curd = 0;  // must be inverted forward is negative, backward is positive
     this.direction = 0;
     fs.setPath (path);
     //console.log("file "+ fs.getFilename ());
  }
// ----------------------------------------------------------------
//  write x3d html file
// ----------------------------------------------------------------

  writethefile(){
     return fs.writeTheFile ();
  }
// ----------------------------------------------------------------
//  debug
// ----------------------------------------------------------------

 printpos ()
  {
    //console.log("Position "+this.direction +" " + this.curw +" " + this.curh +" " + this.curd );   
   
  }
// ----------------------------------------------------------------
// bauen box
// ----------------------------------------------------------------
/*
    box (material,w,h,d){
	   console.log('box '+ material +" " + w +" " + h +" " + d );
	   this.printpos ();   

	   //fs.addBoxAt (material,this.curw,this.curh,this.curd);

	   var px = this.curw;
	   var pz = this.curh;
	   var py = this.curd;

	   if (this.direction == 0) { // nach vorne sehen
		fs.addBoxAtOnce (material,px,pz,py,w,h,d);
		
	   }
	   if (this.direction == 1) { // rechts 
		var i;// bau-tiefe
		var j;// bau-breite
		var k;// bau-hoehe
		for (k = 0; k < h; k++) { // hoehe
			for (j = 0; j < w; j++) { // breite
				for (i = 0; i < d; i++) { // tiefe
			   		fs.addBoxAt (material,px+i,pz+k,py+j);
				}
			}
		}
	   }
	   if (this.direction == 2) { // nach hinten sehen
		var i;// bau-tiefe
		var j;// bau-breite
		var k;// bau-hoehe
		for (k = 0; k < h; k++) { // hoehe
			for (j = 0; j < w; j++) { // breite
				for (i = 0; i < d; i++) { // tiefe
			   		fs.addBoxAt (material,px+j,pz+k,py + i);
				}
			}
		}

	   }
	   if (this.direction == 3) { // links
		var i;// bau-tiefe
		var j;// bau-breite
		var k;// bau-hoehe
		for (k = 0; k < h; k++) { // hoehe
			for (j = 0; j < w; j++) { // breite
				for (i = 0; i < d; i++) { // tiefe
			   		fs.addBoxAt (material,px-i,pz+k,py+j);
				}
			}
		}

	   }

  }
*/


   box (material,w,h,d){
	   //console.log('box '+ material +" " + w +" " + h +" " + d );
	   this.printpos ();   

	   //fs.addBoxAt (material,this.curw,this.curh,this.curd);

	   var px = this.curw;
	   var pz = this.curh;
	   var py = this.curd;

	   if (this.direction == 0) { // nach vorne sehen
		var i;// bau-tiefe
		var j;// bau-breite
		var k;// bau-hoehe
		for (k = 0; k < h; k++) { // hoehe
			for (j = 0; j < w; j++) { // breite
				for (i = 0; i < d; i++) { // tiefe
			   		fs.addBoxAt (material,px+j,pz+k,py - i);
				}
			}
		}
	   }
	   if (this.direction == 1) { // rechts 
		var i;// bau-tiefe
		var j;// bau-breite
		var k;// bau-hoehe
		for (k = 0; k < h; k++) { // hoehe
			for (j = 0; j < w; j++) { // breite
				for (i = 0; i < d; i++) { // tiefe
			   		fs.addBoxAt (material,px+i,pz+k,py+j);
				}
			}
		}
	   }
	   if (this.direction == 2) { // nach hinten sehen
		var i;// bau-tiefe
		var j;// bau-breite
		var k;// bau-hoehe
		for (k = 0; k < h; k++) { // hoehe
			for (j = 0; j < w; j++) { // breite
				for (i = 0; i < d; i++) { // tiefe
			   		fs.addBoxAt (material,px+j,pz+k,py + i);
				}
			}
		}

	   }
	   if (this.direction == 3) { // links
		var i;// bau-tiefe
		var j;// bau-breite
		var k;// bau-hoehe
		for (k = 0; k < h; k++) { // hoehe
			for (j = 0; j < w; j++) { // breite
				for (i = 0; i < d; i++) { // tiefe
			   		fs.addBoxAt (material,px-i,pz+k,py+j);
				}
			}
		}

	   }

  }


// ----------------------------------------------------------------
// bauen box0
// ----------------------------------------------------------------

   box0 (material,w,h,d){
	   //console.log('box0 '+ material +" " + w +" " + h +" " + d );
	   this.printpos ();   
	   if (material == 'undefined') {
		console.log(mterial + " is undefined");
		material = "quartz_block_side.png";
	   }
		
	   //fs.addBoxAt (material,this.curw,this.curh,this.curd);

	   var px = this.curw;
	   var pz = this.curh;
	   var py = this.curd;

	   if (this.direction == 0) { // nach vorne sehen
		var i;// bau-tiefe
		var j;// bau-breite
		var k;// bau-hoehe
		for (k = 0; k < h; k++) { // hoehe : alle
			for (j = 0; j < w; j++) { // breite : erste und letzte
				for (i = 0; i < d; i++) { // tiefe : erste und letzte
					if ((i==0)||(i==d-1)|| (j==0)||(j==w-1))
				   		fs.addBoxAt (material,px+j,pz+k,py - i);
				}
			}
		}
	   }
	   if (this.direction == 1) { // rechts 
		var i;// bau-tiefe
		var j;// bau-breite
		var k;// bau-hoehe
		for (k = 0; k < h; k++) { // hoehe
			for (j = 0; j < w; j++) { // breite
				for (i = 0; i < d; i++) { // tiefe
					if ((i==0)||(i==d-1)|| (j==0)||(j==w-1))
			   		    fs.addBoxAt (material,px+i,pz+k,py+j);
				}
			}
		}
	   }
	   if (this.direction == 2) { // nach hinten sehen
		var i;// bau-tiefe
		var j;// bau-breite
		var k;// bau-hoehe
		for (k = 0; k < h; k++) { // hoehe
			for (j = 0; j < w; j++) { // breite
				for (i = 0; i < d; i++) { // tiefe
					if ((i==0)||(i==d-1)|| (j==0)||(j==w-1))
			   		   fs.addBoxAt (material,px+j,pz+k,py + i);
				}
			}
		}

	   }
	   if (this.direction == 3) { // links
		var i;// bau-tiefe
		var j;// bau-breite
		var k;// bau-hoehe
		for (k = 0; k < h; k++) { // hoehe
			for (j = 0; j < w; j++) { // breite
				for (i = 0; i < d; i++) { // tiefe
					if ((i==0)||(i==d-1)|| (j==0)||(j==w-1))
			   		   fs.addBoxAt (material,px-i,pz+k,py+j);
				}
			}
		}

	   }

  }

// ----------------------------------------------------------------
//  drehen
// ----------------------------------------------------------------

  turn(amount)
  {
   if (amount == 0) amount = 1;
   this.direction+=amount;
   this.direction = this.direction%4;
  // console.log('turn '+ amount );   
   this.printpos ();    
  }
// ----------------------------------------------------------------
//  vor und zurueck
// ----------------------------------------------------------------
  fwd (amount)
  {
   if (amount == 0) amount = 1;
   if (this.direction == 0) {this.curd-=amount;}
   if (this.direction == 1) {this.curw+=amount;}
   if (this.direction == 2) {this.curd+=amount;}
   if (this.direction == 3) {this.curw-=amount;}
   //console.log('fwd '+ amount + " "); 
  }
  back (amount)
  {
   if (amount == 0) amount = 1;
   if (this.direction == 0) {this.curd+=amount;}
   if (this.direction == 1) {this.curw-=amount;}
   if (this.direction == 2) {this.curd-=amount;}
   if (this.direction == 3) {this.curw+=amount;}
  // console.log('back '+ amount + " "); 
  }
// ----------------------------------------------------------------
//  hoch und runter
// ----------------------------------------------------------------
  up (amount)
  {
   if (amount == 0) amount = 1;
   this.curh+=amount;
   //console.log('up '+ amount + " "); 
  }
  down (amount)
  {
   if (amount == 0) amount = 1;
   this.curh-=amount;
   //console.log('down '+ amount + " "); 
  }

// ----------------------------------------------------------------
//  rechts und links
// ----------------------------------------------------------------
  right (amount)
  {
   if (amount == 0) amount = 1;
   if (this.direction == 0) {this.curw+=amount;}
   if (this.direction == 1) {this.curd+=amount;}
   if (this.direction == 2) {this.curw-=amount;}
   if (this.direction == 3) {this.curd-=amount;}
   //console.log('right '+ amount + " "); 
  }
  left (amount)
  {
   if (amount == 0) amount = 1;
   if (this.direction == 0) {this.curw-=amount;}
   if (this.direction == 1) {this.curd-=amount;}
   if (this.direction == 2) {this.curw+=amount;}
   if (this.direction == 3) {this.curd+=amount;}
   //console.log('left '+ amount + " "); 
  }
}

module.exports = Drones;
