# Git Branches - A Walkthrough

Follow Along with this interactive learning tool: https://learngitbranching.js.org/


## Section 1 - Git Commits
A commit in a git repo records a snapshot of all the (tracked) files in your directory. It's like a giant copy and paste, but better!

Git wants to keep commits as lightweight as possible though, so it doesn't blindly copy the entire directory every time you commit. It can (when possible) compress a commit as a set of changes (aka a "delta"), from one version of the repo to the next.

Git also maintains a history of which commits were made when. That's why most commits have ancestor commits avoe them -- we designate this with arrows in our visualization. Maintaining history is greate for everyone working on the project!

### How do we commit?
Commits - Command:
  ENTER: 

    git commit -m "git commit message here"

* Git messages should be in present tense, and should sound like instructions being given to whoever is reading them:

Example: "add loop to iterate through the array of data"
- this is in present tense
- sounds like instructions to the reader


## Section 2 - Git Branches
Branches in Git are incredibly lightweight as well. There are simply pointers to a specific commit -- nothing more.

This is why many git users chant the mantra:
branch early, and branch often

B/c there is not storage / memory overhead with making many branches, it's easier to logically divide up your ork than have big beefy branches/

When we start mixing branches and commits, we willl see how these two features combine.

* Just rememmber that a branch essentially says: "I want to incl. the work of this commit and all parent commits."

### Branching - Command:

Step 1: checkout and create a new branch.

Step 2: commit the changes using: git commit.


  ENTER: 

    git checkout -b <branchName>

    git commit


## Section 3: Branches and Merging
Git merge is a way of comnbining the work from two different branches together. This will allow us to branch off, develop a new feature, and then combine it back in.

### Merging Commands:
Step 1: checkout and create a new branch.

Step 2: commit the changes using: git commit.

Step 3: checkout main

Step 4: commit 

Step 5: once your changes are made, merge your branch into main with git merge.

ENTER:

    git checkout -b <branchName>

    git commit

    git checkout main;

    git commit

    git merge <branchName>


## Git Rebase
The second way of combinging work between branches is rebasing. Rebasing essentially takes a set of commits, "copies" them, and plops them down somewhere else.

### Rebasing Commands:
Step 1: checkout and create a new branch.

Step 2: commit the changes using: git commit.

Step 3: checkout main

Step 4: commit 

Step 5: git rebase main

ENTER:

    git checkout -b <branchName>
    
    git commit

    git checkout main;

    git commit

    git checkout <branchName>

    git rebase main