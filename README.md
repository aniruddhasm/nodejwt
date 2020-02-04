# A simple authentication example with Node.js (Express), MySQL and JWT. 
This is a simple authentication example in Node.js (Express), MySQL and JWT.

# Installation
Clone or download zip to your machine then hit this:
```
npm install
```

# Database configuration
* Create a database with name: nodejwtmysql and import users.sql file in mysql
* Create a env folder at root location.
* Inside env create a file name- .env For eg : env/.env 
* Add the db credentials

```
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_PORT=3306 #mysql port
DB_DATABASE=crudnodejsmysql

SECRET= # secret key to generate jwt
SESSION_EXPIRY_TIME= # Token expiration time
```

# Run the project
```
node app.js
```
* First hit login in the response you will get token.
* Use this token for the second (afterlogin) api.
* Add this token in Authorization section of (afterlogin) api request and select type as Bearer Token 
