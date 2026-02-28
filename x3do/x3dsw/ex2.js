// (c)2022 cndrbrbr — updated 2026 for JSMN-style generated code
'use strict';
const fs = require('fs');

// argv[2] = path to generated JS file
// argv[3] = output path for x3d HTML files

var res = "const Drones = require('./x3dsw/Drones');\n";
res += "const drone = new Drones(\"" + process.argv[3] + "\");\n";

try {
  const data  = fs.readFileSync(process.argv[2], 'UTF-8');
  const lines = data.split(/\r?\n/);

  var entryFunc = null;
  var funcNames = [];
  var hasCall   = false;   // true if code already contains funcname();

  lines.forEach(function(line) {
    // Skip legacy ScriptCraft lines
    if (line.startsWith('var drone')) return;
    if (line.startsWith('drone = box(')) return;
    if (line.match(/^\s*exports\.\w+\s*=/)) return;

    // Detect standalone function call: funcname();
    var callMatch = line.match(/^(\w+)\(\);\s*$/);
    if (callMatch) {
      entryFunc = callMatch[1];
      hasCall   = true;
      res += line + "\n";
      return;
    }

    // Collect function definitions as fallback
    var funcMatch = line.match(/^function\s+(\w+)\s*\(\)/);
    if (funcMatch) funcNames.push(funcMatch[1]);

    res += line + "\n";
  });

  // Only add the call if the code doesn't already have one
  if (!hasCall) {
    if (entryFunc) {
      res += entryFunc + "();\n";
    } else if (funcNames.length > 0) {
      res += funcNames[funcNames.length - 1] + "();\n";
    }
  }

  res += "var erg = drone.writethefile();\n";
  res += "process.stdout.write(erg);\n";

} catch (err) {
  console.error(err);
}

fs.writeFileSync(process.argv[2], res, { encoding: "utf8", flag: "w", mode: 0o666 });
