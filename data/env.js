require('dotenv').config();

// create configration objects
let ENV = {};

ENV.APP = process.env.APP;
ENV.PORT = process.env.PORT;

// DATABASE
ENV.DB_DIALECT = process.env.DB_DIALECT;
ENV.DB_HOST = process.env.DB_HOST;
ENV.DB_PORT = process.env.DB_PORT;
ENV.DB_NAME = process.env.DB_NAME;
ENV.DB_USER = process.env.DB_USER;
ENV.DB_PASSWORD = process.env.DB_PASSWORD;

// smtp Mail
ENV.SMTP_HOST = process.env.SMTP_HOST;
ENV.SMTP_PORT = process.env.SMTP_PORT;
ENV.SMTP_USERNAME = process.env.SMTP_USERNAME;
ENV.SMTP_PASSWORD = process.env.SMTP_PASSWORD;
ENV.SMTP_FROM_MAIL = process.env.SMTP_FROM_MAIL;
ENV.SMTP_TO_MAIL = process.env.SMTP_TO_MAIL;
ENV.SMTP_MAIL_TIME = process.env.SMTP_MAIL_TIME;
ENV.SMTP_SECURE = process.env.SMTP_SECURE;

// JWT
ENV.JWT_SECRET = process.env.JWT_SECRET;
ENV.JWT_EXPIRATION = process.env.JWT_EXPIRATION;
ENV.REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
ENV.REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION;

// TIME ZONE
ENV.TIMEZONE = process.env.TIMEZONE || '+05:30';

module.exports = ENV;
