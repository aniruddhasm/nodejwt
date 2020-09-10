# A simple authentication example with Node.js (Express), MySQL and JWT. 
This is a simple authentication example in Node.js (Express), MySQL and JWT.

# Installation
Clone or download zip to your machine then hit this:
```javascript
npm install
```

# Database configuration
* Create a database with name: nodejwtmysql and import users.sql file in mysql
* Create a env folder at root location.
* Inside env create a file name- <strong>.env</strong> For eg :  <strong>env/.env</strong> 
* Add the db credentials

```javascript
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_PORT=3306              #mysql port
DB_DATABASE=

SECRET=                   #secret key to generate jwt
SESSION_EXPIRY_TIME=      #Token expiration time
```

# Run the project
```javascript
node app.js
```
* First hit login api and in the response you will get token.
* Use this token for the second (afterlogin) api.
* Add this token in headers-> Authorization section of (afterlogin) api request and select type as Bearer Token 
