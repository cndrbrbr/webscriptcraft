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

  var entryFunc = null;   // function name marked with "// run: <name>"
  var funcNames = [];     // all defined function names (fallback)

  lines.forEach(function(line) {
    // Skip legacy ScriptCraft lines not needed in JSMN
    if (line.startsWith('var drone')) return;
    if (line.startsWith('drone = box(')) return;          // old init_drone
    if (line.match(/^\s*exports\.\w+\s*=/)) return;       // old exports

    // Detect entry point comment: "// run: funcName"
    var runMatch = line.match(/^\/\/\s*run:\s*(\w+)/);
    if (runMatch) {
      entryFunc = runMatch[1];
      return; // don't emit the comment line into the Node script
    }

    // Collect all function names as fallback
    var funcMatch = line.match(/^function\s+(\w+)\s*\(\)/);
    if (funcMatch) {
      funcNames.push(funcMatch[1]);
    }

    res += line + "\n";
  });

  // Determine which function(s) to call for the 3D preview
  if (entryFunc) {
    res += entryFunc + "();\n";
  } else if (funcNames.length > 0) {
    // Call the last defined function (typically the main/entry one)
    res += funcNames[funcNames.length - 1] + "();\n";
  }

  res += "var erg = drone.writethefile();\n";
  res += "process.stdout.write(erg);\n";

} catch (err) {
  console.error(err);
}

fs.writeFileSync(process.argv[2], res, { encoding: "utf8", flag: "w", mode: 0o666 });
