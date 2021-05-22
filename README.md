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

![Picture of the homepage view](pictures/landing-screen.png)

If a user decides to contiue their workout they are brought to the exericse api where they will choose which type of workout they wish to continue either Cardio or Resistance. From there the user fills out the form and can then decide whether or complete the exercise or add another exercise. If the user cooses to complete an excerise they are then redirected back to the homepage if they choose to add another exercise a message is displayed letting the user know their workout was added and the form resets. 

![Picture of the homepage view](pictures/add-exercise.png)

For the New Workout page is similar to the continue exercise button. The user will choose either a cardio or resistance workout and fill out the form, once done they can decide to complete the workout or add another exercise. After completeing the workout the user is once again taken back the to landing page. 

The most complicated part of the application was getting the stats api route to work. In the stats page the user can view two graphs. The first graph shower them the total duration of their workout per day for the last seven days. The second graph is a bar graph that shows the combined weight in pounds used in the workout per day for the last 7 days. Clicking "Fitness Tracker" in the nav bar will take the user back to the loading page.  

![Picture of the homepage view](pictures/graphs.png)

## Setup
The back-end portion of this application is set up using a Mongo database with a Mongoose schema. The different routes are handlesd with Express. To set up the database different Mongoose schemas were made in the models folder. 

A db.js file was also added to the front-end portion of the file structure. 

The backend required several npm packages to set up various functions. Express-handlebars was needed to implement handlebars.js. MySQL2 and Sequelize were needed to connect to the database. Dotenv for the environment variables, bcrypt to hash passwords, and express-sessions and connect-session-sequeliza for authentication. 

![Needed npm packages](pictures/needed-packs.png)

## What I Learned
The routes were the most difficult part of this project for me. The models and the db.js file were easy enough to follow along with, but getting the routes to diplay the information and run the front end code took multiple hours to figure out. The MongoDB aggregate functions was used to get the total duration time of a workout and getting that to dispaly on the homepage wasn't too much trouble, but getting to total time to plot on the graph was difficult as another aggregate function was needed. 

Another roadblock I ran into was that the .update method is deprecated and I spent a long time trying to find a more recent version, but ultimaly just went with what was taught in class and the method worked. 

![Delete code](pictures/dep-update.png)

## Resources
* [Mongo Aggregation](https://docs.mongodb.com/manual/aggregation/)
* [Mongo $Sum](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/)
* [Mongo Aggregation Pipeline](https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#std-label-aggregation-expressions)
* [Mongoose](https://mongoosejs.com/docs/2.7.x/docs/updating-documents.html) 
* [Mongo $Add](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/) 