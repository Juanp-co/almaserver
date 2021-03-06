# ALMA API

## Install

* Clone this repository: `git clone https://github.com/Juanp-co/almaserver.git`

* You must have MongoDB installed.

* Configure the `.env.development` or `.env.production` file with the system params.

* The database's name must be indicates in the .env.* file.

## Build setup steps:

    # Install dependencies
    $ npm i
    
    # Run serve to development
    $ npm run dev

    # Build for production server and documentation
    $ npm run build

    # Run server to production
    $ npm run start

    # Confirms that the server works in develop
    http://localhost:9000/api or https://api.url.com/api

    # Generate only documentation API
    $ npm run docs

    # Access to documentation in the broswer
    http://localhost:9000/apidoc or https://api.url.com/apidoc

## To merge in main's branch:

NOTE: Is required run previously the `yarn add` or `npm install` to install the necessary dependencies. 

To must run the following commands before to do merge in `main` branch.

    # Run precommit - This check syntax, generate documentation and generate the folder dist with the compilated code.
    $ npm run precommit
    
    # Add changes 
    $ git add .

    # Add description commit
    $ git commit -m "YOUR DESCRIPTION"
    
_**Precomit** command run the following commands_: `npm run lint && npm run docs && npm run clean && tsc -p ./`

Check the `package.json` file to more information.

## Required migrations 

Execute the following command to generate data to database.

_NOTE: You was must created a new database in mongodb and configure the `.env` file._
    
    # Migration to develop
    $ npm run migrations
    
    # Migration to production
    $ npm run migrations-prod
    
_NOTE: The migration contains the necessary data to run the API. You must configure the values to database in the `.env.development` or `.env.production` file to run the preference case._

## Indicate the url API Server.

In the .env.* file (of your preference), you must indicate the url of API Server. This value is REQUIRED to load the images in the front-end.

    #example dev
    URL_API="http://localhost:7000"
    
    #example production
    URL_API="https://api.domain.com"


## Configure Send Mail (UNUSED)

And now, to send mail you must configure the credentials in your `.env` file, just find the `# MAILER` comment and complete the require data:

    USER_AUTH_MAIL=
    PASS_AUTH_MAIL=
    HOST_MAIL=
    PORT_MAIL=
    
    # emails to BCC when sending the invoice separated by comma
    BCC="" 

## Users to connect the API

    To access to the API, you can create a new user (read documentation) or login with
    the deefault users (run migrations previously).
    
    # Admin (default)
    phone: 31612345678
    pass: password
    
    # Particular user (default)
    phone: 3161234567
    pass: password

## Authenticated for Middleware

    Add in the headers request the value to check session: 
    req.headers['x-access-token'] = token

    where, token is a recived value for the login action.

## Contribute

¡The contributions are always welcome! Please, first read the steps to [contribute] (https://github.com/Juanp-co/alma_back/blob/master/CONTRIBUTING.md). 

## More documentation about Typescript

Official documentation [Typescript](https://www.typescriptlang.org). 

## More documentation about Express.js

Official documentation [Express.js](https://expressjs.com).
