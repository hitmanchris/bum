---
tags:
  - 2te_Klasse
  - syt
---
[[😡Grrrrrlektrotechnik]]
[[🥲2te Klasse]]
### Betriebssysteme
- Unterscheidungen
	- Genereal purpose OS
	- Windows, Linux, Mac OS, Handy
	- real time os
	- Unterschied zu general purpose → Ressourchen bzw Aktionen werden hochverfügbar und in einer definierrten Zeit aufrufbar
	- Bsp: Maschienenbau-Robotic Kfz Abs, Digitalkamera, Medizin(Herzschlagmesser), Stock Exchange, Vekehrswesen(Verkehrskontrolle), Flugverkehr Radar inkl Militär, Haushalt Mikrowelle, Waschmaschiene,
	- soft/firm/hard- RTOS → zeit für Prozessabläufe wird garantiert, bis maximale Zeit (d.h ungefähr
### Prozesse, Thema und Jobs
Obwohl Programm und Prozess einander sehr ähnlich sehen, unterscheiden sie sich doch wesentlich:

<mark style="background: #D2B3FFA6;">Programm</mark> = <mark style="background: #D2B3FFA6;">statische</mark> Sequenz von Anweisungen
<mark style="background: #D2B3FFA6;">Prozess</mark> = Container für einen Satz von Ressourcen, der erst dann benützt wird, wenn eine Instanz des Programms ausgeführt wird.
##### Versuch einer Definition

<mark style="background: #D2B3FFA6;">Prozess</mark> = Programm in der <mark style="background: #D2B3FFA6;">Ausführung</mark> dabei hilft:
- Programm selbst = statisch (code)
- Prozess ist aber dynamisch Prozess = Programm + zugehöriger Datensatz

Der Prozess kann mit einer Handvoll Elemente charakterisiert werden, diese heißen PCB... process control block z.B ID, Zustand, Prozesse = Kontrolle, Programmzähler

"Header" des Prozesses → 

| Platzhalter  | Platzhalter2   | 
|-------|---------|
| Identifier             | eindeutige Kennung des Prozesses |
| State                  | Programmzustand (running, wait) |
| Priority               | "Rangordnung" |
| Programm Counter       | zeigt auf aktuelle code zeilen |
| Memory Pointers        | Zeiger auf bestimme Speicherplätze |
| Context Data           | Zugehöriger Datensatz |
| I/O status             |
| Accounting Information | Zugrifsrechte |

"Dining philosopher problem" (von Dijkstra)
5 Italiäner, 5 Teller, 5 Gabeln
Algorhytmus: Jeder nimmt zuerst die <mark style="background: #D2B3FFA6;">linke Gabel</mark>, ausschließend die rechte (er braucht beide Gabeln zum Essen)
→ <mark style="background: #D2B3FFA6;">jeder</mark> braucht eine <mark style="background: #D2B3FFA6;">2. Ressource</mark> (Gabel) , muss aber warten, bis diese vom <mark style="background: #D2B3FFA6;">rechten Nachbarn freigegeben wird</mark>, Der gibt sie aber erst <mark style="background: #D2B3FFA6;">frei wenn er gegessen hat</mark>, Das kann er aber <mark style="background: #D2B3FFA6;">erst</mark>, wenn er <mark style="background: #D2B3FFA6;">seinerseits</mark> von seinem <mark style="background: #D2B3FFA6;">nächsten Nachbarn freigegeben</mark> wird. Der gibt sie erst frei, wenn er gegessen hat. Das kann er der andere es hat usw

<mark style="background: #D2B3FFA6;">Problem</mark>: Wenn alle 5 gleichzeitig essen wollen, kann dies keiner tun, weil ihm jeweils die Zugehörige Gabel fehlt
<mark style="background: #D2B3FFA6;">Folge</mark>: alle 5 verhungern = starving
→ diese ausgangslose Situation heißt: Deadlock (Geometry Dash Referenz)

Prozesse A und B kooperieren:

|A|B|
|---|---|
|wartet auf Ressource x|benötigt Ressource x, kann sie erst freigegeben werden wenn nötige Info von Prozess A kommt|
|A kann die erwartete Info nur liefern, wenn Ressource x verfügbar ist|

→ <mark style="background: #D2B3FFA6;">Klassischer Deadlock</mark>

- <mark style="background: #D2B3FFA6;">Bedingungen</mark>
	- <mark style="background: #D2B3FFA6;">Mutal Exclusion</mark>
		- eine bestimme Ressource kann zu irgendeinen (bestimmten) Zeitpunkt nur von einem einzigen Prozess belegt werden
	- <mark style="background: #D2B3FFA6;">Ressorce Waiting</mark>
		- Wenn eine Ressource beantragt wird, die besetzt ist, muss der anfordernde Prozess warten, bis diese freigegeben wird. Er ist währenddessen in einem Wartezustand = BLOCKED
	- <mark style="background: #D2B3FFA6;">bsp mutal exclusion</mark>
		- bei einem Drucker kann auch nur einer Gleichzeitig drucken → deshalb die Printer Queue
	- <mark style="background: #D2B3FFA6;">Partial allocation</mark> 
		- ein Prozess, der bereits eine Ressource "besitzt", kann die Zuteilung weiter (anderer) Ressourcen beantragen → der Prozess belegt dann für andere Ressourcen, die dann für andere Prozesse nicht zur Verfügung stehen
	- <mark style="background: #D2B3FFA6;">Nonpreemption</mark>
		- Wenn eine Ressource einen Prozess zugeteilt werden kann sie diesen Prozess (ausschließlich) nicht zwangsweise wieder entzogen werden

Verhindern eines Deadlocks ist Aufgabe des Betriebssystems → dafür gibt es 3 grundlegende Möglichkeiten:

- <mark style="background: #D2B3FFA6;">Deadlock Detection und Recovery</mark>
	- Ressource Allocation Graph = Zuteilung und Freigabe von Ressourcen
	- regelmäßige Aktualisierung zeigt sogenannten Zyklen (=Deadlocklocksituartionen)
	- OS terminiert den "blockierenden" Prozess (=auflösen) (das ist aber relativ Brutal)
- <mark style="background: #D2B3FFA6;">Deadlock Prevention</mark>
	- beim Design des OS wird versucht, eine der grundlegenden Bedingungen für einen Deadlock zu verhindern, d.h eine der Bedingungen wird dabei "a priori verletzt" (a priori = im Vorfeld)
		- bsp: Spooling von Druckaufträgen <mark style="background: #D2B3FFA6;">verhindert die Mutual Exclusion</mark> → "<mark style="background: #D2B3FFA6;">beliebig</mark>" <mark style="background: #D2B3FFA6;">viele</mark> Prozesse <mark style="background: #D2B3FFA6;">können Druckaufträge</mark> an die <mark style="background: #D2B3FFA6;">Warteschlange</mark> schicken. Der Drucker selbst wird nämlich nur von einem Prozess angesprochen (belegt),  der Printer Server
- <mark style="background: #D2B3FFA6;">Deadlock Avoidance</mark>
	- <mark style="background: #D2B3FFA6;">aufwendigste Variante</mark> im Vorfeld wird <mark style="background: #D2B3FFA6;">vor der Zuordnung</mark> einer Ressource eine Analyse durchgeführt, ob <mark style="background: #D2B3FFA6;">eventuell später</mark> ein <mark style="background: #D2B3FFA6;">Deadlock entstehen kann</mark> Problem: mögliche Deadlocks können <mark style="background: #D2B3FFA6;">nur im begrenzten Umfang erkannt werden</mark>, d.h eine tatsächliche "sichere" Entscheidung ist <mark style="background: #D2B3FFA6;">selbst für die besten Algorhytem nicht möglich.</mark> 
	- 
- <mark style="background: #D2B3FFA6;">Prozessabläufe</mark>
	- aufrufen eines Os-Prozess
	- Login eines Users
	- laufender Prozess startet eine einen seiner Prozesse (Parent - child)
- <mark style="background: #D2B3FFA6;">Prozessbeendung</mark>
	- schließen einer Anwendung    
	- Logout eines Users            
	- Service - Request aus dem OS  
	> 	gewollte Ende eines Prozesses → liefert Rückmeldung an OS →  wenn Rückmeldung != 0 → Fehler zb I/O Error oder Arethmetic error. 	    
	- 5 State Modell
		![[Zeichungen/bum]]
		- <mark style="background: #D2B3FFA6;">new:</mark> Prozess ist zur Durchführung vorbereitet, aber noch nicht im Main - Memory
		- <mark style="background: #D2B3FFA6;">ready:</mark> der genaue Prozess im Arbeitsspeicher und wartet auf sein "Startsignal", das heißt die Zuteilung der CPU
		- <mark style="background: #D2B3FFA6;">running:</mark> der Prozess ist im "Besitz" der CPU und wird ausgeführt
		- <mark style="background: #D2B3FFA6;">blocked (wait):</mark> Prozess ist gerade im Wartezustand und wartet auf ein bestimmtes Ereignis, z.b Ender einer I/O-Operation, Freiwerden der CPU
		- <mark style="background: #D2B3FFA6;">exit:</mark> Prozess wurde beendet/abgebrochen und ist nicht mehr zur Ausführung bereit, "Ergebnisse" bleiben eventuell temporär erhalten
		- <mark style="background: #D2B3FFA6;">Problem:</mark> Hauptspeicher ist limitiert, zu viele Prozesse → Performance = Verlust. eine Lösung: Swapping → Prozess teilweise oder zur Gänze in den Sekundärspeicher verschoben (Hdd, Auslagerungdatei)
		- → weiterer Prozessszustand nötig = <mark style="background: #D2B3FFA6;">Suspend</mark> ("aussetzen") dabei müssen alle nötigen Informationen gespeichert (gesichert) werden, PCB + Zwischenergebnis + Prozess, damit der Prozess, später auf exakt derselben Stelle fortgesetzt werden kann.
		- Ursachen für den suspend-Zustand (außer Swapping)
			- periodisch ausgelöste Prozesse können während <mark style="background: #D2B3FFA6;">WAIT</mark> suspended werden (z.b Timer)
			- OS kann einen  Hintergrundprozess oder einen problembehafteten Prozess suspenden (z.b Printqueue) 
			- suspenden eines interaktiven Requests (z.bb Debugging)
			- parent-Prozess suspended eigenen Child-Prozess zur Koordination, Modifikation, ...
	- <mark style="background: #D2B3FFA6;">Kontrollstrukturen</mark> (zur Prozessverwaltung)
		 ![[dr_Tu_35_2023_13.excalidraw]]
		 
- <mark style="background: #D2B3FFA6;">Prozessimage</mark>	
	- User Programm → Sourcecode
	- User data → manipulierende Daten, bzw Programme
	- Systemstack → alle mit dem Prozess assoziierten Slots
	- <mark style="background: #D2B3FFA6;">Process Control Block</mark>
		- Prozess ID (Prozessnummer, Benutzererkennung, parent process)
		- Process State Information (Registerinhalte, Stack Router)
		- Prozess control Information Querverweise auf andere Prozesse, scheduling + Zustandsinfos
- <mark style="background: #D2B3FFA6;">Execution Modes</mark> 
![[dr_We_27_2023_37.excalidraw]]
Api ... application programming interface 
	= Programmierschnittstelle im user mode
	(im Windows SDK enthalten zb)
beinhaltet tausende aufrufbare Funktionen

- <mark style="background: #D2B3FFA6;">Hauptprotokolle:</mark>
	- Base Services
	- elementare Funktionen: Speichermanipulationen, Kryptofunktionen(TPM)
	- Component Services = Com + (conpounent object model) Kommunikation zwischen den Prozessen, für high Performance Kommunikation (Internet und Serveranwendungen)
	- user interface Services
		- z.B dynmamic anotations (Bestimmte Fehler)
	- graphics & multi media Services
		- zb Streamingserver
	- Messaging and colaboration Services
		- E-mail, calendendering, file sharing
	- Networking Services
		- remote access, VPN, routing
	- Web Service
		- Tcp,Udp,http-client,http-server,xml

<mark style="background: #FFB8EBA6;">.NET - Framework</mark> 
> Beziehungen der Komponenten

![[dr_We_03_2023_42.excalidraw]]
CLR ... common language runtime
> Laufzeitumgebung für (Managed) code beinhaltet einige Features (zb. Garage collection)
  
FCL ... Framework class Library, ECLR
> Die CLR ist als Klassischer COM-Server implementiert.
> Com-Server: stellt Server auf Serveranwendungen (für den Client) zur Verfügung

##### <mark style="background: #FFB8EBA6;">Services, Funktionen, Routinen (exemplarisch)</mark>

- Windows API - Funktionen createprocess createfile 
- System calls native system services 
	- undokumentierte (umanaged) Services, aus dem user-mode aufrufbar
		<mark style="background: #FFB8EBA6;">NTCreate Process</mark> (start eines neuen Prozesses)

- Kernel Support Funktionen
	- = Subroutinen, die nur vom Kernel aus aufrufbar sind ExAllocatePoolWilthTag = lädt einen Geräte Treiber aus dem Heap 
	- Heap ←→ Stack
	- Heap: dynamischer Speicher
	- Stack: strukturierter Speicher

