// (c)2022 cndrbrbr — updated 2026 for JSMN plugin + Blockly v12
// Generators use Blockly.JavaScript.forBlock (Blockly v10+ API)

// In Blockly v12 browser/CDN mode, Order constants live on window.javascript.Order.
// Fallback to numeric literals (ORDER_ATOMIC = 0, ORDER_NONE = 99) for safety.
var _ORDER_ATOMIC = (typeof javascript !== 'undefined' && javascript.Order)
  ? javascript.Order.ATOMIC
  : 0;  // ORDER_ATOMIC = 0 across all Blockly versions

Blockly.JavaScript.forBlock['boxcmd'] = function(block) {
  var mat    = block.getFieldValue('NAME');
  var width  = Math.floor(block.getFieldValue('width'));
  var height = Math.floor(block.getFieldValue('height'));
  var depth  = Math.floor(block.getFieldValue('depth'));
  return 'drone.box("' + mat + '",' + width + ',' + height + ',' + depth + ');\n';
};

Blockly.JavaScript.forBlock['box0'] = function(block) {
  var type   = block.getFieldValue('Boxtype');
  var mat    = block.getFieldValue('NAME');
  var valueW = Blockly.JavaScript.valueToCode(block, 'X', _ORDER_ATOMIC) || '1';
  var valueH = Blockly.JavaScript.valueToCode(block, 'Z', _ORDER_ATOMIC) || '1';
  var valueD = Blockly.JavaScript.valueToCode(block, 'Y', _ORDER_ATOMIC) || '1';
  return 'drone.' + type + '("' + mat + '",' + valueW + ',' + valueH + ',' + valueD + ');\n';
};

Blockly.JavaScript.forBlock['move'] = function(block) {
  var dir    = block.getFieldValue('wayto');
  var amount = Math.floor(block.getFieldValue('amount'));
  return 'drone.' + dir + '(' + amount + ');\n';
};

Blockly.JavaScript.forBlock['movevar'] = function(block) {
  var dir    = block.getFieldValue('Movtype');
  var amount = Blockly.JavaScript.valueToCode(block, 'Amount', _ORDER_ATOMIC) || '1';
  return 'drone.' + dir + '(Math.floor(' + amount + '));\n';
};

Blockly.JavaScript.forBlock['funcbegin'] = function(block) {
  var name = block.getFieldValue('funcname');
  return 'function ' + name + '() {\n';
};

Blockly.JavaScript.forBlock['func'] = function(block) {
  var name = block.getFieldValue('funcname');
  return 'function ' + name + '() {\n';
};

Blockly.JavaScript.forBlock['funcend'] = function(block) {
  return '};\n';
};

Blockly.JavaScript.forBlock['exports'] = function(block) {
  var name = block.getFieldValue('exportname');
  // Comment used by 3D preview to find the entry point.
  // In Minecraft: /rs <name>
  return '// run: ' + name + '\n';
};

Blockly.JavaScript.forBlock['functioncall'] = function(block) {
  var name = block.getFieldValue('funcname');
  return name + '();\n';
};

// Legacy blocks — generate nothing so old XML still works
Blockly.JavaScript.forBlock['drone'] = function(block) {
  return '';
};

Blockly.JavaScript.forBlock['init_drone'] = function(block) {
  return '';
};
