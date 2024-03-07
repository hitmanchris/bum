# Ram (Randoms Access Memory)

Der Arbeitsspeicher wird zur Speicherung der aktuell laufenden Programme verwendet, die gerade ausgeführt werden, und der von ihnen verwendeten Daten. der Prozessot hat einen direkten, abdressbezogenen Zugriff auf einzelnen Speicherzellen des Arbeitsspeichers, sowohl um Befehle zu lesen als auch um Daten zu lesen oder zu verändern bzw. schreiben.

Jede Speicherzelle ist 1 Byte gross, kann aber auch auf 1 Bit zugegriffen werden
RAM ist flüchtig, wenn der Rechner abgeschalten wird, gehen alle Daten, im RAM, verloren.

- Arten von RAM Halbleiterbausteinen
	- SRAM (Static Ram)
		- schnall, teurerer als DRAM, wird für Prozessor Register verwendet.
	- DRAM (Dynamic RAM)
		- langsamer als SRAM, muss aber immer wieder aufgefrischt werden. (Refreshing→ in der Regel im Nano Bereich, je nach Baustein). Wird als Arbeitsspeicher eingesetzt.

- Dual Inline Memory Module (DIMM)
- Der Arbeitsspeicher besteht aus kleinen, rechteckigen Platinen mit mehreren RAM-Chips (zumindest 8 baugleiche DRAMs), die in den auf dem Mainboard vorhandenen Slot senkrecht eingesteckt werden
- SD-RAM(Synchronous Dynamic RAM)
	- Schreiben und lesen von Speicherzellen mir der Taktfrequenz des Mainboards <mark style="background: #FFF3A3A6;">(Nicht mit der internen Taktfrequenz des Prozessors)</mark>
- DDR-,DDR2-,DDR3-SDRAM (Double Data Rate RAM)
	- Höhere Datenrate im Vergleich zu SD-RAM. Heute werden Hauptspeicher bereits mit DDR5 Ram Bausteinen bestückt. Unter anderem in Graphikkarten mittlerweile DDR6 verwendet

# ROM (Read only Memory)

Speicher ausschließlich  zum Lesen vorgegeben. Muss irgendwann natürlich beschrieben werden, jedoch Einsatzgebiet als Lesespeicher unter anderem für Betriebssysteme benutzt.

- ROM
	- benötigt keine permanente Stromversorgung, außer für den Lesevorgang. Daten bleiben erhalten, trotz Stromunterbrechung
	- wird oft als Boot Speicher benutzt
	- Im Lesemodus sehr schnell
- ROM Typen
	- ROM
		- Fest "eingebautes" Bitmuster mit nicht veränderbaren Daten.
	- PROM 
		- Programmierbare Festwertspeicher - wird unter anderem elektrisch einmalig beschrieben, kann aber nicht mehr verändert werden.
	- EPROM(Erakbale programmable Read Only Memory)
		- wie PROM, kann aber mit UV Licht gelöscht werden und neu beschrieben werden.
	- EEPROM (Eletrical Erasable PROM)
		- Wie PROM, kann aber mit elektrischem Strom wieder gelöscht werden und neu beschrieben werden.
	- Flash EEPROM
		- Unter anderem für USB Sticks verwendet.

# Übersicht Festdatenspeicher

![[Zeichungen/Drawing 2024-03-06 08.56.48.excalidraw]]




