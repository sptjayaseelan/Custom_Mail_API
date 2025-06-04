require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const ENV = require('./data/env');
const routes = require('./routes/index');
const { default: rateLimit } = require('express-rate-limit');

//const path = require('path');

// CORS
app.use(cors());

// Upload files
//app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//Log Env
console.log('Environment:', ENV.APP);

//DATABASE
// connectDB();

// Init Middleware
app.use(logger('dev'));
app.use(express.json());

//Ping Server
app.get('/ping', (req, res) =>
  res.status(200).send('Server working perfectly')
);

// limit of mails in one hour
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Too many requests, please try again later.',
});

//ROUTES
routes.map((route) =>
  route.rateLimit
    ? app.use(route.path, limiter, require(`./routes/${route.file}`))
    : app.use(route.path, require(`./routes/${route.file}`))
);

//PORT CONNECTIONS
app.listen(ENV.PORT, () => {
  console.log(`Server Started on ${ENV.PORT}`);
});
