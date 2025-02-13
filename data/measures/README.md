# Prozess um die Maßnahmen zu aktualisieren

## About

- Die Maßnahmen sind unter https://www.nudafa.de/massnahmen/ zu sehen
- Es gibt Linien- und Punkt-Daten
- Die führende Datei ist in diesem Ordner `geometry.json`

## Update

Das Update der Daten läuft so:

1. Placemark Play aufrufen: https://play.placemark.io/?load=https://raw.githubusercontent.com/FixMyBerlin/nudafa/refs/heads/main/data/measures/geometry.json
   - (Und händisch ranzoomen)
2. Die Daten editieren
  - Es können Geometrien bearbeitet, gelöscht oder neu angelegt werden
  - Jede Geometrie benötigt eine NUDAFA_ID (darauf achten, dass keine ID doppelt vergeben wird), die anderen Felder müssen nicht ausgefüllt werden.
4. Exportieren: File > Export > GeoJSON
   - Im Dialog zusätzlich "Intent & format" auswählen
   - Dateinamen ändern in: `geometry.json` (Hinweis: Die Änderung des Suffix von .geojson zu .json ist richtig)
5. Datei hochladen: 
   - unter https://github.com/FixMyBerlin/nudafa/upload/main/data/measures Neue Datei auswählen
   - Titel im Formular ("Commit Changes") angeben z.B. : "Maßnahmenliste aktualisiert" 
   - Auswahl "Commit directly to the main branch" so lassen
   - Abschicken über Button "Commit changes"

Jetzt wird ein Prozess gestartet, der die Datei in Github ersetzt und direkt danach das Website update ausgelöst.

## Prüfung

Hinweis: Diese "actions" Seite muss ggf. im Browser neu geladen werden um sich zu aktualisieren…

1. Unter https://github.com/FixMyBerlin/nudafa/actions steht jetzt ein Eintrag in der Art
   > Deploy Now: Build nudafa · Maßnahmenliste aktualisiert
2. Wenn das verarbeitet ist (grüner Haken, dauert einige Minuten), sollte die Webseite in den nächsten Minuten aktualisiert sein

### Test 1

Ist unter https://www.nudafa.de/massnahmen/ alles sichtbar, wie es soll? 
Hinweis: Bei neuen Geometrien muss eine entsprechende Maßnahme mit der NUDAFA ID vorhanden sein, sonst wird die Geometrie nicht angezeigt

## Test 2

Werden unter https://www.nudafa.de/massnahmen/admin/geodata-check/ irgendwelche Fehler angezeigt? (Hier werden Maßnahmen ausgegeben, die in keystatic angelegt sind, aber keine Geometrie in in geometry.json haben.
