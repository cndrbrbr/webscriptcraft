
<?php
// (c)2022 cndrbrbr 
session_start();

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" >
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Meckminecraft - Programmieren in Minecraft : Primer for programming</title>

 <script src="blockly/google-blockly-02a5712/blockly_compressed.js"></script>
  <script src="blockly/google-blockly-02a5712/blocks_compressed.js"></script>
  <script src="blockly/google-blockly-02a5712/javascript_compressed.js"></script>
  <script src="blockly/google-blockly-02a5712/msg/js/en.js"></script>
  <script src="blockly/scriptcraftBlocks20211210.js"></script> 
  <script src="blockly/scriptcraftStubs20211210.js"></script> 

  <script language="Javascript" type="text/javascript">

		// initialisation
		
		var dlm = '!^!';


		// =================================================================================================
		// SAVE
		// =================================================================================================
		
		function save_localfile(text)
		{

            		var blob = new Blob([text],{ type: "text/plain;charset=utf-8" });
            		//saveAs(blob,filename + ".js");
			//var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
			//var oMyBlob = new Blob(aFileParts, {type : 'text/html'}); // the blob
			window.open(URL.createObjectURL(blob));

        
		}
		
		// Save Code to Server 
 		function Upsave(text){
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open("POST","callingtext.php",true);
			xmlhttp.setRequestHeader("Content-type", "text/text");
			xmlhttp.send(text);
			xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState === XMLHttpRequest.DONE) {
				  if (xmlhttp.status === 200) {				
					
					var type = xmlhttp.getResponseHeader('Content-Type');
					
					if (type.indexOf("text") !== 1) {
						//alert (xmlhttp.responseText);
						var ergebnis = xmlhttp.responseText;
						var myStringArray = ergebnis.split("!^!");
						//var arrayLength = myStringArray.length;
						editAreaLoader.setValue("example_3", myStringArray[2]);
						editAreaLoader.setValue("help", myStringArray[1]);
						
					}
				  }
				}
			}		
		}
		



		function cleanupdiv ()
		{
			var modal = document.getElementById("drin");
			removeAllChildNodes(modal);
		}
		function removeAllChildNodes(node) {
			i = (typeof(node) == "object") ? node : document.getElementById(node);

			while (i.hasChildNodes()) {
				i.removeChild(i.firstChild);
			}
		}		
		



	// =================================================================================================
	// login und logout
	// =================================================================================================
	// 
	
	function goto_profile()
	{
		document.location = 'usermanager/profile.php';
	}
	function goto_js()
	{
		document.location = './index.php';
	}
	


	// =================================================================================================
	// Aufruf erzeugen
	// =================================================================================================
	
	function createCallingText()
	{
		var serverAd = document.getElementById("lbServerAd").innerHTML;
		var url = "./callingtext.php";
		var text = editAreaLoader.getValue("example_3");
		alert (text);
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("POST",url,true);
		xmlhttp.setRequestHeader("Content-type", "text/text");
		xmlhttp.send(text);
	}

	// =================================================================================================
	// Check Syntax
	// =================================================================================================
	function do_blockly ()
	{
		var elem = document.getElementById('jscript');
		elem.style.visibility = 'hidden'; 
		elem = document.getElementById('blockly');
		elem.style.visibility = 'visible'; 

	}
	function do_javascript	()
	{
		var elem = document.getElementById('jscript');
		elem.style.visibility = 'visible'; // hide, but lets the element keep its size
		elem = document.getElementById('blockly');
		elem.style.visibility = 'hidden'; 

	}


	async function fetchHtmlAsText(url) {
	    return await (await fetch(url)).text();
	}

	// this is your `load_home() function`
	async function loadHome() {
	    const contentDiv = document.getElementById("hilfe");
	    contentDiv.innerHTML = await fetchHtmlAsText("https://minecraft-ag.de/wiki/index.php?title=Move");
	}

	function load_home() {
	     document.getElementById("hilfe").innerHTML='<object type="text/html" data="https://minecraft-ag.de/wiki/index.php?title=Blockly_-_Lexikon" width="850" height="500"></object>';
	}
	function gross() {
	   document.getElementById("hilfe").style.height="500px";
	  
	}
	function klein() {
	   document.getElementById("hilfe").style.height="100px";
	}


	</script>
	<style>
			body {
			  
			  background-image: url('cobble.png');
			}

			h1 {
			  color: white;
			  text-align: center;
			}

			p {
			  font-family: verdana;
			  font-size: 20px;
			}
			.button {
			  background-color:  #003300; /* Green */
			  border: none;
			  color: white;
			  padding: 10px 24px;
			  border-radius: 8px;
			  text-align: center;
			  text-decoration: none;
			  display: inline-block;
			  font-size: 16px;
			  font-family:Lucida Console, Courier, monospace;
			  border: 2px solid  #008000; 
			}
			.button:hover {
			  background-color: #006600; /* Green */
			  color: white;
			}
			.legend{
				font-family:Lucida Console, Courier, monospace;
				background-color: #003300;
				padding: 10px 24px;
				border-radius: 8px;
				color: white;
				border: 2px solid  #008000; 
			}
			.input {
			  background-color:  white;/*#1f3d7a;  Green */
			  border: none;
			  color: black;
			  padding: 10px 24px;
			  border-radius: 8px;
			  text-align: center;
			  text-decoration: none;
			  display: inline-block;
			  font-size: 16px;
			  font-weight: bold;
			  font-family:Lucida Console, Courier, monospace;
			  border: 2px solid  #008000; 
			}
			
			body {font-family: Arial, Helvetica, sans-serif;}

			/* The Modal (background) */
			.modal {
			  display: none; /* Hidden by default */
			  position: fixed; /* Stay in place */
			  z-index: 1; /* Sit on top */
			  padding-top: 100px; /* Location of the box */
			  left: 0;
			  top: 0;
			  width: 100%; /* Full width */
			  height: 100%; /* Full height */
			  overflow: auto; /* Enable scroll if needed */
			  background-color: rgb(0,0,0); /* Fallback color */
			  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
			}

			/* Modal Content */
			.modal-content {
			  background-color: #fefefe;
			  margin: auto;
			  padding: 20px;
			  border: 1px solid #888;
			  width: 80%;
			}

			/* The Close Button */
			.mclose {
			  color: #aaaaaa;
			  float: right;
			  font-size: 28px;
			  font-weight: bold;
			}

			.mclose:hover,
			.mclose:focus {
			  color: #000;
			  text-decoration: none;
			  cursor: pointer;
			}

	</style>



</head>
<body >


<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="mclose">&times;</span>
    <p id="drin">Some text in the Modal..</p>
  </div>

</div>
<script>
	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("mclose")[0];
	span.onclick = function() {
		  modal.style.display = "none";
	}
</script>


        <legend class="legend" > <B> Willkommen. Programmieren mit Blockly ist einfach. </B></legend>

	<fieldset style="background-image: url('grass.png');">
 	<div id='jscript'>
			<input type='button' class="button" onclick='showCode()' value='Generiere JavaScript' />
			<input type='button' class="button" onclick='preview()' value='Zeige 3D Vorschau' />
	</div>

<table >
<tr>
<td>
 	<div id="blocklyDiv" style="height: 600px; width: 850px;"></div>
</td>
<td>
	<div id="x3ddiv" style="height: 600px; width: 1200px;"></div>
</td>
</tr>
</table>

<div id="hilfe" style="height: 400px; width: 800px; display:inline">
	<script>load_home();</script>
</div>


  <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
     <category name="Scriptcraft" colour="%{BKY_TEXTS_HUE}">
      <block type="drone"></block>
      <block type="init_drone"></block>
      <block type="boxcmd"></block>
      <block type="box"></block>
      <block type="move"></block>
      <block type="funcbegin"></block>
      <block type="funcend"></block>
      <block type="functioncall"></block>
      <block type="exports"></block>
    </category>
    <category name="Loops" colour="120">
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="controls_whileUntil"></block>
      <block type="controls_for">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
        <value name="BY">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      <block type="controls_forEach"></block>
      <block type="controls_flow_statements"></block>
    </category>
  <sep></sep>
   <category name="Logic" colour="210">
      <block type="controls_if"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
      <block type="logic_null"></block>
      <block type="logic_ternary"></block>
    </category>

    <category name="Math" colour="230">
      <block type="math_number"></block>
      <block type="math_arithmetic">
        <value name="A">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="B">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      <block type="math_single">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">9</field>
          </shadow>
        </value>
      </block>
      <block type="math_trig">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">45</field>
          </shadow>
        </value>
      </block>
      <block type="math_constant"></block>
      <block type="math_number_property">
        <value name="NUMBER_TO_CHECK">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="math_round">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">3.1</field>
          </shadow>
        </value>
      </block>
      <block type="math_on_list"></block>
      <block type="math_modulo">
        <value name="DIVIDEND">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="DIVISOR">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="math_constrain">
        <value name="VALUE">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
        </value>
        <value name="LOW">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="HIGH">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>
      <block type="math_random_int">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>
      <block type="math_random_float"></block>
    </category>
    <category name="Text" colour="160">
      <block type="text"></block>
      <block type="text_join"></block>
      <block type="text_append">
        <value name="TEXT">
          <shadow type="text"></shadow>
        </value>
      </block>
      <block type="text_length">
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_isEmpty">
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="text_indexOf">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
        <value name="FIND">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_charAt">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
      </block>
      <block type="text_getSubstring">
        <value name="STRING">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
      </block>
      <block type="text_changeCase">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_trim">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_print">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_prompt_ext">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
    </category>
    <category name="Lists" colour="260">
      <block type="lists_create_with">
        <mutation items="0"></mutation>
      </block>
      <block type="lists_create_with"></block>
      <block type="lists_repeat">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">5</field>
          </shadow>
        </value>
      </block>
      <block type="lists_length"></block>
      <block type="lists_isEmpty"></block>
      <block type="lists_indexOf">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_getIndex">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_setIndex">
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_getSublist">
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_split">
        <value name="DELIM">
          <shadow type="text">
            <field name="TEXT">,</field>
          </shadow>
        </value>
      </block>
      <block type="lists_sort"></block>
    </category>
    <category name="Colour" colour="20">
      <block type="colour_picker"></block>
      <block type="colour_random"></block>
      <block type="colour_rgb">
        <value name="RED">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="GREEN">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
        </value>
        <value name="BLUE">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="colour_blend">
        <value name="COLOUR1">
          <shadow type="colour_picker">
            <field name="COLOUR">#ff0000</field>
          </shadow>
        </value>
        <value name="COLOUR2">
          <shadow type="colour_picker">
            <field name="COLOUR">#3333ff</field>
          </shadow>
        </value>
        <value name="RATIO">
          <shadow type="math_number">
            <field name="NUM">0.5</field>
          </shadow>
        </value>
      </block>
    </category>
    <sep></sep>
    <category name="Variables" colour="330" custom="VARIABLE"></category>
    <category name="Functions" colour="290" custom="PROCEDURE"></category>
    <sep></sep>
  </xml>

<!-- The DemoBlocks -->
<xml xmlns="https://developers.google.com/blockly/xml" id="startBlocks" style="display: none">
  <block type="drone" id="}g:q^Jz7~p;GZpMF$;8t" x="16" y="10">
    <field name="NAME">var drone</field>
    <next>
      <block type="funcbegin" id="tsCGOm@Z),xlodl{]4OZ">
        <field name="funcname">demoprg</field>
        <next>
          <block type="init_drone" id="Sh%!bZ5@cxuOoSgTWQwi">
            <next>
              <block type="boxcmd" id="_u84bXLAU?eAoqHAcq4v">
                <field name="NAME">dirt</field>
                <field name="width">2</field>
                <field name="height">2</field>
                <field name="depth">2</field>
                <next>
                  <block type="move" id="o/79`Q|c8IW:JGiVfaIk">
                    <field name="wayto">up</field>
                    <field name="amount">1</field>
                    <next>
                      <block type="boxcmd" id="s[~%GmF4+TeI3MzX`$~y">
                        <field name="NAME">quartz</field>
                        <field name="width">2</field>
                        <field name="height">2</field>
                        <field name="depth">2</field>
                        <next>
                          <block type="move" id="_825K(xfE[vCRtV.Kr4_">
                            <field name="wayto">up</field>
                            <field name="amount">2</field>
                            <next>
                              <block type="boxcmd" id="kAtPl_yButWmM@{C5;9R">
                                <field name="NAME">diamond</field>
                                <field name="width">2</field>
                                <field name="height">2</field>
                                <field name="depth">2</field>
                                <next>
                                  <block type="funcend" id="%^7T3@*yKb5w1rS*`zfx">
                                    <next>
                                      <block type="exports" id=":00mc]ly]V1H$)st5Z36">
                                        <field name="exportname">demoprg</field>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>
<!-- END The DemoBlocks -->
  <script>
     var demoWorkspace = Blockly.inject('blocklyDiv',{toolbox: document.getElementById('toolbox')});

    Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),demoWorkspace);

    function showCode() {
      // Generate JavaScript code and display it.
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
      save_localfile(code);
      //alert(code);
    }

 	function SaveJSTempfile(text){
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.open("POST","./call3d.php",true);
		xmlhttp.setRequestHeader("Content-type", "text/text");
		xmlhttp.send(text);
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState === XMLHttpRequest.DONE) {
			  if (xmlhttp.status === 200) {				
				
				var type = xmlhttp.getResponseHeader('Content-Type');
				
				if (type.indexOf("text") !== 1) {
					//alert (xmlhttp.responseText);
	   document.getElementById("x3ddiv").innerHTML='<object type="text/html" style="height: 1200px; width: 900px;" data="x3ddata/'+xmlhttp.responseText+'" ></object>';

				}
			  }
			}
		}		
	}


	function preview() 
	{  
	      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
	      var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
	      var filename = SaveJSTempfile(code);
	}

  </script>




 <label id="lbServerAd"><?php echo $_SERVER['SERVER_NAME'];?></label>
</body>
</html>
