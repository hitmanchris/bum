---
tags:
  - tigerwerk
  - 2_klasse
---
# 13.10.2023

## Cisco iOS-Modi 

- <mark style="background: #ABF7F7A6;">User exec Mode </mark>
 - Switch >
 - Router >
Man kann hier nur user sachen machen

- <mark style="background: #FF5582A6;">priveleged exec mode</mark>
 - Switch #
 - Router # 
mit "enalble"kommt man rein
man hat hier admin rechte und somit alles machen/anschauen

<mark style="background: #FFB86CA6;">Configurations modi</mark>
 - <mark style="background: #BBFABBA6;">Global:</mark> Switch (config)#
  - Man kann sachen die den ganzen Switch betreffen kann man ändern/anschauen. In diesen zusatnd welchet man mit: "Configure terminal"
 - <mark style="background: #BBFABBA6;">Line:</mark> Switch(config-line)#
  - Man kann hier die passwörter einstellen.  <mark style="background: #FF5582A6;">line console 0</mark> → Zugriff über Konsolenkabel, <mark style="background: #D2B3FFA6;"> line vty 0 15</mark> → Zugriif über Talenet oder SSh Zahl besagt wie vie leute gleichzeitging dingsen könenn
![[Zeichungen/Drawing 2023-10-13 14.11.14.excalidraw]]
- <mark style="background: #ADCCFFA6;">interface:</mark> Switch (config-interface)#
 - interface Ethernet, Fast-Ethernet, Gigabit-Ethernet, Serial, Ports können zb: 0/1, 0/2, 1/1 oder 0/0/1.


<mark style="background: #ABF7F7A6;">Nochmal OSI 7 Schichten hier auch haben EZ
</mark>
| nummer | name         |
| ------ | ------------ |
| 1      | Physical     |
| 2      | Data link    |
| 3      | Network      |
| 4      | Transport    |
| 5      | Session      |
| 6      | Presentation |
| 7      | Applikation  |

<mark style="background: #ADCCFFA6;">TCP/ IP</mark>

| Name         | Prokokol            | Andresen |
| ------------ | ------------------- | -------- |
| Aplikation   | HTTP,FTP, POP3, DNS |          |
| Transport    | TCP,UDP             |Ports          |
| Interet      | IPv4/IPv6           |IP          |
| NetworkAcces | Ethernet            |MAC       |



# 10.11.2023

## <mark style="background: #FFF3A3A6;">TCP/IP-Model</mark>

Protokolle 

| Application    | HTTP(s), FTP, SMTP, POP3, |                                                    |     |
| -------------- | ------------------------- | -------------------------------------------------- | --- |
|                |                           |                                                    |     |
| Transport      | TCP, UDP                  | Ports: System 0-1023, User 1024-49151, 49152-65535 |     |
|                |                           |                                                    |     |
| Internet       | IPv4, IPv6                |                                                    |     |
|                |                           |                                                    |     |
| Network Access | Ethernet, PPP, PPoE       |                                                    |     |


![[Zeichungen/Drawing 2023-11-10 14.18.28.excalidraw]]


### Übertragung von Nachrichten im TCP IP Layer 

![[Zeichungen/Drawing 2023-11-10 14.43.45.excalidraw]]

Beispiel: Pc A zu PC B und Pc B zu Pc C Aber mit Router
![[Zeichungen/Drawing 2023-11-10 15.05.52.excalidraw]]



# 01.12.2023

## <mark style="background: #D2B3FFA6;">Physical</mark>

![[Zeichungen/Drawing 2023-12-01 14.12.07.excalidraw]]

<mark style="background: #BBFABBA6;">Bandbreite:</mark>
- Latenz
   - ![[Zeichungen/Drawing 2023-12-01 14.18.20.excalidraw]]
   - Sagt wie lange es dauret bis dinger kommen

- Thoughput
 - The measure of the transfer of bits across the media over a given period of time

- Goodput
 - the measure of usable data transferred over a given period of time
 -  Goodput = Throughput - traffic overhead
 Packet hearder
 ![[Zeichungen/Drawing 2023-12-01 14.27.45.excalidraw]]
<mark style="background: #FF5582A6;"> Kupfer Kabel</mark>
Copper cabling is the most common type of cabling used in networks today. It is inexpentice, easy to instal, low resistance
- Limitatierungen
  - Dämpfung
  - Interferenzen
- Kabelarten
  - Unshielded Twisted-Pair (UTP) Cable
  -  Shielded Twisted-Pair (STP) Cable
  - Coaxial Cable → half duplex

<mark style="background: #BBFABBA6;">UTP Cabling Standards and Connections</mark>
- RJ-45 connector
- RJ-45 Socket
  
<mark style="background: #FFB8EBA6;">Fiber-Optic Cabling</mark>
Querschnitt:

- Half Duplex (Single mode)
![[Zeichungen/Drawing 2023-12-01 14.47.38.excalidraw]]

- Full Duplex (Multi mode)
![[Zeichungen/Drawing 2023-12-01 14.52.30.excalidraw]]


<mark style="background: #FFB86CA6;">Wireless Media</mark>

It carries electromagnetic signals representing binary digits using radio or microwave frequencies. This provides the greatest mobility option. Wireless connection numbers continue to increase.

Some limitations:
- Coverage area
- Interference
-  Security
- Shared medium

<mark style="background: #CACFD9A6;">WLAN wichtige Begriffe</mark>
- SSID(Set Identifier)
  - Name SSID ermoöglicht es Benutzern, zwischen verschidenen verfügbared Netzwerken zu unterscheiden
- BSSID(Basis Service Set Identifier)
  - Die BSSID ist die MAC-Adresse des Acces points in einem WLAN.
  - Sie dient zur eindeutigen Identifizierung des Zugangspunktes innerhalb eines Netzwerks

<mark style="background: #FFB86CA6;">WLAN standards und weitere Infos</mark> 
Aktruelle Standards
 - 802.11ac (WLAN 5)
 - 802.11ax (WLAN 6)

<mark style="background: #FF5582A6;">WLAN recuires following things</mark>
- Wireless Acces point (AP)
- Wireless NIC Acces Adapters



# 12.01.2024

## Zusammenfassung Data Link Layer

<mark style="background: #ADCCFFA6;">Data Link Layer: </mark>
- Is responsible for communication between end-device network interface cards.
- Allows upper Layer Protocols the physical layer media packets into Layer 2 Frames
- Performs error detection

<mark style="background: #D2B3FFA6;">Data Link sublayers:</mark>
Consists of 2 sublayers:
- Logical Link Control (LLC): Communicates between the networking software at the upper layer and device hardware at the lower layers.
- Media Access Control (MAC): Responsible for data encapsulation and media access control

<mark style="background: #FFB86CA6;">Providing Acces to Media</mark>
Packets that are exchanged between nodes may experience data link layers and media transitions.
At each hop along the path:
- Accepts frame from the network medium
- De-encapsulates the frame to expose the encapsulated Packet
- Re-encapsulates the packet into a new Frame
- Foreards the new frame on the medium of the next network segment

<mark style="background: #ABF7F7A6;">Physical and Logial Topologies</mark>
- Physical: Shows physical Connections
- Logical topology: Identifies the virtual Connections

<mark style="background: #FF5582A6;">WAN topologies
</mark>
- Point to point
- Hub and shoke
- Mesh

<mark style="background: #FFB86CA6;">Point to point topology</mark>

- directly connects two nodes
- The nodes may not share media with others hosts
- Very simple because all frames travel on the media from the two nodes

<mark style="background: #ADCCFFA6;">LAN Topologys</mark>

- Typically interconnected using a star or extended star topology
- Early Ethernet and Legacy Token Ring technologies provide two additional topologies
	-  Bus: All systems are chained together and terminated on each End 
	- Ring: Each system is connected to its recpective neighbors to form Ring

<mark style="background: #FFF3A3A6;">Half and Full Duplex communications</mark>

- Half Dublex: 
	- Allows only one device to send at a time
	- Used on WLANs and legacy bus topologies with Ethernet hubs
- Full duplex: 
	- Allows both Devices to transit and recieve
	- Ethernet switches operate in full-duplex mode.






























