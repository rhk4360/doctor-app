<img src="https://raw.githubusercontent.com/react-boilerplate/react-boilerplate-brand/master/assets/banner-metal-optimized.jpg" alt="react boilerplate banner" align="center" />

<br />

<div align="center"><strong>Start your next react project in seconds</strong></div>
<div align="center">A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices</div>

<br />

## Quick start
Pre-reqs: 
1. Have a local instance of mongodb running with a test cluster on mongo run 'use test'
2. Within test, insert a user 'admin' with password 'password' using the following command:
db.createUser(
   {
     user: "admin",
     pwd: "password",
     roles: [ "readWrite", "dbAdmin" ]
   }
)

1. Clone this repo using `git clone https://github.com/rhk4360/doctor-app.git`
2. Move to the appropriate directory: `cd doctor-app`.<br />
3. Run `npm run setup` in order to install dependencies and clean the git repo.<br />
   *We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do: `USE_YARN=false npm run setup`*<br />
   *At this point you can run `npm start` to see the example app at `http://localhost:3000`.*
4. Run `npm run clean` to delete the example app.

I used react-boilerplate to get up and running quickly. It has webpack, react, redux, eslint, unit testing, and many other dependencies set up out of the box.

Disclaimer: first time using node and mongo, but happy I finally had a good excuse.

The server components live within the server folder. This will launch the app locally on port 3000 and also 
bring up the contents of the api folder. The api folder contains controllers, models, and routes.
I used mongoose as an ODM because it seemed simple and intuitive. I wrote a simple class to seed the database just to get going.

The frontend code lives within the app folder. It's broken out into a components folder where reusable components live.
A containers folder, where containers or pages live. The pages are associated with routes defined within the containers/App/index.js file. For styles, we are using styled-components which is fairly new to me, but seems good.