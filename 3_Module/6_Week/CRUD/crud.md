# CRUD and HTTP - Reading:

This reading introduces the four different actions that can be performed on data, and how web applications can be designed around the idea of manipulating data:

## CRUD
Almost all web applications allow users to manipulate data in various ways, which we typically break down into four categories:

  - Create (add a new record)
  - Read (retrieve the value of a record)
  - Update (update a record's value)
  - Delete (delete a record)

  AKA: CRUD

If we used a JS object users whose keys would be user IDs and whose matching values would be objects storing user info, the following table shows how we could perform CRUD operations on the user's object.

  Action: JavaScript
  - Create: users["5315"] = {first_name: "John", last_name: "Smith"}

  - Read: users["5315"]

  - Update: users["5135"].first_name = "Jane"

  - Delete: delete users["5135"]


Later in the program, instead of using JavaScript objects, we will use databases to store our data so that the data is persisted (that is, so it doesn't disappear when we restart our apps). 

The basic operations will still be CRUD, but the databases provide more powerful versions of each.

(for example, being able to create multiple data entries at a time, or to list data entries that match a certain condition).


## CRUD and HTTP
Most applications can be thoguht of as "fancy user interfaces on top of databases", and in the case of web applications, HTTP is the protocol used to facilitate communication between the interface and the database (with the browser and server in between).

HTTP was designed around the concept of resources (described by URLs) and actions that can be taken on them.

To take an action on a resource, a client (for example, a browser) sends an HTTP request to a server with the approprieate URL and method. 

The following table shows how the most common HTTP methods correspond with CRUD actions:

  HTTP Method (CRUD Action)
  - GET (Read)
  - POST (Create)
  - PUT (Update)
  - DELETE (Delete)

HTTP defines slightly different expected behaviours and properties for each of these methods, and it is important to understand these characteristics.

## HTTP - Safe Methods 
A request method is safe if a request with thtat method has no intended effect on the server. The methods GET, HEAD, OPTIONS, and TRACE are all defines as safe.

In other words: safe methods are intended to be READ-ONLY.
 
 - They do not exclude side effects though, such as appending request info to a log file, or charging an advertising account, since they are not requested by the client, by definition.


## HTTP - Unsafe Methods
The Methods POST, PUT, DELETE, CONNECT AND PATCH are NOT safe.

They may modify the state of the server or have other effects such as sending an email. Such methods are therefore not usually used by conforming web robots or web crawlers.

## Idempotent Methods
A request method is idempotent if multiple identical requests wiht that mehtod have the same effect as a single request.

The methods PUT and DELETE, and safe methods are defined as idempotent. 

  - idempotent: multiple identical requests with that method have the same effect as a single request.

  (performing the operation multiple times will not change the outcome after the first successful execution)

## Not Idempotent Methods
In contract, the methods POST, CONNECT, and PATCH are not necessarily idempotent, and therefore sending an identical POST request multiple times may further modify the state of the server or have further effects, such as sending multiple emails.

In some cases this is the desired effect, but in others it occurs accidentally.

## Note RE Idempotent / Non Idempotent Methods
Whether or not a method is idempotent is not enforced by the protocol or web server. It is perfrectly possible to write a web application in which (for example) a database insert or other non0idempotent action is triggered by a GET or other request.

To do so against recommendations may result in undesirable consequences if the user agent assumes that repeating the same request is safe when it is not.

## Playing by HTTP Rules:
It would technically be possible to create a functional web application that only uses GET requests for all CRUD actions, but to play by the rules of HTTP we should use the appropriate methods for each request. 

This means that when we send a safe request to read some information (safe as in a request that should have no side effects on the server), we should use the GET method. When we send a request to create a resource we should use POST. When we update a resource in an idempotent way we should use PUT, otherwise when updating in a non-idempotent way we should use POST. If we are requesting to delete a resource, we should use DELETE

## Limitations of HTTP in the Browser

Unfortunately there's a catch... Using just links and forms we can't achieve our goal of issuing the right type of HTTP method for each request, because links can only create GET requests and forms can only create GET and POST requests (for historical reasons).

To create PUT and DELETE requests we would need to use a workaround known as HTTP Method Override, but for simplicity we will make do with just GET and POST. Instead of PUT and DELETE, we will use POST.