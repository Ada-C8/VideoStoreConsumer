# Video Store Consumer

Class project for Ada Developers Academy
Created an end-to-end Video Store application using Backbone, Javascript, and jQuery

## Goals
- Leverage jQuery event observation along with Backbone to enable a dynamic user interface
- Organize browser interactions according to Backbone's MVC pattern
- Revisit Rails API functionality
- Practice project management skills in prioritizing features and determining deliverables

This project has two main components: a [Rails API](https://github.com/Ada-C8/VideoStoreConsumer-API) and a Backbone front-end. You will be extending an existing Rails API to add some of the functionality that you require to complete the front-end implementation. You will be submitting a pull request at the end of the project for both components.

## Problem Statement

Our rental store employees want to be able to manage their rental inventory. They want to be able to search through all movies and pick and choose which movies they want to add to their rental library. They want to be able to manage their rental library. We will be using an external API to build in searching for *all movies*. We will use our existing Rails API to manage the *rental library*.

## Project Information
This project will be utilizing an external API within an API! Whoa! Your front-end implementation will be interacting with a **Rails API** that you will be modifying. The Rails API wraps an **external API** which contains many endpoints related to movies. The external API is [The Movie DB](https://www.themoviedb.org/documentation/api).

## Local Setup
### 1. Clone the repository

### 2. Run Back End
  - Follow the instructions on the API's [Getting Started](https://developers.themoviedb.org/3/getting-started) page to set up your account and request an API Key.
  - Set up the `.env` file with the API key in VideoStoreConsumer-API/

  **Example .env file:**

  '''
  MOVIEDB_KEY = <MOVIEDB_KEY>
  SECRET_KEY_BASE = <SECRET_KEY_BASE>
  '''

  -  Set up rails back end:
  While in VideoStoreConsumer-API/ in your terminal Run:
  _Note: You must have Rails installed._

  '''
  bundle install
  rails server
  '''
  Your server should be running at this point

### 3. Run Front End
  - Run Front End Server:
  Change directories to VideoStoreConsumer/
  It will be the directory with the json.lock file
  In your terminal run:

  '''
  npm install

  npm start
  '''
