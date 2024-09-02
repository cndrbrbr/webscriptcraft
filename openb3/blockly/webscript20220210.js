Blockly.Blocks['boxcmd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Box")
        .appendField(new Blockly.FieldDropdown([["quartz","quartz"], ["air","air"], ["dirt","dirt"], ["diamond","diamond"], ["glass","glass"], ["gold","gold"], ["cobblestone","cobblestone"], ["emerald","emerald"], ["iron","iron"], ["sandstone","sandstone"], ["diorite","diorite"], ["snow","snow"], ["gravel","gravel"], ["glowstone","glowstone"], ["beacon","beacon"], ["wool.red","wool.red"], ["wool.blue","wool.blue"], ["wool.green","wool.green"], ["wool.lime","wool.lime"], ["wool.orange","wool.orange"]]), "NAME")
        .appendField(new Blockly.FieldNumber(2, 1, 50), "width")
        .appendField(new Blockly.FieldNumber(2, 1, 50), "height")
        .appendField(new Blockly.FieldNumber(2, 1, 50), "depth");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("box command");
 this.setHelpUrl("https://minecraft-ag.de/wiki/index.php?title=Box");
  }
};

Blockly.Blocks['drone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("var drone"), "NAME");
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["up","up"], ["fwd","fwd"], ["turn","turn"], ["down","down"], ["back","back"]]), "wayto")
        .appendField(new Blockly.FieldNumber(1, 0, 100), "amount");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("Move the drone");
 this.setHelpUrl("https://minecraft-ag.de/wiki/index.php?title=Move");
  }
};

Blockly.Blocks['func'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("function")
        .appendField(new Blockly.FieldTextInput("draw"), "funcname");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("funktion start");
 this.setHelpUrl("https://minecraft-ag.de/wiki/index.php?title=Function");
  }
};

Blockly.Blocks['funcbegin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("function")
        .appendField(new Blockly.FieldTextInput("draw"), "funcname");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("funktion start");
 this.setHelpUrl("https://minecraft-ag.de/wiki/index.php?title=Function");
  }
};

Blockly.Blocks['funcend'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("function end");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("end of the function");
 this.setHelpUrl("https://minecraft-ag.de/wiki/index.php?title=Function");
  }
};

Blockly.Blocks['exports'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("exports function ")
        .appendField(new Blockly.FieldTextInput("draw"), "exportname");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("name of the function to export");
 this.setHelpUrl("https://minecraft-ag.de/wiki/index.php?title=Export");
  }
};

Blockly.Blocks['functioncall'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call function")
        .appendField(new Blockly.FieldTextInput("draw1"), "funcname")
        .appendField("();");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("rufe eine funktion auf");
 this.setHelpUrl("https://minecraft-ag.de/wiki/index.php?title=Function");
  }
};

Blockly.Blocks['init_drone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("init_drone");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Drone initialisieren");
 this.setHelpUrl("https://minecraft-ag.de/wiki/index.php?title=Drone");
  }
};

Blockly.Blocks['box0'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["box","box"], ["box0","box0"], ["boxa","boxa"]]), "Boxtype");
    this.appendDummyInput()
        .appendField("Blocks");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["quartz","quartz"], ["air","air"], ["dirt","dirt"], ["diamond","diamond"], ["glass","glass"], ["gold","gold"], ["cobblestone","cobblestone"], ["emerald","emerald"], ["iron","iron"], ["sandstone","sandstone"], ["diorite","diorite"], ["snow","snow"], ["gravel","gravel"], ["glowstone","glowstone"], ["beacon","beacon"], ["wool.red","wool.red"], ["wool.blue","wool.blue"], ["wool.green","wool.green"], ["wool.lime","wool.lime"], ["wool.orange","wool.orange"]]), "NAME");
    this.appendDummyInput()
        .appendField("X");
    this.appendValueInput("X")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("Z");
    this.appendValueInput("Z")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("Y");
    this.appendValueInput("Y")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setInputsInline(true);
 this.setTooltip("Blöcke bauen");
 this.setHelpUrl("https://minecraft-ag.de/wiki/index.php?title=Box");
  }
};

Blockly.Blocks['movevar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["up","up"], ["fwd","fwd"], ["turn","turn"], ["down","down"], ["back","back"]]), "Movtype");
    this.appendDummyInput()
        .appendField("Amount");
    this.appendValueInput("Amount")
        .setCheck("String");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setInputsInline(true);
 this.setTooltip("Bewege die drone");
 this.setHelpUrl("https://minecraft-ag.de/wiki/index.php?title=Move");
  }
};
