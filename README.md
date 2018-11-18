# Prerequisites

[Node and NPM](https://nodejs.org/en/) (latest version should be fine)
[Angular CLI](https://github.com/angular/angular-cli) installed by opening a terminal window and
typing `npm install -g @angular/cli`  

# Local Development

Upon install or clone of the repo navigate into the newly created marklogic-app directory and type `cd client` then type `npm install`.

# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

## Development server

Navigate into the client directory and run `ng serve --env=test` inside the client directory for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# API

To run the API navigate to the api subdirectory in terminal and type node server.js

Change the config-sample.js file to config.js and add in the marklogic username and password along with the secret key (which can be anything for dev puposes)

# Tutorial that was used
https://appdividend.com/2018/05/27/angular-6-crud-example-mean-stack-tutorial/

# Commands you need to run 
0. Install MongoDB https://www.mongodb.com/download-center/community?jmp=docs
1. npm install --save express body-parser cors mongoose
2. npm install nodemon --save-dev
3. mongod (runs indefinitely)
4. nodemon server (runs indefinitely)
5. ng serve (runs indefinitely)

# Command to kill already running processes (mac)
sudo lsof -t -i tcp:PUTPORTNUMBERHERE -s tcp:listen | sudo xargs kill

