Blockly.JavaScript['boxcmd'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var number_width = block.getFieldValue('width');
  var number_height = block.getFieldValue('height');
  var number_depth = block.getFieldValue('depth');
  var value_blocks = Blockly.JavaScript.valueToCode(block, 'blocks', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var start; 
  start = 'drone.box(blocks.';
  var code = start +dropdown_name+','+number_width+','+ number_height +','+ number_depth +');\n';
  return code;
};

Blockly.JavaScript['drone'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code =  'var drone;\n';
  return code;
};

Blockly.JavaScript['move'] = function(block) {
  var dropdown_wayto = block.getFieldValue('wayto');
  var number_amount = block.getFieldValue('amount');
  var value_moveparam = Blockly.JavaScript.valueToCode(block, 'moveparam', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var start;
  start = 'drone.';
  var code = start +dropdown_wayto+'('+number_amount+');\n';
  return code;
};

Blockly.JavaScript['func'] = function(block) {
  var text_funcname = block.getFieldValue('funcname');
  var value_functionname = Blockly.JavaScript.valueToCode(block, 'functionname', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'function '+text_funcname+'() {\n';
  return code;
};

Blockly.JavaScript['funcbegin'] = function(block) {
  var text_funcname = block.getFieldValue('funcname');
  var value_functionname = Blockly.JavaScript.valueToCode(block, 'functionname', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'function '+text_funcname+'() {\n';
  return code;
};

Blockly.JavaScript['funcend'] = function(block) {
  var value_funcend = Blockly.JavaScript.valueToCode(block, 'funcend', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '};\n';
  return code;
};

Blockly.JavaScript['exports'] = function(block) {
  var text_exportname = block.getFieldValue('exportname');
  var value_exports = Blockly.JavaScript.valueToCode(block, 'exports', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ' exports.' + text_exportname + ' = '+ text_exportname +';\n';
  return code;
};

Blockly.JavaScript['functioncall'] = function(block) {
  var text_funcname = block.getFieldValue('funcname');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = text_funcname+'();\n';
  return code;
};

Blockly.JavaScript['init_drone'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone = box(blocks.air,1,1,1);\n';
  return code;
};

Blockly.JavaScript['box0'] = function(block) {
  var dropdown_boxtype = block.getFieldValue('Boxtype');
  var dropdown_name = block.getFieldValue('NAME');
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var start; 
  start = 'drone.'+dropdown_boxtype+'(blocks.';
  var code = start +dropdown_name+','+value_x+','+ value_z +','+ value_y +');\n';
  return code;
};

Blockly.JavaScript['movevar'] = function(block) {
  var dropdown_movtype = block.getFieldValue('Movtype');
  var value_amount = Blockly.JavaScript.valueToCode(block, 'Amount', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var start;
  start = 'drone.';
  var code = start +dropdown_movtype+'('+value_amount+');\n';
  return code;
};
