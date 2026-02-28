// (c)2022 cndrbrbr — updated 2026 for JSMN plugin + Blockly v12

var JSMN_MATERIALS = [
  ["Dirt","DIRT"], ["Grass","GRASS_BLOCK"], ["Stone","STONE"],
  ["Cobblestone","COBBLESTONE"], ["Quartz","QUARTZ_BLOCK"],
  ["Sandstone","SANDSTONE"], ["Diorite","DIORITE"], ["Andesite","ANDESITE"], ["Granite","GRANITE"],
  ["Glass","GLASS"], ["Ice","ICE"], ["Snow","SNOW_BLOCK"], ["Gravel","GRAVEL"],
  ["Glowstone","GLOWSTONE"], ["Beacon","BEACON"], ["Obsidian","OBSIDIAN"],
  ["Diamond","DIAMOND_BLOCK"], ["Emerald","EMERALD_BLOCK"],
  ["Iron","IRON_BLOCK"], ["Gold","GOLD_BLOCK"],
  ["Air","AIR"],
  ["White Wool","WHITE_WOOL"], ["Red Wool","RED_WOOL"], ["Orange Wool","ORANGE_WOOL"],
  ["Yellow Wool","YELLOW_WOOL"], ["Lime Wool","LIME_WOOL"], ["Green Wool","GREEN_WOOL"],
  ["Blue Wool","BLUE_WOOL"], ["Purple Wool","PURPLE_WOOL"],
  ["Magenta Wool","MAGENTA_WOOL"], ["Pink Wool","PINK_WOOL"]
];

var JSMN_DIRECTIONS = [["up","up"], ["down","down"], ["fwd","fwd"], ["back","back"], ["left","left"], ["right","right"], ["turn","turn"]];

Blockly.Blocks['boxcmd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("box")
        .appendField(new Blockly.FieldDropdown(JSMN_MATERIALS), "NAME")
        .appendField(new Blockly.FieldNumber(2, 1, 50), "width")
        .appendField(new Blockly.FieldNumber(2, 1, 50), "height")
        .appendField(new Blockly.FieldNumber(2, 1, 50), "depth");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip("Build a solid box: material, width, height, depth");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['box0'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["box0","box0"],["box","box"]]), "Boxtype");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(JSMN_MATERIALS), "NAME");
    this.appendDummyInput().appendField("W");
    this.appendValueInput("X").setCheck("Number");
    this.appendDummyInput().appendField("H");
    this.appendValueInput("Z").setCheck("Number");
    this.appendDummyInput().appendField("D");
    this.appendValueInput("Y").setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setInputsInline(true);
    this.setTooltip("Build a hollow box (box0) or solid box: material, W, H, D");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(JSMN_DIRECTIONS), "wayto")
        .appendField(new Blockly.FieldNumber(1, 0, 100), "amount");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Move the drone");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['movevar'] = {
  init: function() {
    this.appendDummyInput().appendField("move");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown(JSMN_DIRECTIONS), "Movtype");
    this.appendDummyInput().appendField("by");
    this.appendValueInput("Amount").setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setInputsInline(true);
    this.setTooltip("Move the drone by a variable amount");
    this.setHelpUrl("");
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
    this.setTooltip("Start a function — run with /rs functionName in Minecraft");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['funcend'] = {
  init: function() {
    this.appendDummyInput().appendField("end function");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("End the function");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['exports'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("preview function")
        .appendField(new Blockly.FieldTextInput("draw"), "exportname");
    this.setPreviousStatement(true, null);
    this.setColour(290);
    this.setTooltip("Mark this function as the entry point for 3D preview");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['functioncall'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldTextInput("draw"), "funcname")
        .appendField("()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Call a function");
    this.setHelpUrl("");
  }
};

// Legacy blocks — kept so old saved XML files load without errors
Blockly.Blocks['drone'] = {
  init: function() {
    this.appendDummyInput().appendField("(drone — not needed in JSMN)");
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("Not needed — drone is provided by the JSMN plugin");
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
  }
};

Blockly.Blocks['init_drone'] = {
  init: function() {
    this.appendDummyInput().appendField("(init drone — not needed in JSMN)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("Not needed — drone is initialized by the JSMN plugin");
  }
};
