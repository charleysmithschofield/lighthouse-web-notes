// Command Line URL (cURL) - Reading:

// This exercise will introduce one of the cornerstone tools that should be
// in every developer's arsenal, cURL.


/*
  cURL Intro:

  cURL is a command line utlity that is used to make HTTP requests to a given
  URL and it outputs the response. It allows you to `see` the `URL`.

  Example below:
  - Enter this into your terminal:
    curl www.example.com

  - You should see this:
    <!doctype html>
    <html>
    <head>
        <title>Example Domain</title>
        ...
    </head>

    <body>
    <div>
        <h1>Example Domain</h1>
        <p>This domain is established to be used for illustrative examples in documents. You may use this
        domain in examples without prior coordination or asking for permission.</p>
        <p><a href="http://www.iana.org/domains/example">More information...</a></p>
    </div>
    </body>
    </html>


  Now Re-Run it Using Command Line Arugment -i to Inspect Response Headers:
  - Enter this into your terminal:
    curl -i www.example.com

  - You should see what we got above, as well as this:

    HTTP/1.1 200 OK
    Accept-Ranges: bytes
    Age: 304380
    Cache-Control: max-age=604800
    Content-Type: text/html; charset=UTF-8
    Date: Mon, 26 Feb 2024 21:29:52 GMT
    Etag: "3147526947"
    Expires: Mon, 04 Mar 2024 21:29:52 GMT
    Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
    Server: ECS (sed/5889)
    Vary: Accept-Encoding
    X-Cache: HIT
    Content-Length: 1256
*/


