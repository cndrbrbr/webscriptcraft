// (c)2022 cndrbrbr 
// =======================================
// ===== injected code block 1 start =====
// =======================================
const blocks = require('./x3dsw/blocks');

const Drones = require('./x3dsw/Drones');
const drone = new Drones();
// =======================================
// ===== injected code block 1  end ======
// =======================================

function atrium3()
{

  drone.box( blocks.quartz , 1, 6, 55 );
  drone.fwd(55);
  drone.turn();
  drone.box( blocks.quartz , 1, 6, 52 );
  drone.fwd(52);
  drone.turn();
  drone.box( blocks.quartz , 1, 6, 55 );
  drone.fwd(55);
  drone.turn();
  drone.box( blocks.quartz , 1, 6, 52 );
  drone.fwd (5);
  drone.box (blocks.wool.blue, 3,5,2);
  drone.fwd (5);
  drone.down (15);
  drone.box0 (blocks.wool.red, 10,10,10);
}

// =======================================
// ===== injected code block 1 start =====
// =======================================
atrium3();
var erg=  drone.writethefile();
process.stdout.write (erg);
//return erg;

// =======================================
// ===== injected code block 1 start =====
// =======================================

