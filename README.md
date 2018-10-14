# JT-fullstack-project
Full stack application that houses a coding blog and discussion board.

## Github Process
### Step 1
Every day before you begin you want to pull the current master branch in case there were any changes made by others to the master.

`git pull origin master`
### Step 2
After pulling the master you will have the most up-to-date version of the master, now you want to create a branch so any changes you make won't affect the master branch.

`git branch [name of branch]`
### Step 3
Next you want to switch to that branch so that you're not working on the master.

`git checkout [name of branch]`
You can check what branch you're on by typing the following.

`git branch`
### Step 4
You can go about working on the project like normal and when you're done you do the same steps to push it to github except when you run the push command. You type the name of the branch versus pushing to the master branch.

`git add .`\
`git commit -m "comment"`\
`git push origin [name of branch]`\

Be mindful of which branch you're working on.
