# Jobber App Template - React

[![CircleCI](https://circleci.com/gh/GetJobber/Jobber-AppTemplate-React/tree/main.svg?style=svg&circle-token=68b2dba51e167696045ec5768bbbcbe49e6c6b82)](https://circleci.com/gh/GetJobber/Jobber-AppTemplate-React/tree/main)

The primary objective of this React template is to provide a starting point to integrate your app with [Jobber](https://getjobber.com) using Jobber's components system, [Atlantis](https://atlantis.getjobber.com/).

## Table of contents

- [What is this App for?](#what-is-this-app-for)
- [OAuth flow](#oauth-flow)
- [Expected result](#expected-result)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Running the app](#running-the-app)
- [Deployment](#deployment)
  - [Deploying with Heroku](#deploying-with-heroku)
- [Learn More](#learn-more)
- [Need help of have an idea?](#need-help-or-have-an-idea)
- [License](#license)

## What is this APP for?

This React App Template is meant to be a quick and easy way to get you up to speed using Jobber's GraphQL API. This App consumes the [Ruby on Rails API Template](https://github.com/GetJobber/Jobber-AppTemplate-RailsAPI) that handles authentication through Jobber's Developer Center and a few GraphQL example queries.

## OAuth flow

The authentication flow is done by both apps, the frontend is responsable to receive the `code` returned from Jobber's GraphQL API once the users goes through the oauth and allow the app to connect to they jobber account.

On this App you will find an Auth route that will handle redirection to the OAuth flow, recieving the code, sending it to the rails backend and redirecting the user to the home page of the app if everything is sucessful.

> Note: An App needs to be created on Jobber's Developer Center, and the environment variables described in `.env.sample` need to be configured in order to make the oauth redirection.

You should see a screen similar to this, asking you to grant access to the app:

<img width="1728" alt="Screen Shot 2022-06-22 at 13 27 00" src="https://user-images.githubusercontent.com/804175/175111098-c3671d5d-7d5c-4a63-b119-e8213ec47e40.png">

## Expected result

After granting access to the app, you should expect something like this:

<img width="1728" alt="Screen Shot 2022-06-22 at 12 56 59" src="https://user-images.githubusercontent.com/804175/175110763-4d3bd055-fe4c-47d0-a7d5-d276683b6c98.png">

## Getting started

### Prerequisites

- Node 16

  - Installation process can be found at https://nodejs.org/en/download/

- Jobber App
  - Create a developer account:
    - [https://developer.getjobber.com/](https://developer.getjobber.com/)
  - Create new app:
    - Follow the docs to get started: [https://developer.getjobber.com/docs](https://developer.getjobber.com/docs)
    - Your app must have (as a minimum) read access to *Clients* and *Users* under the Scopes section, in order for this template to work:
      <img width="1728" alt="Screen Shot 2022-06-22 at 13 27 50" src="https://user-images.githubusercontent.com/804175/175112601-95793519-4400-4392-aedb-bd189c5264c7.png">


### Setup

1. Install dependencies

   - `npm ci`

2. Setup environment variables

   - `cp .env.sample .env`

     Make sure to have the correct env values.

3. Start the backend API

   - You can find the fully configured Ruby on Rails API used for this template [here](https://github.com/GetJobber/Jobber-AppTemplate-RailsAPI)

### Running the app

- `npm start`

## Deployment

This template comes with a `Procfile` configured so you can easily deploy on [Heroku](https://heroku.com), however, you can deploy this API on the platform of your choice.

### Deploying with Heroku

1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli).

2. Log in to you Heroku account:

   - `heroku login`

3. Create a new Heroku app, this can be done from your browser or using Heroku's CLI in your terminal:

   - `heroku create <name-of-your-app>`

4. Verify the git remote was added with `git config --list --local | grep heroku` or add the heroku remote yourself:

   - `git remote add heroku <heroku-app-url>`

5. Deploy

   - `git push heroku main`

To learn more about deploying on Heroku:

- [https://devcenter.heroku.com/categories/deployment](https://devcenter.heroku.com/categories/deployment)

## Learn More

Checkout [Jobber's API documentation](https://developer.getjobber.com/docs/) for more details on its setup and usage.

You can learn more about Create React App in the [documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

For more information on Heroku, visit the [Heroku Dev Center](https://devcenter.heroku.com/).

## Need help or have and idea?

Please follow one of these [issue templates](https://github.com/GetJobber/Jobber-AppTemplate-React/issues/new/choose) if you'd like to submit a bug or request a feature.

## License

The template is available as open source under the terms of the MIT License.
