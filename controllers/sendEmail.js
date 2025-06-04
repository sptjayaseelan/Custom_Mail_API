const nodemailer = require('nodemailer');
const path = require('path');
const cron = require('node-cron');
const validator = require('email-validator');

const isValidEmailAddress = (mailId) => {
  return validator.validate(mailId);
};

const sendEmail = async (req, res) => {
  const {
    smtpHost,
    smtpPort,
    smtpUserName,
    smtpPassword,
    smtpSecure,
    fromMail,
    toMail,
    cc,
    bcc,
    mailSubject,
    html,
    schedule,
    scheduleTime,
    attachments,
    logoName,
  } = req.body;
  try {
    const mailSetting = () => {
      if (!isValidEmailAddress(fromMail)) {
        return res
          .status(400)
          .json({ msg: `Invalid Email Address from Mail Id ${fromMail}` });
      } else if (!isValidEmailAddress(toMail)) {
        return res
          .status(400)
          .json({ msg: `Invalid Email Address toMail Id ${toMail}` });
      }

      if (
        toMail === '' ||
        toMail === null ||
        fromMail === '' ||
        fromMail === null ||
        smtpHost === '' ||
        smtpHost === null ||
        smtpPort === '' ||
        smtpPort === null ||
        smtpUserName === '' ||
        smtpUserName === null ||
        smtpPassword === '' ||
        smtpPassword === null ||
        smtpSecure === '' ||
        smtpSecure === null
      ) {
        return res.status(400).json({ msg: 'Missing Required Fields' });
      }

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
        cc: cc,
        bcc: bcc,
        subject: mailSubject,
        html: html,
      };
      if (Number(logoName) !== 1) {
        mailOptions.attachments = [
          {
            // mail logo attachement
            filename: `${logoName}.png`,
            path: path.join(__dirname, `../Images/${logoName}.png`),
            cid: `${logoName}`,
          },
        ];
      }

      // Send the email
      transport.sendMail(mailOptions, async (error) => {
        if (error) {
          console.log('error', error);
          return res.status(500).json({ msg: `Server Error ${error}` });
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
    return res.status(500).json({ msg: `Server Error ${error}` });
  }
};

module.exports = { sendEmail };
