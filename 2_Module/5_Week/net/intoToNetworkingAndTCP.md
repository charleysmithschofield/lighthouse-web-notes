# Into Into Networking and TCP:

## Into to Networking:
  
    - Computer Network: is when two or more computers are connected and can communitcate with each other.

    - Examples of networks: 
      - A network could be a wireless router and a computer. This is a network.

    - LAN: Local Area Network. It's like the network at your home, school, or office connecting devices like computers, printers, and phones within a limited area, like a building or campus.

    - WAN: Wide Area Network. It's like the Internet, connecting LANs over larger distances, like across cities, countries, or even continents.

    When we connect our phone directly to our laptop via a USB cable or bluetooth connect, we are creating a network connection between these two devices. As you may expect these two devices can also be connected indirectly. By having our laptop and phones connected to the same Wifi router, these two devices can send messages between each other and are therefore networked.

    * When we talk about networking, we are not simply talking about the internet.

    The internet is indeed a network, but a network is not the internet. Networking makes the internet possible. However, again, networking can happen on a smaller scale even just between two devices.


  * TMI (Too Much Info) Alert:

    There is much to learn about how computers link together to form local networks, as well as how the internet is formed. This knowledge is helpful to share our understanding of how the internet works today, but not required in order to build networked applications. For that reason, we will leave the theoretical lessons for later.


## Intro to TCP:

  - TCP: which stands for Transmission Control Protocol, provides a standard that allows machines to speak to each other.

    TCP based communication allows two machines to establish an open channel for two-way data communication. Once a connection is established, both parties can start sending/receiving data until one of them decides it has had enough and decides to terminate the connection.

    In computer networking, this number is an IP address. A computer can have many network-based applications running, much like how a company can have many different offices. For this reason, someone decided to effectively allow for specific phone number extensions. These are referred to as ports in computer networking.


## What is a Mac Address:

  - MAC address: a unique ID for a device on a network, such as your computer or smartphone. It is made up of a series of numbers an dletters assigned to each device's network interface. 

  What do MAC address do>
    Mac addresses help routers and other devices identify and communicate with each other one a network. Think of it as a digital fingerprint for your device on the internet.

  MAC address are 6 bytes long, which are separated by a colon, or two bytes together, each separated by a dot.


## How do Computers Talk?

  Let's say there are 3 computers, MAC A, MAC B and MAC C

  MAC A sends a message to MAC B (MAC C can see it because it is on the same network, but MAC C sees that the message is addressed to MAC B so it does not respond).

  MAC B receives the message from MAC A and formulates a response to send back to MAC A (again MAC C sees this occur, but as it is still not addressed to it, it does not respond).


## Conclusion:

  Computer networks allow computers/devices to send messages to each other. These operations take time, even more time than a computer takes to write to its own disk, for example.

  TCP is a specific type of protocol (aka guideline, standard, agreement) which is commonly used to structure the data and workflow of data over the network.


## Conclusion - Expanded:
  Here we have the foundation of how an app can "call up" another app. The client is always the one establishing the connection to the server. All the client needs is the destination IP address and PORT information.

  This is similar to how a caller needs the phone number and extension of the office they are trying to reach. Once they are connected, it's also like a phone conversation between two parties. Both sides can decide when to talk and what information to gather or discard.

  The activity that follows is marked as stretch, but it's highly recommended. After creating this simple server for yourself, sharing with a cohort colleague (and connecting over the internet!) should be next on your list.

  Give it a read through at least, but it would be a good idea to complete the activity if you have time. You can also discuss your lingering questions with your partner, or maybe save them for your next lecture.

  Check out the XKCD comic below from 2007 about networking and how difficult it is for viruses to "disable the internet".


