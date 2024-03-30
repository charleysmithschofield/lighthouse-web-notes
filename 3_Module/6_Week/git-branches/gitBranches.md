# Intro to Git Branches - Reading

This activity explains what Git branches are, and how they can be used to organize and control the development of a project.

## Reading
In the prep work for this course, we went over what Git is and how it is typically used.

We know that a remote repository holds the 'master' version of each of the files for our project, while we work on a copy of those files locally. This allows developers to control and organize any updates that they, or their teammates, make to a repository.

However, things can become much more organized than just one 'master' version of a project that everyone works with!

This is where the concept of 'Branching' comes in.

With the power of branches a project's features, bugs, and updates can be sectioned off into their own versions of the source code. This allows people to make many different changes to the source, which can later be reviewed before being 'merged' into the master version.

## Example
David, Sarah and Quinn are working together on a chat app. They have the main functionality complete. Users can chat with each other through the web browser.

  -  Master (aka now Main): 
    - users can chat in browser
    - users can change their display name
    - users can view all messages

To spice things up, the team decides it would be nice if each user's display name was a different color.

Quinn goes ahead and creates a branch called: feature/display-name-color

No we have:

  -  Master (aka now Main):
    - Git branch: feature/display-name-color

Now Quinn can work on the code in this branch and even push it to Github w/o effecting the  Master (aka now Main) branch. If he writes some code that breaks the rest of the app, the working version of the app is protected.

Quinn's new branch can be tested separately to make sure it works, before pushing it to the release (or 'production') version.

The team also discovers a nasty bug where messages are being duplicated! Sarah gets to work on fixing it and creates another branch. This one is called bug/duplicate-message

## Chat App Repo Diagram
After the team completes their corrections they merge the changes:

Master (aka now Main) 
  - bug/duplicate-message
  - feature/display-name-color

  > git checkout master
  > git merge bug/duplicate-message
  > git meerge feature/display-name-color

## Git Branches References:
 - Git Branches in a Nut Shell: https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell
 - Git Branches Sand Box (USE THIS TO LEARN!): https://learngitbranching.js.org/ 

