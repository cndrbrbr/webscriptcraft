// (c)2022 cndrbrbr 
const blocks = require('./x3dsw/blocks');
const Drones = require('./x3dsw/Drones');
const drone = new Drones("/var/www/openb3/x3ddata/");
 function draw1() {
 drone.box(blocks.diamond,2,2,2);
};function drawM() {
drone.box(blocks.dirt,2,2,2);
drone.up(1);
drone.box(blocks.quartz,2,2,2);
draw1();
};
drawM ();

var erg=  drone.writethefile();
process.stdout.write (erg);
