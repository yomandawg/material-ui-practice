const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const config = functions.config();
const cors = require('cors')({ origin: true });
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

let mailOptions = {
  from: 'NNGG',
  to: 'yomandawgshit@gmail.com',
  subject: 'Testing nodemailer',
  text: 'Test successful',
};

exports.sendMail = functions
  .region('asia-northeast2')
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          response.send(error);
        } else {
          response.send('Message sent successfully.');
        }
      });
    });
  });
