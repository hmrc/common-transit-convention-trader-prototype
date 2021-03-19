
# Common Transit Convention Trader Prototype

## Set up the prototype
1.  Open a `terminal` and navigate to the folder where you want to add the prototype repository
2.  Clone the GitHub file repository so that it exists on your local machine
    > Type: `git clone git@github.com:hmrc/common-transit-convention-trader-prototype.git ctc-trader-prototype` and hit enter

3.  Change into the new protoype folder
    > Type: `cd ctc-trader-prototype` and hit enter

4.  Install Node dependencies
    > Type: `npm install` and hot enter

5.  Add MVP and Post-MVP Heroku App remotes
    > - Type: `remote add heroku https://git.heroku.com/ctc-traders.git` and hit enter
    > - Type: `remote add heroku-postmvp https://git.heroku.com/ctc-traders-postmvp.git` and hit enter

6.  Get Post-MVP branch and switch back to MVP branch
    > - Type: `git switch main` and hit enter
    > - Type: `git checkout master` and hit enter

7.  Start the prototype
    > - Type: `npm start` and hit enter
    > - Go to `localhost:3000` in your browser
    


## MVP Iteration process
The `master` branch of this prototype is for **MVP** iterations and is deployed to `heroku`.

https://ctc-traders.herokuapp.com

### Make changes to the MVP Heroku prototype
1.  Make sure you're on the MVP branch
    > **Checkout** local `master` branch

2.  Make sure you have the most up-to-date files from GitHub on your local machine
    > **Pull** from remote `origin`

3.  Iterate the prototype as necessary
    > - Run `npm start` to get the prototype running locally
    > - Make required changes to new or exitsing files
    > - Save the files that have changed
    > - Check all changes in the browser at `localhost:3000`

4.  When you've finished making changes and are sure that everything works
    > - **Stage** the changed files
    > - Add a commit message and **commit** the changes

5.  Send all the changes you've made to GitHub
    > **Push** changes to remote `origin`

6.  Send all the changes you've made to the MVP Heroku prototype
    > **Push** changes to remote `heroku`

### Replicate those changes into the Post-MVP Heroku prototype
1.  Switch to the Post-MVP branch
    > **Checkout** local `main` branch

2.  Merge the changes you made in the MVP branch into the Post-MVP branch
    > **Merge** changes from local `master` branch into local `main` branch

    #### If there are merge conflicts
    1.    Resolve the merge conflicts by choosing whether to keep the current or incoming changes
    2.    Save the files that have changed
    3.    Check all changes in the browser at `localhost:3000`
    4.    **Stage** the changed files
    5.    Add a commit message and **commit** the changes
    6.    **Push** changes to remote `origin`

3.  Send all the changes you've made to the Post-MVP Heroku prototype
    > **Push** changes to remote `heroku-postmvp`



## Post-MVP Iteration process
The `main` branch of of this prototype is for **Post-MVP** iterations and is deployed to `heroku-postvmp`.

https://ctc-traders-postmvp.herokuapp.com

### Make changes to the Post-MVP Heroku prototype
1.  Make sure you're on the Post-MVP branch
    > **Checkout** local `main` branch

2.  Make sure you have the most up-to-date files from GitHub on your local machine
    > **Pull** from remote `origin`

3.  Iterate the prototype as necessary
    > - Run `npm start` to get the prototype running locally
    > - Make required changes to new or exitsing files
    > - Save the files that have changed
    > - Check all changes in the browser at `localhost:3000`

4.  When you've finished making changes and are sure that everything works
    > - **Stage** the changed files
    > - Add a commit message and **commit** the changes


5.  Send all the changes you've made to GitHub
    > **Push** changes to remote `origin`

6.  Send all the changes you've made to the Post-MVP Heroku prototype
    > **Push** changes to remote `heroku-postmvp`



## GitHub and Heroku Structure
![GitHub and Heroku Structure](/app/assets/images/CTC-GitHub-and-Heroku-Structure.png)