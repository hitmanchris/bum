---
tags:
  - 2_klasse
  - Netzwerktechnik
---


- Unicast
	- Eine eins-zu-eins Verbindung
	- ![[Zeichungen/Drawing 2024-03-01 14.42.35.excalidraw]]
- Broadcast
	- ![[Zeichungen/Drawing 2024-03-01 14.42.35.excalidraw]]
- Frame Processing
	- Frame= Datenpaket im Layer 2
	- Muss immer ein Source- und Destination-Mac enthalten
	- Jeder Host prüft die Destination-MAC-Adresse von erhaltenen Frames 
		- Wenn Destination-MAC nicht übereinstimmt, wird das Frame verworfen
	- Frame 
		- ![[Zeichungen/Drawing 2024-03-01 14.52.53.excalidraw]]
	- Switch 
		- Verbindet mehrere Geräte im Lokalen Netzwerk
		- ![[Zeichungen/Drawing 2024-03-01 14.57.39.excalidraw]]
		- Prüft Source- und Destinatiom-MAC
		- leitet korrekt Frames
		- MAC-Adresse-Tabelle
			- Switch merk sich MAC-Adresse & Port Nummer
		- 5 Minuten bleiben Einträge erhalten
		- ![[Zeichungen/Drawing 2024-03-01 15.08.53.excalidraw]]



