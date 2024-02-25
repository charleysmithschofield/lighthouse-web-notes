// What is an API?

/*
  The presence of APIs (Application Programming Interface) allows systems to
  work together.

  This reading will introduce API principles, best practices, limitations, &
  examples.
*/

/*
  APIs: Windows to the Code:

  APIs are sets of requirements that govern how one application can talk to another.
  APIs aren't new at all, whenever you use a laptop/desktop, APIs are what make it
  possible to move info between programs - for instance:

    By cutting and pasting a snippet of a LibreOffice document into an excel spread
    sheet.

  System-level APIs make it possible for apps like LibreOffice to run on top of an
  OS like Windows in the first place.

  APIs make it possible for applications to "piggyback" on big services like GoogleMaps
  or Facebook.

  Think about the way Yelop, displays nearby restaurants on a Google Map in its app,
  por the way soem video games now let players chat, post high scores and invite friends
  to play via Facebook (right in the middle of the game).
*/

/*
  How APIs Work:

  APIs are especially important b/c they dictate how developers can create new apps that
  tap into big Web services - social networks like Facebook or Pinterest, for instance, or
  utilities like Google Maps or Dropbox.

  The developer of a game app, for instance, can use the Dropbox API to let users store
  their saved games in the Dropbox cloud instead of working out some other cloud-storage
  options from scratch.

  APIs are great time savers. They offer convenience.

  Facebook users appreciate the ability to sign into many apps and websites using their
  Facebook ID - a feature that relies opon Facebook APIs to work.
*/

/*
  When APIs Go Bad:

  Of course, just b/c an API is avl now, that doesn't mean it always will be.

  Twitter, for instance, notoriously limited third-party applications' use of its
  APIs just over a year ago - a move that had the practical effect of killing off
  alternative Twitter clients and driving users to Twitter's own site & apps, where
  Twitter can "monetize" them by displays ads... er, promoted tweets.

  Twitter insited the move was necessary to deliver a "unififed" Twitter experience.

  There are other examples abound.

  Companies can shut down services and APIs that your application depend on become no
  longer available.
*/

/*
  API Concepts and Examples:

    - video reference: https://www.youtube.com/watch?v=7YcW25PHnAA&embeds_referring_euri=https%3A%2F%2Fweb.compass.lighthouselabs.ca%2F&feature=emb_logo

  API = application programming interface

  REST API = representatiional state transfer

  A REST API works pretty much the same way a website works, it gets a request from a client
  that goes to a server and requests information from it.


  HTTP Request Method:
    GET - gets data back from API
    POST - writing data to the API (data goes in the body of the request using Postman - request client download)  
*/

/*
  Beyond the Web:

  The concept of an API reaches well beyond web applications. For instance,
  POSIX is a set of standards that allows compatibility between operating
  systems.
  
  If you have used Mac OS X, then that is a POSIX-compliant API!

  Hardware devices occasionally have APIs as well. Consider the Nest thermostat,
  which offers both a device API and a cloud API. The device API would expose
  the ability to control hardware locally without getting into the gritty details
  of embedded software.

  In general, the Internet of Things has been a topic of increasing popularity.
  Everything from wearable devices to home lighting is available with an API.
*/