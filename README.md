# ALMA API

[![pipeline status](https://github.com/gaitan-app/server_gaitan/badges/master/pipeline.svg)](https://github.com/gaitan-app/server_gaitan/commits/master)

## Install

* Clone this repository: `git clone https://github.com/gaitan-app/server_gaitan.git`

* You must have MongoDB installed.

* Configure the `.env.development` or `.env.production` file with the system params.

* The database's name must be indicates in the .env.* file.

## Build setup steps:

    # Install dependencies
    $ npm i
    
    # Serve to development
    $ npm run dev

    # Build for production server
    $ npm run build

    # Server to production
    $ npm run start

    # Confirms that the server works in develop
    http://localhost:9000/api or https://api.url.com/api

    # Generate documentation API
    $ npm run docs

    # Access to documentation in the broswer
    http://localhost:9000/apidoc or https://api.url.com/apidoc

## Required migrations 

Execute the following command to generate test data.

_NOTE: You was must created a new database in mongodb and configure the `.env` file._
    
    # Migration required.
    $ npm run migrations
    
_NOTE: The migrations contain test data. To run in production server is necessary delete the data test. Evaluate what data will be delete before to do._

## Configure Send Mail

And now, to send mail you must configure the credentials in your `.env` file, just find the `# MAILER` comment and complete the require data:

    USER_AUTH_MAIL=
    PASS_AUTH_MAIL=
    HOST_MAIL=
    PORT_MAIL=
    
    # emails to BCC when sending the invoice separated by comma
    BCC="" 

## Authenticated for Middleware

    Add in the headers the value to check session login: 
    req.headers['x-access-token'] = token

    where, token is a recived value for the login action.

## Contribute

¡The contributions are always welcome! Please, first read the steps to [contribute] (https://github.com/gaitan-app/server_gaitan/blob/master/CONTRIBUTING.md). 

## More documentation about Express.js

Official documentation [Express.js docs](https://expressjs.com).
