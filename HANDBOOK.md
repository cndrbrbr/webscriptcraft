# JSMN IDE — Handbuch / Handbook

*Eine Anleitung für Schülerinnen und Schüler, die mit Blöcken in Minecraft bauen und programmieren wollen.*
*A guide for pupils who want to build and program in Minecraft using visual blocks.*

---

## Inhalt / Contents

1. [Was ist JSMN IDE?](#1-was-ist-jsmn-ide)
2. [Die Oberfläche](#2-die-oberfläche)
3. [Dein erstes Programm](#3-dein-erstes-programm)
4. [Blöcke erklärt](#4-blöcke-erklärt)
5. [Materialien](#5-materialien)
6. [Die Drohne — wie sie sich bewegt](#6-die-drohne--wie-sie-sich-bewegt)
7. [Schleifen](#7-schleifen)
8. [Variablen](#8-variablen)
9. [Funktionen kombinieren](#9-funktionen-kombinieren)
10. [Speichern und Laden](#10-speichern-und-laden)
11. [Im Minecraft ausführen](#11-im-minecraft-ausführen)
12. [Beispielprogramme](#12-beispielprogramme)
13. [Häufige Fehler](#13-häufige-fehler)

---

## 1. Was ist JSMN IDE?

JSMN IDE ist ein **Programmierwerkzeug im Browser**. Du ziehst bunte Blöcke zusammen — wie Puzzleteile — und das Programm schreibt automatisch JavaScript-Code daraus. Diesen Code kannst du dann in Minecraft einsetzen, um dort Gebäude zu bauen.

```
Du ziehst Blöcke  →  Code wird erzeugt  →  Du baust in Minecraft
```

Das Beste daran: Du kannst im Browser sofort eine **3D-Vorschau** sehen, bevor du überhaupt Minecraft öffnest!

---

## 2. Die Oberfläche

```
┌─────────────────────────────────────────────────────────────────────┐
│  [▶ 3D Vorschau]  [💾 Speichern]  [📂 Laden]  [➕ Hinzuladen]  [JS↓] │
├───────────────────────────────────┬─────────────────────────────────┤
│                                   │                                 │
│   WERKZEUGKASTEN    ARBEITSBEREICH│        3D VORSCHAU              │
│   (links)           (Mitte)       │        (Three.js)               │
│                                   │                                 │
│   JSMN Drone ▶    [function draw] │    🟫 🟫 🟫 🟫                  │
│   Loops      ▶    [box DIRT 4×1×4]│      ⬜ ⬜ ⬜                   │
│   Logic      ▶    [up 1]          │        💎                       │
│   Math       ▶    [box QUARTZ...] │                                 │
│   Variables  ▶    [end function]  │   Drehen: linke Maustaste       │
│   Functions  ▶    [preview: draw] │   Zoom: Mausrad                 │
│                                   │                                 │
└───────────────────────────────────┴─────────────────────────────────┘
```

### Schaltflächen

| Schaltfläche | Funktion |
|---|---|
| **▶ 3D Vorschau** | Zeigt dein Gebäude sofort im 3D-Viewer |
| **💾 XML speichern** | Speichert deine Blöcke als `.json`-Datei auf deinen Computer |
| **📂 XML laden** | Lädt eine gespeicherte `.json`- oder `.xml`-Datei |
| **➕ XML hinzuladen** | Lädt eine Datei **zusätzlich** — dein aktuelles Werk bleibt erhalten |
| **JavaScript ↓** | Lädt den fertigen JavaScript-Code herunter (inkl. Funktionsaufruf & „Done!"-Meldung) |
| **🧩 Blöcke** / **{ } JavaScript** | Wechselt zwischen dem Blöcke-Editor und einer Textansicht des daraus erzeugten JavaScript-Codes |

> **Blöcke ↔ JavaScript:** Klicke **{ } JavaScript**, um den aktuellen Code zu sehen. Du kannst ihn dort auch bearbeiten — mit **✅ In Blöcke übernehmen** wird er zurück in Blöcke verwandelt. Das funktioniert für Code, der genau dem Muster entspricht, das die Blöcke selbst erzeugen — inklusive `wiederhole ... mal`-Schleifen (auch verschachtelt), Variablen (lesen, setzen, "ändern um"), `if`/`else`, Vergleiche, `&&`/`||`/`!` und `+ - * /`-Rechnungen, jeweils mit korrekter Klammerung. Andere Schleifenformen (`while`, freie `for`-Schleifen), Text/Listen, Funktionen mit Parametern und beliebiger JavaScript-Code werden mit der betroffenen Zeile abgelehnt, statt falsch geraten zu werden.

---

## 3. Dein erstes Programm

Lass uns Schritt für Schritt ein einfaches Haus bauen.

### Schritt 1 — Funktion beginnen

Ziehe den Block **`function`** aus dem Werkzeugkasten (Kategorie *JSMN Drone*) auf die Arbeitsfläche.
Klicke auf das Textfeld und gib einen Namen ein, z. B. `haus`.

```
[ function  haus ]
```

### Schritt 2 — Boden bauen

Hänge einen **`box`**-Block darunter. Wähle das Material **Dirt** und stelle Breite, Höhe, Tiefe ein:

```
[ function  haus ]
  [ box  Dirt  5  1  5 ]
```

### Schritt 3 — Nach oben

Hänge einen **`move`**-Block darunter: Richtung `up`, Betrag `1`.

```
[ function  haus ]
  [ box  Dirt     5  1  5 ]
  [ up   1 ]
```

### Schritt 4 — Wände

Hänge einen **`box0`**-Block (Hohlwürfel) für die Wände an:

```
[ function  haus ]
  [ box  Dirt     5  1  5 ]
  [ up   1 ]
  [ box0 Cobblestone  5  4  5 ]
  [ up   4 ]
```

### Schritt 5 — Dach

```
  [ box  Quartz   5  1  5 ]
```

### Schritt 6 — Funktion beenden & Vorschau

```
[ end function ]
[ preview function  haus ]
```

Jetzt auf **▶ 3D Vorschau** klicken — dein Haus erscheint!

---

## 4. Blöcke erklärt

### `function` / `end function`

Alles zwischen diesen zwei Blöcken gehört zu deiner Funktion.
Der Name der Funktion ist gleichzeitig der Befehl, den du in Minecraft eingibst.

```
[ function  turm ]
  ... Baublöcke ...
[ end function ]
```

→ In Minecraft: `/rs turm`

---

### `preview function`

Dieser Block steht **nach** `end function` und macht zwei Dinge:

1. Er sagt der **3D-Vorschau**, welche Funktion sie anzeigen soll.
2. Er fügt am Ende des heruntergeladenen JavaScript-Codes den **Funktionsaufruf** ein (`turm();`), damit JSMN die Funktion automatisch ausführt.

Außerdem wird die heruntergeladene Datei **nach der Funktion benannt** (z. B. `turm.js`).

```
[ end function ]
[ preview function  turm ]
```

→ Erzeugt am Ende der Datei: `turm();`

---

### `box` — Voller Würfel / Quader

```
[ box  [Material]  [Breite]  [Höhe]  [Tiefe] ]
```

Baut einen **ausgefüllten** Quader aus dem gewählten Material.

| Parameter | Bedeutung |
|---|---|
| Material | z. B. DIRT, STONE, QUARTZ_BLOCK |
| Breite | Ausdehnung nach rechts (X) |
| Höhe | Ausdehnung nach oben (Y) |
| Tiefe | Ausdehnung nach vorne (Z) |

---

### `box0` — Hohlwürfel

Wie `box`, aber **nur die Außenwände** werden gebaut — das Innere bleibt leer.
Ideal für Häuser, Türme und Rahmen.

---

### `move` — Drohne bewegen

```
[ [Richtung]  [Betrag] ]
```

Bewegt die Drohne um `Betrag` Blöcke in die gewählte `Richtung`.
Der nächste `box`-Block baut dann an der neuen Position.

| Richtung | Bedeutung |
|---|---|
| `up` | nach oben |
| `down` | nach unten |
| `fwd` | vorwärts |
| `back` | rückwärts |
| `left` | links (relativ zur Blickrichtung) |
| `right` | rechts (relativ zur Blickrichtung) |
| `turn` | um 90° drehen (1 = einmal, 2 = 180°, 3 = 270°) |

---

### `move by var` — Bewegen mit Variable

Wie `move`, aber der Betrag kann eine **Variable** oder ein **Rechenausdruck** sein.
Nützlich in Schleifen.

---

### `call` — Funktion aufrufen

```
[ call  funktionsname () ]
```

Ruft eine andere Funktion auf. Damit kannst du Baupläne wiederverwenden.

---

## 5. Materialien

Die Materialien entsprechen den Bukkit-Material-Namen in Minecraft 1.21.

### Natürliche Blöcke

| Name im Block | Minecraft-Block |
|---|---|
| Dirt | Erde |
| Grass | Grasblock |
| Stone | Stein |
| Cobblestone | Bruchstein |
| Gravel | Kies |
| Sand | Sand |
| Sandstone | Sandstein |
| Bedrock | Grundgestein |

### Baumaterialien

| Name im Block | Minecraft-Block |
|---|---|
| Quartz | Quartzblock |
| Diorite | Diorit |
| Andesite | Andesit |
| Granite | Granit |
| Cobblestone | Bruchstein |
| Glass | Glas |

### Edelsteine & Metalle

| Name im Block | Minecraft-Block |
|---|---|
| Diamond | Diamantblock |
| Emerald | Smaragdblock |
| Iron | Eisenblock |
| Gold | Goldblock |

### Wolle (alle Farben)

White · Red · Orange · Yellow · Lime · Green · Blue · Purple · Magenta · Pink

### Besondere Blöcke

| Name im Block | Minecraft-Block |
|---|---|
| Glowstone | Leuchtstein (leuchtet!) |
| Ice | Eis |
| Snow | Schneeblock |
| Beacon | Leuchtfeuer |
| Obsidian | Obsidian |
| Air | Luft (löscht Blöcke) |

---

## 6. Die Drohne — wie sie sich bewegt

Stell dir eine unsichtbare Drohne vor, die beim Start bei dir steht und in eine Richtung schaut. Jeder `box`-Block baut **ausgehend von der aktuellen Drohnenposition**.

```
Startposition: X=0, Y=0, Z=0
Blickrichtung: nach vorne (Z-)

[ box Stone 3 1 3 ]  → baut 3×1×3 ab aktueller Position
[ fwd 3 ]            → Drohne bewegt sich 3 Blöcke nach vorne
[ box Stone 3 1 3 ]  → baut wieder 3×1×3, aber 3 Blöcke weiter vorne
```

### Wichtig: `up` nach jedem Stock

Nach einem Stockwerk musst du die Drohne nach **oben** bewegen, bevor du den nächsten Stock baust:

```
[ box Cobblestone 5 4 5 ]   ← Erdgeschoss, 4 hoch
[ up 4 ]                     ← Drohne auf Dachebene
[ box Quartz 5 1 5 ]         ← Dach
```

---

## 7. Schleifen

Mit Schleifen kannst du Blöcke **mehrmals** wiederholen, ohne sie einzeln hinzuziehen.

### `repeat` — Wiederhole N mal

```
[ repeat  10  times ]
  [ box Gold 1 1 1 ]
  [ fwd 2 ]
```

→ Baut 10 Goldsäulen mit je 2 Blöcken Abstand in einer Reihe.

### `for` — Zählschleife

```
[ for  i  from 1 to 5 ]
  [ box QUARTZ_BLOCK  i  1  i ]
  [ up 1 ]
```

→ Baut eine Pyramide — jede Ebene ist um 1 kleiner.

> **Tipp:** Die Schleifenvariable (z. B. `i`) kannst du im `move by var`-Block verwenden!

### Beispiel — Turm mit Schleife

Statt:
```
[ box Stone 3 1 3 ]
[ up 1 ]
[ box Stone 3 1 3 ]
[ up 1 ]
... (10x)
```

Schreibe:
```
[ repeat 10 times ]
  [ box Stone 3 1 3 ]
  [ up 1 ]
```

---

## 8. Variablen

Variablen speichern Zahlen oder Text, die du mehrfach brauchst.

Erstelle eine Variable in der Kategorie **Variables** → `Erstelle Variable`.

```
[ setze  hoehe  auf  5 ]
[ repeat 10 times ]
  [ box QUARTZ_BLOCK  3  hoehe  3 ]
  [ move up by  hoehe ]
```

---

## 9. Funktionen kombinieren

Du kannst mehrere Funktionen definieren und sie gegenseitig aufrufen.

```
[ function  saeule ]
  [ box Stone 1 5 1 ]
[ end function ]

[ function  halle ]
  [ call saeule() ]
  [ fwd 5 ]
  [ call saeule() ]
  [ fwd 5 ]
  [ call saeule() ]
[ end function ]

[ preview function  halle ]
```

→ Definiert eine Säule einmal und baut sie dreimal nebeneinander.

---

## 10. Speichern und Laden

### Speichern

Klicke **💾 XML speichern** — der Browser lädt eine `.json`-Datei herunter.
Der Dateiname wird automatisch aus dem Funktionsnamen abgeleitet (z. B. `haus.json`).

### Laden

Klicke **📂 XML laden** — wähle eine `.json`- oder `.xml`-Datei.
Der aktuelle Arbeitsbereich wird dabei **ersetzt**.

### Hinzuladen (mehrere Modelle kombinieren)

1. Speichere jedes Modell einzeln (z. B. `haus.json`, `baum.json`, `brunnen.json`)
2. Öffne die IDE neu
3. Lade das erste Modell mit **📂 XML laden**
4. Lade weitere Modelle mit **➕ XML hinzuladen**
5. Klicke **▶ 3D Vorschau** — alle Modelle erscheinen zusammen!

> **Achtung:** Wenn mehrere Funktionen gleich heißen, überschreiben sie sich.
> Gib jeder Funktion einen eindeutigen Namen.

---

## 11. Im Minecraft ausführen

### Voraussetzungen

- Minecraft-Server mit dem **JSMN-Plugin** installiert
- Zugriff auf den Ordner `/plugins/jsmn/scripts/` auf dem Server

### Schritte

1. Klicke **JavaScript ↓** — eine `.js`-Datei wird heruntergeladen, benannt nach deiner Funktion (z. B. `haus.js`)
2. Kopiere die Datei in `/plugins/jsmn/scripts/` auf dem Server
3. Stehe in Minecraft an der Stelle, wo das Gebäude entstehen soll
4. Gib ein:

```
/rs haus
```

Das Gebäude wird **ab deiner aktuellen Position** gebaut.

> **Tipp:** Der `preview function`-Block fügt den Aufruf `haus();` automatisch ans Ende der Datei — JSMN führt deine Funktion sofort aus, wenn das Skript geladen wird.

### Beispiel

```javascript
// haus.js — heruntergeladen aus der IDE (Dateiname = Funktionsname)
function haus() {
  drone.box("DIRT", 5, 1, 5);
  drone.up(1);
  drone.box0("COBBLESTONE", 5, 4, 5);
  drone.up(4);
  drone.box("QUARTZ_BLOCK", 5, 1, 5);
};
haus();                        // ← automatisch vom "preview function"-Block
player.sendMessage("Done!");   // ← du siehst "Done!" im Chat wenn fertig
```

Im Minecraft:
```
/rs haus
```

Wenn das Gebäude fertig gebaut ist, erscheint **„Done!"** in deinem Chat.

### Verfügbare Drohnenmethoden

| Methode | Wirkung |
|---|---|
| `drone.box("MAT", w, h, d)` | Voller Quader |
| `drone.box0("MAT", w, h, d)` | Hohlquader |
| `drone.up(n)` | n Blöcke hoch |
| `drone.down(n)` | n Blöcke runter |
| `drone.fwd(n)` | n Blöcke vorwärts |
| `drone.back(n)` | n Blöcke rückwärts |
| `drone.left(n)` | n Blöcke links |
| `drone.right(n)` | n Blöcke rechts |
| `drone.turn(n)` | n × 90° drehen |

---

## 12. Beispielprogramme

### Pyramide

```
[ function  pyramide ]
  [ for  i  from 5 to 1  by -1 ]
    [ box  Sandstone  i  1  i ]
    [ up  1 ]
[ end function ]
[ preview function  pyramide ]
```

### Regenbogenturm

```
[ function  regenbogen ]
  [ box  RED_WOOL     3  2  3 ]
  [ up  2 ]
  [ box  ORANGE_WOOL  3  2  3 ]
  [ up  2 ]
  [ box  YELLOW_WOOL  3  2  3 ]
  [ up  2 ]
  [ box  LIME_WOOL    3  2  3 ]
  [ up  2 ]
  [ box  BLUE_WOOL    3  2  3 ]
  [ up  2 ]
  [ box  PURPLE_WOOL  3  2  3 ]
[ end function ]
[ preview function  regenbogen ]
```

### Labyrinth (Grundstruktur)

```
[ function  labyrinth ]
  [ box0  STONE  20  4  20 ]   ← Außenwände
  [ box   AIR   18  4  18 ]   ← Inneres aushöhlen
[ end function ]
```

---

## 13. Häufige Fehler

### „Keine Blöcke gebaut"

- Hast du einen `function`-Block und einen `end function`-Block?
- Ist der `preview function`-Block mit dem richtigen Funktionsnamen angegeben?

### Gebäude entsteht an falscher Stelle

- Die Drohne startet **an deiner Position** in Minecraft.
- Stell dich an die richtige Ecke, bevor du `/rs` ausführst.

### Gebäude ist zu groß / zu klein

- Denk daran: 1 Block = 1 Meter in Minecraft.
- Ein Haus mit Breite 5 ist 5 Meter breit.

### Gebäude überschreibt sich selbst

- Wenn du denselben Befehl mehrmals ausführst, baut die Drohne jedes Mal **neu** — die alten Blöcke bleiben, neue kommen dazu.
- Verwende `drone.box("AIR", w, h, d)` um einen Bereich zuerst zu leeren.

### Division ergibt Dezimalzahl

- In JavaScript ist `5 / 2 = 2.5` — Minecraft braucht aber ganze Zahlen.
- Verwende `Math.floor(5 / 2)` oder rechne mit ganzen Zahlen.
- Die IDE schützt dich davor bei `box`- und `move`-Blöcken durch automatisches `Math.floor()`.

---

*Viel Spaß beim Bauen!*
*Happy building!*

---

> (c) 2022 cndrbrbr — Apache License 2.0
> Teil des [JSMN-Projekts](https://github.com/cndrbrbr/jsmn)
