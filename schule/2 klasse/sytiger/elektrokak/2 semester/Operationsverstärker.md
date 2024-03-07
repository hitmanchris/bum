---
tags:
  - 2_klasse
  - syt
---
ESB:
![[Zeichungen/Drawing 2024-02-19 12.28.44.excalidraw]]

Vergleicht eingänge
	 wenn positiv eingang → gibt positiv im Ausgang 
	 wenn negativ eingang → gibt negativ im Ausgang
![[Zeichungen/Drawing 2024-02-19 12.37.36.excalidraw]]

Up > UN ⇒ Un > 0
Up < UN ⇒ Un < 0

Up... Spannung am nichtinvertierenden Eingang 
-Up... Spannung am invertierenden Eingang
UA... Ausgansspannung
UD=Up - UN → Differenzspannung
Differenzverstärkung:
![[Zeichungen/Drawing 2024-02-19 12.43.45.excalidraw]] 


# Grundschaltungen

allgemein wird der Ausgang am einen der beiden Eingänge zurück gefürth, dann versucht der Operationsverstärker den Ausgang (Ua) so zu regeln, dass die Differenz = Spannung (UD) nicht wird.

<mark style="background: #FF5582A6;">Nicht invertierender Verstärker</mark>
![[Zeichungen/Drawing 2024-02-21 14.48.56.excalidraw]]
Über den Spannungsteiler Rn-R1, wird ein Teil der Ausgangspannung an den invertierenden Eingang zurückgefürth, mit dem Ziel: Uq=0V

-Ue + Uq + UN= 0
-Ue + UN= 0

![[Zeichungen/Drawing 2024-02-21 15.00.04.excalidraw]]

<mark style="background: #FF5582A6;">Integrierter Verteiler</mark>
![[Zeichungen/Drawing 2024-02-21 15.04.10.excalidraw]]

<mark style="background: #FF5582A6;">Spannungsfolger</mark>
![[Zeichungen/Drawing 2024-02-21 15.13.10.excalidraw]]


- <mark style="background: #FFB86CA6;">Eingangswiderstand:</mark> RE ist groß 
	- Damit Quelle nicht belastet wird

Warum?
- ![[Zeichungen/Drawing 2024-03-04 12.14.58.excalidraw]]
- <mark style="background: #FFB86CA6;">Ausgangswiderstand:</mark> Ra ist klein 
	- ⇒ der Ausgang darf belastet werden (oder mit einer "niederohmigen" Last)
- <mark style="background: #FFB86CA6;">Anwendung:</mark>
	- Als Puffer zwischen Sensor und Microcontroller
	- "Wer misst, misst Mist"
	- Impedanzwandler
	- Signalübertragung
		- z.B zwischen den Patchpanel und aktiven Netzwerkgeräten 
	- 

