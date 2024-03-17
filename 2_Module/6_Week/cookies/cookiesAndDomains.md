# Cookies and Domains - Reading

This activity explains how and why browsers implement restrictions on cookies for security purposes.

## Cookie Accessibility
Who, or which website(s), have access to a cookie?

The short answer: A browser cookie is specific to the domain that created it. Only the web pages within the domain that created the cookie are able to access its contents.

The browser sends cookie data with subsequent requests to the server, so only cookies that pertain to the website in question are included in the request headers.

When it comes to reading/writing potentially sensitive personal information, security and privacy immediately jump to mind.

While cookies can specify where they're accessible to (domain=), they cannot be set across different domains. The same is true when attempting to read cookies. Website a.com cannot read cookies that are set by website b.com.

Things get more complicated with subdomains. Depending on the the domain= property, a server on example.com could allow subdomain.example.com to access its cookies, or not (and vice versa).

These details are not crucial at this point, but if you are interested in digging deeper, read the following:

 https://stackoverflow.com/questions/1062963/how-do-browser-cookie-domains-work 

 