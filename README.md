# fitness-tracker


## Links
Link to deployed application [Heroku Link](https://calm-ridge-18618.herokuapp.com/)

## Summary
An app that let's the user view, create, and track daily workouts. Creating the back-end portion of this application by using a Mongo database with a Mongoose schema and handle routes with Express. The Fitness tracker is deployed to and hosted on Heroku. 

![Picture one of the app](pictures/app-view.png)

## Table of Contents
1. [Usage](#usage)
2. [SetUp](#setup)
3. [What I Learned](#what-i-learned)
4. [Resources](#resources)

## Usage
Upon opening the app a user is sent to the homepage which will display the users last workout. From there the users can choose to "Contine Workout" or create a "New Workout."  

![Picture of the homepage view](pictures/adding-comments.png)

Unless a user signs up and is logged in they will not be able to comment or do any other activity. They will be redirected to the login/ sign up page.  A user also has the option to logout. If a user remains inactive for more than two hours the app will automatically log the user out. 

## Setup
This application is set up using the MVC paradigm and file structure. The controller and api folders hold all the different routes used. The controllers act as the interface between models and views. The models hold the models which store data for the database. The Public and View folders handle all the front-end components. The public folder handles the css and any middleware javascript files. The views folder holds all the handlebars files.

The backend required several npm packages to set up various functions. Express-handlebars was needed to implement handlebars.js. MySQL2 and Sequelize were needed to connect to the database. Dotenv for the environment variables, bcrypt to hash passwords, and express-sessions and connect-session-sequeliza for authentication. 

![Needed npm packages](pictures/needed-packs.png)

## What I Learned
Looking at the file structure all that was need for this project felt like a huge undertaking. Being able to copy and paste boiler plate code from the past weeks mini-project were extremelly helpful setting up the server.js file and the authentication process. 

I had trouble getting the posts to delete. The server would break trying to delete posts with comments because it would try to delete the post before deleting the comments. In the associations in the Index.js file the "onDelete: 'CASCADE'" wasn't working. I ended up having to manually go through the posts and delete comments so the post could be deleted.

![Delete code](pictures/delete-work-around.png)

## Resources
* [Mongo Aggregation](https://docs.mongodb.com/manual/aggregation/)
* [Mongo $Sum](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/)
* [Mongo Aggregation Pipeline](hhttps://docs.mongodb.com/manual/meta/aggregation-quick-reference/#std-label-aggregation-expressions)
* [Mongoose](https://mongoosejs.com/docs/2.7.x/docs/updating-documents.html) 
* [Mongo $Add](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/) 