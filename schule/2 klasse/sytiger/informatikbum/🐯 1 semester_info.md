---
tags:
  - 2_klasse
  - syt
---
[[schule/2 klasse/sytiger/elektrokak/🐅1 semester_elektro|🐅1 semester_elektro]]


# 20.9.2023

(ist ne Fortsetzung zu das im Heft)

- Bedingungen
	Verhindern eines Deadlocks ist Aufgabe des Betriebssystems → dafür gibt
	es 3 grundlegende Möglichkeiten:

 
 a)
 <mark style="background: #FFF3A3A6;">Deadlock Detektion & Recovery</mark> 
 Ressource Allokation Graph Zuteilung & Freigabe von Ressourcen
	→ regelmäßige Aktualisierung zeigt sogenannte Zyklen (= Deadlocksituationen).
	→OS terminiert den "blockierende" Prozess (= auflösen) (das ist aber brutal).

b)
<mark style="background: #FF5582A6;">Deadlock Prevention</mark>
beim Design des OS wird versucht, eine der grundlegenden Bedingungen für einen
Dreadlock zu verhindern, daher eine Bedingung und dabei "a prioiri verletzt"(im verfeld)
BSP:
	Spoling von Druckern,
	<mark style="background: #ADCCFFA6;">verhindert die Mutual Exklusion</mark>
	⇒"<mark style="background: #CACFD9A6;">beliebig" viele Prozesse können Druckaufträge an die Warteschlange schicken</mark>.
		Der Drucker selbst wird nämlich nur von einem Prozess ausgesprochen (belegt) der Printer Server.

c)
<mark style="background: #FF5582A6;">	Deadlock Avoidance</mark>
	= aufwändigste Variante, im Vorfeld wird vor der Zuordnung einer Ressource eine
	eine Analyse durchgeführt, ob eventuell später ein Deadlock entstehen kann.
	<mark style="background: #BBFABBA6;">Problem</mark>: mögliche Deadlocks können nur im begrenzten Umfang erkannt werden, das
	heißt eine tatsächlich "sichere" Entscheidung ist selbst für die besten Algorithmen
	nicht möglich.  







# 27.9.2023

<mark style="background: #FFF3A3A6;">Prozesszustände</mark>
Wk: Prozess 
-  Programcode
- Datensatz
- PCB

<mark style="background: #FFB8EBA6;">Prozesserzeugung:</mark> 
- aufrufen eines OS-Prozesses
- Login eines Users
- laufender Prozess startet einer seine Prozesse (parent - child)

<mark style="background: #ABF7F7A6;">Prozessbeendigung:</mark>
- schließen einer Anwendung               
- Logout eines Users                   →          
- Service - Request aus den OS          

gewolltes Ende eines Prozesses → liefert eine Rückmeldung an das OS. = 0
Falls der Rückding  !=0 → Fehler
Arithmetik Error
vo failure
pnetcho error

5-State Model
![[Zeichungen/bum]]

<mark style="background: #CACFD9A6;">new:</mark> Prozess ist zur Durchführung vorbereitet, aber noch nicht im Main - Memory


<mark style="background: #FFB8EBA6;">Ready</mark>: der genaue Prozess (und nicht in der PC-B)ist im Arbeitsspeicher und wartet auf sein "Startsignal" daher auf 
die Zuteilung der CPU.

<mark style="background: #BBFABBA6;">running</mark>: der Prozess ist im "Besitz" der CPU und wird ausgeführt. 





# 3.10.2023

## Fortsetzung zu 27.9

<mark style="background: #D2B3FFA6;">Blocked (wait)</mark>: Prozess ist gerade im Wartezustand und wartet auf ein bestimmten Ereignis, z.B  Ende einer I/O Operation, Freiwerden der CPU:

<mark style="background: #FFB86CA6;">Exit</mark>: Prozess wurde beendet/ abgebrochen und ist nicht mehr zur Ausführung bereit. "Ergebnisse" bleiben eventuell temporär erhalten.

<mark style="background: #D2B3FFA6;">Problem</mark>: Hautspeicher ist limitiert, zu viele Prozesse → Performance Verlust.
Eine Lösung: Swapping → Prozesse teilweise oder zur Gänze in den Sekunderspeicher verladen.
⇒ weiterer Prozesszustand nötig
= Suppend (Aussetzung) dabei müssen alle nötigen Informationen gespeichert (gesichert) werden, PCB + zwischen + Prozess, dauert der Prozess später an exakt derselben Stelle
fortgesetzt werden kann.

Ursachen für suppend-Zustand  (außer swapping) 
- periodisch ausgeführt Prozesse können während WAIT suspendiert werden. (z.B Timmer)
- OS kann einen Hintergrundprozess oder einen problematischen Prozess suspendieren.
- suppend eines interaktiven Request (z.B Debugging)
- parent-Prozess susppended eigenen Cloud-Prozess zur Koordinion, Modifikation...

### Kontrollstruckturen
 Haupttabbel
 ![[Zeichungen/ding für sytinfo]]
Bsp: Filetable
		wie/wo es gespeichert ist.




# 4.10.2023
## Prozessimage
- User Programm → Sourcecode
- User data → manipulierende Daten, bzw. Programme
- Systemstack →  alle mit dem Prozess assoziierenden Slots.

<mark style="background: #FFF3A3A6;">Prozess Control block</mark> 
- Prozess ID (Prozessnummer, Benuzerkennung, parent process ID)
- Prozess State Information (Registerinhalte, Stack Router)
- Process control information → Querverweise auf andere Prozesse, 
   Scheduling + Zustandsinfos.

## Execution Modes

![[Zeichungen/Drawing 2023-10-04 12.25.29.excalidraw]]

API → application programming interface
= Systemprogrammschnittstelle im user mode
(im Windows SDK enthalten )
beinhaltet tausende aufrufbare Funktionen.

<mark style="background: #BBFABBA6;">Hauptprotokolle:</mark>
- Base Services → elementare Funktionen: Speichermanipulationen →
 Kryptofuntionen (TPM)



# 10.10.2023

- Conponent Services
= Com +  (icomponent Objekt Model)
 Kommunikation zwischen den Prozessen, für high Performance Kommunikation (Internet- und Serververwendungen)
 - User interface Services
 z.B. dynamic anotations (bestimmte Fehler).
 - Graphics and Multi Media Services
 z.B Streaming Server
  - Messaging and colaboation Services
 E-Mail, calandering
- Networking Services
remote access, VPN, routing
- web Services
UDP, TCP, usw...


# 11.10.2023
<mark style="background: #FF5582A6;">.Net - Framework</mark> (Beziehungen der komponenten)

![[Zeichungen/Drawing 2023-10-11 12.01.13.excalidraw]]

CLR → common language runtime
> laufzeitumgebung für (managed) code 
> beinhaltet einige Features (z.B Gabagee Collection)

FCL → framerate class library, € CLR
> Die CLR ist als klassischer COM- Server implement
  COM- Server: stellt Server auf Serveranwendungen (für den Client) zur Verfügung.

Services, Funktion, Routinen (exemplarisch)
Windows API: Funktionen → createprocess, createfile

System calls: native system service 
undokumentierte (unmanaged) services, aus der user-mode aufrufbar 

NT Create Prozess (Start eines neuren Propzesses)

Kernel Supportfunktionen
 Suproutinen, nur vom Kervel aus aufrufbar 
 ExAllocate Pool WithTag = lädt einen Servertreiber aus dem Heap. 

Heap ←→ Stack 
Heap: Dynamischer Daten
Stack: strukturierter Speicher +






# 17.10.2023

#### <mark style="background: #FFB8EBA6;">Windows Services</mark>

- <mark style="background: #FFB8EBA6;">Prozesse, die vom Service Control Manager gestartet werden,</mark>
	- zb Task Scheduler Service - läuft im User-Mode, unterstützt die Zeitplanung der Applikationenn (CPU-Time)(!= Devicetreier)
- <mark style="background: #FFB8EBA6;">DLLs (dynamic link libraries)</mark>
	- Satz an aufrufbaren Subroutinen, in einem einzigen Binärfile zusammen gefasst (linked), der dynamisch geladen wird.
		- zb Msvert.dkk (C runtime libary)
		- Versmel32.dll (Subsystem libary)
	- Vorteil der Dlls (gegenüber statischen Libraries)
		- → Apps nützen Dlls gemeinsam (sharing)
		- → Windows stellt ferner Sicher, dass immer nur 1 Kopie einer dll im Speicher ist.
- <mark style="background: #FFB8EBA6;">Virtual Memory</mark>
	- basierend auf einem linearen Adressraum, damit jeder Prozess (scheinbar) seinen eigenen ("großen") privaten Adressraum zur Verfügung hat.
		- → logische Sicht auf den virtuellen Speicher ist nicht ident mit dem Physikalischen Speicher ![[dr_We_12_2023_08.excalidraw]]
	
       - Der <mark style="background: #FFB8EBA6;">Memory Mapper ist Teil des OS</mark> und <mark style="background: #FFB8EBA6;">stellt sicher</mark>, dass sich die (phys) <mark style="background: #FFB8EBA6;">Bereiche unterschiedlicher Prozesse nicht überschneiden</mark>
	- Problem: physikalischer Speicher << virtueller Speicher → einige Inhalte werden daher auf die Festplatte ausgelagert = <mark style="background: #FFB8EBA6;">Swapping</mark>
	- <mark style="background: #FFB8EBA6;">Größe</mark> des virtuellen Speichers ist von der <mark style="background: #FFB8EBA6;">Plattform abhängig</mark> → x86(32bit) = max 4gb
	- → daher würde die Hälfte von <mark style="background: #FFB8EBA6;">OS selbst benötigt</mark> (obere Hälfte) 0x8000 0000 - 0xFFFF FFFF
	- → <mark style="background: #FFB8EBA6;">untere Hälfte ist für Prozesse verfügbar,</mark> dadurch virtueller Speicher scheint es so, dass jeder Prozess diese Hälfte exklusiv erhält.


# 24.10.2023

Alternativ: boot-time option Prozesse bekommen die möglichkeit, 3 GB zu adressieren, wenn sie spezielle Programme laufen lassen. Diese Programme müssen speziell gekenzeichnet werden, dazu dient ein bestimmtes Flag(=Marker), das "Lange adress scapre aware" -flag. z.B Datenbankserver → kann größere Teile der Datenback in den Speicher laden, wodurch das Mapping reduziert wird, und die Zugriffe beschleunigt werde. Falls das immer nicht zu wenig ist ⇒ Mechanismus AWE-Address Windowing Extension.
Erlaubt ist bis zu 64GB Physicher Speicher zu belegen.
Nachteil: Statt der Memory Managers muss daér Programmierer das Mapping übernehemen! (Daher muss er sicherstellen, dass Prozesse speicher nicht überlappend benutzen).
64bIT Systeme:
![[Zeichungen/Drawing 2023-10-24 09.36.17.excalidraw]]

# 17.11.2023

### <mark style="background: #FFB8EBA6;">Prozesse, Threads und Jobs</mark>

- <mark style="background: #FFB8EBA6;">Prozessinhalte:</mark>
	- private virtual adress space = virtuelle Speicheradressen, die von Prozess benötigt werden
	- ausführbares Programm(executable)
		- obigen Adressraum zugeordnet
		- definiert sämtliche initialisierungsdaten
		- + Datums-/Zeitstempel
	- Prozess ID
		- unique identifier (Teil der ClientID)
	- Liste der Open Handler (zu den div. Ressourcen)
		- Files(verfügbar für Threads im Prozess)
		- communication ports
		- semaphore (=Datenstrukturen)
	- Access Token
		- security context, zur Identifikation von:
			- user
			- security group(s)
			- Session
			- privileges
			- UAC (User Account Control) - virtualization state
	- Zumindest 1 Thread
		- Anmerkung: darf nicht ein leerer Thread sein(sind auch sinnbereit)

> Jeder Prozess zeigt auf seinem partent-Prozess (Creator)
> Wird der Creator geschlossen, zeigt der child-Prozess auf einen leeren praten-Prozess 
> Der Prozess kann aber weiterlaufen, da er seine eigne, eindeutige ID hat. (und die benötigten geteilten Daten/Ressourcen erhalten bleiben)

2te HÜ: Treibersignnaturen (Windoof: KNCS... kernel mode code signing) das ausschalten → Desktopänderung hochladen, inkl Windowserien und Releasenummner zb 23H2 schritte in pdf in Stichworten Dokumentieren in vm obvi


# 18.11.2023

## Threads
= minimale Einheit innerhalb eines Prozesses, er wird vom OS für die Ausfürungsplannung benötigt.
(zur Erinnerung: ein Prozess ist ohne zumindest 1 Thread nicht lauffähig)

<mark style="background: #ABF7F7A6;">Essentielle komponenten:</mark>
- Thread ID 
	Prozess ID und Thread ID gehören denselben "Namespace" an.
- 2 Stacks → einen für dir Ausführung im kernel mode und einen im user mode.
- Satz an CPU Registern (Inhalte) → zur Abbildung des aktuellen Status des Threads
- TLS → Thread local storage 
  - = private storage area mit Runtime libraries, DLLS Subsystems, ...
- Thread eigener security Context
  - im bestimmten Fällen, im multitheads applications, bei Serveranwendungen (beinhaltet security ID der Clients)
  - Threadcontext: Inhalte sind architekturabhängig
  - Aum: läuft ein Thread im 32 bit-Modus, so liegt er sowohl einem 32bit-Cotext, das auch einem 64bit-Context, damit zwischen diesen beiden Modi umgeschaltet werden kann.

<mark style="background: #FF5582A6;">Thread Switching
</mark>
häufiges Umschalten zw. Theads ist (unter anderem für die CPU) aufwändig.
Windows - 2 Mechanismen
- Fiber
  - aka light weigt Threads
  - laufen im user mode ⇒ für d. Kernel nicht sichtbar.
  - Fibers und Threads sind Tel derselben Aufwendung →
     1) Convert Thread to Fiber → aus einer Thread wird ein ausführbares Fiber gemacht
     2)  dieser "neue" Fiber kann weitere Fiber erzeugen, mit "CreateFiber".
     3) im framesatz zum Thread muss ein Fiber manuell gespeichert werden → "Switch to Fiber" ein Fiber stoppt nur auf 2 Arten:
         - wenn er abgelaufen ist
         - wenn er seinerseits einen eigenen Fiber startet


# 21.11.2023 und 28.11.2023

<mark style="background: #ABF7F7A6;">UMS Threads</mark>
(user mode Scheduler Threads)
gibt es ausschließlich im 64bit Windowssystemen;
Haben viele vorteile der Fiber, vermeiden aber manche der Nchteile →
UMS- Threads haten einen eigenen Kernelthreadstate, d.h. sie sind für den Kernel sichbar. Deshalb können sie:
- System Calls blokieren
- um Ressourcen konkurirren btw. diese teilen.
wenn >= 2 UMS-Threads lediglich im user mode arbeiten, dann können sie untereinander regelmäsig, ohne den Schduler zu benötigten, d.h. der "Context Switch" erfolgt im Usermode, der Kernel sieht dabei immer nur ein und denselben Thread laufen.

Sobald ein  UMS-Thread den Kernel benötigt, schaltet er selbst zu seinem dedizierten Kernelmode Thread um ⇒"directed context switc
![[Zeichungen/Drawing 2023-11-21 09.10.24.excalidraw]]

![[Zeichungen/Drawing 2023-11-21 09.18.20.excalidraw]]

Jeder Prozess hat seinen eigenen "execution context", dabei teilen sich die Threads innerhalb eines Prozesses den virtuellen Adressraum.
⇒ Threads können dabei den Adressbereich eines anderen Prozesses nicht ansprechen.
- 2 Ausnahmen
  - ein Prozess gestattet einem anderen den Zugriff = shared memory section (aka file Memory object)
  - ein prozess hat Zugriffsrechte, um einen anderen Prozess zu öffnen, i.e, cross-prozess memory.
- security context
- eine liste mit den open handels

Beispiel für open handels:
- Dateien
- shared memory-Bereiche
- geteilte Ressourcen (= Mutual execution obkects, aka mutexes)
- events
- Datenstrukturen 

security context:

![[Zeichungen/Drawing 2023-11-28 08.48.26.excalidraw]]

Der genaue security context ist im Access token gespeichert (unter anderem Security identifier + Credentials für den aktuellen Prozess)
Threads haben keinen eigenen SC, können aber eigene beanspruchen um den SC eines anderen Threads zu imitieren (= impersonate).

# 05.12.2023

VAD = virtual adress descriptor
 = Datenstrunktur, um vom Memory manager nachverfolgt werden zu können.
Eine Erweiterung des Prozessmodels ist der:
## <mark style="background: #FFB86CA6;">Job (aka job Object)</mark>

>Zweck: eine Gruppe von Prozesse zu einer einzigen Einheit zusammenfassen, um eine Manipulation dieser Prozesse(steuern, ändern...) zu erleichtern.
>Das Jobobject ( i.e. "Gruppe von Prozesse") kann z.B. Attribute steuern und den beteiligten Prozess "Grenzen" stehen (z.B. shared memory data...)

# 06.12.2023

## Virtualisierung
- <mark style="background: #ADCCFFA6;">was?</mark>
  - mehrere OS laufen gleichzeitging
  - Pseudo Computer/Sandbox
- <mark style="background: #D2B3FFA6;">Gründe</mark> 
  - Sicherheit
  - Test von Hardware-fremdes OS
  - Software, die für ein anderes OS geschrieben wurde
  - effizientere Hardware-Nutzung
<mark style="background: #FFB86CA6;">Es gibt unterschiedliche Technologien</mark>
- dabei werden manche Teile der Hardware fast "gerecht" verfügbar gemacht, z.B CPU,RAM... an der werden zu gänze emuliert z.B NIC 
<mark style="background: #FF5582A6;">Nachteile</mark>
- Höhere Hardware-Performance nötig
- höhere Komplexität ⇒ höheres know how (kenntnisse)
- Ältere Hardware unterstützt keine Virtualisierung
- Manche der modernen CPUs unterstützten Virtualisierung ebenfalls nicht. Bsp → AMD
- Hardware wird zu einem Single-Point of failure. 
<mark style="background: #D2B3FFA6;">Hardware-Emulation</mark> 
- ist nicht Virtualisierung
dabei wird die gesamte Hardware (eines Rechners) Software-Technisch nach  z.B für nicht existierender Hardware für Programmierung für ortfremde Hardware (z.B Android Apps auf Pc)

![[Zeichungen/Drawing 2023-12-06 12.37.04.excalidraw]]
Problem: Ist aber sehr langsam
Bsp: QEM, MS Virtual PC, Yuzu, Konsolen...


# 19.12.2023

- <mark style="background: #BBFABBA6;">Applikation - virtualisierung</mark>
  - Anwendungen werden in einer virtuellen Umgebung ausgeführt.
  - alle benötigten Ressourcen werden von der virtuellen Umgebung zur Verfügung gestellt
- <mark style="background: #ADCCFFA6;">Vorteile</mark>
  - Platformunabhängig
- <mark style="background: #FF5582A6;">Nachteile</mark>
  - geringe Performance
![[Zeichungen/Drawing 2023-12-19 08.35.14.excalidraw]]

- Virtual Machine Monitor
  - "hybrit" = sowohl Emulation, als auch virtualisierung
  - jedes Guest OS erholt seinem "eigenen" virtuellen Rechner
- <mark style="background: #ADCCFFA6;">Vorteile</mark>
  - nur geringe Änderungen an Guest OS nötig
  - Zugriff auf die wichtigsten Ressourcen wird nur durchgereicht → nativer Performance
  - jedes Guest Os erhält seinem "eigenen" Kernel.
![[Zeichungen/Drawing 2023-12-19 08.49.13.excalidraw]]
- <mark style="background: #FF5582A6;">Nachteile</mark>
	- Ringstruktur des CPUs → Kontextwechsel zur Ring 0 und Ring 3 benötigt Rechen Performance
![[Zeichungen/Drawing 2023-12-19 08.55.27.excalidraw]]


# 09.01.2024

## <mark style="background: #FFB86CA6;">Paravirtualisierung</mark>

→ HW wird weder emuliert noch virtualisiert
→ abstrakte Zwischenschicht: <mark style="background: #FFB86CA6;">Hypervisor</mark> auf dieser laufen die virtualisierten OS
→ Hypervisor =~ Mata OS, auf ein Minimum reduziertes OS
→ GuestOs erteilt eine API zur Kummunikation

Bsp: Xen
VT:
- Hohe Performance
- Hypervisor ist einfacher aufgebaut
NT:
- Guest OS müssen angepasst werden, → nur für Open Source

![[Zeichungen/Drawing 2024-01-09 08.42.48.excalidraw]]

### <mark style="background: #ABF7F7A6;">HW Virtualisierung</mark>

→ Paravirtualisierung für nicht modifizierte Betriebssysteme
dafür musste die CPU angepasst werden, d.h. der Ring 0 wurde gesplitet

Bsp: Behinderungssysteme virtualisierung
 → Containers
 → unter 1 Kernel laufen mehrere, zueinander isolierte Instanzen eines OS
dh eigentlich wird kein eigenes OS instaliert, sondern lediglih eine Instant aufgerufen.
→ Instanzen laufen in einem eigenen Container, wirken dabei wie ein eingenständiges OS
→ Anwendungen können einander nur sehen, wenn sie in derselben Instant laufen, obwohl sie alle auf denselben Kernel zugreiffen.

VT:
 - geringer Ressourcenbedarf + hohes Performance
NT:
- da alle Instanzen denselben Kernel verwenden, können nur "gleiche" OS virtualisiert werden, z.B.: Windoff Server 2016 only, kein 2012er, OpenV-2 für Linux → nur Versionen mit dem selben kernel

- Anwendung
	- Rodserver, Webserver
![[Zeichungen/Drawing 2024-01-09 09.31.32.excalidraw]]


MS-Container 4 Versionen:
- Windoff 10 → über Windoff API
- IoT Core → Für IoT Apps
- Nanoserver → NET-Core
- Servercore → NET-Framework
Release# mussen zum Hostcore passen


# 15.01.2024

Erganzungen:
- Hybritkernel
	- ![[Zeichungen/Drawing 2024-01-15 08.29.07.excalidraw]]
	- virtualisierung mit binary Translation
		- ![[Zeichungen/Drawing 2024-01-15 08.48.58.excalidraw]]
		- Primzip: der Hypervisor fängt alle kritischen Systemanfragen ab (vor dem eigentlichen Ressourcenzugriff)
		- Problem:
			- Relativ aufwendig
			- Guest OS läuft im Ring 1 = Paravirtualisierung



# 22.01.2024

# <mark style="background: #ABF7F7A6;">Paravirtualisierung</mark>

![[Zeichungen/🇾Drawing 2024-01-22 08.30.04.excalidraw]]


# 24.01.2024






