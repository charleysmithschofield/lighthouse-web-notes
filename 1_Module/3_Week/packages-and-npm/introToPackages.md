Packages and npm:

Another powerful feature of Node.js is its package manager, npm. 

PACKAGES:
  What are packages?

  Packages are self-contained code libraries that we can install and use in our
  projets.

  If we want additional functionality in Node, then there is often a useful "package" (short for "packaged library") available that has been written and maintained by other individuals or companies in the community.


INSTALLING PACKAGES:
  Insalling and using packages in Node is relatively straightforward from the
  command line. Say we want to install a package called chalk:

  npm install chalk@4.1.2

  This downloads chalk into the current directory/project we're in.

  * You do not need to run this command yet, that comes later.


package.json:
  Virtually all Node.js projects have a file called package.json, which looks similar to this:

  {
  "name": "project-name",
  "version": "1.0.0",
  "description": "Short project summary",
  "main": "index.js",
  "scripts": {
    "myscript": "ENV=development node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "express": "^4.13.4"
  }
}

  There are some basic attributes such as the project's name, description, and author.


CUSTOM SCRIPTS IN package.json:

  The scripts portion allows us to run commands using an alias, for instance:

  npm run myscript


DEPENDENCIES IN package.json:

  The dependencies section of package.json lists the packages that need to be installed for the project to run properly. In the above example it lists a package called express, and the value ^4.13.4 specifies the version.


INSTALLING chalk:
  - see chalk-test directory



