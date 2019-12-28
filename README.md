# MERN Resiger/login example

This is an example of MERN stack application which was developed using ReactJS for UI and Express for the api (backend)

## Technologies used

- MongoDB
- Node
- Express
- ReactJS
- Redux

## Packages used

### Server side package.json

```json
{
  "name": "mern_login_register",
  "version": "1.0.0",
  "description": "MERN login/register example with auth",
  "main": "./server/server.js",
  "scripts": {
    "client-install": "npm install --prefix client",
    "start": "node ./server/server.js",
    "server": "nodemon ./server/server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
  "keywords": [
    "MERN",
    "stack",
    "login/register",
    "examples"
  ],
  "author": "Desire Kaleba",
  "license": "MIT",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "concurrently": "^5.0.2",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "is-empty": "^1.2.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.8.3",
    "passport": "^0.4.1",
    "passport-jwt": "^4.0.0",
    "validator": "^12.1.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.2"
  }
}

```

### client side package.json

```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.4.0",
    "@testing-library/user-event": "^7.2.1",
    "axios": "^0.19.0",
    "classnames": "^2.2.6",
    "jwt-decode": "^2.2.0",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-redux": "^7.1.3",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.3.0",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "proxy": "http://localhost:5000",
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```
