const prefix = '/api/';

const routes = [
  { path: `${prefix}sendMail`, file: 'sendEmail', rateLimit: true },
];

module.exports = routes;
