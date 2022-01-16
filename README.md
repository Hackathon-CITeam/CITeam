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

### Development Instructions

1. Run `git clone git@github.com:Hackathon-CITeam/CITeams.git` to clone the project to your local machine.
2. `cd` into the repo you just created, run `git branch [your name]` to create your own branch.
3. Create a `.env` file and add tokens, secrets and database url to the file; open the `.gitignore` file, make sure `node_modules` and `.env` are ignored; in other words, **DO NOT** push them to GitHub.
4. run `npm install` to install dependencies **the first time** you created the project; run `node app.js` to start the app, and check the app in Slack. **Every time** you make code changes, you need to restart the app using `node app.js` and refresh the app using `command + R` to see the latest changes reflected in the Slack app. 
5. After you have made some code changes on your branch, run `git add .`, `git commit -m "your commit message"`, `git push` to commit your change to your remote branch on GitHub. Note that you need to run `git push --set-upstream origin [your branch name]` **the first time** after you created your local branch. Only push codes to GitHub if you make sure that the app is not broken after your latest code change.
6. Regularly push your code to GitHub, and make pull requests from main branch to fetch latest changes; talk to your other team members if you encounter a conflict and are not sure how to resolve it.

### TODOs (Jan 16th)

1. app.js
 - 1.1 when creating a post, also generate a channel with channel info
 - 1.2 edit & delete a post (listen to event, i.e. button click)
 - 1.3 user joins channel
2. DBOperations.js
 - 2.1 change schema & CRUD
3. views/post.js
 - 3.1 edit & delete a post view
4. views/postboard.js
 - 4.1 post detail view in post board (myPost & allPost)
5. views/channel.js
 - same as 1.1
6. views/home.js
 - 6.1 change home view (e,g. no post vs some posts, profile created or not)
7. Others: deployment, more advanced features specified in PRD, etc.

Proposed Work:
* Member A: 1.1, 1.3 (Ruifan)
* Member B: 1.2, 2.1 (Ruichen)
* Member C: 3.1
* Member D: 4.1
* Save 6.1 for later

### Links

Use the prototypes in PRD as reference, implement the views using Block Kit Builder. 

1. [Hackathon Devpost Homepage](https://mcit-2022-winter-hackathon.devpost.com/)
2. [PRD Google Doc](https://docs.google.com/document/d/1QmjjsY4zd4bcX3Dy_w8sGSnYyfJp9Zwr6nN-WpP9Cso/edit)
3. [CITeams App Home](https://api.slack.com/apps/A02TYDHMNTG)
4. [Slack API Documentation](https://api.slack.com/start)
5. [Bolt for JavaScript & Glitch Template](https://api.slack.com/start/building/bolt-js)
6. [Socket Mode](https://slack.dev/node-slack-sdk/socket-mode)
7. [Block Kit Builder (View Templates)](https://app.slack.com/block-kit-builder/)
8. [Emoji Cheatsheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
9. [MongoDB CRUD](https://docs.mongodb.com/manual/crud/)
10. [MongoDB Atlas](https://account.mongodb.com/account/login)
11. [Heroku](https://id.heroku.com/login)


Jan 14th
