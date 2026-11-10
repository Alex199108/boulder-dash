# Konzept: Boulder Dash (Level 1)

## 1. Projektbeschreibung

Wir programmieren das Spiel Boulder Dash mit JavaScript, HTML, CSS und Canvas.
Der Spieler gräbt durch die Erde und sammelt Diamanten.
Er muss aufpassen, denn Steine können auf ihn fallen.

## 2. Spielregeln (Level 1)

- Der Spieler bewegt sich mit den Pfeiltasten (oben, unten, links, rechts).
- Er kann nicht durch die Wand gehen.
- Wenn der Spieler durch die Erde geht, wird das Feld leer.
- Wenn unter einem Stein ein leeres Feld ist, fällt der Stein nach unten.
- Wenn ein Stein den Spieler trifft, verliert er.
- Wenn der Spieler auf einen Diamanten geht, sammelt er ihn.
- Wenn der Spieler alle Diamanten gesammelt hat, hat er gewonnen.

## 3. Spielfeld (Grid)

Das Spielfeld wird mit Canvas gezeichnet.
Die Daten speichern wir in einem 2D-Array: grid[y][x].
y ist die Zeile (oben/unten), x ist die Spalte (links/rechts).
Canvas zeichnet nur. Canvas speichert keine Daten.

| Feld    | Name im Code |
|---------|--------------|
| Leer    | EMPTY        |
| Erde    | DIRT         |
| Wand    | WALL         |
| Stein   | ROCK         |
| Diamant | DIAMOND      |
| Spieler | PLAYER       |



## 4. Klassen und Methoden

Jede Klasse hat nur eine Aufgabe.

### Game
Aufgabe: Startet das Spiel und steuert den Ablauf.

Eigenschaften:
- `world` – das Spielfeld
- `player` – der Spieler
- `input` – die Tastatur
- `renderer` – das Zeichnen
- `state` – der Zustand: `"running"`, `"won"` oder `"lost"`

Methoden:
- `start()` – startet das Spiel
- `tick()` – ein Schritt im Spiel (wird immer wieder aufgerufen)
- `checkWin()` – prüft: Hat der Spieler alle Diamanten?
- `checkLose()` – prüft: Hat ein Stein den Spieler getroffen?

### World
Aufgabe: Speichert das Spielfeld und lässt die Steine fallen.

Eigenschaften:
- `grid` – das 2D-Array mit allen Feldern
- `diamondsTotal` – wie viele Diamanten es im Level gibt
- `fallingRocks` – welche Steine gerade fallen

Methoden:
- `loadLevel(map)` – baut das Spielfeld aus einer Karte
- `getTile(x, y)` – gibt zurück, was auf dem Feld ist
- `setTile(x, y, type)` – setzt etwas auf ein Feld
- `isEmpty(x, y)` – prüft: Ist das Feld leer?
- `updateRocks()` – lässt Steine fallen (von unten nach oben prüfen)

### Player
Aufgabe: Weiß, wo der Spieler ist, und bewegt ihn.

Eigenschaften:
- `x`, `y` – die Position
- `diamonds` – wie viele Diamanten er gesammelt hat
- `isAlive` – lebt der Spieler? (`true` / `false`)

Methoden:
- `move(direction, world)` – geht einen Schritt, wenn das Feld nicht `WALL` ist
- `collectDiamond()` – zählt einen Diamanten dazu

### InputHandler
Aufgabe: Hört auf die Tastatur und macht aus einer Taste eine Richtung.

Eigenschaften:
- `direction` – die letzte Richtung: `"up"`, `"down"`, `"left"`, `"right"` oder `null`

Methoden:
- `handleKey(event)` – wird aufgerufen, wenn eine Taste gedrückt wird
- `getDirection()` – gibt die Richtung zurück und löscht sie danach

### Renderer
Aufgabe: Zeichnet das Spielfeld auf das Canvas.

Eigenschaften:
- `ctx` – der Pinsel vom Canvas
- `tileSize` – wie groß ein Feld ist (in Pixel)
- `colors` – welche Farbe jedes Feld hat

Methoden:
- `draw(world)` – zeichnet alle Felder
- `drawTile(x, y, type)` – zeichnet ein Feld


## 5. Spielablauf (Game Loop)

Ein Tick ist ein Schritt im Spiel. Das Spiel macht alle 150 Millisekunden einen Tick.
In jedem Tick passiert das, in dieser Reihenfolge:

1. `InputHandler` gibt die Richtung.
2. `Player` bewegt sich.
3. `World` lässt die Steine fallen.
4. `Game` prüft: Gewonnen oder verloren?
5. `Renderer` zeichnet das Spielfeld.

Zuerst rechnen, dann zeichnen.
Wenn der Zustand `"won"` oder `"lost"` ist, stoppt die Schleife.


## 6. Dateistruktur

Jede Klasse hat ihre eigene Datei.

```
boulder-dash/
├── index.html          – die Seite mit dem Canvas
├── style.css           – das Aussehen der Seite
└── js/
    ├── main.js         – startet das Spiel
    ├── level1.js       – die Karte von Level 1
    ├── Game.js
    ├── World.js
    ├── Player.js
    ├── InputHandler.js
    └── Renderer.js
```

