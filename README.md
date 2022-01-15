# MCIT On-Campus 2022 Winter Hackathon

## Project Name: CITeams

### Group Members

| Name | Email |
| :-------------: | :-----------------------------------------------------------: |
| Jiayun(Seren) Liu | jiayunl@seas.upenn.edu |
| Ruichen Zhang | ruichenz@seas.upenn.edu |
| Ruifan Wang | wang321@seas.upenn.edu |
| Wentao Xu | wentaoxu@seas.upenn.edu |
| Yihong(Joanne) Zhang | zhyihong@seas.upenn.edu |

### General Idea

CITeams is a convenient Slack app to help MCIT students find and recruit project team members for CIT & CIS courses.

### User Profile & Pain Points

* MCIT On-Campus/Online students
 - As an MCIT student, the user often faces challenges of finding group members for course projects or simply study mates and this slack app enables them to find teammates more easily.
 - This slack app is especially useful for students who take MCIT Online as they have limited exposure to interaction with other students and thus are in stronger need of finding partners for course projects.

* Students in MCIT slack workspace
 - As the app is developed as a slack app, students need to be in the MCIT workspace to be able to use the features.

### User Story

1. A user can create a profile of themselves so that the other students can get to know more about the person that they might be working with.
2. A user can create a post of recruiting for teammates or study mates so that they can share specific details regarding the recruitment including the course, current members, the number of teammates needed, and more.
3. A user can see all their own posts that have been posted (/) so that the user has a general idea of the posted requests and be able to manage the posts later on.
4. A user can delete a post once the user no longer has the need to recruit teammates.
5. A user can edit a post if the user has the need to recruit teammates.
6. A user and the relevant users (current teammates) will be added to a channel created by the slack APP once the post is published.
7. A user can see all the available posts and choose to enter the channel that fits their need so that the user can join the channel and talk with the request posters. 

### Tech Stack

* NodeJS
* Bolt for JavaScript (Slack API)
* MongoDB
* Heroku

### Development Instructions

1. Run `git clone git@github.com:Hackathon-CITeam/CITeams.git` to clone the project to your local machine.
2. `cd` into the repo you just created, run `git branch [your name]` to create your own branch.
3. Create a `.env` file and add tokens and secrets to the file; open the `.gitignore` file, make sure `node_modules` and `.env` are ignored; in other words, **DO NOT** push them to GitHub.
4. run `npm install` to install dependencies **the first time** you created the project; run `node app.js` to start the app, and check the app in Slack. **Every time** you make code changes, you need to restart the app using `node app.js` and refresh the app using `command + R` to see the latest changes reflected in the Slack app. 
5. After you have made some code changes on your branch, run `git add .`, `git commit -m "your commit message"`, `git push` to commit your change to your remote branch on GitHub. Note that you need to run `git push --set-upstream origin [your branch name]` **the first time** after you created your local branch. Only push codes to GitHub if you make sure that the app is not broken after your latest code change.
6. Regularly push your code to GitHub, and make pull requests from main branch to fetch latest changes; talk to your other team members if you encounter a conflict and are not sure how to resolve it.

### Links

1. [Hackathon Devpost Homepage](https://mcit-2022-winter-hackathon.devpost.com/)
2. [PRD Google Doc](https://docs.google.com/document/d/1QmjjsY4zd4bcX3Dy_w8sGSnYyfJp9Zwr6nN-WpP9Cso/edit)
3. [Slack API Documentation](https://api.slack.com/start)
4. [Slack Block Kit Builder (View Templates)](https://app.slack.com/block-kit-builder/)
5. [Slack App Home](https://api.slack.com/apps/A02TYDHMNTG)

Jan 14th
