require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

const ENV = require('./data/env');
const cron = require('node-cron');
const { sendEmail } = require('./controllers/sendEmail');
const routes = require('./routes/index');

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

//node cron job

//cron job is running Every day 6:30 am

// cron.schedule(
//   ENV.SMTP_MAIL_TIME,
//   () => {
//     sendEmail();
//   },
//   {
//     scheduled: true,
//   }
// );

//ROUTES
routes.map((route) => app.use(route.path, require(`./routes/${route.file}`)));

//PORT CONNECTIONS
app.listen(ENV.PORT, () => {
  console.log(`Server Started on ${ENV.PORT}`);
});
