# Everyone Has a Branch
Develop your code on your branch (which is your name) and when you want to push your code, push it to develop so that we can review it and make sure its good to go, and then we will merge it to master

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
