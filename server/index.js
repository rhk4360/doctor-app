/* eslint consistent-return:0 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('./logger');
const User = require('./api/models/userModel');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const { seed } = require('./seedDatabase');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var authenticationRoutes = require('./api/routes/authenticationRoutes'); //importing route
authenticationRoutes(app); //register the route

var appointmentRoutes = require('./api/routes/appointmentRoutes'); //importing route
appointmentRoutes(app); //register the route

// mongoose instance connection url connection (this should obviously live in a config file)
mongoose.connect('mongodb://admin:password@localhost/test');

seed();

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }  

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
