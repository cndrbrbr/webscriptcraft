Blockly.JavaScript['box'] = function(block) {
  var dropdown_blocks = block.getFieldValue('blocks');
  var value_blocktype = Blockly.JavaScript.valueToCode(block, 'blocktype', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
   var start;
  start = 'drone.box(blocks.';
  var code = start +value_blocktype+','+number_width+','+ number_height +','+ number_depth +');\n';
  return code;
};

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
  var code = 'var drone;\n';
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