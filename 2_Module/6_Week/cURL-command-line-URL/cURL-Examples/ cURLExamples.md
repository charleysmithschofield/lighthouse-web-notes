# cURL Examples 1-8:

  - Web Reference: https://www.thegeekstuff.com/2012/04/curl-examples/

## Example 1: Download a Single File
The following command will get you the content of the URL and display in the STDOUT (your terminal):

    $ curl http://www.centos.org

To store the output in a file, you use a redirect as per below (this will also display some additional download stats):

    $ curl http://www.centos.org > centos-org.html

Your terminal would display:

  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 27329    0 27329    0     0   104k      0 --:--:-- --:--:-- --:--:--  167k

## Example 2: Save the cURL Output to a File

We can save the result of the curl command to a file by using -o/-O options.

-o (lowercase o):
  
    the result will be saved in the filename provided in the command line  

      $ curl -o mygettext.html http://www.gnu.org/software/gettext/manual/gettext.html


-O (uppercase O): 
    
    the filename in the URL will be taken and it will be used as the filename to store the result

    $ curl -O http://www.gnu.org/software/gettext/manual/gettext.html


## Example 3: Fetch Multiple Files at a Time
We can download multiple files in a single shot by specifying the URLs on the command line:

    $ curl -O URL1 -O URL2

The below command will download both index.html and gettext.html and save it in the same name under the current directory.

    $ curl -O http://www.gnu.org/software/gettext/manual/html_node/index.html -O http://www.gnu.org/software/gettext/manual/gettext.html
    Please note that when we download multiple files from a same sever as shown above, curl will try to re-use the connection.

## Example 4: Follow HTTP Location Headers with -L Option

By default CURL doesn’t follow the HTTP Location headers. It is also termed as Redirects. When a requested web page is moved to another place, then an HTTP Location header will be sent as a Response and it will have where the actual web page is located.

For example, when someone types google.com in the browser from India, it will be automatically redirected to ‘google.co.in’. This is done based on the HTTP Location header as shown below.

    $ curl http://www.google.com


    <TITLE>302 Moved</TITLE>
    <H1>302 Moved</H1>
    The document has moved
    <A HREF="http://www.google.co.in/">here</A>
    The above output says that the requested document is moved to ‘http://www.google.co.in/’.

We can insists curl to follow the redirection using -L option, as shown below. Now it will download the google.co.in’s html source code.

    $ curl -L http://www.google.com

## Example 5: Continue / Resume a Previous Download

Using curl -C option, you can continue a download which was stopped already for some reason. This will be helpful when you download large files, and the download got interrupted.

If we say ‘-C -‘, then curl will find from where to start resuming the download.

We can also give an offset ‘-C <offset>’. The given offset bytes will be skipped from the beginning for the source file.

Start a big download using curl, and press Ctrl-C to stop it in between the download.

    $ curl -O http://www.gnu.org/software/gettext/manual/gettext.html
    ##############             20.1%

Note: -# is used to display a progress bar instead of a progress meter.

Now the above download was stopped at 20.1%. Using “curl -C -“, we can continue the download from where it left off earlier. Now the download continues from 20.1%.

    curl -C - -O http://www.gnu.org/software/gettext/manual/gettext.html
    ###############            21.1%

## Example 6: Limit the Rate of Data Transfer:
You can limit the amount at which the data gets transferred using –limit-rate option. You can specify the maximum transfer rate as argument.

    $ curl --limit-rate 1000B -O http://www.gnu.org/software/gettext/manual/gettext.html


The above command is limiting the data transfer to 1000 Bytes/second. curl may use higher transfer rate for short span of time. 

But on an average, it will come around to 1000B/second.

## Example 7: Download a File Only if it is Modified Before/After the Given Time

We can get the files that are modified after a particular time using -z option in curl. This will work for both FTP & HTTP.

    $ curl -z 21-Dec-11 http://www.example.com/yy.html

The above command will download the yy.html only if it is modified later than the given date and time

    $ curl -z -21-Dec-11 http://www.example.com/yy.html

The above command will download the yy.html, if it is modified before than the given date and time.

Please refer ‘man curl_getdate’ for the various syntax supported for the date expression

## Example 8: Pass HTTP Authentication in cURL
Sometime, websites will require a username and password to view the content ( can be done with .htaccess file ). 

With the help of -u option, we can pass those credentials from cURL to the web server as shown below.

    $ curl -u username:password URL

Note: By default curl uses Basic HTTP Authentication. We can specify other authentication method using –ntlm | –digest.