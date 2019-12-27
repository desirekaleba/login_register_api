# Express Resiger/login api example

This is an example of an api which has login, register routes to allow a use to register and login with full authentication and security

## Technologies used

- MongoDD
- Node
- Express

## Packages used

- `bcryptjs` : used to hash passwords

- `body-parser` : to parse request bodies

- `express` : to make our routing, requests and responses

- `is-empty` : to validate our inputs

- `jsonwebtoken` : for authorization

- `mongoose` : to interact with our Mongo database

- `passport` : to authenticate requests

- `passport-jwt` :  for authenticating with a JSON Web Token (JWT); lets you authenticate endpoints using a JWT

- `validator` : alongside `is-empty`

- `nodemon` : to watch our server

### package.json

Below is the `package.json`

```json
{
  "name": "mern_login_register",
  "version": "1.0.0",
  "description": "MERN login/register example with auth",
  "main": "./server/server.js",
  "scripts": {
    "start": "node ./server/server.js",
    "server": "nodemon ./server/server.js",
    "test": "test"
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
