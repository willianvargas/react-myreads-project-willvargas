# MyReads Project

>This project was developed for an assessment for Udacity's React Nanodegree course.

## Table of Contents

 - [Project Details](#project-details)
 - [Special Features](#special-features)
 - [Installing and Running](#installing-and-running)
 - [Backend Server](#backend-server)
 

## Project Details

The project is a Book Shelf App called **MyReads**. With this App, you can search and organize your favorite books by 
personal categories as "current reading", "want to read" and "read".

This project was bootstrapped with Create React App.

## Special Features

* Responsive Layout and Components
* Material Design using [Material-UI](https://github.com/mui-org/material-ui)
* All styles using JSS (css in js) [JSS](http://cssinjs.org/)
* Sidebar Menu (mobile too)
* Dedicated page for every category (*current reading*, *want to read* and *read*)
* Loading state component

## Installing and Running

* Install all project dependencies with `npm install`
* Start the development server with `npm start`

runs on localhost:3000

## Backend Server

The backend server is provided by Udacity's API, so you need internet connection to run the project, even locally.

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can 
be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend,
so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
