# Domain Name System (DNS):

When you type a URL into a browser and press ↵, a website magically appears on your screen. How does that work? What are the steps that are performed in between the time the request is started and the time a response is delivered?

One fundamental step in this process involves a system called DNS, or Domain Name System, and it dates back to the beginning of the Internet itself!

Your goal is to gain a familiarity with how DNS works, the types of records, and how to approach debugging problems that may arise.


## What is DNS?

DNS - Doman Name System is a system that helps your device find the correct IP address when you type a human-friendly name (like www.example.com) into your browser. 

DNS RESOLVES DOMAIN NAMES TO IP ADDRESSES.

So instead of remembering a bunch of numberrs, you just rember the names of websites, and DNS takes care of the rest, helping you reach the right destination on the web.

  - Video Reference: https://www.youtube.com/watch?v=72snZctFFtA


## How Does DNS Work?

DNS will resolve a domain name to a number (IP Address).

  For example: Let's say you are trying to reach yahoo.com. 
  
  When you type yahoo.com, the DNS system searching its database for the matching domain name. Once it locates this matching domain name, it converts it to the associated IP address.
  
DNS basically works like a phone book, it finds the name and returns the number.


## DNS Steps:

When you type a domain name (for example www.yahoo.com). At each of the steps below, that server will attempt to locate the IP address it its cached memory and if it is unable to locate it, it sends the query to the next server.


  1. Your OS System:

    - Searches its cached memory for the IP address.
    - If unable to locate, it sends the query to the Resolver Server.
    

  2. Resolver Server:

    - Resolver Server: basically your internet provider.
    - Searches its cached memory for the IP address.
    - If unable to locate, it sends the resolver to the Root Server.


  3. Root Server:

    - root server: the top or the 'root', of the DNS hierarchy.
    - 13 sets of these root servers are strategically placed around the world.
    - 12 organizations operate these root servers.
    - Each set of these root servers has its own IP address.

    The root server will not know the IP address, but it will know where to send the resolver to help it find the IP address. It does this by directing the resolver server to the TLD (top level domain) server for the .com domain.

  4. TLD Server:
    - TLD Server: top level domain server
    - The TLD stores the address info for top level domains such as .com, .net, .org, etc. 

    The resolver will now ask the TLD server for the IP address. The TLD server will not know the IP address, so it sends the resolver to the final server which are the Authoritative Name Server.
    
  5. Authoritative Name Servers:
    - Authoritative Name Servers are responsible for knowing everything about the domain (including the IP address).

    The resolver will now as the authoritative name servers for the IP address. The authoritative name server will respond to the resolver with the IP address. 

    The resolver will then tell your OS the IP address.

    ** The Resolver server will now store the IP address in its cached memory so it doesn't have to go over all of this again. 


## Record Types:
Although there are many available DNS Record Types, there is a small subset that cover most use cases.

Each of these records serves a specific purpose in the DNS system, helping to translate human-readable domain names into the numerical IP addresses that computers understan

#### Reference Video: https://www.youtube.com/watch?v=HnUDtycXSNE

### A: Address Record
map a hostnames to IP address (IPv4, 32-bit address)

This record maps a hostname to an IPv4 address, which is a 32-bit numerical address used to identify devices on a network.

- most common


### NS: Name Server (responsible for a DNS zone)
Stands for Name Server. 

It specifies which server is responsible for a particular DNS zone. These servers hold information about a specific
portion of the DNS hierarchy.

### MX: Mail Exchange (record specifies where email gets sent to)
Mail Exchange record. 

It tells email servers where to send email for a particular domain. It points to the servers that handle email delivery for that domain.

### CNAME: Canonical Name (an alias for another hostname)
Canonical Name. 

This record is an alias for another hostname. It allows you to point multiple domain names to the same location
without needing to duplicate DNS records.

### AAAA: similar to A, but uses IPv6, 128-bit address
Similar to the A record but used for IPv6 addresses, which are 128-bit addresses used for identifying devices on networks. This record maps a hostname to an IPv6 address.



## DNS Providers
For your reference, common cloud-based DNS providers include (but are not limited to):

  - Amazon Route 53
  - CloudFlare
  - Verisign
  - EasyDNS
  - Azure DNS

