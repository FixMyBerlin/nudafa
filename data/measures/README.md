# Prozess um die Maßnahmen zu aktualisieren

## About

- Die Maßnahmen sind unter X zu sehen
- Es gibt Linien- und Punkt-Daten
- Die führende Datei ist in diesem Ordner `geometry.json`

## Update

Das Update der Daten läuft so:

1. Placemark Play aufrufen: https://play.placemark.io/?load=https://raw.githubusercontent.com/FixMyBerlin/nudafa/refs/heads/main/data/measures/geometry.json
   - (Und händisch ranzoomen)
2. Die Daten editieren
3. Exportieren: File > Export > GeoJSON
   - Im Dialog zusätzlich "Intent & format" auswählen
   - Dateinamen: `geometry.json`
4. Datei hochladen: https://github.com/FixMyBerlin/nudafa/upload/main/data/measures
   - Titel im Formular: "Maßnahmenliste aktualisiert"
   - Datei anfügen
   - Hochladen

Jetzt wird die Datei in Github ersetzt und direkt danach das Website update ausgelöst.

## Prüfung

### Website update

Hinweis: Diese "actions" Seite muss ggf. im Browser neu geladen werden um sich zu aktualisieren…

1. Unter https://github.com/FixMyBerlin/nudafa/actions steht jetzt ein Eintrag in der Art
   > Deploy Now: Build nudafa · Maßnahmenliste aktualisiert
2. Wenn das durch ist, ist die Webseite in den nächsten Minuten online

### Test 1

Ist unter https://www.nudafa.de/massnahmen/ alles sichtbar, wie es soll?

## Test 2

Werden unter https://www.nudafa.de/massnahmen/admin/geodata-check/ irgendwelche Fehler angezeigt?
