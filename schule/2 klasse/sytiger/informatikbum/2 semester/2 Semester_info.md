---
tags:
  - 2_klasse
  - syt
---


[[🥲2te Klasse]]
[[schule/2 klasse/sytiger/informatikbum/🐯 1 semester_info|🐯 1 semester_info]]

# 14.02.2024
## Komponente Pc
Hardware: Mainboard, CPU, Festplatte, GPU, Lüfter, Netzteil, RAM,
- CPU wird warm → warum? ⇒ Reibung der Elektronen
- Peripherie (Geräte die vom Pc gesteuert werden): Maus, Tastatur, Lautsprecher...
Software:  Programme für die Hardware, Treiber, Antiviren. Shell, File Explorer, Desktop environment...

Betriebssystem = Schnittstelle zwischen Hardware und Software, die versucht den Nutzen des Anwenders zu entsprechen.f

## Schalplatten/CD
![[Zeichungen/Drawing 2024-02-14 09.57.05.excalidraw]]


# 21.02.2024

![[Zeichungen/Drawing 2024-02-21 08.42.20.excalidraw]]

Speicher
- Flüchtigen Speicher
- Festspeicher

Binäre Info im Form von 0 und 1.

## Treiber


## Entfragmentieren:
![[Zeichungen/Drawing 2024-02-21 09.06.17.excalidraw]]

Ding speichert Daten in verschiedene Fragmente.
Problem: Wenn es ein anderes Fragment erreicht, muss es vielleicht hoch gehen was dazu führt dass es ein ganzen kreis machen muss damit es weiter lesen kann.

## Prozesse

![[Zeichungen/Drawing 2024-02-21 09.17.19.excalidraw]]
Programme:
- Im selben speicher können sein
	- progmamme
	- Daten

![[Zeichungen/Drawing 2024-02-21 09.21.56.excalidraw]]

## HÜ: 3 binärzahlen schreiben
SMÜ übernächster woche → Zettel

![[Zeichungen/Drawing 2024-02-25 10.42.33.excalidraw]]


# 28.02.2024
## Eva Prinzip
- Computer arbeitet nach dem EVA-Prinzip
	- Durch <mark style="background: #FFF3A3A6;">Eingabeeinheiten</mark> gelangen Daten in den Computer
	- Die <mark style="background: #FFF3A3A6;">Verarbeitung</mark> der Daten geschieht in der Zentraleinheit
	- Die <mark style="background: #FFF3A3A6;">Ausgabe</mark> erfolgt über Ausgabegeräte
- Das Eva-Prinzip lässt sich durch die gesamte Geschichte der Computertechnik verfolgen.

## Von-Neumann-Rechnermodell
- John von Neumann beschrieb 1945 das Konzept des universellen Rechners.
	- 4 Werken die bis heute in Computern verwendet werden.
		- <mark style="background: #FF5582A6;">Rechenwerk</mark>
			- Interpretiert Programme und logische Operationen
		- <mark style="background: #FF5582A6;">Steuerwerk</mark>
			- Interpretiert Programme und steuert deren Abfolge
		- <mark style="background: #FF5582A6;">Arbeitsspeicher(RAM→Random Acess Memory</mark> 
			- speichert Programme und Daten, welche für das Rechen- und Steuerwerk zugänglich sing.
			- Ist in Zellen gleicher Größe geteilt, die durch fortlaufende Nummern bezeichnet werden.
		- <mark style="background: #FF5582A6;">Ein/Ausgabewerk</mark>
			- Steuert Ein- und Ausgabe von Daten 
			- Kommuniziert mit Anwender und Peripheriegeräten
ALU→ Arithmetische und Logische Unit
![[Zeichungen/Drawing 2024-02-28 09.39.45.excalidraw]]
## Arithmetische Operationen

![[Zeichungen/Drawing 2024-02-28 08.55.01.excalidraw]]


## CPU (Central Prozessing Unit)
- Maschinensprache
- Assembler (übersetzen ins menschliche)

# RAM
[[schule/2 klasse/sytiger/informatikbum/2 semester/Arbeitsspeicher RAM]]

# Microprozessor
[[schule/2 klasse/sytiger/informatikbum/2 semester/Mikroprozessor]]


# Registertypen
- Arbeitsregister
	- Nur mit Daten in den Arbeitregistern können direkte logische Operationen durchgefürht werden. Die Länge des Registers legt die größte Zahl fest, die der Prozessor in eimen einzelnen Schritt Verarbeited kann. 32-Bit Prozessoren können als größte ganze Zahl 2²³= 4.294.967.296 verarbeiten.
- Befehlszähler


# Leistungsmerkmale von Prozessoren
- Registerlänge
	- Anzahl der Bits in den Registern des Prozessors
- Taktfrequenz(Clock Rate)
	- Bestimmt die Geschwindigkeit des Prozessors, ist ein Vielfaches des Mainborad-Grundtaktes. Die Taktfrequenz ist nicht Maß aller Dinge. Wichtig ist auch Anzahl der für die Ausführung eines Befehls benötigten Taktfrequenz 
- Canche Speicher 
	- Sehr schneller Zwischenspeicher der zum Datentausch zwischen Prozessor und RAM
		- Level 1 Canche
			- 16 bis 128 KB→ mit Prozessor auf einem Chip
		- Level 2 Canche
			- 512 bis 1024 KB→ früher separat, heute mit auf dem Chip
		- Level 3 Canche
			- 8 bis 16MB→ bei Mehrkernperozessoren mit auf dem Chip
- Benchmarks
	- Spezielle Software zur Leistungsbewertung. Benchmarks dienen dazu, reale Anwendungen zu simulieren und vergleichbare Leitungsangaben zu liefern
		- MIPS
			- Million Instructions per Second
		- FLOPS
			- Floating Point Operations per Second

# Linux
[[schule/2 klasse/sytiger/informatikbum/2 semester/Linux]]