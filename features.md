# Features

What JSMN IDE (webscriptcraft) does today, and what's realistically next. See [README.md](README.md) for setup and [HANDBOOK.md](HANDBOOK.md) for the pupil-facing tutorial.

## Realized

### Block editor
- Blockly v12 workspace with JSMN-specific blocks: `function` / `end function` / `preview function` / `call`, `box`, `box0`, `move`, `move by var` (`openb3/blockly/webscript20220210.js`, generators in `webscriptstubs20220210.js`)
- Full standard Blockly categories alongside them: Loops, Logic, Math, Variables, Functions
- 30 materials in the block dropdown, matching Bukkit `Material` enum names
- Legacy blocks (`drone`, `init_drone`) kept as silent no-ops so old saved XML files still load without errors

### 3D preview
- Client-side drone simulator (`DronePreview`) mirrors the server-side `Drones.js` logic, running entirely in the browser — no PHP or Node.js needed
- Three.js renderer with orbit/pan/zoom camera controls (`OrbitControls`)
- Auto-frames the camera on the built structure's center; error banner if the program builds nothing

### Save / load
- Workspace save/load as JSON, Blockly v12's native serialization format
- Additive multi-file loading ("hinzuladen") — combine several saved models into one scene
- Legacy `.xml` file loading for workspaces saved by the original webscriptcraft

### JSMN export
- Download button generates a `.js` file named after the `preview function` block's function name
- Auto-appends the function call (`funcname();`) and `player.sendMessage("Done!");`, so JSMN runs the script and confirms completion in chat as soon as it's copied into `/plugins/jsmn/scripts/`

### Integer safety
- `boxcmd`'s width/height/depth are bounded numeric fields (1–50), always integers by construction
- `movevar` and `box0` both wrap their value-socket inputs in `Math.floor()` before calling `drone.*`, so a division or other non-integer expression plugged into those sockets can't produce a runtime `TypeError` in JSMN's Java `DroneAPI` (which takes `int`, not `double`)

### Blocks / JavaScript dual view *(new)*
- Toggle between the Blockly workspace and a JavaScript text view — only one is visible at a time, switched with a **🧩 Blöcke** / **{ } JavaScript** button pair
- Switching to the JavaScript view always regenerates it from the current blocks (Blocks is the source of truth by default)
- Switching back to Blocks without applying JS edits first prompts for confirmation, so accidental edits aren't silently lost

### JavaScript → Blocks (best-effort) *(new)*
- The JS view is editable; an **✅ In Blöcke übernehmen** button parses it back into blocks
- Understands exactly the JSMN vocabulary the generators themselves emit: the function wrapper, `drone.box`/`drone.box0`/movement calls, and function calls — including telling apart a `functioncall` from an `exports` block by whether the bare `name();` line sits inside or outside a function body
- Anything outside that vocabulary — loops, variables, arithmetic expressions, arbitrary JavaScript — is rejected with the exact line number rather than silently dropped or guessed at. This is a deliberate scope boundary: a general JavaScript-to-Blockly translator isn't realistic, but JSMN's own limited output grammar is small enough to round-trip reliably.

### Deployment
- HTTPS dev server (`serve-https.py` + `setup-ssl.sh`) with a 10-year self-signed cert, recommended for classroom use
- Plain `python3 -m http.server` option for local development
- nginx config (`nginx/jsmn-ide.conf`) for production-style deployment
- PHP server (`index.php`) with server-side save/load, as an alternative to the static `index.html`

## To come

Roughly in order of how much they'd change day-to-day use:

1. **Bring `save.php`/`load_file.php` up to date.** They still parse the legacy XML shape (`<field name="exportname">`) to derive a filename, while the client-side save/load has moved to Blockly v12's JSON serialization. Right now the PHP server-side save path (Option D in the README) is out of sync with what the JS actually saves.
2. **Broaden JS → Blocks beyond literals.** The current parser only reconstructs `box0`/`movevar` value-socket inputs when they're plain integer literals (or `Math.floor()`-wrapped literals) — a variable reference or arithmetic expression in those sockets is rejected rather than guessed at. Supporting simple variable references would need mapping JS identifiers to Blockly's variable blocks, which is a real but bounded next step.
3. **JS → Blocks for loops and variables.** Reconstructing `controls_repeat_ext`, `controls_for`, and variable get/set blocks from hand-written `for`/`while`/`let` JavaScript is a much larger parser than the current flat-statement one — real, but substantially more work than the current vocabulary.
4. **Direct "run in Minecraft" from the browser**, instead of download-then-copy-to-`/plugins/jsmn/scripts/`. Would need some server-side bridge (e.g. writing directly into a configured scripts folder, or an RCON/websocket connection to the Minecraft server) — nothing like that exists yet.
5. **Syntax highlighting in the JavaScript view.** Currently a plain `<textarea>`; a lightweight editor (e.g. CodeMirror) would make hand-edits easier to read and catch typos before hitting Apply.
6. **Auto-save to `localStorage`.** Nothing currently survives a closed tab or crash except what's been explicitly saved as JSON — a periodic silent auto-save would remove a common way for students to lose work.
7. **Additional JSMN drone shapes**, if the plugin ever grows beyond `box`/`box0` (sphere, cylinder, etc. — see the [JSMN plugin](https://github.com/cndrbrbr/jsmn) commands `sphere`/`sphere0` for a precedent already in the plugin's command set but not yet exposed as a block here).

---

(c) 2022–2026 cndrbrbr — Apache License 2.0
