# Jobber App Template - React
The primary objective of this React template is to provide a starting point to integrate your app with [Jobber](https://getjobber.com).

[Demo](https://jobber-app-template-react.herokuapp.com/)

## Getting started

### Prerequisites 🛠️
- Node 16
    
    installation process can be found at https://nodejs.org/en/download/

- React 16

- Jobber App
  - Create a developer account:
    - [https://developer.getjobber.com/](https://developer.getjobber.com/)
  - Create new app:
    - Follow the docs to get started: [https://developer.getjobber.com/docs](https://developer.getjobber.com/docs)

### Setting up the project

1. Install dependencies with `npm ci`;

2. Create `.env` file base on the `.env.sample` filling the missing environment variables

3. `npm start`

4. Running the backend portion of the app is necessary, you can find information about it [here](https://github.com/GetJobber/Jobber-AppTemplate-RailsAPI)
## What is this APP for?

This React App Template is meant to be a quick and easy way to get you
up to speed using our Jobber GraphQL API. This App consumes a RAILS backend application
that handles authentication and GraphQL queries.

## OAuth flow

The authentication flow is done by both apps, the frontend is responsable to receive the `code`
returned from our Jobber GraphQL API once the users goes through the oauth and allow the app to connect to 
they jobber account.

On this App you will find a Auth route that will handle redirection to the oauth flow, recieving the code, sending
it to the rails backend and if everything is sucessful redirecting to the home page of the app.

> Note: An App needs to be created on the developer center, and the environment variables described in `.env.sample` needs to be configured in order to make the oauth redirection.
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
