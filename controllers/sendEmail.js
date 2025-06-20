const nodemailer = require('nodemailer');
// const ENV = require('../data/env');
// const { productionTemplate } = require('../mailNotifications/mailTemplate');
// const path = require('path');
const { db } = require('../models/index');
const cron = require('node-cron');

const sendEmail = async (req, res) => {
  const {
    smtpHost,
    smtpPort,
    smtpUserName,
    smtpPassword,
    smtpSecure,
    fromMail,
    toMail,
    mailSubject,
    html,
    schedule,
    scheduleTime,
    attachments,
  } = req.body;
  try {
    const mailSetting = () => {
      let transport = nodemailer.createTransport({
        //   service: 'smtp.gmail.com',
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUserName, // Your Gmail address
          pass: smtpPassword, // Your Gmail password or app-specific password
        },
      });

      // Email options (to, from, subject, and body)
      let mailOptions = {
        from: fromMail,
        to: toMail,
        subject: mailSubject,
        html: html,
        // attachments: [
        //   {
        //     // mail logo attachement
        //     filename: 'mailLogo.png',
        //     path: path.join(__dirname, '../Images/simmonds_logo.png'),
        //     cid: 'mailLogo',
        //   },
        // ],
      };

      // Send the email
      transport.sendMail(mailOptions, async (error, info) => {
        if (error) {
          return console.log('error', error);
        }
        return res.status(200).json({ msg: 'Email Sent SuccessFully' });
      });
    };

    if (schedule) {
      cron.schedule(
        scheduleTime,
        () => {
          mailSetting();
        },
        {
          scheduled: true,
        }
      );
    } else {
      mailSetting();
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Server Error' });
  }
};

module.exports = { sendEmail };
